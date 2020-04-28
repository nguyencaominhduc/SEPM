const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    name: String,
    content: String
}, { _id: false }, { versionKey: false })

const ReviewsSchema = mongoose.Schema({
    product_url: String,
    reviews: [ReviewSchema]
}, { versionKey: false })

module.exports = mongoose.model('Review', ReviewsSchema, "reviews")