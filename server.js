require( 'dotenv' ).config() // looks for .env ; process.env gets it's values

const path = require('path')
const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});


const PORT = process.env.PORT || 8080





// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


if( !process.env.MONGODB_URI ){
   console.log( '*ERROR* You need a .env file (with MONGODB_URI,...)' )
   process.exit()
}



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





// listen for 'connection' event between browser and server >> callback fxn; pass the instance of the socket(object for each browser) 'socket' as parameter
  
io.on('connection', (socket)=>{

   console.log('user connected')

   socket.on('dispatchlol', msg=>console.log(msg))
   socket.on('mediclol', msg=>console.log(msg))

   socket.on('medicDest', data=>{
      console.log('relay medic destination', JSON.parse(data))
      io.emit('medicDestOut', data)
   })
   
   socket.on('medicCoords', data=>{
      console.log('relay medic coords', JSON.parse(data))
      //relay
      io.emit('medicCoordsOut', data)
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



server.listen(PORT, () => {
   console.log (`listening on *:${PORT}`)
})