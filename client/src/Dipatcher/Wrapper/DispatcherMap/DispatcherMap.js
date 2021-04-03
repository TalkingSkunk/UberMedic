import socketIOClient from 'socket.io-client'
import React, { useRef, useEffect, useState, useContext } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';

// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Col } from "react-bootstrap";
import {MedicDispatchContext} from "../../../utils/MedicDispatchContext";

// import fetchJSON from "../../../utils/API"
const ENDPOINT = "http://localhost:8080"

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoidGFsa2luZ3NrdW5rIiwiYSI6ImNrbXYyYTAyNDAwejMydm52aThnZ3BvY3kifQ.ER8YYxoj5YJD_-8m1hNdxg';




// This defines Map then specifies that it should be rendered in the <div> with the ID of app.
const DispatcherMap = () => {

    // medic position
    const [lngMed, setLngMed] = useState(0)
    const [latMed, setLatMed] = useState(0)
    
    // medic destination position
    const [lngDest, setLngDest] = useState(0)
    const [latDest, setLatDest] = useState(0)

    const [medicDispatch, setMedicDispatch] = useContext(MedicDispatchContext)
    useEffect(()=>{
        if(medicDispatch[2021].lngDest !== 0 && medicDispatch[2021].lngDest !== 0){
            // map through all objects with key value pairs
            Object.entries(medicDispatch).map((key)=>{console.log('this is the id of ambulance:', key)})

            console.log(`destination for id: [2021] >> lng: ${medicDispatch[2021].lngDest}, lat: ${medicDispatch[2021].latDest}`)
            setLngDest(parseFloat(medicDispatch[2021].lngDest.toFixed(5)))
            setLatDest(parseFloat(medicDispatch[2021].latDest.toFixed(5)))
        }
    },[medicDispatch])

    const socket = socketIOClient(ENDPOINT)

    useEffect(()=>{
        socket.on('medicCoordsOut', data=>{
            const coords = JSON.parse(data)
            console.log('receiving medic coords, dispatchside', coords)
            setLngMed(coords.lng)
            setLatMed(coords.lat)
        })

    },[])





    // const fetchCoords = async () =>{
    //     const { status, coords: {lng,lat} } = await fetchJSON( `http://localhost:8080/coords-get/3000` )
    //     console.log ( 'fetching coords from medic', lng, lat)
    //     setlngMed(lng)
    //     setlatMed(lat)
    // }

    // useEffect(()=>{
    //     setInterval(
    //         fetchCoords
    //     , 3000)
    // },[])



 




    //The state stores the longitude, latitude, and zoom for the map. These values will all change as your user interacts with the map.
    const mapContainer = useRef();
    const [lng, setLng] = useState(-79.4718);
    const [lat, setLat] = useState(43.6708);
    const [zoom, setZoom] = useState(9);



    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [lng, lat],
            zoom: zoom
        });

        if(!lngMed || !latMed){
            console.log('NO incoming medic coordinates')
            return
        }

        const medicMarker = new mapboxgl.Marker({
            color: "#000066",
            draggable: false,
            }).setLngLat([lngMed, latMed])
            .addTo(map)
        
        if (lngDest !== 0 && latDest !== 0 ){
            const medicDestMarker = new mapboxgl.Marker({
                color: "#ffffff",
                draggable: false,
                }).setLngLat([lngDest, latDest])
                .addTo(map)
        }


        map.on('load', () => {

            // Add navigation control (+/- top right, and directions on top left)
            map.addControl(new mapboxgl.NavigationControl(), 'top-right');

            // map.addControl(
            //     new MapboxGeocoder({
            //         accessToken: mapboxgl.accessToken,
            //         mapboxgl: mapboxgl
            //     }), 'bottom-left'
            // );

        })

        // map.on('move', () => {
        //     lng = (map.getCenter().lng.toFixed(4));
        //     lat = (map.getCenter().lat.toFixed(4));
        //     setZoom(map.getZoom().toFixed(2));
        // });


        // map.resize()
        // Clean up on unmount
        // return () => map.remove();
    }, [lngMed, latMed, lngDest, latDest]);

    // The mapContainer ref specifies that map should be drawn to the HTML page in a new <div> element.
    return (
        <Col>
        {/* <div> to display the longitude, latitude, and zoom of the map. The return statement will look like this now: */}

        <h1>don't be shy. step into the light</h1>
        <h1>hello there.</h1>
        <h1>don't be shy. step into the light</h1>
        <div className="map-container" ref={mapContainer} />
        </Col>
    );
}
;
export default DispatcherMap;