let deleteTeacherRouter = require("express").Router();
let { deleteTeacherController } = require("../../controllers/admin/deleteTeacherController");

deleteTeacherRouter.delete('/delete_teacher', deleteTeacherController);

module.exports = deleteTeacherRouter;