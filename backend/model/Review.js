const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
    name: String,
    email: String,
    pros: String,
    cons: String
}, { _id: false }, { versionKey: false })

const ReviewsSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    reviews: [ReviewSchema]
}, { versionKey: false })

module.exports = mongoose.model('Review', ReviewsSchema, "reviews")
