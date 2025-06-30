let allStudentRouter = require("express").Router();
let { allStudentController } = require("../../controllers/admin/allStudentController");

allStudentRouter.get("/all_student", allStudentController);

module.exports = allStudentRouter;
