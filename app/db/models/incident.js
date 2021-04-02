const mongoose = require('mongoose')

const Schema = mongoose.Schema

const incidentSchema = new Schema({
    address: {
       type:String,
       required:true,
    },
    province:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    patientName:{
        type:String,
        required:true,
    },
    postalCode:{
        type:String,
        required:true,
    },
    province:{
        type:String,
        required:true,
    },
    incident:{
        type:String,
        required:true,
    },
    procedures: [procedureSchema],
   footnote: {
      type:String,
      required:true,
   },
})

const regularsSchema= new schema({
calls: [callSchema],
footnote: {
   type:String,
   required:true,
},
frequency:{
    type:Number,
    required:true,
},
})
