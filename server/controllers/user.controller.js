const User = require("../models/user.model")

const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json({status: true, data: users});
    }
    catch(e) {
        res.json({status: false, message: e.message});
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json({status: true, data: user});
    }
    catch(e) {
        res.json({status: false, message: e.message});
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json({status: true, data: user});
    }
    catch(e) {
        res.json({status: false, message: e.message});
    }
}


module.exports = {getUsers, getUser, updateUser};