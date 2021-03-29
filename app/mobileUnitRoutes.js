const express = require ( 'express' )
//create a new express router instance (kind of like a mini-app)
const router = express.Router()

//ROUTE HANDLERS
// 2 arguments (what path of URL you want to listen to, callback fxn that takes in req and res objects)

router.get('/', async (req, res)=>{
   console.log('posting to mobileunit', req.body)
   let result = await orm.saveCoords ( {
      unitNumber: req.body.unitNumber,
      callID: req.body.callID,
      CTAS: req.body.CTAS,
      CC: req.body.CC,
      location: req.body.location,
      intersection: req.body.intersection,
      police: req.body.police,
      fire: req.body.fire,
      medic: req.body.medic,
      coords: req.body.coords,
      coords: req.body.coords,
   })
   console.log('result of sending coords', result)
   res.send(result);
})

module.exports = router // export this mini-app




