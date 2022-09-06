const moongoose = require('mongoose');

const subCategorySchema = mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    category: {
        type: moongoose.Schema.Types.ObjectId,
        ref: 'category',
    }
},
    {
        versionKey: false,
        timestamps: true,
    }
)

module.exports = moongoose.model("subcategory", subCategorySchema);