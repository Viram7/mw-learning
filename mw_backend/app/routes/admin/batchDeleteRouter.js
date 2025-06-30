let batchDeleteRouter = require("express").Router();
let { batchDeleteController } = require("../../controllers/admin/batchDeleteController");

batchDeleteRouter.delete('/delete_batch', batchDeleteController);


module.exports = batchDeleteRouter;