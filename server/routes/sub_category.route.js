const express = require('express');
const SubCategoryController = require('../controllers/sub_category.controller');
const router = express.Router();

router.get('/', SubCategoryController.getAllSubCategories);

router.get('/category/:id', SubCategoryController.getSubCategory);

router.post('/category/:id', SubCategoryController.createSubCategory);

router.delete('/category/:id', SubCategoryController.deleteSubCategory);

router.patch('/category/:id', SubCategoryController.updatecategory);

module.exports = router;