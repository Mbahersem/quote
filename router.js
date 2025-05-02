const express = require('express')
const updateRouter = express.Router()
const url = "https://api.api-ninjas.com/v1/quotes"
const apiKey = "KVjeXFqaOfbrykV/64xF3w==EqE3XtZuPKHvWn0x"

updateRouter.get('/', async (req, res) => {
    try {
        const options = {
            method: "GET",
            headers: {
                "X-Api-Key": apiKey,
            },
        }
        let response = await fetch(url, options);
        let data = await response.json();
    
        res.render('index', {quote: data[0].quote, author: data[0].author, category: data[0].category});
    } catch (error) {
        console.error(error);
    }
});

updateRouter.get('/health/live', (req, res) => {
    res.status(200).send('OK');
});

updateRouter.get('/health/ready', async (req, res) => {
    try {
        const options = {
            method: "GET",
            headers: {
                "X-Api-Key": apiKey,
            },
        }
        await fetch(url, options);
        res.status(200).send('Ready');
    } catch (error) {
        res.status(503).send('Unavailable');
    }
});

module.exports = updateRouter;