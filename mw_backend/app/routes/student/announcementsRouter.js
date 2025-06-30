let { announcements } = require('../../controllers/student/announcements_Controller');
let express = require('express');
let announcementsRouter = express.Router();

announcementsRouter.post('/announcement', announcements);


module.exports = announcementsRouter;