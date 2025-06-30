let express = require('express');
let registerRouter = express.Router();
let {dataInsert } = require('../../controllers/student/registerController');



registerRouter.post('/register',dataInsert);

// moudule.exports = registerRouter;
module.exports = registerRouter;
