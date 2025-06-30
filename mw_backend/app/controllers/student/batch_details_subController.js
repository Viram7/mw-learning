let express = require('express');
let batchData = require('../../models/batch_data.model');
let teacherData = require('../../models/teacher_data.model');

let batchDetails = async (req, res) => {
    let batchCode = req.body.batchCode;
    console.log(batchCode);
    let teacher = [];

    let batch = await batchData.find({batchCode:batchCode}); 
    console.log(batch[0].teacher.length);  
    if(batch.length > 0){
         
         for(let i=0;i<=batch[0].teacher.length-1;i++){
            teacher[i] = await teacherData.find({name:batch[0].teacher[i]});
         }
         
        res.send({
            status:true,
            message:"Batch Found",
            data:{
                batch:batch,
                allteacher:teacher
            }
        }); 
}
}

module.exports = {
    batchDetails
}