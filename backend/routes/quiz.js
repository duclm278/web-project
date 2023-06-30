// Quiz is Lesson of type "quiz".
const router = require("express").Router();
const Course = require("../models/Course");
const Lesson = require("../models/Lesson");
const requireAuth = require("../middleware/requireAuth");
const { escapeRegExp } = require("../utils/regex");

router.get("/", async (req, res) => {
  let query = { type: "quiz" };

  // Required by react-admin
  let filter = null;
  if (req.query?.filter) {
    filter = JSON.parse(req.query?.filter);
  }
  const joined = "tmpId";
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
  let sort = null;
  if (req.query?.sort) {
    sort = JSON.parse(req.query?.sort);
  }
  if (sort) {
    const [field, order] = sort;
    sort = { [field]: order === "ASC" ? 1 : -1 };
  }

  try {
    // let quizzes = await Lesson.find(query);
    let quizzes = await Lesson.aggregate([
      {
        $addFields: {
          [joined]: { $concat: ["$name", { $toString: "$_id" }] },
        },
      },
      { $sort: sort ? sort : { createdAt: 1 } },
      { $match: query },
    ]);
    res.header("Access-Control-Expose-Headers", "Content-Range");
    res.header("Content-Range", `quizzes 0-20/${quizzes.length}`);
    quizzes = quizzes.map((q) => {
      return {
        id: q._id,
        ...q,
      };
    });
    res.status(200).json(quizzes);
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "Could not get quizzes" });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const quiz = await Lesson.findById(id);
  if (!quiz) {
    return res.status(404).json({ error: "Quiz lesson not found" });
  }
  res.status(200).json({ id: quiz._id, ...quiz._doc });
});

// Protect below routes
router.use(requireAuth);

router.post("/", async (req, res) => {
  // Check permissions
  if (!req.user.isAdmin) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Check if format is correct
  const { name, description, questions } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Quiz name required" });
  }
  if (!description) {
    return res.status(400).json({ error: "Quiz description required" });
  }
  if (!questions) questions = [];

  // Correct answer is in form of "1" or [1, 2, 3]
  const parsedQuestions = questions.map((q) => {
    if (q.questionType === "multiple") {
      // Check if correct answer is array of numbers
      const isArrayOfNumbers =
        Array.isArray(q.correctAnswer) &&
        q.correctAnswer.every((ans) => typeof ans === "number");
      if (!isArrayOfNumbers) {
        return res.status(400).json({
          error:
            "Correct answer of multiple choice question must be array of numbers",
        });
      }
      return q;
    }

    // Check if correct answer string is number
    const isNumber = parseInt(q.correctAnswer);
    if (!isNumber) {
      return res.status(400).json({
        error: `Correct answer of single choice question must be number, got ${q.correctAnswer}`,
      });
    }
    return q;
  });

  let quiz = null;
  try {
    quiz = await Lesson.create({
      name,
      type: "quiz",
      description,
      questions: parsedQuestions,
    });

    const { courseId, index } = req.body;
    if (courseId) await Lesson.moveLessonToCourseIndex(quiz, courseId, index);

    return res.status(201).json(quiz);
  } catch (err) {
    console.log(err.message);
    if (quiz) {
      await Lesson.findByIdAndDelete(quiz._id);
    }
    res.status(400).json({ error: "Could not create quiz lesson" });
  }
});

router.delete("/:id", async (req, res) => {
  // Check permissions
  if (!req.user.isAdmin) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Delete quiz lesson from lessons
  const { id } = req.params;
  const quiz = await Lesson.findByIdAndDelete(id);
  if (!quiz) {
    return res.status(404).json({ error: "Quiz lesson not found" });
  }
  // Remove lesson from course, use $pull
  await Course.findOneAndUpdate({ lessons: id }, { $pull: { lessons: id } });
  res.status(200).json({ id: quiz._id, ...quiz._doc });
});

// Accept JSON object
router.patch("/:id", async (req, res) => {
  // Check permissions
  if (!req.user.isAdmin) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const { id } = req.params;
  const { name, description, questions } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Quiz title required" });
  }
  if (!description) {
    return res.status(400).json({ error: "Quiz synopsis required" });
  }
  if (!questions) questions = [];

  // Correct answer is in form of "1" or [1, 2, 3]
  const parsedQuestions = questions.map((q) => {
    if (q.questionType === "multiple") {
      // Check if correct answer is array of numbers
      const isArrayOfNumbers =
        Array.isArray(q.correctAnswer) &&
        q.correctAnswer.every((ans) => typeof ans === "number");
      if (!isArrayOfNumbers) {
        return res.status(400).json({
          error:
            "Correct answer of multiple choice question must be array of numbers",
        });
      }
      return q;
    }

    // Check if correct answer string is number
    const isNumber = parseInt(q.correctAnswer);
    if (!isNumber) {
      return res.status(400).json({
        error: `Correct answer of single choice question must be number, got ${q.correctAnswer}`,
      });
    }
    return q;
  });

  try {
    const quiz = await Lesson.findByIdAndUpdate(
      id,
      { name, description, questions: parsedQuestions },
      { new: true }
    );
    if (!quiz) {
      return res.status(404).json({ error: "Quiz lesson not found" });
    }

    const { courseId, index } = req.body;
    if (courseId) await Lesson.moveLessonToCourseIndex(lesson, courseId, index);

    res.status(200).json({ id: quiz._id, ...quiz._doc });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({ error: "Could not update quiz lesson" });
  }
});

module.exports = router;
