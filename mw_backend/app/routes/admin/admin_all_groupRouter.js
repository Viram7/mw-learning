let admin_all_groupRouter = require('express').Router();
let {admin_all_groupController} = require('../../controllers/admin/admin_all_groupController');


admin_all_groupRouter.get('/all_groups', admin_all_groupController);

module.exports = admin_all_groupRouter;
