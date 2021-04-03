import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DispatcherWrapper from "./Dipatcher/Wrapper";
import MedicWrapper from "./Medic/Wrapper/Wrapper";
import Login from "./loginPage";
import {MedicDispatchProvider} from "./utils/MedicDispatchContext";




const App = () => {


  /////stateful
  return (
    <div>
      <MedicDispatchProvider >
        <BrowserRouter>
          <Route path="/dispatcher" exact component={DispatcherWrapper} />
          
          <Route path="/medical" exact component={MedicWrapper} />

          <Route path="/" exact component={Login} />
        </BrowserRouter>
      </MedicDispatchProvider>
    </div>
  );
};

export default App;
