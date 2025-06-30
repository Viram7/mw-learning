const express = require('express');
const router = express.Router();
const {controller} = require('../../controllers/chat/controller');

router.get('/messages/:roomId', controller.getMessagesByRoom);

module.exports = router;
