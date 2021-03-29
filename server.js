require( 'dotenv' ).config() // looks for .env ; process.env gets it's values

const path = require('path')
const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())


const PORT = process.env.PORT || 8080


//require socket library
const socketio = require('socket.io')

const saveCoords = require ('./app/db/orm.mobileUnitRoutes')



if( !process.env.MONGODB_URI ){
   console.log( '*ERROR* You need a .env file (with MONGODB_URI,...)' )
   process.exit()
}

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


const server = app.listen(PORT, ()=>{
   console.log(`listening to requests on PORT: ${PORT}`)
})

// socket set-up : invoke the function socket (parameter) >> waiting now for browser to connect to server


const io = socketio( server )
// io.origins(['*']);
// listen for 'connection' event between browser and server >> callback fxn; pass the instance of the socket(object for each browser) 'socket' as parameter
  
io.on('connection', (socket)=>{
   console.log(process.swd)
   console.log('user connected')
   socket.on('newLocationMessage', async (coords)=>{
      // to all sockets
      console.log('receiving messsage from react')
      socket.emit ('returnLocation', coords)
      let data = {
         callID: 112,
         unitNumber: 2021,
         CTAS: 'ECHO',
         CC: 'chest pain',
         location: '1234 sunnyside dr',
         intersection: 'bathurst and bloor',
         police: 'on scene',
         fire: 'on scene',
         medic: 'on scene',
         coords: coords,
      }
      console.log(`longitude and latitude: ${coords.longitude},${coords.latitude} at ${coords.timestamp}`)
      //send this thisloc to mongo
      // await saveCoords(data);

   })
})