const express = require('express');
const router = express.Router();
const middleware = require('../middleware/authmiddleware');
const todocontroller = require('../controller/todocontroller');


// Router:4   add todos   request post :"/user/api/addtodo"
router.post('/addtodo', middleware, todocontroller.addtodo);

// Router:5   fetch all todos   request get :"/user/api/fetchtodo"
router.get('/fetchtodo', middleware, todocontroller.fetchtodo);

// Router:6   update existing  todos   request put :"/user/api/updatetodo"
router.put('/updatetodo/:id', middleware, todocontroller.updatetodo);

// Router:7   update existing  todos   request put :"/user/api/updatetodo"
router.delete('/deletetodo/:id', middleware, todocontroller.deletetodo);



module.exports = router;