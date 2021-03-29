import React, { useState } from "react";
import "./App.css";
// import Map from "./Map";
// import { Layers, TileLayer, VectorLayer } from "./Layers";
// import { Circle as CircleStyle, Fill, Stroke, Style } from "ol/style";
// import { osm, vector } from "./Source";
// import { fromLonLat, get } from "ol/proj";
// import GeoJSON from "ol/format/GeoJSON";
// import { Controls, FullScreenControl } from "./Controls";
// import Navbar from "./Navbar/Navbar";
// import CallDetails from "./CallDetails/CallDetails";
// import socketIOClient from "socket.io-client";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DispatcherWrapper from "./Dipatcher/Wrapper";
import MedicalWrapper from "./UnitsPage/Wrapper";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/dispatcher" exact component={DispatcherWrapper} />

        <Route path="/medical" exact component={MedicalWrapper} />
      </BrowserRouter>
    </div>
  );
};

export default App;
