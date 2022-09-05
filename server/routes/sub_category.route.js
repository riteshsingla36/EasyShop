const express = require('express');
const SubCategory = require('../models/sub_category.model');
const SubCategoryController = require('../controllers/sub_category.controller');
const router = express.Router();

router.get('/', SubCategoryController.getAllSubCategories);

router.get('/category/:id', SubCategoryController.getSubCategoryById);

router.post('/category/:id', SubCategoryController.createSubCategory);

router.delete('/category/:id', SubCategoryController.deleteSubCategoryById);

router.patch('/category/:id', SubCategoryController.updateSubCategoryById);

module.exports = router;