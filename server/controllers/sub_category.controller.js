const express = require('express');
const SubCategory = require('../routes/sub_category.route')

const getAllSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find({}).populate('category');
        res.json({ status: true, data: subCategories });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const getSubCategoryById = async (req, res) => {
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
        const subCategories = await SubCategory.create({
            name: body.name,
        }).populate('category');
        res.json({ status: true, data: subCategories });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const deleteSubCategoryById = async (req, res) => {
    try {
        const subCategories = await SubCategory.findByIdAndDelete({
            category: req.params.id,
        }).populate('category');
        res.json({ status: true, data: subCategories });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const updateSubCategoryById = async (req, res) => {
    try {
        const subCategories = await SubCategory.findByIdAndUpdate(req.params.id, req.body, { new: true }).populate('category');
        res.json({ status: true, data: subCategories });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

module.exports = {getAllSubCategories, getSubCategoryById, createSubCategory, deleteSubCategoryById, updateSubCategoryById};