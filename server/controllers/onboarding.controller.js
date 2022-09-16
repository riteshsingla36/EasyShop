const User = require('../models/user.model');

const loginHandler = async (req, res) => {
    const { email, password } = req.body;
    try{
        const user = await User.findOne({email: email});
        if(!user){
            res.json({status: false, message: "Email not Register Please Signup First"});
            return;
        }
        if(email === user.email && password === user.password){
            res.json({status: true, message: "Login Successfully"});
        }else{
            res.json({status: false, message: "Email or Password is incorrect"});
        }
    }catch (err){
        res.json({status: false, message: err.message});
    }
};

const signUpHandler = async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    const gender = req.body.gender;
    const phoneNo = req.body.phoneNo;
    const profileImage = req.file.path;
    if(password.length < 6){
        res.json({status: false, message: "Password too short"});
        return ;
    }
    if(password !== confirmPassword){
        res.json({status: false, message: 'Passwords do not match'});
        return;
    }
    try {
        const user = await User.create({name, email, password, gender,phoneNo, profileImage});

        res.json({status: true, data: user});
    }
    catch(e) {
        res.json({status: false, message: e.message});
    }
}

module.exports = {loginHandler, signUpHandler};