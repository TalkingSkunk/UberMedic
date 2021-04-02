import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';

// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import { Col } from "react-bootstrap";
import { useEmsContext } from "../../utils/MedicDispatchPort"

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoidGFsa2luZ3NrdW5rIiwiYSI6ImNrbXYyYTAyNDAwejMydm52aThnZ3BvY3kifQ.ER8YYxoj5YJD_-8m1hNdxg';



// This defines Map then specifies that it should be rendered in the <div> with the ID of app.
const Map = (props) => {

    const [ state, dispatch ]= useEmsContext()
    dispatch({ type: ACTIONS.RECEIVE_COORDS, payload: {lngOut: longitude, latOut: latitude} })
    console.log(`MEDIC COORDS: lngOut: ${lngOut}, latOut: ${latOut}`)


    //medic position
    const [lngIncoming, setLngIncoming] = useState(lng)
    const [latIncoming, setLatIncoming] = useState(lat)
    
    //The state stores the longitude, latitude, and zoom for the map. These values will all change as your user interacts with the map.
    const mapContainer = useRef();
    const [lng, setLng] = useState(-79.4718);
    const [lat, setLat] = useState(43.6708);
    const [zoom, setZoom] = useState(11.5);



    useEffect(() => {

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/dark-v11',
            center: [lng, lat],
            zoom: zoom
        });

        if(!lngIncoming || !latIncoming){
            console.log('NO incoming medic coordinates')
            return
        }

        let marker = new mapboxgl.Marker({
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

        map.on('move', () => {
            lng = (map.getCenter().lng.toFixed(4));
            lat = (map.getCenter().lat.toFixed(4));
            setZoom(map.getZoom().toFixed(2));
        });
    

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

export default Map;
