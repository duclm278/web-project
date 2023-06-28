const router = require("express").Router();
const Lesson = require("../models/Lesson");
const requireAuth = require("../middleware/requireAuth");

function escapeRegex(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

router.get("/", async (req, res) => {
  let query = {};

  // Required by react-admin
  let filter = null;
  if (req.query?.filter) {
    filter = JSON.parse(req.query?.filter);
  }
  if (filter?.q) {
    query = { name: { $regex: filter.q, $options: "i" } };
  }

  try {
    let lessons = await Lesson.find(query);
    res.header("Access-Control-Expose-Headers", "Content-Range");
    res.header("Content-Range", `lessons 0-20/${lessons.length}`);
    lessons = lessons.map((c) => {
      return {
        id: c._id,
        ...c._doc,
      };
    });
    res.status(200).json(lessons);
  } catch {
    res.status(500).json({ error: "Could not get lessons" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    // TODO: Populate lesson?
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

  try {
    const lesson = await Lesson.create(req.body);
    res.status(201).json({ id: lesson._id, ...lesson._doc });
  } catch {
    res.status(400).json({ error: "Could not create lesson" });
  }
});

router.put("/:id", async (req, res) => {
  // Check permissions
  const { id } = req.params;
  if (!req.user.isAdmin) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    const lesson = await Lesson.findByIdAndUpdate(id, req.body);
    res.status(201).json({ id: lesson._id, ...lesson._doc });
  } catch {
    res.status(400).json({ error: "Could not update lesson" });
  }
});

router.delete("/:id", async (req, res) => {
  // Check permissions
  const { id } = req.params;
  if (!req.user.isAdmin) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    await Lesson.findByIdAndDelete(id);
    res.status(200).json({ message: "Delete item successfully" });
  } catch {
    res.status(400).json({ error: "Could not delete lesson" });
  }
});

module.exports = router;
