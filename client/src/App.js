import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DispatcherWrapper from "./Dipatcher/Wrapper";
import DispatcherMapWrapper from "./DispatcherMap/Wrapper/Wrapper";
import MedicWrapper from "./Medic/Wrapper/Wrapper";
import Login from "./loginPage";
import { MedicDispatchPortContext } from "./utils/MedicDispatchPort"

const App = () => {

  const [ medicDispatchPort, setMedicDispatchPort ] = useState( {
    lngMedic: 1,
    latMedic: 1,
    updateLngLatMedic: ( lng, lat )=>{
      setMedicDispatchPort({ lngMedic: lng, latMedic: lat });
    }
  } )


  /////stateful
  return (
    <div>
      <MedicDispatchPortContext.Provider value={medicDispatchPort}>
        <BrowserRouter>
          <Route path="/dispatcher" exact component={DispatcherWrapper} />

          <Route path="/dispatcher/map" exact component={DispatcherMapWrapper} />
          
          <Route path="/medical" exact component={MedicWrapper} />

          <Route path="/" exact component={Login} />
        </BrowserRouter>
      </MedicDispatchPortContext.Provider>
    </div>
  );
};

export default App;
