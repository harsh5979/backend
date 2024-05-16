const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isadmin:{
        type:Boolean,
        default:false
    }

})

module.exports = new mongoose.model("User3",UserSchema);