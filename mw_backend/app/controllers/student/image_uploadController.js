let user_dataModel = require('../../models/user_data.model')

let image_upload = async (req,res)=>{
   let img_link =  req.body.image;
  //  let phoneNumber = req.body.mobile;
   let _id = req.body._id;
   
   try{

   let updatedUser = await user_dataModel.findByIdAndUpdate(_id,{ img_link }, { new: true });

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

}



module.exports = { image_upload }