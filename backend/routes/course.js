const router = require("express").Router();
const courseModel = require("../models/Course");

//TODO: add auth middleware

router.get("/", async (req, res) => {
    try {
        let courses = await courseModel.find({});
        res.header('Access-Control-Expose-Headers', 'Content-Range');
        res.header('Content-Range', `courses 0-20/${courses.length}`);
        courses = courses.map(c => {
            return {
                id: c._id,
                ...c._doc,
            }
        });
        res.status(200).json(courses);
    } catch {
        res.status(500).json({ error: "Could not get courses" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const course = await courseModel.findById(req.params.id);
        res.status(200).json({ id: course._id, ...course._doc });
    } catch {
        res.status(400).json({ error: "Could not retrieve course" });
    }
});

router.post("/", async (req, res) => {
    try {
        const course = await courseModel.create(req.body);
        res.status(201).json({ id: course._id, ...course._doc });
    } catch {
        res.status(400).json({ error: "Could not create course" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const course = await courseModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json({ id: course._id, ...course._doc });
    } catch {
        res.status(400).json({ error: "Could not update course" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await courseModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "delete item sucessfully" });
    } catch {
        res.status(400).json({ error: "Could not delete course" });
    }
});

module.exports = router;
