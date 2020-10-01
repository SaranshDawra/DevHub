const express = require("express");
const mongoose = require("mongoose");
const courses = require('./routes/courses');
const jobs = require('./routes/jobs');
require("dotenv").config();
const app = express();

app.use(express.json());

const uri = process.env.MONGODB_URI;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => console.log("MongoDB Connected."))
    .catch((err) => console.log(err));

app.use('/api/courses', courses);
app.use('/api/jobs', jobs);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
