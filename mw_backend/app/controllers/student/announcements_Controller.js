let batch_data_model = require('../../models/batch_data.model');


let announcements = async (req, res) => {
    // req.body.batchCode

    let batch = await batch_data_model.findOne({batchCode:req.body.batchCode});
    console.log(batch);
    if(!batch){
        return res.status(404).send({status:false,message:"batch not found"});
    }
    else {
        return res.status(200).send({status:true,message:"batch found ",announcements:batch.announcements})
    }
}

module.exports = {
announcements
}