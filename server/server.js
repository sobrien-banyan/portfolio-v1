const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({path: "./config.env"});
const port = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

const dbo = require("./db/conn");

app.listen(port, () => {
    dbo.connectToServer((err) => {
        if (err) console.error(err);
    });
    console.log(`Sever is running on port ${port}`);
});