import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';

// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Col } from "react-bootstrap";

import openSocket from 'socket.io-client';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoidGFsa2luZ3NrdW5rIiwiYSI6ImNrbXYyYTAyNDAwejMydm52aThnZ3BvY3kifQ.ER8YYxoj5YJD_-8m1hNdxg';


const socket = openSocket('http://localhost:8080');



let marker
let lng = -79.4718
let lat = 43.6708

// This defines Map then specifies that it should be rendered in the <div> with the ID of app.
const Map = () => {
    
    //The state stores the longitude, latitude, and zoom for the map. These values will all change as your user interacts with the map.
    const mapContainer = useRef();
    // const [lng, setLng] = useState(-79.4718);
    // const [lat, setLat] = useState(43.6708);
    const [zoom, setZoom] = useState(11.5);


    
    

    

useEffect(() => {
    

    const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
    });
    marker = new mapboxgl.Marker({
        color: "#000066",
        draggable: false,
        }).setLngLat([lng, lat])
        .addTo(map)
    map.on('load', () => {

        socket.on('receiveMedicPosition', data => {
            lng = data.longitude;
            lat = data.latitude;
            if (marker) {
                marker.setLngLat([lng,lat])
            }
            map.flyTo({
                center: [lng,lat],
                zoom: 13
            });
            // setLng(data.longitude)
            // setLat(data.latitude)
            console.log('receiving from server', data)
          });
        // window.setInterval(function () {
        //     console.log( `adjusing the coordsz; ${lat}, ${lng}` )
        //     marker.setLngLat([lng, lat]).addTo(map)
        //  }, 2000 )
        // Add navigation control (+/- top right, and directions on top left)
        map.addControl(new mapboxgl.NavigationControl(), 'top-right');

        map.addControl(
            new MapboxGeocoder({
                accessToken: mapboxgl.accessToken,
                mapboxgl: mapboxgl
            }), 'bottom-left'
        );




    })



        // getCenter(), a Mapbox GL JS method, to get the new longitude and latitude of the point at the center of the map.
        // getZoom(), a Mapbox GL JS method, to determine the zoom level that the map is set to.
        // toFixed(), a JavaScript method, to truncate the resulting floating point number to the specified number of digits.
    
    // // you need to create a function that stores the new latitude, longitude, and zoom that you get when a user interacts with the map. You will write a Mapbox GL JS map.on('move') function that sets the state to these new values when a user moves the map.
    map.on('move', () => {
        lng = (map.getCenter().lng.toFixed(4));
        lat = (map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));
    });
 


     // Clean up on unmount
     return () => map.remove();
}, []);

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
