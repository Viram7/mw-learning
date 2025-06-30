let admin_data = require('../../models/admin_data.model');
let adminRegister = async (req, res) => {
    try {
        const { img_link, name, email, phoneNumber,password } = req.body;

        // Check if the admin already exists
        let existingAdmin = await admin_data.findOne({ email: email });
        if (existingAdmin) {
            return res.status(400).send({
                status: false,
                message: "Admin with this email already exists"
            });
        }

        // Create a new admin data entry
        let newAdmin = new admin_data({
            img_link: img_link,
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            password: password
        });

        await newAdmin.save();

        res.send({
            status: true,
            message: "Admin registered successfully"
        });

    } catch (err) {
        console.error(err);
        res.status(500).send({
            status: false,
            message: "Error registering admin",
            error: err.message
        });
    }
}   

module.exports = {
    adminRegister
};