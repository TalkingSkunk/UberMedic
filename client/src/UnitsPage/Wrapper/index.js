import React, { useState } from "react";
// import "./App.css";
import Map from "../Map";
import { Layers, TileLayer, VectorLayer } from "../Layers";
import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
import { osm, vector } from "../Source";
import { fromLonLat, get } from "ol/proj";
import GeoJSON from "ol/format/GeoJSON";
import { Controls, FullScreenControl } from "../Controls";
import Navbar from "../Navbar/Navbar";
import CallDetails from "../CallDetails/CallDetails";
import socketIOClient from "socket.io-client";

const socket = socketIOClient("http://localhost:3000");

document.addEventListener("DOMContentLoaded", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation not supported by your browser :(");
  }
  // 1. success fxn called with location info 2. error catch fxn
  navigator.geolocation.watchPosition(
    (position) => {
      //emit brand new event unrgistered yet
      socket.emit("newLocationMessage", {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        timestamp: position.timestamp,
      });
      console.log("position:", position);
    },
    (error) => {
      alert("unable to fetch location; permission denied :(");
    }
  );
});

let styles = {
  Point: new Style({
    image: new CircleStyle({
      radius: 10,
      fill: null,
      stroke: new Stroke({
        color: "magenta",
      }),
    }),
  }),
};

const Medical = () => {
  const [center, setCenter] = useState([-79.51039453904934, 43.64672462788966]);
  const [zoom, setZoom] = useState(11.5);
  const [showLayer1, setShowLayer1] = useState(true);
  const [showLayer2, setShowLayer2] = useState(true);
  return (
    <div>
      <Navbar />
      <CallDetails />

      <Map center={fromLonLat(center)} zoom={zoom}>
        <Layers>
          <TileLayer source={osm()} zIndex={0} />
        </Layers>
        <Controls>
          <FullScreenControl />
        </Controls>
      </Map>
    </div>
  );
};

export default Medical;
