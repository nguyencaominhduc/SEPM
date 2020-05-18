const express = require("express");
const router = express.Router();

const Review = require('../model/Review')

router.get('/:_id', (req, res, next) => {
    Review.find({ _id: req.params._id }, function (err, reviews) {
        res.send(reviews)
    })
})

router.post('/:_id', (req, res, next) => {
    Review.find({ _id: req.params._id })
        .exec()
        .then(reviews => {
            if (reviews.length < 1) {
                const reviews = new Review({
                    _id: req.params._id,
                    reviews: [{ "name": req.body.name, "email": req.body.email, "content": req.body.content }]
                });
                reviews
                    .save()
                    .then(result => {
                        console.log(result);
                    })
                    .catch(err => console.log(err));
                res.status(201).json({
                    message: "New review created",
                    newReviews: reviews
                })
                next()
            } else {
                Review.findByIdAndUpdate({ _id: req.params._id }, {
                    $push: { reviews: [{ "name": req.body.name, "email": req.body.email, "content": req.body.content }] }
                }, { 'new': true }, function (err, result) {
                    res.send(result)
                })
            }

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        });
})

module.exports = router;
