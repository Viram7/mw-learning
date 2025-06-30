
let express  = require('express')
let userData = require('../../models/user_data.model');


let login_val = async (req,res) =>{

    

    let number = req.body.mobile;
    console.log(req.body.mobile);
    // let founded = await userdatas.findOne({phoneNumber:number});
    let founded = await userData.find({phoneNumber:number});
    if(founded  != ""){
       

        res.send({
            status:true,
            message:"User Found",
            data:founded,
           
        });
    
    }
        else{
            res.send({
                status:false,
                message:"User Not Found",
            });
        }   
    }

    module.exports = {
        login_val
    }



