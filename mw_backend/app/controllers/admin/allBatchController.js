let batch_data = require('../../models/batch_data.model');
let student_data = require('../../models/user_data.model');


getAllBatches = async (req, res) => {
    try {


        

        const batches = await batch_data.find();
        // const users = await student_data.find({batchCode: { $in: batches.map(batch => batch.batchCode)}});
            const result = await student_data.aggregate([
            { $unwind: "$batch_code" }, // Break batch_code array into single values
            {
                $group: {
                    _id: "$batch_code",
                    studentCount: { $sum: 1 }
                }
            },
            {
                $project: {
                    batchCode: "$_id",
                    studentCount: 1,
                    _id: 0
                }
            }
        ]);

        res.status(200).json({
            status: true,
            message: "Batches retrieved successfully",
            data: {
                studentCounts: result,
                batches: batches,
            }

        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllBatches  
}
