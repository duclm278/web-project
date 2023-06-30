const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_API_KEY);

router.post("/", (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "vnd",
    }, (err, resp) => {
        if (err) {
            console.log(err);
            res.status(500).json(err);
        } else {
            res.status(200).json(resp)
        }
    })
})

module.exports = router
