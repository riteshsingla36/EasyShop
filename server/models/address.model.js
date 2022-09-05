const mongoose = require("mongoose")

const addressSchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    flat_no: {
        type: String,
        trim: true,
        required: true,
    },
    area: {
        type: String,
        trim: true,
        required: true,
    },
    city: {
        type: String,
        trim: true,
        required: true,
    },
    state: {
        type: String,
        trim: true,
        required: true,
    },
    pincode: {
        type: Number,
        trim: true,
        max: 999999,
        required: true,
    },
    mobile: {
        type: Number,
        trim: true,
        max: 9999999999,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }
},
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model("address", addressSchema)

