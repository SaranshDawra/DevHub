const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const courses = require("./routes/courses");
const jobs = require("./routes/jobs");
const questions = require("./routes/questions");
const codes = require("./routes/codes");
const dailyCode = require("./cronjob");
const path = require('path');
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());

const uri = process.env.MONGODB_URI;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    })
    .then(() => {
        console.log("MongoDB Connected.")
        dailyCode();
    })
    .catch((err) => console.log(err));

app.use("/api/courses", courses);
app.use("/api/jobs", jobs);
app.use("/api/questions", questions);
app.use("/api/codes", codes);

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
