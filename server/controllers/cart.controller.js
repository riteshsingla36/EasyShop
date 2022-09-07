const express = require('express');
const CartSchema = require('../models/cart.model');

const getCart = async (req, res) => {
    var q = {};
    if (req.query.user) {
        q["user"] = req.query.user;
    }
    try {
        const cart = await CartSchema.findOne(q);
        res.json({ status: true, data: cart });
    } catch (err) {
        res.json({ status: false, error: err });
    }
};

const deleteCart = async (req, res) => {
    try {
        const cart = await CartSchema.findByIdAndDelete(req.params.id);
        res.json({ status: true, data: cart });
    } catch (err) {
        res.json({ status: false, error: err });
    }
};

const createCart = async (req, res) => {
    try {
        const cart = await CartSchema.create(req.body);
        res.json({ status: true, data: cart });
    } catch (err) {
        res.json({ status: false, error: err });
    }
};

const updateCart =async (req, res) => {
    try {
        const cart = await CartSchema.findOneAndUpdate(req.params.id, req.body, { new: true });
        res.json({ status: true, data: cart });
    } catch (err) {
        res.json({ status: false, error: err });
    }
};

module.exports = {getCart, deleteCart, createCart, updateCart };