const mongoose = require("mongoose");
const router = require("express").Router();
const courseModel = require("../models/Course");
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
  let sort = null;
  if (req.query?.sort) {
    sort = JSON.parse(req.query?.sort);
  }
  if (sort) {
    const [field, order] = sort;
    sort = { [field]: order === "ASC" ? 1 : -1 };
  }

  try {
    let popular = req.query.popular;
    let courses;
    if (!popular) {
      // courses = await courseModel.find(query);
      courses = await courseModel.aggregate([
        // Concat name and stringified _id to allow searching by name + id
        {
          $addFields: {
            [joined]: { $concat: ["$name", { $toString: "$_id" }] },
          },
        },
        { $sort: sort ? sort : { createdAt: 1 } },
        { $match: query },
      ]);
    } else {
      // courses = await courseModel
      //   .find(query)
      //   .sort({ studentsEnrolled: -1 })
      //   .limit(5);
      courses = await courseModel.aggregate([
        { $addFields: { [joined]: { $toString: "$_id" } } },
        { $match: query },
        { $sort: sort ? sort : { createdAt: 1 } },
        { $sort: { studentsEnrolled: -1 } },
        { $limit: 5 },
      ]);
    }
    res.header("Access-Control-Expose-Headers", "Content-Range");
    res.header("Content-Range", `courses 0-20/${courses.length}`);
    courses = courses.map((c) => {
      return {
        id: c._id,
        ...c,
      };
    });
    res.status(200).json(courses);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Could not get courses" });
  }
});

router.get("/search", async (req, res) => {
  try {
    let q = req.query.query || "";
    let foundCourses;
    if (q.length) {
      foundCourses = await courseModel.find({ $text: { $search: q } });
    } else {
      foundCourses = await courseModel.find({});
    }
    foundCourses = foundCourses.map((c) => {
      return {
        id: c._id,
        ...c._doc,
      };
    });
    res.status(200).json(foundCourses);
  } catch (e) {
    res.status(404).json({ error: "No such course found" });
  }
});

// Get course by id with lessons populated
router.get("/:id", async (req, res) => {
  try {
    const course = await courseModel.findById(req.params.id).populate([
      {
        path: "lessons",
        transform: (lesson) => {
          return {
            // Required for react-admin to work
            id: lesson._id,
            ...lesson._doc,
          };
        },
      },
    ]);
    res.status(200).json({ id: course._id, ...course._doc });
  } catch {
    res.status(400).json({ error: "Could not retrieve course" });
  }
});

// Protect below routes
router.use(requireAuth);

router.post("/", async (req, res) => {
  // Check permissions
  if (!req.user.isAdmin) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const course = await courseModel.create(req.body);
    res.status(201).json({ id: course._id, ...course._doc });
  } catch {
    res.status(400).json({ error: "Could not create course" });
  }
});

router.put("/:id", async (req, res) => {
  // Check permissions
  const { id } = req.params;
  if (!req.user.isAdmin) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Get lessons from request body
  const lessons = req.body?.lessons;
  if (!lessons) {
    return res.status(400).json({ error: "No lessons provided" });
  }

  // Store as array of lesson ids
  const newLessons = lessons.map((l) => l._id || l.id); // const newCourse = { ...req.body, lessons: newLessons };

  try {
    const course = await courseModel.findByIdAndUpdate(
      id,
      { ...req.body, lessons: newLessons },
      { new: true }
    );

    // Position targetId at targetIndex, targetId can already be in lessons
    let { targetId, targetIndex } = req.body;
    if (targetId && targetIndex) {
      let oldIndex;
      targetIndex--;
      if (typeof targetId == "string") {
        oldIndex = course.lessons.findIndex((l) => l._id == targetId);
        targetId = new mongoose.Types.ObjectId(targetId);
      } else {
        throw new Error({ message: "targetId must be of type string" });
      }

      if (oldIndex <= -1) {
        course.lessons.splice(targetIndex, 0, targetId);
      } else {
        if (oldIndex < targetIndex) {
          console.log("oldIndex < targetIndex", oldIndex, targetIndex);
          course.lessons.splice(targetIndex, 0, targetId);
          course.lessons.splice(oldIndex, 1);
        }
        if (oldIndex > targetIndex) {
          console.log("oldIndex > targetIndex", oldIndex, targetIndex);
          course.lessons.splice(oldIndex, 1);
          course.lessons.splice(targetIndex, 0, targetId);
        }
      }

      await course.save();
    }

    return res.status(201).json({ id: course._id, ...course._doc });
  } catch (err) {
    console.log(err);
    // return res.status(400).json({ error: "Could not update course" });
    return res.status(400).json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  // Check permissions
  const { id } = req.params;
  if (!req.user.isAdmin) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    await courseModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Delete item successfully" });
  } catch {
    res.status(400).json({ error: "Could not delete course" });
  }
});

module.exports = router;
