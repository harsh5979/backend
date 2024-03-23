const express = require('express');
const authcontroller = require('../controller/authcontroller');
const router = express.Router();
const middleware = require('../middleware/authmiddleware')


// Router:1  home page  get : "/auth/api/ " 
router.route("/").post(authcontroller.home);

// Router:2   login page  request post :"/auth/api/login"
router.route("/login").post(authcontroller.login);

// Router:3   get user   request post :"/auth/api/getuser"
router.post('/getuser', middleware, authcontroller.getuser);










module.exports = router; 