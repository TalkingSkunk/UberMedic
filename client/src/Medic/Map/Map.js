import socketIOClient from 'socket.io-client'
import React, { useRef, useEffect, useState, useContext } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import * as MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {usePosition} from 'use-position'
import fetchJSON from "../../utils/API"

const ENDPOINT = "http://localhost:8080"


mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
"pk.eyJ1IjoidGFsa2luZ3NrdW5rIiwiYSI6ImNrbXYyYTAyNDAwejMydm52aThnZ3BvY3kifQ.ER8YYxoj5YJD_-8m1hNdxg";

  

// This defines Map then specifies that it should be rendered in the <div> with the ID of app.
const Map = () => {
    const socket = socketIOClient(ENDPOINT)

    useEffect(()=>{
      socket.emit("mediclol", "hello from Medicside")
    },[])

    // ambulance id
    const thisAmb = 3000;

    // const {medicDispatch, setMedicDispatch} = useContext(MedicDispatchContext)

    const watch = true;
    const {
        longitude,
        latitude,
        timestamp,
        accuracy,
        error,
    } = usePosition(watch, {enableHighAccuracy: true})



    
    useEffect(()=>{
        console.log(`MAP.JS: usePosition() gives lng: ${longitude}, lat: ${latitude}`)

        if(!longitude || !latitude){
            return
        }

        setLng(parseFloat(longitude.toFixed(5)))
        setLat(parseFloat(latitude.toFixed(5)))
        socket.emit("medicCoords", JSON.stringify ({ lng: parseFloat(longitude.toFixed(5)), lat: parseFloat(latitude.toFixed(5)), timestamp: timestamp }) )
        console.log('sending medic coords to dispatchside')

    },[longitude,latitude])


    useEffect(()=>{
        socket.on('callDetailsOut', data=>{
            const callDets = JSON.parse(data)
            console.log('receiving dest coords, medicside', callDets.destLngLat)
            setLngDest(callDets.destLngLat[0])
            setLatDest(callDets.destLngLat[1])
        })
    },[])







    //The state stores the longitude, latitude, and zoom for the map. These values will all change as your user interacts with the map.
    const mapContainer = useRef();

    // console.log('MAP.JS props', props)
    //medic position
    let medicPosition

    const [lng, setLng] = useState(0)
    const [lat, setLat] = useState(0)
    const [zoom, setZoom] = useState(11.5);

    // destination lng, lat
    let medicDestination

    //receive destination coords
    // const fetchDestCoords = async () =>{
    //     const { status, coords: {lngDest,latDest} } = await fetchJSON( `http://localhost:8080/destination-get/${thisAmb}` )
    //     console.log ( 'fetching coords for destination', lngDest, latDest)
    //     if (lngDest !==0 && latDest !==0){
    //         setlngDest(lngDest)
    //         setlatDest(latDest)
    //     }
    // }
    // useEffect(()=>{
    //     setInterval(
    //         fetchDestCoords
    //     , 2000)
    // },[])


    const [lngDest, setLngDest] = useState(0)
    const [latDest, setLatDest] = useState(0)
  


    useEffect(() => {
        console.log('this is useEffect in the map.js: Installing MAPBOX MAP')

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [lng, lat],
            zoom: zoom
        });

        if (!navigator.geolocation){
            return alert('Geolocation not supported by your browser :(')
        }

  
        map.on('load', () => {
            // Add navigation control (+/- top right, and directions on top left)
            map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        })

        medicPosition = new mapboxgl.Marker({
            color: "#000066",
            draggable: false,
            }).setLngLat([lng, lat])
            .addTo(map)


        if (lngDest && latDest) {
            medicDestination = new mapboxgl.Marker({
                color: "#000066",
                draggable: false,
                }).setLngLat([lngDest, latDest])
                .addTo(map)
            // zoom in to both markers
            let bounds = new mapboxgl.LngLatBounds();
            let markers = [[lng, lat], [lngDest,latDest]]
            markers.forEach( (coordinatesBounds) => {
                bounds.extend(coordinatesBounds);
            });
            map.fitBounds(bounds, {padding: 50});
        } else {
            // fly to the medic position
            map.addControl(new mapboxgl.GeolocateControl({
                positionOptions: {
                enableHighAccuracy: true
                },
                trackUserLocation: true
                }));
        }


        // Clean up on unmount
        // return () => map.remove();

    }, [lng,lat]);
      
      
      
    // The mapContainer ref specifies that map should be drawn to the HTML page in a new <div> element.
    return (
      <Col xs={12} md={6}>
      {/* <div> to display the longitude, latitude, and zoom of the map. The return statement will look like this now: */}
      {/* <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom} */}
    {/* </div> */}
        <div className="map-container" ref={mapContainer} />
      </Col>
    );

  }
  
  export default Map;