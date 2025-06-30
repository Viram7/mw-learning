let express = require('express');
let addTeacherRouter = express.Router();
let { addTeacher } = require('../../controllers/admin/addTeacherController');

addTeacherRouter.post('/add_teacher', addTeacher);

module.exports = addTeacherRouter;