const moongoose = require('mongoose');

const categorySchema = moongoose.Schema({
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

module.exports = moongoose.model("category", categorySchema);