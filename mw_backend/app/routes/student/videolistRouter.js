let express = require('express');
let { videolist } = require('../../controllers/student/videolistController.js');
let videolistRouter = express.Router();

videolistRouter.post('/:batchCode/videoList',videolist);

module.exports = videolistRouter;