import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DispatcherWrapper from "./Dipatcher/Wrapper";
import MedicalWrapper from "./UnitsPage/Wrapper";
import Map from './Medic/Map';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/dispatcher" exact component={DispatcherWrapper} />

        <Route path="/medical" exact component={Map} />
        
      </BrowserRouter>
    </div>
  );
};

export default App;