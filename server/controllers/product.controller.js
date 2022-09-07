const Product = require('../models/product.model');

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json({status: true, data: products});
    }
    catch(e) {
        res.json({status: false, message: e.message});
    }
}

const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json({status: true, data: product});
    }
    catch(e) {
        res.json({status: false, message: e.message});
    }
}

const createProduct = async (req, res) => {
    const name = req.body.name;
    const price = req.body.price;
    const stock = req.body.stock;
    const category = req.body.category;
    const subCategory = req.body.subCategory;
    const description = req.body.description;
    const images = req.body.images;
    try {
        const product = await Product.create({name: name, price: price, stock: stock, category: category, subCategory: subCategory, description: description, images: images});
        res.json({status: true, data: product});
    }
    catch(e) {
        res.json({status: false, message: e.message});
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({status: true, data: product});
    }
    catch(e) {
        res.json({status: false, message: e.message});
    }
}

const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        res.json({ status: true, data: product});
    }
    catch(e) {
        res.json({status: false, message: e.message});
    }
}

module.exports = {getProducts, getProduct, createProduct, updateProduct, deleteProduct}