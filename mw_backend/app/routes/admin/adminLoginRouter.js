let adminLoginRouter = require('express').Router();
let { adminLogin } = require('../../controllers/admin/admin_loginController.js');


adminLoginRouter.post('/login', adminLogin);


module.exports = adminLoginRouter;