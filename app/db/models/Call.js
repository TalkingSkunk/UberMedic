//makes comm with mongo easier
const mongoose = require('mongoose')
// const getCoords = require( "../../../client/src/Dispatcher/API/index" )
// const result = await getCoords( {city: city, postCode: postal, address: street} )

// the thing that a model wraps around ( this is a constructor function)
const Schema = mongoose.Schema



const patientSchema = new Schema({
   registeredPt:{
      type:Number,
      trim: true,
   },
   firstName: {
      type:String,
      trim: true,
      required:true,
   },
   lastName: {
      type:String,
      trim: true,
      required:true,
   },
   dobYMD: {
      type:Number,
      trim: true,
      required:true,
   },
   healthID: {
      type:Number,
      trim: true,
      required:true,
   },
   streetAddress: {
      type:String,
      trim: true,
      required:true,
   },
   cityAddress: {
      type:String,
      trim: true,
      required:true,
   },
   provAddress: {
      type:String,
      trim: true,
      required:true,
   },
   postalCode: {
      type:String,
      trim: true,
      required:true,
   },
   pickupLocation: {
      type:String,
      trim: true,
      required:true,
   },
})

const procedureSchema = new Schema({
   time: {
      type:Number,
      trim: true,
      required:true,
   },
   code: {
      type:Number,
      trim: true,
      required:true,
   },
   doneBy: {
      type:Number,
      trim: true,
      required:true,
   },
   result:{
      type:String,
      trim: true,
      required:true,
   },
})

// new instance of a schema object
const ambulanceReportSchema = new Schema({
   patient: [patientSchema],
   incidentHx: {
      type:String,
      trim: true,
      required: true,
   },
   pastHx: {
      type:String,
      trim: true,
      required: true,
   },
   rx: {
      type:String,
      trim: true,
      required: true,
   },
   allergy: {
      type:String,
      trim: true,
      required:true,
   },
   appearance: {
      type:String,
      trim: true,
      required:true,
   },
   procedures: [procedureSchema],
   footnote: {
      type:String,
      trim: true,
      required:true,
   },
}, {timestamps: true}) // timestamps property (time report is created/updated) passed in as the second argument (opitional object) inside the Schema constructor

//8 timestamp during call progression
const acknowledgeSchema = new Schema ({
   lngLat: {
      type:Array,
      required: true
   },
   medicCreated: {
      type:Date,
      default: Date.now
   }
})
const mobileSchema = new Schema ({
   lngLat: {
      type:Array,
      required: true
   },
   medicCreated: {
      type:Date,
      default: Date.now
   }
})
const arrivedDestSchema = new Schema ({
   lngLat: {
      type:Array,
      required: true
   },
   medicCreated: {
      type:Date,
      default: Date.now
   }
})
const ptContactSchema = new Schema ({
   lngLat: {
      type:Array,
      required: true
   },
   medicCreated: {
      type:Date,
      default: Date.now
   }
})
const departDestSchema = new Schema ({
   lngLat: {
      type:Array,
      required: true
   },
   medicCreated: {
      type:Date,
      default: Date.now
   }
})
const arrivedHospSchema = new Schema ({
   lngLat: {
      type:Array,
      required: true
   },
   medicCreated: {
      type:Date,
      default: Date.now
   }
})
const tocSchema = new Schema ({
   lngLat: {
      type:Array,
      required: true
   },
   medicCreated: {
      type:Date,
      default: Date.now
   }
})
const clearCallSchema = new Schema ({
   lngLat: {
      type:Array,
      required: true
   },
   medicCreated: {
      type:Date,
      default: Date.now
   }
})

// one document to rule them all
const callSchema = new Schema ({
   dispatcherCreated: {
      type:Date,
      default: Date.now
   },
   deployedUnit: {
      type:Number,
      required:true,
   },
   streetDest: {
      type:String,
      trim: true,
      required:true,
   },
   cityDest: {
      type:String,
      trim: true,
      required:true,
   },
   postalDest: {
      type:String,
      trim: true,
      required:true,
   },
   intersection: {
      type:String,
      trim: true,
      required:true,
   },
   callerName: {
      type:String,
      trim: true,
      required:true,
   },
   callerNum: {
      type:Number,
      trim: true,
      required:true,
   },
   destLngLat: {
      type:Array,
      required: true
   },
   ctas: {
      type:String,
      trim: true,
      required:true,
   },
   cc: {
      type:String,
      trim: true,
      required:true,
   },
   notes: {
      type:String,
      trim: true,
      required:true,
   },
   police: {
      type:String,
      trim: true,
      required:true,
   },
   fire: {
      type:String,
      trim: true,
      required:true,
   },
   additional: {
      type:String,
      trim: true,
      required:true,
   },
   registeredPt:{
      type:Number,
      trim:true
   },
   acknowledge: [acknowledgeSchema],
   mobile: [mobileSchema],
   arrivedDest: [arrivedDestSchema],
   ptContact: [ptContactSchema],
   departDest: [departDestSchema],
   arrivedHosp: [arrivedHospSchema],
   toc: [tocSchema],
   clearCall: [clearCallSchema],
   ambulanceReport: [ambulanceReportSchema]
})




//store this model ; collection name 'calls', what type of object we are storing inside this collection ( schema ): callSchema
// use this Model now to save new call documents into the database collection
const Call = mongoose.model('Call', callSchema)


module.exports = Call;