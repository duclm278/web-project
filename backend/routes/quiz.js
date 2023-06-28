const router = require("express").Router();
const Lesson = require("../models/Lesson");
const Quiz = require("../models/Quiz");
const requireAuth = require("../middleware/requireAuth");

// Protect below routes
router.use(requireAuth);

router.get("/", async (req, res) => {
  let quizzes = [];

  // Build query from req.query
  const query = {};
  if (req.query.lessonId) {
    query.lessonId = req.query.lessonId;
  }
  quizzes = await Quiz.find(query).sort({ createdAt: -1 });

  res.header("Access-Control-Expose-Headers", "Content-Range");
  res.header("Content-Range", `quizzes 0-20/${quizzes.length}`);
  quizzes = quizzes.map((q) => {
    return {
      id: q._id,
      ...q._doc,
    };
  });
  res.status(200).json(quizzes);
});

router.get("/:quizId", async (req, res) => {
  const { quizId } = req.params;
  const quiz = await Quiz.findById(quizId);
  if (!quiz) {
    return res.status(404).json({ error: "Quiz not found" });
  }
  res.status(200).json({ id: quiz._id, ...quiz._doc });
});

router.post("/", async (req, res) => {
  // Check if format is correct
  const { quizTitle, quizSynopsis, questions } = req.body;
  if (!quizTitle) {
    return res.status(400).json({ error: "Quiz title required" });
  }
  if (!quizSynopsis) {
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

  // Create lesson
  let lesson = null;
  try {
    lesson = await Lesson.create({ type: "quiz" });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }

  try {
    const quiz = await Quiz.create({
      lessonId: lesson._id,
      quizTitle,
      quizSynopsis,
      questions: parsedQuestions,
    });
    return res.status(201).json(quiz);
  } catch (err) {
    // Delete lesson if quiz creation failed
    await Lesson.findByIdAndDelete(lesson._id);
    return res.status(400).json({ error: err.message });
  }
});

router.delete("/:quizId", async (req, res) => {
  const { quizId } = req.params;
  const quiz = await Quiz.findOneAndDelete({ _id: quizId });
  if (!quiz) {
    return res.status(404).json({ error: "Quiz not found" });
  }

  // Delete lesson if quiz exist
  const { lessonId } = quiz;
  await Lesson.findByIdAndDelete(lessonId);

  // Return quiz
  res.status(200).json(quiz);
});

// Accept JSON object
router.patch("/:quizId", async (req, res) => {
  const { quizId } = req.params;
  const { quizTitle, quizSynopsis, questions } = req.body;
  if (!quizTitle) {
    return res.status(400).json({ error: "Quiz title required" });
  }
  if (!quizSynopsis) {
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

  const quiz = await Quiz.findByIdAndUpdate(
    quizId,
    { quizTitle, quizSynopsis, questions: parsedQuestions },
    { new: true }
  );
  if (!quiz) {
    return res.status(404).json({ error: "Quiz not found" });
  }
  res.status(200).json(quiz);
});

module.exports = router;
