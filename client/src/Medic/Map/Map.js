import openSocket from 'socket.io-client';
import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import * as MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {usePosition} from 'use-position'
import { useEmsContext, ACTIONS } from "../../utils/MedicDispatchPort"



mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken =
"pk.eyJ1IjoidGFsa2luZ3NrdW5rIiwiYSI6ImNrbXYyYTAyNDAwejMydm52aThnZ3BvY3kifQ.ER8YYxoj5YJD_-8m1hNdxg";

  

// This defines Map then specifies that it should be rendered in the <div> with the ID of app.
const Map = () => {


    const watch = true;
    const {
        longitude,
        latitude,
        timestamp,
        accuracy,
        error,
    } = usePosition(watch, {enableHighAccuracy: true})

    //dispatch function
    const [ state, dispatch ] = useEmsContext()

    useEffect(()=>{
        console.log(`MAP.JS: usePosition() gives lng: ${longitude}, lat: ${latitude}`)

        if(!longitude || !latitude){
            return
        }
        dispatch({ type: ACTIONS.SEND_COORDS, payload: {lngOut: longitude, latOut: latitude} })
        setLng(parseFloat(longitude.toFixed(5)))
        setLat(parseFloat(latitude.toFixed(5)))
    },[longitude,latitude])






    //The state stores the longitude, latitude, and zoom for the map. These values will all change as your user interacts with the map.
    const mapContainer = useRef();

    // console.log('MAP.JS props', props)
    //medic position
    let medicPosition

    const [lng, setLng] = useState(0)
    const [lat, setLat] = useState(0)
    const [zoom, setZoom] = useState(11.5);

    // destination lng, lat ( SOCKET FROM SERVER INPUT)
    let medicDestination

    const [lng2, setLng2] = useState(0)
    const [lat2, setLat2] = useState(0)
  



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


        if (lng2 && lat2) {
            medicDestination = new mapboxgl.Marker({
                color: "#000066",
                draggable: false,
                }).setLngLat([lng2, lat2])
                .addTo(map)
            // zoom in to both markers
            let bounds = new mapboxgl.LngLatBounds();
            let markers = [[lng, lat], [lng2,lat2]]
            markers.forEach( (coordinatesBounds) => {
                bounds.extend(coordinatesBounds);
            });
            map.fitBounds(bounds, {padding: 50});
        } else {
            // fly to the medic position
            map.flyTo({
                center: [lng,lat],
                zoom: 13
            });
        }


        // Clean up on unmount
        return () => map.remove();

    }, [lng,lat]);
      
      
      
    // The mapContainer ref specifies that map should be drawn to the HTML page in a new <div> element.
    return (
      <Col xs={12} md={6}>
      {/* <div> to display the longitude, latitude, and zoom of the map. The return statement will look like this now: */}
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
    </div>
        <div className="map-container" ref={mapContainer} />
      </Col>
    );

  }
  
  export default Map;