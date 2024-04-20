const express = require('express')
const router = express.Router();
const middleware = require('../middleware/authmiddleware')
const admincontroller = require('../controller/admincontroller');

router.get('/userpanel', middleware, admincontroller.allUser);
router.get('/contactpanel', middleware, admincontroller.contact);


module.exports = router;
