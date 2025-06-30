const express = require('express');
const uploadBatchVideoRouter = express.Router();
const { upload, uploadVideo } = require('../../controllers/admin/uploadBatchVideoController');

// POST route to upload video with batchCode
uploadBatchVideoRouter.post('/upload-video/:batchCode', upload.single('video'), uploadVideo);

module.exports = uploadBatchVideoRouter;
