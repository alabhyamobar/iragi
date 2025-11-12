const mongoose = require('mongoose');

module.exports.connectToDb = function(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('DB is connected successfully');
    })
    .catch((error)=>{
        console.log("DB failed to connect ",error);
    })
}

