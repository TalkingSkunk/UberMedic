import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DispatcherWrapper from "./Dipatcher/Wrapper";
import DispatcherMapWrapper from "./DispatcherMap/Wrapper/Wrapper";
import MedicWrapper from "./Medic/Wrapper/Wrapper";
import Login from "./loginPage";

const App = () => {
  /////stateful
  return (
    <div>
      <BrowserRouter>
        <Route path="/dispatcher" exact component={DispatcherWrapper} />

        <Route path="/dispatcher/map" exact component={DispatcherMapWrapper} />
        
        <Route path="/medical" exact component={MedicWrapper} />
        <Route path="/" exact component={Login} />
      </BrowserRouter>
    </div>
  );
};

export default App;
