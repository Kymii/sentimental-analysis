//install dependencies
const path = require('path');
const dotenv = require('dotenv'); 
dotenv.config()
const express = require('require');
const cors = require('cors');
const bodyParser = require('body-parser');

//initialize
const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use(express.static('dist'));

const port = proccess.env.PORT;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

app.get('/', (req, res) => {
    res.sendFile('dist/index.html')
});