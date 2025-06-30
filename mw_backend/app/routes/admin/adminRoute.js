let admin_route = require('express').Router();
let {alldata} = require('../../controllers/admin/adminController');

admin_route.get('/all_data',alldata);


module.exports = admin_route;