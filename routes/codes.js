const express = require("express");
const Code = require("../models/code");
const Question = require("../models/question");
const router = express();

router.get('/', async (req, res) => {
    const code = await Code.find();
    res.send(code);
});

router.post("/", async (req, res) => {
    let question = await Question.findById(req.body.questionId);
    console.log(question);

    if (!question) {
        return res.status(400).send("Invalid Question ID");
    }

    let code = new Code({
        code: {
            _id: question._id,
            problem: question.problem,
            sampleInput: question.sampleInput,
            sampleOutput: question.sampleOutput,
        },
        count: 0
    });

    code = await code.save();
    res.send(code);
});

module.exports = router;