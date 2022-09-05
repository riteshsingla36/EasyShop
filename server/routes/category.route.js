const express = require('express');
const categoryController = require('../controllers/category.controller');
const router = express.Router();

router.get('/', categoryController.getAllCategories);

router.get('/:id', categoryController.getCategoryById);

router.post('/create', categoryController.createCategory);

router.delete('/delete/:id', categoryController.deleteCategory);

router.patch('/update/:id', categoryController.updateCategory);

module.exports = router;