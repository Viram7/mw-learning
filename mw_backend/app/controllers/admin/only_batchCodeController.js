const batch_data = require('../../models/batch_data.model');

const only_batch_code = async (req, res) => {
  try {
    const batches = await batch_data.find(); // Gets all batch documents

    const batchCodes = batches.map(batch => batch.batchCode); // ✅ Extract only batchCodes

    res.status(200).json({
      status: true,
      message: "Batch codes retrieved successfully",
      data: {
        batchCodes: batchCodes, // ✅ Correct usage
      }
    });
  } catch (error) {
    res.status(500).json({ status: false, message: error.message });
  }
};

module.exports = {
  only_batch_code,
};
