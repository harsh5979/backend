require('dotenv').config()
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = 3000;


const Router = require('./Router/authrouter');
const connectdb = require('./db');


app.use(bodyparser.json());


// router is hear
app.use("/auth/api", Router);

// connectdb ......
connectdb().then(() => {
    app.listen(port, (req, res) => {

        console.log(`the server run in port :${port}`)
    })

})




