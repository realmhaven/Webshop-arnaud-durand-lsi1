const mongoose = require('mongoose')
const ProductSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    id: Number,
    name: String,
    description: String,
    price: Number,
});

const Product = mongoose.model('product', ProductSchema, 'product');

module.exports = Product

