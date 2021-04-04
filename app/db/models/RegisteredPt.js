//makes comm with mongo easier
const mongoose = require('mongoose')
// the thing that a model wraps around ( this is a constructor function)
const Schema = mongoose.Schema

// new instance of a schema object

const registeredPtSchema = new Schema({
   id: {
      type:Number,
      required:true,
   },
   firstName: {
      type:String,
      required:true,
   },
   lastName: {
       type:String,
       required:true,
   },
    healthID: {
        type:Number,
        trim: true,
        required:true,
    },
    pastHx: {
        type:String,
        trim: true,
        required: true,
    },
    standingOrder: {
        type:String,
        trim: true,
        required: true,
    }

})
// timestamps property (time report is created/updated) passed in as the second argument (opitional object) inside the Schema constructor

//store this model ; collection name 'calls', what type of object we are storing inside this collection ( schema ): callSchema
// use this Model now to save new call documents into the database collection
const RegisteredPt = mongoose.model('RegisteredPt', registeredPtSchema)

module.exports = RegisteredPt;