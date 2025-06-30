let user_data = require('../../models/user_data.model');
let batch_data = require('../../models/batch_data.model');
let Payment_data = require('../../models/payment_details.model')
let batch_group_model = require('../../models/batch_group.model');

let buy_batch = async (req,res)=>{

    // const paymentData = {
    //     batchCode: req.body.batchCode,
    //     coupon: req.body.coupon,
    //     discount: req.body.discount,
    //     donate: req.body.donate,
    //     fullTime: req.body.fullTime,
    //     phoneNumber: req.body.phoneNumber, // example number
    //     price: req.body.price,
    //     totalAmount: req.body.totalAmount,
    //     transactionId: req.body.transactionId // unique transaction ID
    //   };

      try {

        let payment_details = new  Payment_data({
            user_id:req.body._id,
            batchCode: req.body.batchCode,
            coupon: req.body.coupon,
            discount: req.body.discount,
            donate: req.body.donate,
            fullTime: req.body.fullTime,
            phoneNumber:req.body.phoneNumber, // example number
            price: req.body.price,
            totalAmount: req.body.totalAmount,
            transactionId: req.body.transactionId 
        });

         let user = await user_data.findById(req.body._id);
      
        if(user){
         
          if(!user.batch_code.includes(req.body.batchCode)){
            await  payment_details.save();
            await user_data.findByIdAndUpdate(req.body._id,{$addToSet :{ batch_code: req.body.batchCode }},{new:true});

            let add_new_member = await batch_group_model.findOneAndUpdate(
              { batchCode: req.body.batchCode },
              { $addToSet: { members: { userId: req.body._id, role: 'member', joinedAt: new Date() } } },
              { new: true }
            );
            // add_new_member.save();

          console.log("Batch group updated successfully:", add_new_member,batch_group_model.find());

          }else{
            return res.status(405).send({
              status:false,
              message:"user have already this batch ",
              
            })
          }

        }else
        {
        return res.status(404).send({
            status:false,
            message:"user not found",
            
          })
        }

        return res.send({
            status: true,
            message: "Payment data inserted and user updated successfully",
            details: await Payment_data.findOne({transactionId:req.body.transactionId})
          });
      
        } catch (err) {
          console.error(err);
          return res.status(500).send({
            status: false,
            message: "Something went wrong",
            error: err.message,
          });

      }
    
}


module.exports = {
    buy_batch
}