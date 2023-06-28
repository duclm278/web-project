const router = require("express").Router();
const User = require("../models/User");
const Course = require("../models/Course");
const requireAuth = require("../middleware/requireAuth");

// Protect below routes
router.use(requireAuth);

router.get("/", async (req, res) => {
  const { joinedCourses } = req.user;
  if (!joinedCourses) {
    joinedCourses = [];
  }
  const joinedCourseIds = joinedCourses.map((course) =>
    course.courseId.toString()
  );
  const courses = await Course.find({ _id: { $in: joinedCourseIds } }).select(
    "name description coverImage"
  );
  res.status(200).json(courses);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const { joinedCourses } = req.user;

  // Make sure joinedCourse not null to find
  if (!joinedCourses) {
    return res.status(404).json({ error: "Haven't joined course" });
  }

  const course = joinedCourses.find(
    (course) => course.courseId.toString() === id
  );
  if (!course) {
    return res.status(404).json({ error: "Haven't joined course" });
  }

  res.status(200).json(course);
});

router.post("/", async (req, res) => {
  console.log(req);
  const { _id, joinedCourses } = req.user;

  // Check if format is correct
  if (!req.body?.courseId) {
    return res.status(400).json({ error: "Expected object with courseId" });
  }

  // Convert to string to compare
  if (
    joinedCourses.find(
      (course) => course.courseId.toString() === req.body.courseId
    )
  ) {
    return res.status(400).json({ error: "Already enrolled" });
  }

  const user = await User.findByIdAndUpdate(
    _id,
    { $push: { joinedCourses: req.body } },
    { new: true }
  );
  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }

  // Update student count
  const course = await Course.findByIdAndUpdate(
    req.body.courseId,
    { $inc: { studentsEnrolled: 1 } },
    { new: true }
  );

  res.status(200).json(user.joinedCourses);
});

router.delete("/:id", async (req, res) => {
  const { _id } = req.user;
  const { id: courseId } = req.params;
  const user = await User.findByIdAndUpdate(
    _id,
    { $pull: { joinedCourses: { courseId } } },
    { new: true }
  );
  if (!user) {
    return res.status(404).json({ error: "No such user" });
  }

  // Update student count
  const course = await Course.findByIdAndUpdate(
    courseId,
    { $inc: { studentsEnrolled: -1 } },
    { new: true }
  );

  res.status(200).json(user.joinedCourses);
});

module.exports = router;
