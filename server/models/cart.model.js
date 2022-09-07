const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        products: [
            {
                productId: String,
                quantity: Number,
                trim: true,
            }
        ],
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model("Cart", CartSchema);