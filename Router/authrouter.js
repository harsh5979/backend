const express = require('express');
const authcontroller = require('../controller/authcontroller');
const router = express.Router();
const middleware = require('../middleware/authmiddleware')


// Router:1  home page  get : " / " 

router.route("/").post(authcontroller.home);
router.route("/login").post(authcontroller.login);
// Router:2  
router.post('/getuser',middleware,authcontroller.getuser);
router.post('/getuser',middleware,authcontroller.getuser);








module.exports = router; 