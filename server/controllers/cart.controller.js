const express = require('express');
const Cart = require('../models/cart.model');

const getCart = async (req, res) => {
    var q = {};
    if (req.query.user) {
        q["user"] = req.query.user;
    }
    try {
        const cart = await Cart.findOne(q);
        res.json({ status: true, data: cart });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const deleteCart = async (req, res) => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id);
        res.json({ status: true, data: cart });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const createCart = async (req, res) => {
    try {
        const cart = await Cart.create(req.body);
        res.json({ status: true, data: cart });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

const updateCart =async (req, res) => {
    try {
        const cart = await Cart.findOneAndUpdate(req.params.id, req.body, { new: true });
        res.json({ status: true, data: cart });
    } catch (err) {
        res.json({ status: false, message: err.message });
    }
};

module.exports = {getCart, deleteCart, createCart, updateCart };