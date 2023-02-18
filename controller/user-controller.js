import { request, response } from 'express';
import user from '../schema/user-schema.js';
import User from '../schema/user-schema.js';

export const addUser = async (request, response) =>{
    const user = request.body;
    const newUser = new User(user);
    try{
        await newUser.save();
        response.status(201).json(newUser);
    }catch(error){
        response.status(409).json({message: error.message});
    }
}

//view data
export const getUsers = async (request, response) => {
    try{
        //User.find({name:"nimra"})
        //bring all the data
     const users = await User.find({})
     response.status(200).json(users);
    }catch(error){
        response.status(404).json({message: error.message});
    }
}

//update data fetch data in field
export const getUser = async (request, response) => {
    //console.log(request.param.id);
    try{
        //bring all the data
     //const user = await User.find({_id: request.params.id})
     const user = await User.findById(request.params.id);
     response.status(200).json(user);
    }catch(error){
        response.status(404).json({message: error.message});
    }
}

//edituser
export const editUser = async (request, response) => {
    //validate that user is valid or not
    let user = request.body;
    const editUser = new User(user);
    try{
        //replace object with editUser object
     await User.updateOne({_id: request.params.id}, editUser);
     response.status(201).json(editUser);
    }catch(error){
        response.status(409).json({message: error.message});
    }
}

//delete user
export const deleteUser = async (request, response) => {
    try{
       await user.deleteOne({_id: request.params.id});
       response.status(200).json({message: 'User deleted successfully'});
    }
    catch(error){
        response.status(409).json({message: error.message});
    }
}

// router.post("/", (req, res) =>{
//     const {email, password} = req.body
//     UserModel.findOne({email: email}, (err, user) => {
//         //if user already exist then we check the password
//         if(user){
//             if(password === user.password){
//                 res.send({message: "Login successfully", user: user})
//             }
//             //id password doesn't match then this else condition execute
//             else{
//                 res.send({message: "Password didn't match"})
//             }
//         }else{
//             res.send({message: "User not registered"})
//         }
//     })
// })


// //Register User

// router.post("/register", (req, res) =>{
//     //console.log(req.body)
//     //when we register save these values
//     const {name, email, password} = req.body
//     //check that if user is already register or not
//     UserModel.findOne({email: email}, (err, user) => {
//         if(user){
//             res.send({message: "User already registered"})
//         }
//         else{
//             //create new user
//             const user = new UserModel({
//                 name,
//                 email,
//                 password
//             })
//             user.save(err =>{
//                 if(err){
//                     res.send(err)
//                 }
//                 else{
//                     res.send({message: "Successfully Registered, Please login now.!"})
//                 }
//             })
//         }
//     })
// })