const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/productModel');
const ProductRoute = require('./routes/ProductRoutes');
require('dotenv').config();


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));//true is used to parse the nested object and flase is used to parse the string or array


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/', async (req, res) => {
    res.send('Welcome to the Product API')
});
app.use('/api/products', ProductRoute)




mongoose.connect(process.env.MONG)
    .then(() => {
        console.log("connected to database");
        app.listen(process.env.PORT, (req, res) => {
            console.log('Server is running on port 3000')
        })
    })
    .catch((error) => {
        console.log("error", error.message);
    })
