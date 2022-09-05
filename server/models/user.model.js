const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const userSchema = moongoose.Schema({
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
        default: 'https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg'
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
        timeStamp: true,
    }
)

module.exports = mongoose.model('user', userSchema);