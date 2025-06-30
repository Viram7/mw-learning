let express = require('express');
let {coupons} = require('../../controllers/admin/couponsSetController');
let coupons_router = express.Router();

coupons_router.post('/add_coupons',coupons);

module.exports =     coupons_router
