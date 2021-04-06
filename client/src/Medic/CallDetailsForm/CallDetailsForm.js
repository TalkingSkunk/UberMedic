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

    <Card style={{height:"fit-content", width: "fit-content"}}>
    <h3  style={{fontWeight: "bolder"}}>DISPATCH INFORMATION</h3>
<Col >

        <form action="" id="readOnlyFromDispatch">
          <label htmlFor="callID" style={{ fontWeight:"bolder", marginRight:"100px"}} >Call ID</label>
          <input type="text" id="callID" name="callID"  style={{marginBottom:"5px"}} value={callId} readOnly required />
          <br/>
          <label htmlFor="deployedUnit" style={{ fontWeight:"bolder", marginRight:"32px"}} >Deployed Units</label>
          <input type="text" id="deployedUnit" name="callID" style={{marginBottom:"5px"}} value={deployedUnit} readOnly required />
          <br/>
          <label htmlFor="street" style={{ fontWeight:"bolder", marginRight:"102px"}} >Street</label>
          <input type="text" id="street" name="street" style={{marginBottom:"5px"}}  value={street} readOnly required />
          <br/>
          <label htmlFor="city" style={{ fontWeight:"bolder", marginRight:"119px"}} >City</label>
          <input type="text" id="city" name="city" style={{marginBottom:"5px"}} value={city} readOnly required />
          <br/>
          <label htmlFor="postal" style={{ fontWeight:"bolder", marginRight:"102px"}} >Postal</label>
          <input type="text" id="postal" name="postal" style={{marginBottom:"5px"}} value={postal} readOnly required />
          <br/>
          <label htmlFor="callername" style={{ fontWeight:"bolder", marginRight:"56px"}} >Caller Name</label>
          <input type="text" id="callername" name="callername" style={{marginBottom:"5px"}} value={callerName} readOnly required />
          <br/>
          <label htmlFor="callernum" style={{ fontWeight:"bolder", marginRight:"64px"}} >Caller Num</label>
          <input type="text" id="callernum" name="callernum" style={{marginBottom:"5px"}} value={callerNum} readOnly required />
          <br/>
          <label htmlFor="ctas" style={{ fontWeight:"bolder", marginRight:"109px"}} >CTAS</label>
          <input type="text" id="ctas" name="ctas" style={{marginBottom:"5px"}} value={ctas} readOnly required />
          <br/>
          <label htmlFor="cc" style={{ fontWeight:"bolder", marginRight:"26px"}} >Chief Complaint</label>
          <input type="text" id="cc" name="cc" style={{marginBottom:"5px"}}  value={cc} readOnly required />
          <br/>
          <label htmlFor="notes" style={{ fontWeight:"bolder", marginRight:"105px"}} >Notes</label>
          <input type="text" id="notes" name="notes" style={{marginBottom:"5px"}} value={notes} readOnly required />
          <br/>
          <label htmlFor="intersection" style={{ fontWeight:"bolder", marginRight:"57px"}} >Intersection</label>
          <input type="text" id="intersection" name="intersection" style={{marginBottom:"5px"}} value={intersection} readOnly required />
          <br/>
          <label htmlFor="police" style={{ fontWeight:"bolder", marginRight:"104px"}} >Police</label>
          <input type="text" id="police" name="police" style={{marginBottom:"5px"}} value={police} readOnly required />
          <br/>
          <label htmlFor="fire" style={{ fontWeight:"bolder", marginRight:"123px"}}>Fire</label>
          <input type="text" id="fire" name="fire" style={{marginBottom:"5px"}} value={fire} readOnly required />
          <br/>
          <label htmlFor="medic" style={{ fontWeight:"bolder", marginRight:"29px"}}>Additional Crew</label>
          <input type="text" id="medic" name="medic" style={{marginBottom:"5px"}} value={additional} readOnly required />
          <br/>
          <label htmlFor="registeredPt" style={{ fontWeight:"bolder", marginRight:"10px"}}>Registered Patient</label>
          <input type="text" id="registeredPt" name="registeredPt" style={{marginBottom:"5px"}}  value={registeredPt} readOnly required />
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
        </Card>
  );
}


export default CallDetailsForm;