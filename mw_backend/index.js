let express = require('express');
let mongoose = require('mongoose');
const { Server } = require('socket.io');
const { createServer } = require('node:http');
let chat_message_data_model = require('./app/models/chat_data_models/chat_message_data.model');

let registerRouter = require('./app/routes/student/registerRouter');
let loginRouter = require('./app/routes/student/loginRouter');
let batchRouter = require('./app/routes/student/batchRouter');
let batchSetRouter = require('./app/routes/admin/batchSetRouter');
// let addTeacherRouter = require('./app/routes/admin/addTeacherRouter');
let addTeacherRouter = require('./app/routes/admin/addTeacherRouter');
let allTeacherRouter = require('./app/routes/admin/allTeacherRouter');
let batchDetailsRouter = require('./app/routes/student/batchDetailsRouter');
let updateRouter = require('./app/routes/student/update_userRouter');
let imageUpload = require('./app/routes/student/imageUploadRouter');
let buy_batchRouter = require('./app/routes/student/buy_batchRouter');
let videoRouter = require('./app/routes/student/videoRouter');
let videolistRouter = require('./app/routes/student/videolistRouter');
let uploadBatchVideoRouter = require('./app/routes/admin/uploadBatchVideoRouter');
let announcementsRouter = require('./app/routes/student/announcementsRouter');
let addAnnouncementsRouter = require('./app/routes/admin/addAnnouncementsRouter');
let batchDescriptionRouter = require('./app/routes/student/batchDescriptionRouter');
let payment_details_Router = require('./app/routes/student/payment_details_Router');
let batch_groupRouter = require('./app/routes/student/batch_groupsRouter')
let coupons_router =require('./app/routes/admin/coupons_serRouter')
// let messageRoutes = require('./app/routes/message.routes');
let all_couponRouter = require('./app/routes/student/all_couponRouter')
let profileRouter = require('./app/routes/student/stu_profile_by_IdRouter')
let admin_route = require('./app/routes/admin/adminRoute');
let dashboardRouter = require('./app/routes/admin/dashboardRouter');
let allStudentRouter = require('./app/routes/admin/allStudentRouter'); // Admin's all students route  
let all_batchRouter = require('./app/routes/admin/allbatchRouter'); // Admin's all batches route
let batchDeleteRouter = require('./app/routes/admin/batchDeleteRouter');
let deleteTeacherRouter = require('./app/routes/admin/deleteTeacherRouter');
let editTeacherRouter = require('./app/routes/admin/editTeacherRouter');
let adminRegisterRouter = require('./app/routes/admin/adminRegisterRouter');
let adminLoginRouter = require('./app/routes/admin/adminLoginRouter');
let admin_all_groupRouter = require('./app/routes/admin/admin_all_groupRouter'); // Admin's all groups route
let only_batch_codeRouter = require('./app/routes/admin/only_batch_codeRouter')

let dotenv = require('dotenv');
let cors = require('cors');
dotenv.config();
let app = express();
app.use(cors());
app.use(express.json());

const server = createServer(app);
const io = new Server(server,{
  cors: {
    origin: '*', // Allow all origins
    methods: ['GET', 'POST'], // Allow specific methods
    allowedHeaders: ['Content-Type'], // Allow specific headers
  },
});

app.get('/',(req,res)=>{
  res.send({
    status:true
  })
})


io.on('connection',async (socket) => {

    console.log('A user connected:', socket.id);
    
    socket.emit('test', 'Welcome to the server!'); // Emit a welcome message to the connected client

     socket.on('join_batch', async (batchCode) => {
    socket.join(batchCode); // Joins a room named after the batch
    console.log(`Socket ${socket.id} joined batch room: ${batchCode}`);
           socket.emit('allChat',{
          messages: await chat_message_data_model.find({batchCode:batchCode})
    })


  });

    socket.on('group_message', async ({ batchCode, user,phoneno, text,time }) => {

    io.to(batchCode).emit('receive_group_message', {
      user,
      text,
      phoneno,
      time
    });
  let  chat_message_data = new chat_message_data_model({
            batchCode:batchCode,
            user: user,
            text:text,
            phoneno: phoneno,
            time: time
        });
        await chat_message_data.save();


  });


});

//routes 
app.use('/api/student', registerRouter);  // Handles student registration
app.use('/api/student', loginRouter);     // Handles student login
app.use('/api/student', batchRouter);     // Handles student batch-related routes
app.use('/api/student', batchDetailsRouter); // Student's batch details route
app.use('/api/student',updateRouter);
app.use('/api/student',imageUpload);
app.use('/api/student',buy_batchRouter)
app.use('/api/student',videoRouter);
app.use('/api/student',videolistRouter);
app.use('/api/student',announcementsRouter);
app.use('/api/student', batchDescriptionRouter); // Student's batch description route
app.use('/api/student', payment_details_Router); // Student's payment details route
app.use('/api/student', batch_groupRouter); //
app.use('/api/student', all_couponRouter); //
app.use('/api/student', profileRouter); //







app.use('/api/admin', batchSetRouter);    // Admin's batch setting route
app.use('/api/admin', addTeacherRouter);  // Admin's add teacher route
app.use('/api/admin', allTeacherRouter); // Admin's all teacher route
app.use('/api/admin', uploadBatchVideoRouter);
app.use('/api/admin', addAnnouncementsRouter);
app.use('/api/admin', coupons_router);
app.use('/api/admin', admin_route);
app.use('/api/admin', dashboardRouter); 
app.use('/api/admin', allStudentRouter); // Admin's all students route
app.use('/api/admin', all_batchRouter); // Admin's all batches route\
app.use('/api/admin', batchDeleteRouter); // Admin's batch delete route
app.use('/api/admin', deleteTeacherRouter); // Admin's delete teacher route
app.use('/api/admin', editTeacherRouter); // Admin's edit teacher route
app.use('/api/admin', adminRegisterRouter); // Admin's register route
app.use('/api/admin', adminLoginRouter); // Admin's login route
app.use('/api/admin', admin_all_groupRouter); // Admin's all groups route
app.use('/api/admin',only_batch_codeRouter);


mongoose.connect(process.env.db_url || 8000 ).then(() => {
    console.log("Connected to MongoDB");



    server.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
});




