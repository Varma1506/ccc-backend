const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');


const app = express();
const dbUrl = "mongodb://localhost/ccc";
const port = 2000;

mongoose.connect(dbUrl);
app.use(bodyParser());


app.listen(port, () => console.log(`server running on port ${port}`));



app.get('/', (req, res) => {
    res.end("It's online!");
});