const express = require('express')
const router = express.Router();
const middleware = require('../middleware/authmiddleware')
const adminmiddleware = require('../middleware/adminmiddleware')
const admincontroller = require('../controller/admincontroller');

router.get('/userpanel', middleware,adminmiddleware, admincontroller.allUser);
router.get('/contactpanel', middleware,adminmiddleware, admincontroller.contact);
router.get('/fetchPracticals/:pr', admincontroller.fetchPracticals);
router.post('/addpractical',  admincontroller.practicals);


module.exports = router;
