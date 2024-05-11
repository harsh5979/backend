require('dotenv').config()
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const port = 3000;
const cors = require('cors');


const authRouter = require('./Router/authrouter');
const userRouter = require('./Router/userrouter');
const contact = require('./Router/contactus')
const admin = require('./Router/adminrouter')
const todo =require('./Router/todorouter');
const connectdb = require('./db');

app.use(cors());
app.use(bodyparser.json());


// router is hear
app.use("/auth/api", authRouter);
app.use("/user/api", userRouter);
app.use("/con/api", contact);
app.use("/adminpanel/api", admin);
app.use("/tmko/",todo);

// connectdb ......
app.listen(port, (req, res) => {
  connectdb();

  console.log(`the server run in port :${port}`)
});





