const Products = require('../models/productModel');

const getProducts = async (req, res) => {
    try {
        const products = await Products.find({});
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const Product = await Products.findById(id);
        res.status(200).json(Product);
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
};

const createProduct = async (req, res) => {
    try {
        const product = await Products.create(req.body);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findByIdAndUpdate(id, req.body);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        const UpdatedProduct = await Products.findById(id);
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Products.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ message: "Product deleleted sucessfully" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = {
    getProducts, getProduct, createProduct, updateProduct, deleteProduct
}