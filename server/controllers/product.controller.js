const Product = require('../models/product.model');
const cloudinary = require('cloudinary').v2;

const cloudinaryImageUploadMethod = async file => {
    return new Promise(resolve => {
        cloudinary.uploader.upload( file , (err, res) => {
          if (err) return res.status(500).send("upload image error");
            resolve({
              res: res.secure_url
            }) 
          }
        ) 
    })
  }
  
const getProducts = async (req, res) => {
    const query = {}
    if(req.query.category) {
        query.category = req.query.category
    }
    if(req.query.subcategory) {
        query.subCategory = req.query.subcategory
    }
    try {
        const products = await Product.find(query);
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
    const urls = [];
        const files = req.files;
        for (const file of files) {
          const { path } = file;
          const newPath = await cloudinaryImageUploadMethod(path)
          urls.push(newPath)
    }
    try {
        const product = await Product.create({name: name, price: price, stock: stock, category: category, subCategory: subCategory, description: description, images: urls.map( url => url.res )});
        res.json({status: true, data: product});
    }
    catch(e) {
        res.json({status: false, message: e.message});
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {runValidators: true});
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