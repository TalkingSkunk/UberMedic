import React, { useRef, useEffect, useState } from 'react';
import { Col } from "react-bootstrap";


const CallDetailsForm = () => {


    //api call to the server which will retreieve our data from the database after the victim
    //puts the info
    //use effect does the api call and set the states
    const dispatchCallDetailsForMedic = {
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
    const setDetails = (property, x) => {
      dispatchCallDetailsForMedic.property = x
    }

    const buttonArray = ['Acknowledge', 'Mobile', 'Arrived at Destination', 'Contacted Patient','Depart Destination', 'Arrived at Hospital', 'Transfer of Care', 'Clear Call']

    const [counter, setCounter] = useState(1)
    const [title, setTitle] = useState(buttonArray[0])

    const handleButton = () =>{
      if (counter <7 ) {
        setCounter(counter+1)
      } else {
        setCounter ( 0 )
      }
      setTitle(buttonArray[counter])
    }


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
          </form>

          <div>
              <button className="lol" data-bs-toggle="modal" data-bs-target="#confirmMode">{title}</button>
          </div>

          <div className="modal fade" id="confirmMode" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="confirmTitle" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="confirmTitle">{title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleButton}>Confirm</button>
                </div>
                </div>
            </div>
          </div>
        </Col>
    );
}


export default CallDetailsForm;
