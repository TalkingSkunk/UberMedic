const mongoose = require( 'mongoose' )
const fs = require( 'fs' )

mongoose.connect(process.env.MONGODB_URI,
   {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
console.log(process.cwd())
// include mongoose models (it will include each file in the models directory)
const db = require( './models' )

const saveCoords = (data)=>{
   db.MobileUnits.create( {
      callID: data.callID,
      unitNumber: data.unitNumber,
      CTAS: data.CTAS,
      CC: data.CC,
      location: data.location,
      intersection: data.intersection,
      police: data.police,
      fire: data.fire,
      medic: data.medic,
      coords: data.coords,
   } ).then((result)=>{
      return result;
   })
}

module.exports = saveCoords;