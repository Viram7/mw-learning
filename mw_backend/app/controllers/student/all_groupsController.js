const batch_group_model = require('../../models/batch_group.model');

const batch_groups = async (req, res) => {
    try {
        // const { batchCode } = req; // or req.body / req.params / req.query depending on how it's passed
        let batchCode = req.body.batchCode;
        
        if (!batchCode) {
            return res.status(400).json({ error: 'batchCode is required' });
        }

        const groups = await batch_group_model.find({ batchCode });

        return res.status(200).json(groups);
    } catch (error) {
        console.error('Error fetching batch groups:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {
    batch_groups
};
