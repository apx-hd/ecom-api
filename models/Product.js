const mongoose = require('mongoose');

const mongooseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 10,
        maxlength: 140
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    image: String,
    rating: {
        rate: Number,
        count: Number
    }
})

const ProductModel = mongoose.model('Product', mongooseSchema)

module.exports = ProductModel;