const User = require('../models/User')
const Contact = require('../models/Contact')

const allUser = async (req, res) => {

    const alluser = await User.find();
    const data = await alluser;

    res.json(data);
    // res.status(200).json({ msg: "Welcome to our home page",data:data })

}

const contact = async (req, res) => {

    const allcontact = await Contact.find();
    const data = await allcontact;

    // res.json({data});
    res.send(data)
}

module.exports = { allUser,contact }