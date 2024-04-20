const contact = require('../models/Contact')

const contactUs = async (req, res) => {
    try {

        const { username, email, message } = req.body;

        const createNewContact = await contact.create({ username, email, message })
        // console.log(req.body)
        res.send(createNewContact)

    } catch (error) {
        res.send(error)
    }

}


module.exports = { contactUs };