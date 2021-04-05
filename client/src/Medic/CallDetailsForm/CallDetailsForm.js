import React, { useRef, useEffect, useState } from 'react';
import { Col, Card } from "react-bootstrap";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8080";


const CallDetailsForm = () => {
  const socket = socketIOClient(ENDPOINT)



  useEffect(()=>{
    socket.on('callDetailsOut', data=>{
      const callDets = JSON.parse(data)
      console.log('populating call detail form, medicside', callDets)
      setCallId(callDets._id)
      setDeployedUnit(callDets.deployedUnit)
      setStreet(callDets.streetDest)
      setCity(callDets.cityDest)
      setPostal(callDets.postalDest)
      setIntersection(callDets.intersection)
      setCallerName(callDets.callerName)
      setCallerNum(callDets.callerNum)
      setCtas(callDets.ctas)
      setCC(callDets.cc)
      setNotes(callDets.notes)
      setPolice(callDets.police)
      setFire(callDets.fire)
      setAdditional(callDets.additional)
      setRegisteredPt(callDets.registeredPt)
    })
  },[])

  // call details states
  const [callId, setCallId] = useState('')
  const [deployedUnit, setDeployedUnit] = useState([])
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [intersection, setIntersection] = useState("");
  const [callerName, setCallerName] = useState("");
  const [callerNum, setCallerNum] = useState("")
  const [ctas, setCtas] = useState("")
  const [cc, setCC] = useState("")
  const [notes, setNotes] = useState("")
  const [police, setPolice] = useState("N/A")
  const [fire, setFire] = useState("N/A")
  const [additional, setAdditional] = useState("N/A")
  const [registeredPt, setRegisteredPt] = useState("N/A")

  //button turnstile
  const buttonArray = ['Acknowledge', 'Mobile', 'Arrived at Destination', 'Contacted Patient','Depart Destination', 'Arrived at Hospital', 'Transfer of Care', 'Clear Call']
  const [counter, setCounter] = useState(1)
  const [title, setTitle] = useState(buttonArray[0])
  // when confirmed button clicks...
  const handleButton = () =>{

    // count the clicks
    if (counter <7 ) {
      setCounter(counter+1)
    } else {
      setCounter ( 0 )
    }
    setTitle(buttonArray[counter])

    // if clicked, send state of medic position 
    if (title===buttonArray[0]){
      
    }
  }


  return(

      <Col xs={12} md={6}>

        <form action="" id="readOnlyFromDispatch">
          <label htmlFor="callID">Call ID</label>
          <input type="text" id="callID" name="callID" value={callId} readOnly required />
          <br/>
          <label htmlFor="deployedUnit">Deployed Units</label>
          <input type="text" id="deployedUnit" name="callID" value={deployedUnit} readOnly required />
          <br/>
          <label htmlFor="street">Street</label>
          <input type="text" id="street" name="street" value={street} readOnly required />
          <br/>
          <label htmlFor="city">City</label>
          <input type="text" id="city" name="city" value={city} readOnly required />
          <br/>
          <label htmlFor="postal">Postal</label>
          <input type="text" id="postal" name="postal" value={postal} readOnly required />
          <br/>
          <label htmlFor="callername">Caller Name</label>
          <input type="text" id="callername" name="callername" value={callerName} readOnly required />
          <br/>
          <label htmlFor="callernum">Caller Num</label>
          <input type="text" id="callernum" name="callernum" value={callerNum} readOnly required />
          <br/>
          <label htmlFor="ctas">CTAS</label>
          <input type="text" id="ctas" name="ctas" value={ctas} readOnly required />
          <br/>
          <label htmlFor="cc">Chief Complaint</label>
          <input type="text" id="cc" name="cc" value={cc} readOnly required />
          <br/>
          <label htmlFor="notes">Notes</label>
          <input type="text" id="notes" name="notes" value={notes} readOnly required />
          <br/>
          <label htmlFor="intersection">Intersection</label>
          <input type="text" id="intersection" name="intersection" value={intersection} readOnly required />
          <br/>
          <label htmlFor="police">Police</label>
          <input type="text" id="police" name="police" value={police} readOnly required />
          <br/>
          <label htmlFor="fire">Fire</label>
          <input type="text" id="fire" name="fire" value={fire} readOnly required />
          <br/>
          <label htmlFor="medic">Additional Crew</label>
          <input type="text" id="medic" name="medic" value={additional} readOnly required />
          <br/>
          <label htmlFor="registeredPt">Registered Patient</label>
          <input type="text" id="registeredPt" name="registeredPt" value={registeredPt} readOnly required />
        </form>


        {/* button turnstile */}
        <div>
            <button className="lol" data-bs-toggle="modal" data-bs-target="#confirmMode">{title}</button>
        </div>
        {/* modal for button */}
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