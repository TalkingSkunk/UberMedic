require("dotenv").config(); // looks for .env ; process.env gets it's values
const signUp = require("./client/src/loginPage/controller/authController");

const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const mongoose = require("mongoose");

var cors = require('cors')
const db = require("./app/db/models/");

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
   cors: {
      origin: "*",
   },
});

app.use(cors())

const PORT = process.env.PORT || 8080

 // mock database to placeholder documents (do not uncomment unless you want to add placeholder docs into collection of your choice!)
// db.MobileUnit.insertMany([
   
//    {
//       unit: 1517,
//       medic1: 44112,
//       medic2: 94409,
//       availability: "available",
//    },
//    {
//       unit: 1517,
//       medic1: 44112,
//       medic2: 94409,
//       availability: "available",
//    },
//    {
//       unit: 1517,
//       medic1: 44112,
//       medic2: 94409,
//       availability: "available",
//    },
//    {
//       unit: 1517,
//       medic1: 44112,
//       medic2: 94409,
//       availability: "available",
//    },
//    {
//       unit: 1517,
//       medic1: 44112,
//       medic2: 94409,
//       availability: "available",
//    },
// ])






// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (!process.env.MONGODB_URI) {
  console.log("*ERROR* You need a .env file (with MONGODB_URI,...)");
  process.exit();
}

const uri = process.env.MONGODB_URI;

// connect to db ; async task ; don't listen for requests until connection to db is complete
mongoose.connect(uri, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true } )
      .then( (result)=> { //takes in result as parameter to be used as necessary
         console.log('connected to db')
         // listen for requests (assumes use of localhost)
         server.listen(PORT, () => {
            console.log (`listening on *:${PORT}`)
         })
      
         io.on('connection', (socket)=>{
            console.log('user connected')
         
            socket.on('dispatchlol', msg=>console.log(msg))
            socket.on('mediclol', msg=>console.log(msg))
         
            // relay medic coords to dispatchside
            socket.on('medicCoords', data=>{
               console.log('relay medic coords to dispatchside', JSON.parse(data))
               io.emit('medicCoordsOut', data)
            })
            // relay dispatch choice of unit to dispatchside
            socket.on('offUnit', data=>{
               io.emit('offUnitOut', data)
               console.log('dispatch removed unit:', JSON.parse(data))
            })
            socket.on('onUnit', data=>{
               io.emit('onUnitOut', data)
               console.log('dispatch added unit:', JSON.parse(data))
            })
            // relay availablt units to dispatchside
            // socket.on('availUnits',)
            // initial populate of available units to dispatchside
            socket.on('fetchUnits', () => {
               db.MobileUnit.find({ availability: {$in:["available", "en route to CTAS Alpha-Charlie"]} }).sort({availability: 1}).then(request=>{
                  console.log('fetching available units to dispatchside', request)
                  io.emit('fetchUnitsOut', JSON.stringify(request))
               })
            })
            // relay medic reqs to dispatchside
            socket.on('medReq', data=>{
               console.log('save medic requests to db', JSON.parse(data))
               const medReqpack = JSON.parse(data)
               db.MedReq.create({
                  unit: medReqpack.unit,
                  reqFor: medReqpack.reqFor,
                  status: "active",
               }).then(()=>{
                  db.MedReq.find({status: "active"}).then(request=>{
                     console.log('sending medic reqs to dispatchside', request)
                     io.emit('medReqOut', JSON.stringify(request))
                  })
               })
            })
            // initial populate of medic requests to dispatchside
            socket.on('fetchRequests', ()=>{
               db.MedReq.find({status: "active"}).then(request=>{
                  console.log('sending medic reqs to dispatchside', request)
                  io.emit('fetchRequestsOut', JSON.stringify(request))
               })
            })
            // db.MedReq.watch().on('change',(change)=>{
            //    console.log('change to medreqs', change)
            // })
            // approve medic req
            socket.on('approveReq', data=>{
               console.log('approve medic requests, dispatchside', JSON.parse(data))
               const handleReq = JSON.parse(data)
               db.MedReq.findOneAndUpdate({
                  unit: handleReq.unit,
                  reqFor: handleReq.isFor
               }, {
                  $set: {
                     status: handleReq.status
                  }
               }).then(()=>{
                  db.MedReq.find({status: "active"}).then(request=>{
                     console.log('sending medic reqs to dispatchside', request)
                     io.emit('medReqOut', JSON.stringify(request))
                  })
               })
            })
            // reject medic req
            socket.on('rejectReq', data=>{
               console.log('reject medic requests, dispatchside', JSON.parse(data))
               const handleReq = JSON.parse(data)
               db.MedReq.findOneAndUpdate({
                  unit: handleReq.unit,
                  reqFor: handleReq.isFor
               },{
                  $set: {
                     status: handleReq.status
                  }
               }).then(()=>{
                  db.MedReq.find({status: "active"}).then(request=>{
                     console.log('sending medic reqs to dispatchside', request)
                     io.emit('medReqOut', JSON.stringify(request))
                  })
               })
            })
            //return request for registered patient name to dispatchside
            socket.on('fetchRegisteredPt', data=>{
               console.log('receiving request for registered Pt info from dispatchside', JSON.parse(data))
               const id = JSON.parse(data)
               db.RegisteredPt.find({id: id.registeredId})
               .then(patient=>{
                  console.log('this is registered patient', patient)
                  io.emit('fetchRegisteredPtOut', JSON.stringify(patient[0]))
               })
            })
            // relay call details to medicside
            socket.on('callDetails', data=>{

               // await socket.emit('callDetails', JSON.stringify({
               //    streetDest: street,
               //    cityDest: city,
               //    postalDest: postal,
               //    intersection: intersection,
               //    callerName: callerName,
               //    callerNum: callerNum,
               //    destLngLat: [destLngLat[0], destLngLat[1]],
               //    ctas: ctas,
               //    cc: cc,
               //    notes: notes,
               //    police: police,
               //    fire: fire,
               //    additional: additional,   
               //    registeredPt: registeredPt
               //  }))            

               console.log('relay call details to medicside', JSON.parse(data))
               const callPack = JSON.parse(data)
               //save to db
               


               // io.emit('callDetailsOut', data)
            })            

            // relay medic coords progress to dispatchside (colorcode and legend (e.g. arrivedHosp))








            // relay medic destination coords to medicside (to be destroyed future)
            socket.on('medicDest', data=>{
               console.log('relay medic destination to medicside', JSON.parse(data))
               io.emit('medicDestOut', data)
            })

         
            
            // socket.on('destination', async (coords)=>{
            //    // to all sockets
            //    console.log('receiving messsage from dispatch')
            //    io.emit ('returnLocation', coords)
               // let data = {
               //    callID: 112,
               //    unitNumber: 2021,
               //    CTAS: 'ECHO',
               //    CC: 'chest pain',
               //    location: '1234 sunnyside dr',
               //    intersection: 'bathurst and bloor',
               //    police: 'on scene',
               //    fire: 'on scene',
               //    medic: 'on scene',
               //    coords: coords,
               // }
         
         
            socket.on ('disconnect', reason => {
               console.log('user has disconnected :(')
            })
         
         
         })
         

    })
    .catch((err)=>{
        console.log(err)
    })



console.log ('yoyoma')

// const medicDispatchCoords = {}
// // medic sends coord to dispatch map
// app.get ( '/coords-send/:id/:lng/:lat', async (req, res)=>{
//    const {id, lng, lat} = req.params
//    medicDispatchCoords[id] = {lng, lat}
//    res.send({status: true})
// })
// // dispatch map receives medic coords
// app.get ( '/coords-get/:id', async (req, res)=>{
//    const {id} = req.params
//    const coords = medicDispatchCoords[id] || {lng:0,lat:0}
//    res.send({status: true, coords})
// })
// // dispatch input geocode to medic and dispatch map
// app.get ( '/destination-send/:id/:lng/:lat', async (req, res)=>{
//    const {id, lng, lat} = req.params
//    medicDispatchCoords[id] = {lng, lat}
//    res.send({status: true})
// } )
// // medic and dispatch maps receive dispatch input geocode
// app.get ( '/destination-get/:id', async(req,res)=>{
//    const {id} = req.params
//    const coords = medicDispatchCoords[id] || {lng:0,lat:0}
//    res.send({status:true, coords})
// })



app.post("/login", (req, res) => {
  console.log("login");
});

app.post("/signup", (req, res) => {
  console.log("test server");
  console.log(req.body, "  SERVER");
  signUp(req.body);
});

// listen for 'connection' event between browser and server >> callback fxn; pass the instance of the socket(object for each browser) 'socket' as parameter
