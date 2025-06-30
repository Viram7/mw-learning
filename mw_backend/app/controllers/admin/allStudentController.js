let user_data_model = require("../../models/user_data.model");


let allStudentController = async (req, res) => {
    try {
        // Fetch all students
        let students = await user_data_model.find();

        if (students.length === 0) {
            return res.status(404).send({
                status: false,
                message: "No students found"
            });
        }

        res.send({
            status: true,
            message: "All students retrieved successfully",
            data: students
        });

    } catch (err) {
        console.error(err);
        res.status(500).send({
            status: false,
            message: "Internal Server Error",
            error: err.message
        });
    }
}

module.exports = {
    allStudentController
}
