let {batch_groups} = require('../../controllers/student/all_groupsController');
let express = require('express');
let batch_groupRouter = express.Router();

batch_groupRouter.post('/all_groups',batch_groups);

module.exports = batch_groupRouter ;