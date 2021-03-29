import React, { useState, useEffect } from 'react';
import './App.css';
import Map from "./Map";
import { Layers, TileLayer, VectorLayer } from "./Layers";
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style';
import { osm, vector } from "./Source";
import { fromLonLat, get } from 'ol/proj';
import GeoJSON from 'ol/format/GeoJSON';
import { Controls, FullScreenControl } from "./Controls";
import Navbar from "./Navbar/Navbar"
import CallDetails from "./CallDetails/CallDetails"
import { io } from "socket.io-client";

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
    }, (error)=>{
        alert('unable to fetch location; permission denied :(')
    })
})










const App = () => {

	useEffect(()=>{
		//listen for events
		socket.on('returnLocation', data=>{
			console.log('your position is:', data)
			// setCenter(center = [data.longitude, data.latitude])
		})
	}, [])


	return (
		<div>
        	<Navbar />
				<CallDetails />
		</div>	
	);
}

export default App;