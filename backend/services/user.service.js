const userModel = require("../models/user.model");

module.exports.createUser = async({Fname,Lname,email,password })=>{
    if(!Fname||!email||!password){
        throw new Error("All fields are required");
    }
    const user = userModel.create({
        name:{
            Fname,
            Lname
        },
        email,
        password
    })

    return user;
}
