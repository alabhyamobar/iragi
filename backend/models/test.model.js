const mongoose = require("mongoose");


const testSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        minlength:[3,"name should be minimum 3 length long"]
    }
})

const testModel = mongoose.model('test',testSchema);

module.exports = testModel;