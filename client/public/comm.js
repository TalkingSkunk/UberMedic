// make socket connection from the frontend
const PORT = 8080;

const socket = io(`http://localhost:${PORT}`, {
     transports: ['websocket', 'polling', 'flashsocket']
});

document.addEventListener('DOMContentLoaded', ()=>{
    if (!navigator.geolocation){
        return alert('Geolocation not supported by your browser :(')
    }
    // 1. success fxn called with location info 2. error catch fxn
    navigator.geolocation.watchPosition((position)=>{
        //emit brand new event unrgistered yet
        socket.emit('newLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            timestamp: position.timestamp,
        })
        console.log('position:', position)
        
        
    }, (error)=>{
        alert('unable to fetch location; permission denied :(')
    })
})