const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
        rate: Number,
        count: Number
    }
})

const ProductModel = mongoose.model('Product', mongooseSchema)

module.exports = ProductModel;