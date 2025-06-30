let express = require('express');
let imageUpload  = express.Router();
let { image_upload } = require('../../controllers/student/image_uploadController');

imageUpload.put('/imageUplaod',image_upload);


module.exports = imageUpload