import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';
import MapboxWorker from 'worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker';

mapboxgl.workerClass = MapboxWorker;
mapboxgl.accessToken = 'pk.eyJ1IjoidGFsa2luZ3NrdW5rIiwiYSI6ImNrbXYyYTAyNDAwejMydm52aThnZ3BvY3kifQ.ER8YYxoj5YJD_-8m1hNdxg';



// This defines Map then specifies that it should be rendered in the <div> with the ID of app.
const Map = () => {
    //The state stores the longitude, latitude, and zoom for the map. These values will all change as your user interacts with the map.
    const mapContainer = useRef();
    const [lng, setLng] = useState(-79.4718);
    const [lat, setLat] = useState(43.6708);
    const [zoom, setZoom] = useState(11.5);
// The Mapbox map is initialized within React's Effect hook or the componentDidMount() lifecycle method, if you are using classes. Initializing your map here ensures that Mapbox GL JS will not try to render a map before React creates the element that contains the map. You also set the following options inside the map initialization: (
    // The container option tells Mapbox GL JS to render the map inside a specific DOM element. Here, the app expects to receive a mapContainer ref. Later in this tutorial, you will assign the ref that is being referenced here to an HTML element that will act as the map container.
    // The style option defines the style that the map will use (mapbox://styles/mapbox/streets-v11).
    // The center and zoom options set the center coordinates and zoom level of the map using the values of lng, lat, and zoom that are stored in state.)
useEffect(() => {
    const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: zoom
    });
    // Add navigation control (+/- top right, and directions on top left)
    map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.addControl(
        new MapboxGeocoder({
            accessToken: mapboxgl.accessToken,
            mapboxgl: mapboxgl
        }), 'bottom-left'
    );

    if (!navigator.geolocation){
        return alert('Geolocation not supported by your browser :(')
    }
    navigator.geolocation.watchPosition(position => {
        const userCoordinates = [parseFloat(position.coords.longitude.toFixed(5)), parseFloat(position.coords.latitude.toFixed(5))];
        console.log('your location:', userCoordinates)
        var marker = new mapboxgl.Marker({
            color: "#FFFFFF",
            draggable: false,
            }).setLngLat(userCoordinates)
            .addTo(map)
            // .setPopup(new mapboxgl.Popup().setHTML("<h1>Hello World!</h1>"))
            map.addSource('my-data', {
                "type": "geojson",
                "data": {
                  "type": "Feature",
                  "geometry": {
                    "type": "Point",
                    "coordinates": userCoordinates
                  }
                }
              });
            map.flyTo({
                center: userCoordinates,
                zoom: 13
            });
}, errorLocation, {enableHighAccuracy: true});
        const errorLocation = () => {
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [lng, lat],
                zoom: zoom
            });
        }


        // getCenter(), a Mapbox GL JS method, to get the new longitude and latitude of the point at the center of the map.
        // getZoom(), a Mapbox GL JS method, to determine the zoom level that the map is set to.
        // toFixed(), a JavaScript method, to truncate the resulting floating point number to the specified number of digits.
    
    // // you need to create a function that stores the new latitude, longitude, and zoom that you get when a user interacts with the map. You will write a Mapbox GL JS map.on('move') function that sets the state to these new values when a user moves the map.
    map.on('move', () => {
        setLng(map.getCenter().lng.toFixed(4));
        setLat(map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));
    });
 


     // Clean up on unmount
     return () => map.remove();
    }, []);

  // The mapContainer ref specifies that map should be drawn to the HTML page in a new <div> element.
  return (
    <div>
    {/* <div> to display the longitude, latitude, and zoom of the map. The return statement will look like this now: */}
    <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
    </div>
      <div className="map-container" ref={mapContainer} />
    </div>
  );
}

export default Map;