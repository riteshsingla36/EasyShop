const User = require('../models/user.model');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const { sendMail } = require('../middlewares/email-sender');

const loginHandler = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.json({ status: false, message: "Email And Password is required" });
    }
    try {
        const user = await User.findOne({ email: email });
        if (!user || !await bcrypt.compare(password, user.password)) {
            return res.json({ status: false, message: "Email or Password is incorrect" });
        }

        if (user.verified === false) {
            return res.json({ status: false, message: "Please Verified Your Account! or Create Another one" });
        }
        if (email === user.email && await bcrypt.compare(password, user.password)) {
            req.session.auth = true;
            req.session.email = user.email;
            res.cookie("email", user.email, { maxAge: 300000 });
            res.cookie("id", user.id, { maxAge: 300000 });
            req.session.save();
            return res.json({ status: true, message: "Login Successfully" });
        }
        else {
            return res.json({ status: false, message: "Email or Password is incorrect" });
        }
    } catch (err) {
        return res.json({ status: false, message: err.message });
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
    const verificationCode = crypto.randomBytes(20).toString('hex');

    if (password.length < 8) {
        return res.json({ status: false, message: "Password too short" });

    }
    if (password !== confirmPassword) {
        return res.json({ status: false, message: 'Passwords & Confirmed Password do not match' });

    }
    if (phoneNo.length !== 10) {
        return res.json({ status: false, message: 'Phone number must be 10 characters long' });

    }
    let user = await User.findOne({ email });

    if (user) {
        return res.json({
            status: false,
            message:
                'Email is already registered. Did you forget the password. Try resetting it.',
        });
    }

    password = await bcrypt.hash(password, 10);
    try {
        const user = await User.create({ name, email, password, gender, phoneNo, profileImage, verificationCode });
        let html = `
        <div>
            <h1>Hello, ${user.name}</h1>
            <p>Please click the following link to verify your account</p>
            <a href="${process.env.DOMAIN}/verify/${user.verificationCode}">Verify Now</a>
        </div>`;

        await sendMail(
            user.email,
            'Verify Account',
            'Please verify Your Account.',
            html
        );

        return res.json({ status: true, data: 'Mail Sent Successfully, Please Verify Your Account' });
    }
    catch (e) {
        return res.json({ status: false, message: e.message });
    }
}

const resetPasswordHandler = async (req, res) => {
    let { email } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
        return res.status(200).json({
            status: false,
            message: 'User with the email is not found.',
        });
    }

    user.resetPasswordToken = crypto.randomBytes(167).toString('hex');
    user.resetPasswordExpiresIn = Date.now() + 36000000;

    await user.save();

    // Sent the password reset Link in the email.
    let html = `
          <div>
              <h1>Hello, ${user.name}</h1>
              <p>Please click the following link to reset your password.</p>
              <p>If this password reset request is not created by your then you can inore this email.</p>
              <a href="${process.env.DOMAIN}/reset-password/${user.resetPasswordToken}">Reset Now</a>
          </div>`;

    console.log(
        `${process.env.DOMAIN}/reset-password?resetToken=${user.resetPasswordToken}`,
        'reset link'
    );

    await sendMail(
        user.email,
        'Reset Password',
        'Please reset your password.',
        html
    );

    return res.status(200).json({
        status: true,
        message: 'Password reset link is sent your email.',
    });
};

const resetPasswordNow = async (req, res) => {
    let { resetPasswordToken, password } = req.body;
    let user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpiresIn: { $gt: Date.now() },
    });
    if (!user) {
        return res.status(401).json({
            status: false,
            message: 'Password reset token is invalid or has expired.',
        });
    }

    user.password = await bcrypt.hash(password, 10);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresIn = undefined;
    await user.save();
    // Send notification email about the password reset successfull process
    let html = `
          <div>
              <h1>Hello, ${user.name}</h1>
              <p>Your password is resetted successfully.</p>
              <p>If this rest is not done by you then you can contact our team.</p>
          </div>
        `;
    await sendMail(
        user.email,
        'Reset Password Successful',
        'Your password is changed.',
        html
    );
    return res.status(200).json({
        status: true,
        message:
            'Your password reset request is complete and your password is reset successfully. Login into your account with your new password.',
    });
};

const verifyUser = async (req, res) => {
    let { verificationCode } = req.body;
    let user = await User.findOne({ verificationCode });

    if (!user) {
        return res.json({
            message: 'Unauthorized access. Invalid verification code',
            status: false,
        });
    }

    user.verified = true;
    user.verificationCode = undefined;
    await user.save();

    return res.json({
        status: true,
        message: 'Hurray! your account is successfully verified.',
    });
};

const logout = (req, res) => {
    res.cookie('connect.sid', '', { expires: new Date(1), path: '/' });
    res.clearCookie('connect.sid', { path: '/' });
    res.redirect('/');
}

module.exports = { loginHandler, signUpHandler, logout, verifyUser, resetPasswordNow, resetPasswordHandler };