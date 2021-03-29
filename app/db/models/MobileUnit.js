//makes comm with mongo easier
const mongoose = require('mongoose')
// the thing that a model wraps around ( this is a constructor function)
const Schema = mongoose.Schema

// new instance of a schema object

const coordsSchema = new Schema({
   longitude: {
      type:Number,
      required:true,
   },
   latitude: {
      type:Number,
      required:true,
   }
})
const locationSchema = new Schema({
   callID: {
      type:String,
      required: true,
   },
   unitNumber: {
      type:Number,
      required: true,
   },
   CTAS: {
      type:String,
      required: true,
   },
   CC: {
      type:String,
      required: true,
   },
   location: {
      type:String,
      required: true,
   },
   intersection: {
      type:String,
      required: true,
   },
   police: {
      type:String,
      required: true,
   },
   fire: {
      type:String,
      required: true,
   },
   medic: {
      type:String,
      required: true,
   },
   coords: [coordsSchema],
}, {timestamps: true}) // timestamps property (time report is created/updated) passed in as the second argument (opitional object) inside the Schema constructor

//store this model ; collection name 'calls', what type of object we are storing inside this collection ( schema ): callSchema
// use this Model now to save new call documents into the database collection
module.exports = mongoose.model('MobileUnit', locationSchema)