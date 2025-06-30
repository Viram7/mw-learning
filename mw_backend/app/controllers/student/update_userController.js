const userModel = require('../../models/user_data.model');

const updateUser = async (req, res) => {
  const {
    _id,
    img_link,
    name,
    gender,
    email,
    phoneNumber,
    city,
    state,
    stream,
    exam,
    batch_code
  } = req.body;
 
  const user = {
    _id,
    img_link,
    name,
    gender,
    email,
    phoneNumber,
    city,
    state,
    stream,
    exam,
    batch_code
  };
  console.log(user);
  try {
    const updatedUser = await userModel.findByIdAndUpdate(
     user._id,
      user,
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({
        status: false,
        message: 'User not found'
      });
    }

    return res.status(200).json({
      status: true,
      message: 'User updated successfully',
      data: updatedUser
    });
    

  } catch (err) {
    console.error(err);
    return res.status(500).json({
      status: false,
      message: 'Error updating user',
      error: err.message
    });
  }
};

module.exports = { updateUser };
