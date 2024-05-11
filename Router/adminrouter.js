const express = require('express')
const router = express.Router();
const middleware = require('../middleware/authmiddleware')
const admincontroller = require('../controller/admincontroller');

router.get('/userpanel', middleware, admincontroller.allUser);
router.get('/contactpanel', middleware, admincontroller.contact);
router.get('/fetchPracticals', admincontroller.fetchPracticals);
router.post('/addpractical',  admincontroller.practicals);


module.exports = router;
