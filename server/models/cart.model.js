const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        },
        products: [
            {
                productId: String,
                quantity: Number,
            }
        ],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("cart", cartSchema);