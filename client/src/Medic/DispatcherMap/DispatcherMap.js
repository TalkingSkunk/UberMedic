import React, { useRef, useEffect, useState, useContext } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';

// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Col } from "react-bootstrap";
import MedicDispatchContext from "../../utils/MedicDispatchContext";

import fetchJSON from "../../utils/API"

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoidGFsa2luZ3NrdW5rIiwiYSI6ImNrbXYyYTAyNDAwejMydm52aThnZ3BvY3kifQ.ER8YYxoj5YJD_-8m1hNdxg';




// This defines Map then specifies that it should be rendered in the <div> with the ID of app.
const DispatcherMap = () => {
    const [lngIncoming, setLngIncoming] = useState(0)
    const [latIncoming, setLatIncoming] = useState(0)

    const fetchCoords = async () =>{
        const { status, coords: {lng,lat} } = await fetchJSON( `http://localhost:8080/coords-get/3000` )
        console.log ( 'fetching coords from medic', lng, lat)
        setLngIncoming(lng)
        setLatIncoming(lat)
    }

    useEffect(()=>{
        setInterval(
            fetchCoords
        , 3000)
    },[])


    const {medicDispatch, setMedicDispatch} = useContext(MedicDispatchContext)
    
    // map through all objects with key value pairs
    Object.entries(medicDispatch).map((key)=>{console.log('this is the id of ambulance:', key)})

    // console.log(`MEDIC COORDS: id: [2021] lngOut: ${medicDispatch[2021].lngMedic}, latOut: ${medicDispatch[2021].latMedic}`)


    //medic position
    // const [lngIncoming, setLngIncoming] = useState(0)
    // const [latIncoming, setLatIncoming] = useState(0)
    
    //The state stores the longitude, latitude, and zoom for the map. These values will all change as your user interacts with the map.
    const mapContainer = useRef();
    const [lng, setLng] = useState(-79.4718);
    const [lat, setLat] = useState(43.6708);
    const [zoom, setZoom] = useState(11);



    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v10',
            center: [lng, lat],
            zoom: zoom
        });

        if(!lngIncoming || !latIncoming){
            console.log('NO incoming medic coordinates')
            return
        }

        new mapboxgl.Marker({
            color: "#000066",
            draggable: false,
            }).setLngLat([lngIncoming, latIncoming])
            .addTo(map)


        map.on('load', () => {

            // Add navigation control (+/- top right, and directions on top left)
            map.addControl(new mapboxgl.NavigationControl(), 'top-right');

            map.addControl(
                new MapboxGeocoder({
                    accessToken: mapboxgl.accessToken,
                    mapboxgl: mapboxgl
                }), 'bottom-left'
            );

        })

        // map.on('move', () => {
        //     lng = (map.getCenter().lng.toFixed(4));
        //     lat = (map.getCenter().lat.toFixed(4));
        //     setZoom(map.getZoom().toFixed(2));
        // });
    

        // map.resize()
        // Clean up on unmount
        return () => map.remove();
    }, [lngIncoming, latIncoming]);

    // The mapContainer ref specifies that map should be drawn to the HTML page in a new <div> element.
    return (
        <Col>
        {/* <div> to display the longitude, latitude, and zoom of the map. The return statement will look like this now: */}
        <h1>hello tehree</h1>
        <br/>
        <h1>don't be shy. step into the light</h1>
        <h1>hello tehree</h1>
        <br/>
        <h1>don't be shy. step into the light</h1>
        <h1>hello tehree</h1>
        <br/>
        <h1>don't be shy. step into the light</h1>
        <div className="sidebar">
            Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div className="map-container" ref={mapContainer} />
        </Col>
    );
}

export default DispatcherMap;
