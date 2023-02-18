import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    title: String,
    description: String,
    email: String,
    status:{
        type: String,
        default: "Reported"
    },
    severity: String,
    btype: String,
    createdAt: {
        type: Date,
        default: Date.now()
     }
})

// autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin, 'user');

const user = mongoose.model("complain",userSchema);
export default user;



