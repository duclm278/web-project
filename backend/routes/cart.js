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
        const cart = await cartModel.findOne({ userId: req.params.id });
        if (!cart) {
            res.status(404).json({ error: "Could not find user cart" });
            return;
        }
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
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Could not create cart" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const cart = await cartModel.findByIdAndUpdate(req.params.id, req.body.cart);
        res.status(200).json(cart);
    } catch (e) {
        console.log(e);
        res.status(400).json({ error: "Could not update cart" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await cartModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "successful" });
    } catch {
        res.status(400).json({ error: "Could not delete cart" });
    }
});

module.exports = router;
