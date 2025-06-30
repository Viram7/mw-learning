let teacher_data = require('../../models/teacher_data.model');

let editTeacher = async (req, res) => {
    try {
        const {
            _id,
            name,
            email,
            phoneNumber,
            img_link,
            subject,
            experience
        } = req.body;

        let user = await teacher_data.findById(_id);
        if (!user) {
            return res.status(404).send({
                status: false,
                message: "Teacher not found"
            });
        }

        user.name = name;
        user.email = email;
        user.phoneNumber = phoneNumber;
        user.img_link = img_link;
        user.subject = subject;
        user.experience = experience;

        await user.save();

        res.send({
            status: true,
            message: "Data updated successfully"
        });

    } catch (err) {
        console.error(err);
        res.status(500).send({
            status: false,
            message: "Error updating data",
            error: err.message
        });
    }
}

module.exports = {
    editTeacher
};