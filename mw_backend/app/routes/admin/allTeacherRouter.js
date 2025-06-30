let express = require('express');   
let allTeacherRouter = express.Router();
let { allTeacher } = require('../../controllers/admin/allTeacherController');

allTeacherRouter.get('/allTeacher', allTeacher);


module.exports = allTeacherRouter;