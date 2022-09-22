const express = require('express');
const router = express.Router();
const OnBoarding = require('../controllers/onboarding.controller');
const upload = require("../middlewares/cloudinary");

router.post('/login', OnBoarding.loginHandler);

router.post('/signup', upload.single('profileImage'),OnBoarding.signUpHandler);

module.exports = router;