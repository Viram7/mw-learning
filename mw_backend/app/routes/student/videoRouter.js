// let { videoStream  } = require('../../controllers/student/videoController');
// let express = require('express');
// let videoRouter = express.Router();

// videoRouter.post('/video', videoStream );


// module.exports = videoRouter;


const express = require('express');
const { videoStream } = require('../../controllers/student/videoController');

const videoRouter = express.Router();

// Use GET with a route param
videoRouter.get('/video/:batchCode/:fileName', videoStream);

module.exports = videoRouter;
