let express = require('express');
let batchRouter = express.Router();
let { allbatch } = require('../../controllers/student/batchController');

batchRouter.get('/allbatch',allbatch);

module.exports = batchRouter;