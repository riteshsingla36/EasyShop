const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user',
            unique: true,
        },
        total: {
            type: Number,
            trim: true,
            default: 0
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("cart", cartSchema);