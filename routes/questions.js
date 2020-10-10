const express = require("express");
const Question = require("../models/question");
const router = express();

router.get("/", async (req, res) => {
    const questions = await Question.find();
    res.send(questions);
});

router.post("/", async (req, res) => {
    let question = new Question({
        problem: req.body.problem,
        sampleInput: req.body.sampleInput,
        sampleOutput: req.body.sampleOutput,
    });

    question = await question.save();
    res.send(question);
});

module.exports = router;