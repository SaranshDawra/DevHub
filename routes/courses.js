const express = require('express');
const Course = require('../models/course');
const router = express();

router.get('/', async (req, res) => {
    let courses = await Course.find();
    res.send(courses);
});

router.get('/:tag', async (req, res) => {
    const tag = req.params.tag.toLowerCase();
    let courses = await Course.find({
        tags: {
            $in: tag
        }
    });

    res.send(courses);
});

router.post('/', async (req, res) => {
    let course = new Course({
        title: req.body.title,
        tags: req.body.tags,
        description: req.body.description,
        link: req.body.link,
        language: req.body.language,
        level: req.body.level
    });

    course = await course.save();
    res.send(course);
});

module.exports = router;