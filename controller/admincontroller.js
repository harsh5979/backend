const User = require('../models/User')
const Contact = require('../models/Contact')
const Addpractical = require('../models/Addpractical')

const allUser = async (req, res) => {

    const alluser = await User.find({}, { password: 0 });
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
const practicals = async (req, res) => {

    const pdata = req.body;
    const data = await Addpractical.create(pdata)
    // console.log(pdata)

    res.send(pdata)

}
const fetchPracticals = async (req, res) => {
   

    const practical = await Addpractical.find({"set":req.params.pr});
    const data = await practical;

    // res.json({data});
    res.send(data)

}

module.exports = { allUser, contact, practicals,fetchPracticals }