const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema(
    {
        problem: {
            type: String,
            required: true,
        },
        sampleInput: {
            type: Array,
            required: true,
        },
        sampleOutput: {
            type: Array,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
