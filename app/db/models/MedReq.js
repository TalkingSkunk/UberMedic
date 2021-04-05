//makes comm with mongo easier
const mongoose = require('mongoose')
// the thing that a model wraps around ( this is a constructor function)
const Schema = mongoose.Schema

// new instance of a schema object
const medReqSchema = new Schema({
    unit: {
        type:Number,
        required: true,
    },
    reqFor: {
        type:String,
        required: true,
    },
    status: {
        type:String,
        required: true,
    },
    createdAt: {
    type: Date,
    default: Date.now
    }
}) // timestamps property (time report is created/updated) passed in as the second argument (opitional object) inside the Schema constructor

//store this model ; collection name 'calls', what type of object we are storing inside this collection ( schema ): callSchema
// use this Model now to save new call documents into the database collection
const MedReq = mongoose.model('MedReq', medReqSchema)

module.exports = MedReq;