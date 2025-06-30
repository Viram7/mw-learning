let admin_data = require('../../models/admin_data.model');
let adminLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the admin exists
        let existingAdmin = await admin_data.findOne({ email: email, password: password });
        if (!existingAdmin) {
            return res.status(401).send({
                status: false,
                message: "Invalid email or password"
            });
        }else {
            // Admin found, return success response
            res.send({
                status: true,
                message: "Login successful",
                admin: {
                    _id: existingAdmin._id,
                    name: existingAdmin.name,
                    email: existingAdmin.email,
                    phoneNumber: existingAdmin.phoneNumber,
                    img_link: existingAdmin.img_link
                }
            });
        }   
    }catch (err) {
        console.error(err);
        res.status(500).send({
            status: false,
            message: "Error logging in",
            error: err.message
        });
    }   

}
module.exports = {
    adminLogin
};