const express = require('express')
const app = express()
const port = 3000
const router = require('./router')

app.use('/quote', router);
app.set('view engine', 'pug');

app.listen(port, () => {
    console.log(`Let's see ${port}`)
});