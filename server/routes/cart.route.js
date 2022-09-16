const express = require('express');
const cartController = require('../controllers/cart.controller');
const router = express.Router();

router.get('/:id', cartController.getCart);

router.delete('/delete/:id', cartController.deleteCart);

router.post('/create', cartController.createCart);

router.patch('/update/:id', cartController.updateCart);

module.exports = router;