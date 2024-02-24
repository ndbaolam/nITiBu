const mongoose = require("mongoose");
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);

const courseSchema = new mongoose.Schema({
    slug: { 
        type: String, 
        slug: "title",
        unique: true
    },
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    stock: Number,  
    thumbnail: String,
    status: String,
    position: Number,
    deleted: Boolean
}, {
    timestamps: true
});

const Course = mongoose.model("Course", courseSchema, "courses");

module.exports = Course;