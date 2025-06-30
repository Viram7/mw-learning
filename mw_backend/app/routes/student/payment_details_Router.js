let {payment_details} = require('../../controllers/student/payment_details_Controller.js');
let express = require('express');
let payment_details_Router = express.Router();

payment_details_Router.post('/payment_details', payment_details);

module.exports = payment_details_Router;
