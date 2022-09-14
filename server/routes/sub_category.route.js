const express = require('express');
const SubCategoryController = require('../controllers/sub_category.controller');
const router = express.Router();

router.get('/', SubCategoryController.getAllSubCategories);

router.get('/:id', SubCategoryController.getSubCategoriesByCategory);

router.post('/create', SubCategoryController.createSubCategory);

router.delete('/delete/:id', SubCategoryController.deleteSubCategory);

router.patch('/update/:id', SubCategoryController.updatecategory);

module.exports = router;