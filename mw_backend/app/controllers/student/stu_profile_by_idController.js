const mongoose = require('mongoose');
const user_data_model = require('../../models/user_data.model');

let user_profile = async (req, res) => {
  const { _id } = req.body; // ✅ Extract _id from request body
console.log(_id)
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(400).send({ status: false, message: 'Invalid user ID' });
  }

  try {
    let user = await user_data_model.findOne({ _id });

    if (!user) {
      return res.status(404).send({
        status: false,
        message: "User not found",
      });
    }

    res.send({
      status: true,
      user: user
    });

  } catch (err) {
    console.error(err);
    res.status(500).send({
      status: false,
      message: "Internal Server Error",
      error: err.message
    });
  }
};

module.exports = {
  user_profile
};
