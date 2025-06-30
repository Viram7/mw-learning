let batch_data_model = require('../../models/batch_data.model');

let addAnnouncements = async  (req,res)=>{


    let batch = await batch_data_model.findOne({batchCode:req.body.batchCode});
       if(!batch){
            return res.status(404).send({status:false,message:"batch not found"});
        }
        else {
            batch.announcements.push({
                title:req.body.announcement_title,
                description:req.body.announcement_description,
                date: new Date()
            });
            await batch.save();
            return res.status(200).send({status:true,message:"batch found ",announcements:batch.announcements})
        }
}

module.exports = {
    addAnnouncements
}