const testModel = require("../models/test.model");
const mongoose = require("mongoose")

module.exports.createSample = async({fullName})=>{
    const sample = testModel.create({
        fullName: fullName
    })

    return sample;
}