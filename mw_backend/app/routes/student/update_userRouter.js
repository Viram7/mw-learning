let express = require('express')

let updateRouter = express.Router();

let { updateUser } = require("../../controllers/student/update_userController");

updateRouter.put('/update',updateUser)

module.exports  = updateRouter;