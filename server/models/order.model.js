const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

    products: [{
        type: Object,
    }],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    paymentStatus: {
        type: String,
        enum: ['FAILED', 'CAPTURED', 'SETTLED', 'TRANSFERRED'],
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
        default: 'PENDING',
    },

    deliveryStatus: {
        type: String,
        enum: ['CANCELLED', 'DELIVERED', 'PENDING', 'CONFIRMED', 'EXPIRED'],
        default: 'PENDING',
    },

    paymentDetails: [{
        type: Object,
        required: true
    }],

    paymentDate: {
        type: Timestamps,
        default: Date.now,
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