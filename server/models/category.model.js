const moongoose = require('mongoose');

const category = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    }
},
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = moongoose.model("category", category);