let adminRegisterRouter = require('express').Router();
let { adminRegister } = require('../../controllers/admin/adminRegisterController.js');

adminRegisterRouter.post('/register', adminRegister);

module.exports = adminRegisterRouter;