const router = require("express").Router();
const cartModel = require("../models/Cart");

//TODO: add auth middleware

router.get("/", async (req, res) => {
    try {
        const carts = await cartModel.find({});
        res.status(200).json(carts);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Could not get carts" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const cart = await cartModel.find({ userId: id });
        res.status(200).json(cart);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: "Could not retrieve cart" });
    }
});

router.post("/", async (req, res) => {
    try {
        const cart = await cartModel.create(req.body);
        res.status(201).json(cart);
    } catch {
        res.status(400).json({ error: "Could not create cart" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const cart = await cartModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json(cart);
    } catch {
        res.status(400).json({ error: "Could not update cart" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await cartModel.findByIdAndDelete(req.params.id);
    } catch {
        res.status(400).json({ error: "Could not delete cart" });
    }
});

module.exports = router;
