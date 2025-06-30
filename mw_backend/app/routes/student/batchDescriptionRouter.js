let batchDescriptionRouter = require('express').Router();
let { batchDescription } = require('../../controllers/student/batchDescriptionController.js');

batchDescriptionRouter.post('/batchDescription', batchDescription);

module.exports = batchDescriptionRouter;