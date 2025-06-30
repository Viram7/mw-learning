let all_batchRouter = require("express").Router();
let { getAllBatches } = require("../../controllers/admin/allBatchController");

all_batchRouter.get("/all_batch", getAllBatches);

module.exports = all_batchRouter;
