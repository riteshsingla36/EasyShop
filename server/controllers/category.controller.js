const express = require('express');
const Category = require('../models/category.model');

const updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({ status: true, data: category });
    } catch (e) {
        res.json({ status: false, message: e.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        res.json({ status: true, data: category });
    } catch (e) {   
        res.json({ status: false, message: e.message });
    }
};

const createCategory = async (req, res) => {
    const body = req.body;
    try {
        const category = await Category.create({
            name: body.name,
        });
        res.json({ status: true, data: category });
    } catch (e) {
        res.json({ status: false, message: e.message });
    }
};

const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.json({ status: true, data: category });
    } catch (e) {
        res.json({ status: false, message: e.message });
    }
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.json({ status: true, data: categories });
    } catch (e) {
        res.json({ status: false, message: e.message });
    }
};

module.exports = {updateCategory, deleteCategory, createCategory, getCategoryById, getAllCategories};