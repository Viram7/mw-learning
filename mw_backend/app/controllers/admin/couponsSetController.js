let coupons_data_model=require('../../models/coupons_data.model');


let coupons = async (req,res)=>{

   try{
     let cheak_coupon =  await coupons_data_model.findOne({ coupon_code : req.body.coupon})
       
      if(!cheak_coupon){
          let add_coupons = new coupons_data_model({
            coupon_code : req.body.coupon
        })
      await add_coupons.save();
       res.send({
            status: true,
            message: "Data inserted successfully"
        });
      }else{

         return res.status(409).send({ // 409 = Conflict
                status: false,
                message: "coupon already exists",
            });
      }
   }
       catch (err) {
        console.error(err);
        res.status(500).send({
            status: false,
            message: "Error inserting data ",
            error: err.message
        });
    }

}


module.exports={
    coupons
}