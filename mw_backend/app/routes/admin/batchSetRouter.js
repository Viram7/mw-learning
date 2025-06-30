let express = require('express');
let batchSetRouter = express.Router();
let { batchSet } = require('../../controllers/admin/batchSetController');

batchSetRouter.post('/batchSet', batchSet);

module.exports = batchSetRouter;