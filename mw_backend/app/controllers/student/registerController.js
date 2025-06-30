const userData = require('../../models/user_data.model');
const express = require('express');

const dataInsert = async (req, res) => {
    try {
        const name = req.body.name.toLowerCase();
        const email = req.body.email.toLowerCase();
        const phoneNumber = req.body.phoneNumber;

        // ✅ Use await + findOne
        const check_user = await userData.findOne({ phoneNumber: phoneNumber });
        console.log(req.body);

        if (!check_user) {
            const user = new userData({
                name,
                email,
                phoneNumber,
            });

            await user.save(); // ✅ wait for save
            return res.send({
                status: true,
                message: "Data inserted successfully",
            });
        } else {
            return res.status(409).send({ // 409 = Conflict
                status: false,
                message: "User already exists",
            });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).send({
            status: false,
            message: "Error inserting data",
            error: err.message
        });
    }
};

module.exports = {
    dataInsert
};
