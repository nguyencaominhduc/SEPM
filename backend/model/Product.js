const mongoose = require('mongoose');

const ObjectSchema = new mongoose.Schema({
    retailer: { type: String, required: true },
    platform: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    product_url: { type: String, required: true }
}, { _id: false }, { versionKey: false });

const ProductSchema = mongoose.Schema({
    name: String, 
    count : String,
    category: String,
    data: [ObjectSchema]
})

module.exports = mongoose.model('Product',ProductSchema)