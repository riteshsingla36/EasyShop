const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

    products: [{
        type: Object,
    }],

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },

    paymentStatus: {
        type: String,
        enum: ['FAILED', 'CAPTURED', 'SETTLED', 'TRANSFERRED', 'NONE'],
        default: 'CAPTURED',
    },

    total: {
        type: Number,
        required: true,
    },

    status: {
        type: String,
        enum: ['DELIVERED', 'CANCELLED', 'EXPIRED', 'PENDING', 'CONFIRMED', 'PACKED', 'SHIPPED'],
        default: 'PENDING',
    },

    deliveryStatus: {
        type: String,
        enum: ['CANCELLED', 'DELIVERED', 'PENDING', 'CONFIRMED', 'EXPIRED', 'INTRANSIT'],
        default: 'PENDING',
    },

    paymentDetails: [{
        type: Object,
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