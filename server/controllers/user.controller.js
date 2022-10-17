const User = require("../models/user.model")

// to show all users to admin
const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json({status: true, data: users});
    }
    catch(e) {
        res.json({status: false, message: e.message});
    }
}

// to get single user details to show to admin or to show in profile page
const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json({status: true, data: user});
    }
    catch(e) {
        res.json({status: false, message: e.message});
    }
}

// to update the details of user by the himself or to block the user by admin
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