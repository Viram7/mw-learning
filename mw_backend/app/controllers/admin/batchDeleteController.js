const { model } = require('mongoose');
let batch_data = require('../../models/batch_data.model');

let batchDeleteController = async (req, res) => {
    try {
        const _id = req.body._id;

        // Check if the batch exists
        const batch = await batch_data.findOne({ _id: _id });
        if (!batch) {
            return res.status(404).json({
                status: false,
                message: "Batch not found"
            });
        }

        // Delete the batch
        await batch_data.deleteOne({ _id: _id });

        res.status(200).json({
            status: true,
            message: "Batch deleted successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: false,
            message: "Internal Server Error",
            error: error.message
        });
    }
}

module.exports = {
    batchDeleteController   }