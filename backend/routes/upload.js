const router = require("express").Router();
const getCourseDetails = require("../service/youtube");
const courseModel = require("../models/Course");
const lessonModel = require("../models/Lesson");

router.post("/", async (req, res) => {
  if (!req.body.playlistUrl) {
    return res.status(400).json("Missing playlist url");
  }

  let course;
  let playlistUrl = req.body.playlistUrl;
  let parts = playlistUrl.split("=");
  playlistUrl = parts[parts.length - 1];
  try {
    course = await getCourseDetails(playlistUrl);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err.message });
  }

  // Use lessonModel to create new lesson
  // Store array of lesson ids in course.lessons
  let lessons = [];
  if (!course?.lessons) {
    return res.status(400).json({ error: "No lessons found" });
  }
  for (const lesson of course.lessons) {
    try {
      const result = await lessonModel.create(lesson);
      lessons.push(result._id);
    } catch (err) {
      console.log(err);
      return res.status(400).json({ error: err.message });
    }
  }

  course.lessons = lessons;
  course.price = req.body.price;
  if (req.body.coverImage) {
    course.coverImage = req.body.coverImage;
  }

  try {
    const savedCourse = await courseModel.create(course);
    return res.status(201).json(savedCourse);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
