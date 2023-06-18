const router = require("express").Router();
const getCourseDetails = require("../service/youtube");
const courseModel = require("../models/Course");

router.post("/", async (req, res) => {
    if (!req.body.playlistUrl) {
        res.status(400).json("Missing playlist url");
        return;
    }

    let playlistUrl = req.body.playlistUrl;
    let parts = playlistUrl.split('=');
    playlistUrl = parts[parts.length - 1];
    let course = await getCourseDetails(playlistUrl);

    course.price = req.body.price;
    course.coverImage = req.body.coverImage;

    console.log(course);
    try {
        const savedCourse = await courseModel.create(course);
        res.status(201).json(savedCourse);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Could not upload course" });
    }
})

module.exports = router;
