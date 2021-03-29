//makes comm with mongo easier
const mongoose = require('mongoose')
// the thing that a model wraps around ( this is a constructor function)
const Schema = mongoose.Schema

const patientSchema = new Schema({
   firstName: {
      type:String,
      required:true,
   },
   lastName: {
      type:String,
      required:true,
   },
   dobYMD: {
      type:Number,
      required:true,
   },
   healthID: {
      type:Number,
      required:true,
   },
   streetAddress: {
      type:String,
      required:true,
   },
   cityAddress: {
      type:String,
      required:true,
   },
   provAddress: {
      type:String,
      required:true,
   },
   postalCode: {
      type:String,
      required:true,
   },
   pickupLocation: {
      type:String,
      required:true,
   },
})

const procedureSchema = new Schema({
   time: {
      type:Number,
      required:true,
   },
   code: {
      type:Number,
      required:true,
   },
   doneBy: {
      type:Number,
      required:true,
   },
   result:{
      type:String,
      required:true,
   },
})

// new instance of a schema object
const callSchema = new Schema({
   patient: [patientSchema],
   incidentHx: {
      type:String,
      required: true,
   },
   pastHx: {
      type:String,
      required: true,
   },
   rx: {
      type:String,
      required: true,
   },
   allergy: {
      type:String,
      required:true,
   },
   appearance: {
      type:String,
      required:true,
   },
   procedures: [procedureSchema],
   footnote: {
      type:String,
      required:true,
   },
}, {timestamps: true}) // timestamps property (time report is created/updated) passed in as the second argument (opitional object) inside the Schema constructor

//store this model ; collection name 'calls', what type of object we are storing inside this collection ( schema ): callSchema
// use this Model now to save new call documents into the database collection
module.exports = mongoose.model('Call', callSchema)