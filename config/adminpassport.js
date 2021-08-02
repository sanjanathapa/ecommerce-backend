const passport = require('passport');
const localpassport = require('passport-local').Strategy;
const model = require("../Models/index");
const adminlogin = model.adminlogin;
const bcrypt  = require('bcrypt');


passport.use("admin",
   new localpassport({ usernameField: "email"},
   async (email,password,done)=>{
       try{
        const admin = await adminlogin.findOne({where:{email:email}},
            function(err){
                    console.log(err)
                return done(err);})
                if(!admin){
                    return done(null,false,{message:"Incorrect email"})
                 }
                 const result = admin;

                 console.log(admin)
               const value =  bcrypt.compareSync(password,result.password);
                if(value===true){
                    return done(null,admin);
                }
                else{
                    return done(null,false,{message:"password is wrong"})
                }
    
                

            }
        
            
        catch(error){
            console.log(error);
        }               
          
            
   })
)