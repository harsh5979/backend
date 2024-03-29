require('dotenv').config()
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = 3000;
const cors =require('cors');


const authRouter = require('./Router/authrouter');
const userRouter = require('./Router/userrouter');
const connectdb = require('./db');

app.use(cors());
app.use(bodyparser.json());


// router is hear
app.use("/auth/api", authRouter);
app.use("/user/api", userRouter);

// connectdb ......
app.listen(port, (req, res) => {
      connectdb();

    console.log(`the server run in port :${port}`)
});





