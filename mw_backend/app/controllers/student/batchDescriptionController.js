let batch_data_model = require('../../models/batch_data.model');

let batchDescription = async (req, res) => {
    let batch = await batch_data_model.findOne({ batchCode: req.body.batchCode });
    if (!batch) {
        return res.status(404).send({ status: false, message: "Batch not found" });
    } else {
        return res.status(200).send({ status: true, message: "Batch found", batchDescription: batch.batchDescription });
    }   

}

module.exports = {
    batchDescription
};  