let {addAnnouncements} = require('../../controllers/admin/announcementsAddController.js');
let express = require('express');
let addAnnouncementsRouter = express.Router();

addAnnouncementsRouter.post('/addAnnouncement', addAnnouncements);

module.exports = addAnnouncementsRouter;