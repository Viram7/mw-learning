let admin_all_group_model = require('../../models/batch_group.model');

admin_all_groupController = async (req, res) => {
    try {
        const all_groups = await admin_all_group_model.find({});

        if (all_groups.length === 0) {
            return res.status(404).json({ message: 'No groups found' });
        }

        res.status(200).json({
            message: 'All groups retrieved successfully',
            data: all_groups
        });
    } catch (error) {
        console.error('Error retrieving all groups:', error);
        res.status(500).json({ message: 'Internal server error', error: error.message });
    }
}

module.exports = {
    admin_all_groupController
};