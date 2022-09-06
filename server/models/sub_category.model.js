const mongoose = require('mongoose');

const subCategorySchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'category',
    }
},
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = mongoose.model("subcategory", subCategorySchema);