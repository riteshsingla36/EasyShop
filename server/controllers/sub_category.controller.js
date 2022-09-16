const SubCategory = require('../models/sub_category.model')

const getAllSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find({}).populate('category');
        res.json({ status: true, data: subCategories });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const getSubCategoriesByCategory = async (req, res) => {
    try {
        const subCategories = await SubCategory.find({
            category: req.params.id,
        }).populate('category');
        res.json({ status: true, data: subCategories });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const createSubCategory =  async (req, res) => { // pending
    const body = req.body;
    try {
        const subCategory = await SubCategory.create({
            name: body.name,
            category: body.category,
        });
        res.json({ status: true, data: subCategory });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const deleteSubCategory = async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndDelete(req.params.id);
        res.json({ status: true, data: subCategory });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const updateSubCategory = async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('category');
        res.json({ status: true, data: subCategory });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

module.exports = {getAllSubCategories, getSubCategoriesByCategory, createSubCategory, deleteSubCategory, updateSubCategory};