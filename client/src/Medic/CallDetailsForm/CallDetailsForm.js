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
            <label htmlFor="callID">Call ID</label>
            <input type="text" id="callID" name="callID" value={details.callID} readOnly required />
            <br/>
            <label htmlFor="unitNum">Unit Number</label>
            <input type="text" id="unitNum" name="unitNum" value={details.unitNum} readOnly required />
            <br/>
            <label htmlFor="ctas">ctas</label>
            <input type="text" id="ctas" name="ctas" value={details.ctas} readOnly required />
            <br/>
            <label htmlFor="cc">Chief Complaint</label>
            <input type="text" id="cc" name="cc" value={details.cc} readOnly required />
            <br/>
            <label htmlFor="location">Location</label>
            <input type="text" id="location" name="location" value={details.location} readOnly required />
            <br/>
            <label htmlFor="intersection">Intersection</label>
            <input type="text" id="intersection" name="intersection" value={details.intersection} readOnly required />
            <br/>
            <label htmlFor="police">Police</label>
            <input type="text" id="police" name="police" value={details.police} readOnly required />
            <br/>
            <label htmlFor="fire">Fire</label>
            <input type="text" id="fire" name="fire" value={details.fire} readOnly required />
            <br/>
            <label htmlFor="medic">Additional Crew</label>
            <input type="text" id="medic" name="medic" value={details.medic} readOnly required />
          </form>

          <div>
              <button className="lol" data-bs-toggle="modal" data-bs-target="#confirmMode">{title}</button>
          </div>

          <div className="modal fade" id="confirmMode" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="confirmTitle" aria-hidden="true">
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
