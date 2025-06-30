let express = require('express');
let batchDetailsSubRouter = express.Router();
let { batchDetails } = require('../../controllers/student/batch_details_subController');

batchDetailsSubRouter.post('/batchDetails', batchDetails);


module.exports = batchDetailsSubRouter;