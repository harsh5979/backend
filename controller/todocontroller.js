const Todos = require('../models/Todos')

// adding a todos for user....
const addtodo = async (req, res) => {
    try {
        const { title } = req.body;

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        if (title !== null) {

            const todos = await Todos.create({
                title, user: req.user.id, date: formattedDate
            })


            res.status(200).json({ message: "successfull add todos", todos: todos })
        }
    } catch (error) {
        return res.status(500).json({ message: "internal server error." });

    }

}
// fetch all todo to user
const fetchtodo = async (req, res) => {
    try {
        // check todo is empty or not..
        const todo = await Todos.find({ user: req.user.id })
        if (!todo) {
            return res.status(400).json({ messsage: "todo not found" })

        }
        res.json(todo)

    } catch (error) {
        return res.status(500).json({ message: "internal server error." });

    }
}

// update existing todo....
const updatetodo = async (req, res) => {
    try {
        // request body to fetch  data
        const { title } = req.body;

        // newtodo array 
        let newtodo = {};
        if (title) { newtodo.title = title };


        // if todo existing check 
        let todo = await Todos.findById(req.params.id);
        if (!todo) {
            return res.status(400).send("todo not found")
        }
        // verify user allowed or not 
        if (todo.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed!!!")

        }

        // then update todo...... 
        todo = await Todos.findByIdAndUpdate(req.params.id, { $set: newtodo }, { new: true });
        return res.json({ messsage: "successfully updated..", todo: todo })


    } catch (error) {
        return res.status(500).json({ message: "internal server error." });

    }
}
// deleting existing todo
const deletetodo = async (req, res) => {
    try {

        // find the todo to delete
        let todo = await Todos.findById(req.params.id);
        if (!todo) {
            return res.status(400).send("todo not found")
        }

        // allow delation only if user todos 
        if (todo.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed!!!")

        }
        // delete the todo.....
        todo = await Todos.findByIdAndDelete(req.params.id);
        return res.status(200).json({ message: "successfully delete todo.." })


    } catch (error) {
        return res.status(500).json({ message: "internal server error." });

    }
}



module.exports = { addtodo, fetchtodo, updatetodo, deletetodo };