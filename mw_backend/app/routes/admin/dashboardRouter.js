let dashboardRouter = require('express').Router();
let { dashboardController } = require('../../controllers/admin/dashboardController');

dashboardRouter.get('/dashboard', dashboardController);

module.exports = dashboardRouter;