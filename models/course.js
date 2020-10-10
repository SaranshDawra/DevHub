const Joi = require("joi");
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 40,
        },
        tags: {
            type: Array,
            required: true,
        },
        description: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 70,
        },
        link: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 255,
        },
        level: {
            type: String,
            required: true,
            minlength: 3,
            maxlength: 50,
        },
    },
    { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

function validateCourse(course) {
    const schema = Joi.object({
        title: Joi.string().min(3).max(40).required(),
        tags: Joi.array().required(),
        description: Joi.string().min(3).max(70).required(),
        link: Joi.string().min(3).max(255).required(),
        level: Joi.string().min(3).max(50).required(),
    });

    return schema.validate(course);
}

module.exports.Course = Course;
module.exports.validateCourse = validateCourse;
