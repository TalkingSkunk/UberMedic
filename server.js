require("dotenv").config(); // looks for .env ; process.env gets it's values
const signUp = require("./client/src/loginPage/controller/authController");

const path = require("path");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const mongoose = require("mongoose");
// const MongoClient = require('mongodb').MongoClient;

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
         // Users.watch().on('change',(change)=>{
         //    console.log('Something has changed')
         //    io.to(change.fullDocument._id).emit('changes',change.fullDocument)
         // })

         io.on('connection', (socket)=>{
            console.log('user connected')
         
            socket.on('dispatchlol', msg=>console.log(msg))
            socket.on('mediclol', msg=>console.log(msg))
         
            // relay medic coords to dispatchside
            socket.on('medicCoords', data=>{
               console.log('relay medic coords to dispatchside', JSON.parse(data))
               io.emit('medicCoordsOut', data)
            })
            // relay medic reqs to dispatchside
            socket.on('medReq', data=>{
               console.log('relay medic requests to dispatchside', JSON.parse(data))
               io.emit('medReqOut', data)
            })
            // relay call details to medicside (mongo)
            socket.on('callDetails', data=>{
               console.log('relay call details to medicside', JSON.parse(data))

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
