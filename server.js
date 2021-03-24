//install dependencies
const path = require('path');
const dotenv = require('dotenv'); 
dotenv.config()
const express = require('express');
const cors = require('cors');
const fetch = require("node-fetch");

//initialize
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

console.log(__dirname)

app.use(express.static('dist'));

//start up server
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/dist/index.html'))
});

app.post('/analysis', async(req, res) => {
    //base api url, key and user provided url
    const baseURL = 'http://api.meaningcloud.com/sentiment-2.1?key=';
    const key = process.env.API_KEY;
    const url = req.body.input;

    let link = baseURL + key + '&lang=en&url=' + url;

    const response = await fetch(link)
    try {
        const info = await response.json()
        res.send(info)
    } catch(err) {
        console.log(err)
    }

})