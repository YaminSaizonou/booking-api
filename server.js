const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', (req, res) => {
    res.send('Hello, world!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});