const mongoose = require("mongoose")
const bcrypt = require("bcrypt")


const userSchema = new mongoose.Schema({
  name : {
    Fname : {
      type:String,
      require:true,
      minlenght:[3,"first name should be atleast 3 character long"]
    },
    Lname : {
      type:String,
      minlenght:[3,"first name should be atleast 3 character long"]
    }
  },
  email : {
    type:String,
    require:true,
    unique:true,
    lowercase:true,
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);  
      },
      message: (props) => `${props.value} is not a valid email format!`
    }
  },
  password: {
    type: String,
    required: true,
    select: false,
},
})

userSchema.statics.hashPassword = async function(password){
   return await bcrypt.hash(password,10);
}

userSchema.method.comparePassword = async function(password){
  return await bcrypt.compare(password,this.password)
}


const userModel = mongoose.model('user' , userSchema);

module.export = userModel;