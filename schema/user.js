import mongoose from "mongoose"

//Create user schema
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    }
})


//Create model
const UserModel = new mongoose.model("user", userSchema)

export default UserModel;