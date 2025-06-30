let express = require('express');
let loginRouter = express.Router();
let {login_val} = require('../../controllers/student/loginController');

loginRouter.post('/login',login_val);

module.exports = loginRouter;