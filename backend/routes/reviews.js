const express = require("express");
const router = express.Router();
const mongoose = require("mongoose")

const Review = require('../model/Review')

router.get('/:url', (req, res, next) => {
    Review.find({ product_url: decodeURIComponent(req.params.url) }, function (err, reviews) {
        res.send(reviews)
    })
})

// router.post('/', (req, res, next) => {
//     const reviews = new Review({
//         product_url: req.body.url,
//         reviews: req.body.reviews
//     });
//     reviews
//         .save()
//         .then(result => {
//             console.log(result);
//         })
//         .catch(err => console.log(err));
//     res.status(201).json({
//         message: "New review created",
//         newReviews: reviews
//     })
//     next()
// })

router.post('/', (req, res, next) => {
    Review.find({ product_url: decodeURIComponent(req.body.url) })
        .exec()
        .then(reviews => {
            if (reviews.length < 1) {
                const reviews = new Review({
                    product_url: req.body.url,
                    reviews: req.body.reviews
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
                Review.updateOne({ product_url: decodeURIComponent(req.body.url) }, {
                    $push: { reviews: req.body.reviews }
                }, function (err, result) {
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
