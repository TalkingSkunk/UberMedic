//makes comm with mongo easier
const mongoose = require('mongoose')
// the thing that a model wraps around ( this is a constructor function)
const Schema = mongoose.Schema

// new instance of a schema object
const mobileUnitSchema = new Schema({
   unitNum: {
      type:Number,
      required: true,
   },
   medic1: {
      type:Number,
      required: true,
   },
   medic2: {
      type:Number,
      required: true,
   },
   availability: {
      type:String,
      required: true,
   }
}) // timestamps property (time report is created/updated) passed in as the second argument (opitional object) inside the Schema constructor

//store this model ; collection name 'calls', what type of object we are storing inside this collection ( schema ): callSchema
// use this Model now to save new call documents into the database collection
const MobileUnit = mongoose.model('MobileUnit', mobileUnitSchema)

module.exports = MobileUnit;