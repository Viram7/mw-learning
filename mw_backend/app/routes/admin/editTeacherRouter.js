let editTeacherRouter = require('express').Router();
let {editTeacher} = require('../../controllers/admin/editTeacherController.js');


editTeacherRouter.post('/editTeacher', editTeacher);

module.exports = editTeacherRouter;