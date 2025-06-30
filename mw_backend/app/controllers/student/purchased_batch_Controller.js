let batch_data_model = require('../../models/batch_data.model');

let purchasedBatch = async (req, res) => {
    let batchCode = req.body.batchCode;
    let batch = await batch_data_model.findOne({ batchCode: batchCode });
    if (!batch) {
        return res.status(404).send({ status: false, message: "Batch not found" });
    } else {
        return res.status(200).send({ status: true, message: "Batch found", batch:{

            batchCode: batch.batchCode,
            batchName: batch.batchName,
            price: batch.price,
            batch_img_link: batch.batch_img_link,

        }  })
    }
}