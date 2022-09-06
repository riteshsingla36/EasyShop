const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

    products: [{
        type: Object,
        ref: 'Product',
        required: true
    }],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    paymentStatus: {
        type: String,
        enum: ['FAILED', 'CAPTURED', 'SETTLED', 'TRANSFERED'],
        required: true,
        default: 'CAPTURED',
    },

    total: {
        type: Number,
        required: true,
        default: 0
    },

    status: {
        type: String,
        enum: ['DELIVERED', 'CANCELLED', 'EXPIRED', 'PENDING', 'CONFIRMED'],
        required: true,
        default: 'PENDING',
    },

    deliveryStatus: {
        type: String,
        enum: ['CANCELLED', 'DELIVERED', 'PENDING', 'CONFIRMED', 'EXPIRED'],
        required: true,
        default: 'PENDING',
    },

    paymentDetails: {
        type: Object,
        required: true
    },

    paymentDate: {
        type: Date,
        required: true
    },

    deliveryAddress: {
        type: String,
        trim: true,
        required: true
    },

},
    {
        versionKey: false,
        timestamps: true,
    }
);

module.exports = mongoose.model('order', orderSchema); 