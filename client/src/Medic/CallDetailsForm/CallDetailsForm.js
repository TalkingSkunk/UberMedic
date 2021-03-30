import React, { useRef, useEffect, useState } from 'react';
import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const CallDetailsForm = () => {

    //api call to the server which will retreieve our data from the database after the victim
    //puts the info
    //use effect does the api call and set the states
    let dispatchCallDetailsForMedic = {
            callID: 30124,
            unitNum: 2021,
            ctas: "echo",
            cc: "shortness of breath",
            location: "1234 sunnyside dr",
            intersection: "islington and bloor",
            police: "n/a",
            fire: "on scene",
            medic: "en route"
    }
    const [ details, clearDetails ]=useState(dispatchCallDetailsForMedic)

    return(
        <Col xs={12} md={6}>
          <form action="" id="readOnlyFromDispatch">
            <label for="callID">Call ID</label>
            <input type="text" id="callID" name="callID" value={details.callID} readonly required />
            <br/>
            <label for="unitNum">Unit Number</label>
            <input type="text" id="unitNum" name="unitNum" value={details.unitNum} readonly required />
            <br/>
            <label for="ctas">ctas</label>
            <input type="text" id="ctas" name="ctas" value={details.ctas} readonly required />
            <br/>
            <label for="cc">Chief Complaint</label>
            <input type="text" id="cc" name="cc" value={details.cc} readonly required />
            <br/>
            <label for="location">Location</label>
            <input type="text" id="location" name="location" value={details.location} readonly required />
            <br/>
            <label for="intersection">Intersection</label>
            <input type="text" id="intersection" name="intersection" value={details.intersection} readonly required />
            <br/>
            <label for="police">Police</label>
            <input type="text" id="police" name="police" value={details.police} readonly required />
            <br/>
            <label for="fire">Fire</label>
            <input type="text" id="fire" name="fire" value={details.fire} readonly required />
            <br/>
            <label for="medic">Additional Crew</label>
            <input type="text" id="medic" name="medic" value={details.medic} readonly required />
            <button id="acknowledgeBtn" className="d-none">Acknowledge</button>
            <button id="mobilelBtn" className="d-none">Mobile</button>
            <button id="arrivedBtn" className="d-none">Arrived at Destination</button>
            <button id="contactBtn" className="d-none">Contacted Patient</button>
            <button id="departBtn" className="d-none">Depart Destination</button>
            <button id="hospitalBtn" className="d-none">Arrived at Hospital</button>
            <button id="tocBtn" className="d-none">Transfer of Care</button>
            <button id="clearBtn" className="d-none" onClick={ ()=>clearDetails(details={}) }>Clear Call</button>
          </form>
        </Col>
    );
}


export default CallDetailsForm;
