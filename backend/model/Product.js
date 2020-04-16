const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
    product_name: {
        type: String,
        required: [true, 'Please add a name']
    },
    price: {
        type: String,
        required: [true, 'Please add a price']
    },
    retailer: String,
    product_url: {
        type: String,
        required: [true, 'Please add product url']
    },
    platform: String,
    image: {
        type: String,
        default: 'no-photo.jpg'
    },
    category: String
})

module.exports = mongoose.model('Product',ProductSchema)