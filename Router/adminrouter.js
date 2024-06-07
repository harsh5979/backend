const express = require('express')
const router = express.Router();
const middleware = require('../middleware/authmiddleware')
const adminmiddleware = require('../middleware/adminmiddleware')
const admincontroller = require('../controller/admincontroller');

router.get('/userpanel', middleware,adminmiddleware, admincontroller.allUser);
router.delete('/du/:id', middleware, admincontroller.DeleteUser);
router.get('/contactpanel', middleware,adminmiddleware, admincontroller.contact);
router.delete('/cu/:id', middleware, admincontroller.DeleteContact);
router.get('/fetchPracticals/:pr', admincontroller.fetchPracticals);
router.post('/addpractical',  admincontroller.practicals);


module.exports = router;
