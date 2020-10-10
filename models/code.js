const mongoose = require("mongoose");

const codeSchema = new mongoose.Schema({
    code: {
        type: new mongoose.Schema({
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
        }),
    },
    count: {
        type: Number,
    }
});

const Code = mongoose.model("Code", codeSchema);

module.exports = Code;
