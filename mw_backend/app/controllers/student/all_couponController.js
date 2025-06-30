let coupons_data_model = require('../../models/coupons_data.model');

let all_coupon = async (req,res)=>{

    let coupons = await coupons_data_model.find();
    res.send(
        coupons
    );
}

module.exports = {
    all_coupon
}