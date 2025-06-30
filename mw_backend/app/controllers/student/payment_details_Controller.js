let payment_datails_data_model = require('../../models/payment_details.model');

let payment_details = async (req,res)=>{
    let paymentDetails = await payment_datails_data_model.find({user_id:req.body.user_id});
    if(!paymentDetails){
        return res.status(404).send({status:false,message:"Payment details not found"});
    } else {
        return res.status(200).send({status:true,message:"Payment details found", paymentDetails: paymentDetails});
    }
}

module.exports = {
    payment_details
}