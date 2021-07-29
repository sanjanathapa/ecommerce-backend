const jwt = require('jsonwebtoken');


module.exports.verfiyadmintoken =  (req,res,next)=>{
    if('authorization' in req.headers){
       var tokenn= req.headers['authorization'].split(' ')[1];
        if(!tokenn){
           return res.status(404).send({
               auth:false,
               message:"token is not generated"
            })
        }
    
        else{
           jwt.verify(tokenn,"SECRETKEY1999",(err,decode)=>{
                if(err){
                    res.status(401).send({auth:false,
                    message:"token is not authorized"})
                }
                else{

                    adminid = jwt.decode(tokenn);
                    console.log(adminid)
                   next();
                    
                }
            })
        }
    }
}