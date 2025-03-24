const mongoose = require("mongoose")


const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    address : String,
    city : String,
    password : String
})



module.exports = mongoose.model("user" , userSchema)