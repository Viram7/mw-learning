let mongoose = require('mongoose');
let Schema = mongoose.Schema;
 
        couponSchema = new Schema({
            coupon_code : {
                type: String,
                required :true
            }
        })


        couponSchemaModel = mongoose.model('coupons',couponSchema);

        module.exports = couponSchemaModel;