const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    name: String, 
    count : String,
    category: String,
    data: Array
})

module.exports = mongoose.model('Product',ProductSchema)