let express = require('express');
let batch_model = require('../../models/batch_data.model');
let batch_group_model = require('../../models/batch_group.model');
let uuid = require('uuid');

let batchSet = async (req, res) => {
    try {
        const {
            batchName,
            batchCode,
            startDate,
            endDate,
          
            batch_img_link,
            batchDescription,
            
         
            rate,
            discount,
            stu_for,
            teacher

           
        } = req.body;

        let new_batch = new batch_model({
            batchName: batchName,
            batchCode: batchCode,
            startDate: startDate,
            endDate: endDate,
         
            batch_img_link: batch_img_link,
            batchDescription: {
                title: batchDescription.title,
                description: batchDescription.description
            },
     
            rate: rate,
            discount: discount,
            stu_for: stu_for,
            teacher: teacher
            
   
           
        });

        await new_batch.save();


         let group = new batch_group_model({
            name: batchName,
            group_img_link: batch_img_link,
            batchCode: batchCode,
            groupId: uuid.v4(), // Generate a random group ID
            createdAt: new Date(),
            members: [{
                userId: 'admin_for_temp',
                role: 'admin',
                joinedAt: new Date()
            }]
        });

        await group.save();

        res.send({
            status: true,
            message: "Data inserted successfully"
        });

    } catch (err) {
        console.error(err);
        res.status(500).send({
            status: false,
            message: "Error inserting data ",
            error: err.message
        });
    }
};

module.exports = { batchSet };