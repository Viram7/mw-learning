let express = require('express');

let teacherData = require('../../models/teacher_data.model');

let allTeacher = async (req, res) => {
    try {
        let teacher = await teacherData.find(); 
        res.send(teacher);
    } catch (err) {
        console.error(err);     
        res.status(500).send({
            status: false,
            message: "Error fetching data all teacher",
            error: err.message
        });
    }   
}

module.exports = {
    allTeacher
}