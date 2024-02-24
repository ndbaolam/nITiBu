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
    stock: Number,
    video: String,  
    thumbnail: String,
    status: Boolean,
    position: Number,
    deleted: Boolean
}, {
    timestamps: true
});

const Course = mongoose.model("Course", courseSchema, "courses");

module.exports = Course;