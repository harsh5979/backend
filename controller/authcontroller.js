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
                id: usercreate.id,
                admin: usercreate.isadmin
            }
        }
        const authtoken = await jwt.sign(data, process.env.jwt_key);


        return res.status(200).json({ message: "Registation is successfull", authtoken })

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
                id: userExist.id,
                admin: userExist.isadmin
            }
        }
        const authtoken = await jwt.sign(data, process.env.jwt_key);


        res.status(200).json({ message: "Login is successfull...", authtoken: authtoken });




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

const changepassword = async (req, res) => {
    const { userId, currentPassword, newPassword } = req.body;

    try {
        // Find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Verify the current password
        const isMatch = await bcrypt.compare(currentPassword, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Current password is incorrect' });
        }

        // Hash the new password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);

        // Update the user's password in the database
        user.password = hashedPassword;
        await user.save();

        res.status(200).json({ message: 'Password changed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}


module.exports = { home, login, getuser, changepassword };