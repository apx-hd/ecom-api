const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title field is required!"],
        unique: true,
        minlength: [10, "Title should be at least 10 characters long"],
        maxlength: [140, "Title cannot be more than 140 characters long"]
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

const ProductModel = mongoose.model('Product', productSchema)

module.exports = ProductModel;