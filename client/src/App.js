import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DispatcherWrapper from "./Dipatcher/Wrapper";
import MedicWrapper from "./Medic/Wrapper/Wrapper";
import Login from "./loginPage";
import MedicDispatchContext from "./utils/MedicDispatchContext";




const App = () => {

//   const data = {
//     medicDispatch: {
//     "a": {
//         lngMedic: 1,
//         latMedic: 1,
//     },
//     "b": {
//         lngMedic: 34,
//         latMedic: 34
//     }
//     },
//     setMedicDispatch: function() {}
// }

  /////stateful
  return (
    <div>
      <MedicDispatchContext.Provider >
        <BrowserRouter>
          <Route path="/dispatcher" exact component={DispatcherWrapper} />
          
          <Route path="/medical" exact component={MedicWrapper} />

          <Route path="/" exact component={Login} />
        </BrowserRouter>
      </MedicDispatchContext.Provider>
    </div>
  );
};

export default App;
