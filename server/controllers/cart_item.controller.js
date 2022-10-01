const CartItem = require('../models/cart_item.model');

const getCartItem = async (req, res) => {
    let q = {}
    if (req.query.cart) {
        q["cart"] = req.query.cart;
    }
    try {
        const cartItems = await CartItem.find(q).populate("product");
        res.json({ status: true, data: cartItems });
    }
    catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const createCartItem = async (req, res) => {
    const product = req.body.product;
    const user = req.body.user;
    const quantity = req.body.quantity || 1;

    try {
        const cartItem = await CartItem.create({product: product, quantity: quantity, user: user});
        res.json({ status: true, data: cartItem });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const deleteAllCartItems = async (req, res) => {
    try {
        const cartItems = await CartItem.deleteMany({ cart: req.params.cartid });
        res.json({ status: true, data: cartItems });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const deleteCartItem = async (req, res) => {
    try {
        const cartItem = await CartItem.findByIdAndDelete({ cart: req.params.id });
        res.json({ status: true, data: cartItem });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const updateCartItem = async (req, res) => {
    try {
        const cartItem = await CartItem.findByIdAndUpdate({ cart: req.params.id }, req.body);
        res.json({ status: true, data: cartItem });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

module.exports = {getCartItem, createCartItem, updateCartItem, deleteCartItem, deleteAllCartItems};
