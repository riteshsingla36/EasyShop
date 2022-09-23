const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE', 'OTHER'],
        required: true
    },
    phoneNo : {
        type: Number,
        max: 9999999999,
        trim: true,
        unique: true,
        required: true,
    },
    profileImage: {
        type: String,
        trim: true,
        default: 'https://svgsilh.com/svg/659651.svg'
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    isActive: {
        type: Boolean,
        default: true,
    }
},
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model('user', userSchema);