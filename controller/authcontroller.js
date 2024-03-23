const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// register page .....
const home = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // user exist check.........
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "Email id is already exist!!.." });
        }
        // hash password create....
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // new user creating.......
        const usercreate = await User.create({ name, email, password: hashPassword });

        // jwt token creating
        const data = {
            usercreate: {
                id: usercreate.id
            }
        }
        const authtoken = await jwt.sign(data, process.env.jwt_key);


        return res.status(200).json({ successfull: "true", authtoken })

    } catch (error) {
        return res.status(500).json({ message: "internal server error." });

    }
}
//logic of  login page 
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // check user exist or not 
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(400).json({ error: "Please try to login with correct credentials" })

        }
        // comparePassword...
        const comparePassword = await bcrypt.compare(password, userExist.password);
        if (!comparePassword) {
            return res.status(400).json({ error: "Please try to login with correct password.." })

        }
        // jwt token creating
        const data = {
            usercreate: {
                id: userExist.id
            }
        }
        const authtoken = await jwt.sign(data, process.env.jwt_key);


        res.status(200).json({ message: "login is successfull...", authtoken: authtoken });




    } catch (error) {
        return res.status(500).json({ message: "internal server error." });

    }
}

// get user data...
const getuser = async (req, res) => {

    // request id 
    const userId = req.user.id;
    const user = await User.findById(userId).select('-password');

    if (!user) {
        res.status(400).json({ message: "user not found" });

    }
    res.json(user)

}

module.exports = { home, login, getuser };