const router = require("express").Router();
const orderModel = require("../models/Order");

//TODO: add auth middleware

router.get("/", async (req, res) => {
    try {
        let orders = await orderModel.find({});
        res.header('Access-Control-Expose-Headers', 'Content-Range');
        res.header('Content-Range', `orders 0-20/${orders.length}`);
        orders = orders.map(o => {
            return {
                id: o._id,
                ...o._doc,
            }
        });
        res.status(200).json(orders);
    } catch {
        res.status(500).json({ error: "Could not get orders" });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const order = await orderModel.findById(req.params.id);
        res.status(200).json({ id: order._id, ...order });
    } catch {
        res.status(400).json({ error: "Could not retrieve orders" });
    }
});

router.get("/:uid", async (req, res) => {
    try {
        const orders = await orderModel.find({ userId: uid });
        res.status(200).json(orders);
    } catch {
        res.status(400).json({ error: "Could not retrieve orders" });
    }
});

router.post("/", async (req, res) => {
    try {
        const order = await orderModel.create(req.body);
        res.status(201).json({ id: order._id, ...order });
    } catch {
        res.status(400).json({ error: "Could not create order" });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const order = await orderModel.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json({ id: order._id, ...order });
    } catch {
        res.status(400).json({ error: "Could not update order" });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await orderModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "successful" });
    } catch {
        res.status(400).json({ error: "Could not delete order" });
    }
});

module.exports = router;
