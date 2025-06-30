let express = require('express');

let batchData = require('../../models/batch_data.model');

let allbatch = async (req, res) => {

    let batch = await batchData.find();
    res.send(batch);

    

}

module.exports = {  
    allbatch
}
