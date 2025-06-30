let {only_batch_code} = require('../../controllers/admin/only_batchCodeController');

let only_batch_codeRouter = require('express').Router();

only_batch_codeRouter.get('/batchCodes',only_batch_code);


module.exports = only_batch_codeRouter;