const express = require('express');
const CartController = require('../controllers/cart.controller');
const router = express.Router();

router.get('/:id', CartController.getCart);

router.delete('/delete/:id', CartController.deleteCart);

router.post('/create/:id', CartController.createCart);

router.patch('/update/:id', CartController.updateCart);

module.exports = router;