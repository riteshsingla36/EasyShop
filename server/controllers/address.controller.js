const express = require('express');
const AddressSchema = require('../models/address.model');

const getAddresses = async (req, res) => {
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
        res.json({status: true, data: address});
    }
    catch (err) {
        res.json({status: false, data: err.message});
    }
};

const updateAddress = async (req, res) => {
    try {
        const address = await AddressSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json({status: true, data: address});
    }
    catch (err) {
        res,json({status: false, data: err.message});
    }
};

const createAddress = async (req, res) => {
    try {
        const address = await AddressSchema.create(req.body)
        res.json({status: true, data: address});
    }
    catch (err) {
        res.json({status: false, data: err.message});
    }
};

const deleteAddress = async (req, res) => {
    try {
        const address = await AddressSchema.findByIdAndDelete(req.params.id)
        res.json({status: true, data: address});
    }
    catch (err) {
        res.json({status: false, data: err.message});
    }
};

module.exports = {getAddresses, getAddressById, updateAddress, createAddress, deleteAddress};