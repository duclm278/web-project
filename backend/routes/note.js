const router = require("express").Router();
const Note = require("../models/Note");
const requireAuth = require("../middleware/requireAuth");

// Protect below routes
router.use(requireAuth);

// Get all notes
router.get("/", async (req, res) => {
  const { _id: userId } = req.user;

  // Build query from req.query
  const query = { userId, ...req.query };
  const notes = await Note.find(query).sort({ createdAt: -1 });
  res.status(200).json(notes);
});

router.get("/:noteId", async (req, res) => {
  const { _id: userId } = req.user;

  const { noteId } = req.params;
  const note = await Note.findById(noteId);
  if (!note || note.userId !== userId) {
    return res.status(404).json({ error: "Note not found" });
  }
  res.status(200).json(note);
});

router.post("/", async (req, res) => {
  const { _id: userId } = req.user;

  // Check if format is correct
  const { lessonId, time, content } = req.body;
  if (!lessonId) {
    return res.status(400).json({ error: "Lesson ID required" });
  }
  if (!content) {
    return res.status(400).json({ error: "Content required" });
  }

  try {
    const note = await Note.create({ userId, lessonId, time, content });
    return res.status(201).json(note);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.delete("/:noteId", async (req, res) => {
  const { _id: userId } = req.user;

  const { noteId } = req.params;
  const note = await Note.findOneAndDelete({ _id: noteId, userId });
  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }
  res.status(200).json(note);
});

router.patch("/:noteId", async (req, res) => {
  const { _id: userId } = req.user;

  const { noteId } = req.params;
  const { content } = req.body;
  const note = await Note.findOneAndUpdate(
    { _id: noteId, userId },
    { content },
    { new: true }
  );
  if (!note) {
    return res.status(404).json({ error: "Note not found" });
  }
  res.status(200).json(note);
});

module.exports = router;
