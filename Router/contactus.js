const express = require('express')
const router = express.Router()
const contactController = require('../controller/contactController')
const middleware = require('../middleware/authmiddleware')

router.post('/contact', middleware, contactController.contactUs)



module.exports = router;