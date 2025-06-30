let teaacher_data = require('../../models/teacher_data.model');

let deleteTeacherController = async (req, res) => {
    try {
        const _id = req.body._id;

        // Check if the teacher exists
        const teacher = await teaacher_data.findOne({ _id: _id });
        if (!teacher) {
            return res.status(404).json({
                status: false,
                message: "Teacher not found"
            });
        }

        // Delete the teacher
        await teaacher_data.deleteOne({ _id: _id });

        res.status(200).json({
            status: true,
            message: "Teacher deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
}

module.exports = {
    deleteTeacherController
}