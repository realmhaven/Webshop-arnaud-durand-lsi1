const express = require('express')
const mongoose = require('mongoose')
const app = express()
const products = require('./product.js')
const products_routes = require('./routes.js')
const cors = require('cors');

app.use(cors());

mongoose.connect('mongodb+srv://abchate:3582728@cluster0.6n9mmw3.mongodb.net/webshop')
    .then(() => {
        console.log('MongoDB connected');
    })
    .catch(err => {
        console.error('MongoDB connection error:', err);
    });


app.listen(5000, () => {
    console.log('server is listening on port 5000')
})


app.use(express.json())
app.use('/api/products', products_routes)


