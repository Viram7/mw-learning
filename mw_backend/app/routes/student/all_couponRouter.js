let all_couponRouter = require('express').Router();
let {all_coupon} = require('../../controllers/student/all_couponController');

all_couponRouter.get('/all_coupons',all_coupon);


module.exports = all_couponRouter ;