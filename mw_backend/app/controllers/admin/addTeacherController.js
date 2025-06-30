let express = require('express');
let teacherData = require('../../models/teacher_data.model');

let addTeacher = async (req, res) => {
    try {
        const {
            name,
            email,
            phoneNumber,
            img_link,
            subject,
            experience
        } = req.body;

        let user = new teacherData({
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            img_link: img_link,
            subject: subject,
            experience: experience
        });

        await user.save();

        res.send({
            status: true,
            message: "Data inserted successfully"
        });

    } catch (err) {
        console.error(err);
        res.status(500).send({
            status: false,
            message: "Error inserting data hhhhhh",
            error: err.message
        });
    }
}


module.exports = {
    addTeacher
};