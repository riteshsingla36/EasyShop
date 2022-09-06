const express = require('express');
const AddressSchema = require('../models/address.model');

const getAddress = async (req, res) => {
    var q = {};
    if (req.query.user) {
        q["user"] = req.query.user;
    }
    try {
        const addresses = await AddressSchema.find(q).populate('user');
        res.json({status: true, data: addresses});
    }
    catch (err) {
        res.json({status: false, data: err.message});
    }
};

const getAddressById = async (req, res) => {
    try {
        const address = await AddressSchema.findById(req.params.id).populate('user')
        res.json(address)
    }
    catch (err) {
        res.send(err.message)
    }
};

const updateAddress = async (req, res) => {
    try {
        const address = await AddressSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(address)
    }
    catch (err) {
        res.send(err.message)
    }
};

const createAddress = async (req, res) => {
    try {
        const address = await AddressSchema.create(req.body)
        res.json(address)
    }
    catch (err) {
        res.send(err.message)
    }
};

const deleteAddress = async (req, res) => {
    try {
        const address = await AddressSchema.findByIdAndDelete(req.params.id)
        res.json(address)
    }
    catch (err) {
        res.send(err.message)
    }
};

module.exports = {getAddress, getAddressById, updateAddress, createAddress, deleteAddress};