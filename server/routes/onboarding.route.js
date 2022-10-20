const express = require('express');
const router = express.Router();
const OnBoarding = require('../controllers/onboarding.controller');
const upload = require("../middlewares/cloudinary");

router.post('/login', OnBoarding.loginHandler);

router.post('/signup', upload.single('profileImage'),OnBoarding.signUpHandler);

router.post('/reset-password', OnBoarding.resetPasswordHandler);

router.post('/reset-now', OnBoarding.resetPasswordNow);

router.post('/verify', OnBoarding.verifyUser);

router.get('/logout', OnBoarding.logout);

module.exports = router;