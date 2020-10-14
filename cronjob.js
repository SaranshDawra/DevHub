const Code = require("./models/code");
const Question = require('./models/question');
const cronJob = require("node-cron");

const dailyCode = () => {
    cronJob.schedule("0 0 * * * ", async () => {
        const code = await Code.find();
        const questions = await Question.find();
        const question = questions[ (code[0].count + 1) % questions.length];
        await Code.findByIdAndUpdate(
            code[0]._id,
            {
                code: question,
                count: (code[0].count + 1) % questions.length
            },
            { new: true }
        );
        console.log('Job Completed');
    });
};

module.exports = dailyCode;
