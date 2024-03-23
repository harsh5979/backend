const express = require('express');
const router = express.Router();
const middleware = require('../middleware/authmiddleware');
const usercontroller = require('../controller/usercontroller');


// Router:4   add notes   request post :"/user/api/addnote"
router.post('/addnote', middleware, usercontroller.addnote);

// Router:5   fetch all notes   request get :"/user/api/fetchnote"
router.get('/fetchnote', middleware, usercontroller.fetchnote);

// Router:6   update existing  notes   request put :"/user/api/updatenote"
router.put('/updatenote/:id', middleware, usercontroller.updatenote);

// Router:7   update existing  notes   request put :"/user/api/updatenote"
router.delete('/deletenote/:id', middleware, usercontroller.deletenote);



module.exports = router;