let express = require('express');
let {buy_batch} = require('../../controllers/student/buy_batch_Controller');
let buy_batchRouter = express.Router()

buy_batchRouter.post('/buy_batch',buy_batch);


module.exports = buy_batchRouter;