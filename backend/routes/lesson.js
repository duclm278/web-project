const router = require("express").Router();
const Course = require("../models/Course");
const Lesson = require("../models/Lesson");
const requireAuth = require("../middleware/requireAuth");
const { escapeRegExp } = require("../utils/regex");

router.get("/", async (req, res) => {
  let query = {};

  // Required by react-admin
  let filter = null;
  if (req.query?.filter) {
    filter = JSON.parse(req.query?.filter);
  }
  const joined = "joined";
  if (filter?.q) {
    // Search multiple words separated by space
    let escaped = escapeRegExp(filter.q);
    escaped = escaped.split("\\ ").join(".*");
    query.$or = [{ [joined]: { $regex: escaped, $options: "i" } }];
  }
  if (filter?.id) {
    query._id = { $in: filter.id };
  }
  let course = null;
  if (filter?.courseId) {
    try {
      course = await Course.findById(filter.courseId);
      query._id = { $in: course.lessons };
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ error: err.message });
    }
  }
  if (filter?.type) {
    query.type = filter.type;
  }
  let sort = null;
  if (req.query?.sort) {
    sort = JSON.parse(req.query?.sort);
  }
  if (sort) {
    const [field, order] = sort;
    sort = { [field]: order === "ASC" ? 1 : -1 };
  }

  try {
    // let lessons = await Lesson.find(query);
    let lessons = await Lesson.aggregate([
      // Concat name and stringified _id to allow searching by name + id
      {
        $addFields: {
          [joined]: { $concat: ["$name", { $toString: "$_id" }] },
        },
      },
      { $sort: sort ? sort : { createdAt: 1 } },
      { $match: query },
    ]);
    res.header("Access-Control-Expose-Headers", "Content-Range");
    res.header("Content-Range", `lessons 0-20/${lessons.length}`);
    lessons = lessons.map((l) => {
      return {
        id: l._id,
        ...l,
      };
    });
    res.status(200).json(lessons);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Could not get lessons" });
  }
});

router.get("/:id", async (req, res) => {
  // TODO: Populate lesson?
  try {
    const lesson = await Lesson.findById(req.params.id);
    res.status(200).json({ id: lesson._id, ...lesson._doc });
  } catch {
    res.status(400).json({ error: "Could not retrieve lesson" });
  }
});

// Protect below routes
router.use(requireAuth);

router.post("/", async (req, res) => {
  // Check permissions
  if (!req.user.isAdmin) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  let lesson = null;
  try {
    lesson = await Lesson.create(req.body);

    const { courseId, index } = req.body;
    if (courseId) await Lesson.moveLessonToCourseIndex(lesson, courseId, index);

    res.status(201).json({ id: lesson._id, ...lesson._doc });
  } catch (err) {
    console.log(err.message);
    if (lesson) {
      await lesson.remove();
    }
    res.status(400).json({ error: "Could not create lesson" });
  }
});

router.delete("/:id", async (req, res) => {
  // Check permissions
  if (!req.user.isAdmin) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { id } = req.params;
  try {
    // Delete lesson from lessons
    const lesson = await Lesson.findByIdAndDelete(id);
    if (!lesson) {
      return res.status(400).json({ error: "Lesson does not exist" });
    }
    // Remove lesson from course, use $pull
    await Course.findOneAndUpdate({ lessons: id }, { $pull: { lessons: id } });
    res.status(200).json({ id: lesson._id, ...lesson._doc });
  } catch {
    res.status(400).json({ error: "Could not delete lesson" });
  }
});

router.put("/:id", async (req, res) => {
  // Check permissions
  if (!req.user.isAdmin) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { id } = req.params;
  try {
    const lesson = await Lesson.findByIdAndUpdate(id, req.body);
    if (!lesson) {
      return res.status(400).json({ error: "Lesson does not exist" });
    }

    const { courseId, index } = req.body;
    if (courseId) await Lesson.moveLessonToCourseIndex(lesson, courseId, index);

    res.status(201).json({ id: lesson._id, ...lesson._doc });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ error: "Could not update lesson" });
  }
});

module.exports = router;
