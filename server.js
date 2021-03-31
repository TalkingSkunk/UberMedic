require( 'dotenv' ).config() // looks for .env ; process.env gets it's values

const path = require('path')
const express = require('express')
const app = express()
// var cors = require('cors')
// app.use(cors())

const server = require("http").createServer();
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
// listen for 'connection' event between browser and server >> callback fxn; pass the instance of the socket(object for each browser) 'socket' as parameter
  
io.on('connection', (socket)=>{

   console.log('user connected')

   socket.on('lol', msg=>console.log(msg))
   
   socket.on('medicPosition', data=>{
      console.log(`receiving coordinate from medicside: lng ${data.longitude}, lat ${data.latitude} at time ${data.timestamp}`)
      io.emit('receiveMedicPosition', data)
   })
   
   // socket.on('newLocationMessage', async (coords)=>{
   //    // to all sockets
   //    console.log('receiving messsage from react')
   //    io.emit ('returnLocation', coords)
   //    let data = {
   //       callID: 112,
   //       unitNumber: 2021,
   //       CTAS: 'ECHO',
   //       CC: 'chest pain',
   //       location: '1234 sunnyside dr',
   //       intersection: 'bathurst and bloor',
   //       police: 'on scene',
   //       fire: 'on scene',
   //       medic: 'on scene',
   //       coords: coords,
   //    }


   socket.on ('disconnect', reason => {
      console.log('user has disconnected :(')
   })


})



server.listen(PORT, () => {
   console.log (`listening on *:${PORT}`)
})