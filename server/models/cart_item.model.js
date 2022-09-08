const mongoose = require("mongoose")


const cartItemSchema = mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
        required: true
    },
    quantity: {
        type: Number,
        min: [1, "quantity has to be greater than or equal to 1"],
        default: 1
    },
    cart: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "cart",
        required: true
    }
},
    {
        timestamps: true,
        versionKey: false
    }
);

module.exports = mongoose.model("cartitem", cartItemSchema)