const router = require("express").Router();
const courseModel = require("../models/Course");
const requireAuth = require("../middleware/requireAuth");

router.get("/", async (req, res) => {
  try {
    let courses = await courseModel.find({});
    res.header("Access-Control-Expose-Headers", "Content-Range");
    res.header("Content-Range", `courses 0-20/${courses.length}`);
    courses = courses.map((c) => {
      return {
        id: c._id,
        ...c._doc,
      };
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

  try {
    const course = await courseModel.findByIdAndUpdate(id, req.body);
    res.status(201).json({ id: course._id, ...course._doc });
  } catch {
    res.status(400).json({ error: "Could not update course" });
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
