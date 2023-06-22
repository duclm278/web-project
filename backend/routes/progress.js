const router = require("express").Router();
const User = require("../models/User");
const requireAuth = require("../middleware/requireAuth");

// Protect below routes
router.use(requireAuth);

// Get all progress
router.get("/", async (req, res) => {
  res.status(200).json(req.user.joinedCourses);
});

// Get all completed lessons of course
router.get("/:id", async (req, res) => {
  const { _id } = req.user;
  const { id: courseId } = req.params;
  const user = await User.findOne({ _id, "joinedCourses.courseId": courseId });
  if (!user) {
    return res.status(404).json({ error: "No such course" });
  }

  const course = user.joinedCourses[0];
  res.status(200).json(course);
});

// Update completed lessons of course
router.put("/:id", async (req, res) => {
  const { _id } = req.user;
  const { id: courseId } = req.params;
  const user = await User.findOneAndUpdate(
    { _id, "joinedCourses.courseId": courseId },
    {
      $set: {
        "joinedCourses.$.currentLesson": req.body.currentLesson,
        "joinedCourses.$.completedLessons": req.body.completedLessons,
      },
    },
    { new: true }
  );
  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }

  const course = user.joinedCourses[0];
  res.status(200).json(course);
});

module.exports = router;
