let batch_data_model = require('../../models/batch_data.model');
let user_model = require('../../models/user_data.model');
let teacher_model = require('../../models/teacher_data.model');
let payment_model = require('../../models/payment_details.model');
let coupons_model = require('../../models/coupons_data.model');
let chat_message_data_model = require('../../models/chat_data_models/chat_message_data.model');
let chat_group_data_model = require('../../models/batch_group.model');


let alldata = async (req, res) => {

    try {


        let batch = await batch_data_model.find();
        let user = await user_model.find();
        let teacher = await teacher_model.find();
        let payment = await payment_model.find();
        let coupon = await coupons_model.find();
        let chat_message = await chat_message_data_model.find();
        let chat_group = await chat_group_data_model.find();

        res.send({
            status: true,
            message: "Dashboard data retrieved successfully",
            data: {
                batch,
                user,
                teacher,
                payment,
                coupon,
                chat_message,
                chat_group
            }
        });
    } catch (err) {
        console.error(err);
        res.status(500).send({
            status: false,
            message: "Error retrieving dashboard data",
            error: err.message
        });
    }

}


module.exports = {
    alldata
}