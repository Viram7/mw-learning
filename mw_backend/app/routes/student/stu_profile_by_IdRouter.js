let profileRouter = require('express').Router()

const { model } = require('mongoose');
let {user_profile} = require('../../controllers/student/stu_profile_by_idController')

profileRouter.post('/student_profile',user_profile);


module.exports = profileRouter