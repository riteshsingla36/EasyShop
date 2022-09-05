const { default: mongoose } = require('mongoose');
const moongoose = require('mongoose');

const productSchema = moongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
        trim: true,
        required: true
    },
    stock: {
        type: Number,
        trim: true,
        required: true
    },
    category:{
        type: String,
        trim: true,
        required: true,
    },
    subCategory: {
        type: String,
        trim: true,
        required: true,
    },
    description: {
        type: String,
        trim: true,
    },
    images: [{
        type: String,
        trim: true,
        default: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
    }]

},
    {
        versionKey: false,
        timeStamp: true,
    }
)

module.exports = mongoose.models('product', productSchema);
