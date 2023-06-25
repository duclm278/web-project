const router = require("express").Router();
const ratingModel = require("../models/Rating");

// Get all rating records with a given course id
router.get("/:id", async (req, res) => {
    try {
        const ratings = await ratingModel.find({ courseId: req.params.id });
        res.status(200).json(ratings);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "could not retrieve course ratings" });
    }
})


// Get total course rating with a given course id
router.get("/total/:id", async (req, res) => {
    try {
        const result = await ratingModel.aggregate([
            {
                $match: {
                    courseId: req.params.id
                }
            },
            {
                $group: {
                    _id: null,
                    average: { $avg: '$score' }
                }
            }
        ]).exec();

        let average = result[0].average;
        average = Math.round(average * 10) / 10;
        console.log({ average: average });
        res.status(200).json({ totalRating: average });
    } catch {
        res.status(200).json({ totalRating: 0 });
    }
});

// Add a new course rating
router.post("/", async (req, res) => {
    try {
        const newRating = await ratingModel.create(req.body);
        res.status(201).json(newRating);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "could not add new rating" });
    }
});

// Update an existing course rating
router.put("/:id", async (req, res) => {
    try {
        const updatedRating = await ratingModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json(updatedRating);
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: "could not update rating" });
    }
});

// Delete an existing course rating
router.delete("/:id", async (req, res) => {
    try {
        await ratingModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "successful" });
    } catch (err) {
        console.log(err);
        res.status(400).json({ error: "could not delete rating" });
    }
});

module.exports = router;
