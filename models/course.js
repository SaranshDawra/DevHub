const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    tags: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    link: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    language: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    level: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    }
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
