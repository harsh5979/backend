const adminmiddleware = async (req, res, next) => {


    try {

        const Isadmin = req.user.admin;
        if (!Isadmin) {
            return res.send(401).json({ message: "Access denied . user is not an admin" })

        }


        next();
    } catch (error) {
        return res.status(401).json({ error: "Please authenticate using valid credentials" });


    }

}
module.exports = adminmiddleware;