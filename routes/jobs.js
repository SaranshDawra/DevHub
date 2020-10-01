const { default: Axios } = require('axios');
const express = require('express');
const axios = require('axios');
const router = express();

router.get('/', async (req, res) => {
    const job = await axios.get('https://jobs.github.com/positions.json?');
    const data = await job.data;

    res.send(data);
});

module.exports = router;