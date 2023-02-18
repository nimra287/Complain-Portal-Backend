import express from "express";
import UserModel from "../schema/user.js";

const router = express.Router();

//.....Define Routes.....

//Login User

router.post("/", (req, res) =>{
    const {email, password} = req.body
    UserModel.findOne({email: email}, (err, user) => {
        //if user already exist then we check the password
        if(user){
            if(password === user.password){
                res.send({status: "200", message: "Login successfully", user: user})
            }
            //id password doesn't match then this else condition execute
            else{
                res.send({status: "400", message: "Password didn't match"})
            }
        }else{
            res.send({status: "404",message: "User not registered"})
        }
    })
})


//Register User

router.post("/register", async(req, res) =>{
    console.log(req.body)
    //when we register save these values
    const {name, email, password, reEnterPassword} = req.body
    //check that if user is already register or not
    UserModel.findOne({email: email}, async(err, user) => {
        try{

            if(user){
                res.send({message: "User already registered"})
            }
            else{
                //create new user
                const user = new UserModel({
                    name,
                    email,
                    password
                })
    
                    await user.save();
                    res.send({message: "Signup Successfull"})
                
            }
        }
        catch(error){
            res.send(error)
        }
    })
})

export default router;
