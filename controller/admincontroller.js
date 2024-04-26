const User = require('../models/User')
const Contact = require('../models/Contact')

const allUser = async (req, res) => {

    const alluser = await User.find({},{password :0});
    const data = await alluser;

    res.json(data);
    // res.status(200).json({ msg: "Welcome to our home page",data:data })
    // return res.status(200).json({ messsage: " found" })


}

const contact = async (req, res) => {

    const allcontact = await Contact.find();
    const data = await allcontact;

    // res.json({data});
    res.send(data)

}

module.exports = { allUser,contact }