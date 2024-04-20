const Note = require('../models/Notes')

// adding a notes for user....
const addnote = async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        const currentDate = new Date();
        const formattedDate = currentDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        if (title !== null && description !== null && tag !== null) {

            const notes = await Note.create({
                title, description, tag, user: req.user.id, date: formattedDate
            })


            res.status(200).json({ message: "successfull add notes", notes: notes })
        }
        // res.send("notes")
    } catch (error) {
        return res.status(500).json({ message: "internal server error." });

    }

}
// fetch all note to user
const fetchnote = async (req, res) => {
    try {
        // check note is empty or not..
        const note = await Note.find({ user: req.user.id })
        if (!note) {
            return res.status(400).json({ messsage: "note not found" })

        }
        res.json(note)

    } catch (error) {
        return res.status(500).json({ message: "internal server error." });

    }
}

// update existing note....
const updatenote = async (req, res) => {
    try {
        // request body to fetch  data
        const { title, description, tag } = req.body;

        // newnote array 
        let newnote = {};
        if (title) { newnote.title = title };
        if (description) (newnote.description = description);
        if (tag) { newnote.tag = tag };

        // if note existing check 
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(400).send("note not found")
        }
        // verify user allowed or not 
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed!!!")

        }

        // then update note...... 
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newnote }, { new: true });
        res.json({ "messsage": "successfully updated..", note: note })


    } catch (error) {
        return res.status(500).json({ message: "internal server error." });

    }
}
// deleting existing note
const deletenote = async (req, res) => {
    try {

        // find the note to delete
        let note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(400).send("note not found")
        }

        // allow delation only if user nots 
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("not allowed!!!")

        }
        // delete the note.....
        note = await Note.findByIdAndDelete(req.params.id);
        res.json({ "messsage": "successfully deleted.." })


    } catch (error) {
        return res.status(500).json({ message: "internal server error." });

    }
}



module.exports = { addnote, fetchnote, updatenote, deletenote };