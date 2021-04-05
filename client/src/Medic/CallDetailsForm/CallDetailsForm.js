import React, { useRef, useEffect, useState } from 'react';
import { Col, Card } from "react-bootstrap";



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

// if clicked, send state of medic position 
      if (title===buttonArray[0]){
        
      }
    }


    return(


          <Card style={{height:"fit-content", width: "fit-content"}}>
            <h3  style={{fontWeight: "bolder"}}>DISPATCH INFORMATION</h3>
        <Col >
          <form action="" id="readOnlyFromDispatch">
            <label htmlFor="callID" style={{ fontWeight:"bolder"}} >Call ID</label>
            <div>
            <input type="text" id="callID" name="callID" style={{marginBottom:"5px"}} value={details.callID} readOnly required />
            </div>
         
            <label htmlFor="ctas" style={{fontWeight:"bolder"}} >CTAS</label>
            <div>
            <input type="text" id="ctas" name="ctas" style={{marginBottom:"5px"}} value={details.ctas} readOnly required />
            </div>
      
            <label htmlFor="cc" style={{marginRight: "14px", fontWeight:"bolder"}} >Chief Complaint</label>
            <div>
            <input type="text" id="cc" name="cc" style={{marginBottom:"5px"}}  value={details.cc} readOnly required />
            </div>
  
            <label htmlFor="location" style={{marginRight: "14px", fontWeight:"bolder"}} >Location</label>
            <div>
            <input type="text" id="location" name="location"  style={{marginBottom:"5px"}} value={details.location} readOnly required />
            </div>
    
            <label htmlFor="intersection" style={{marginRight: "14px", fontWeight:"bolder"}} >Intersection</label>
           <div>
            <input type="text" id="intersection" name="intersection" style={{marginBottom:"5px"}}  value={details.intersection} readOnly required />
            </div>

         
            <label htmlFor="police" style={{marginRight: "14px", fontWeight:"bolder"}} >Police</label>
            <div>
            <input type="text" id="police" name="police" style={{marginBottom:"5px"}} value={details.police} readOnly required />
            </div>
            
            <label htmlFor="fire" style={{marginRight: "14px", fontWeight:"bolder"}}>Fire</label>
            <div>
            <input type="text" id="fire" name="fire" style={{marginBottom:"5px"}} value={details.fire} readOnly required />
            </div>
            <label htmlFor="medic" style={{marginRight: "14px", fontWeight:"bolder"}}>Additional Crew</label>
            <div>
            <input type="text" id="medic" name="medic" style={{marginBottom:"5px"}}  value={details.medic} readOnly required />
            </div>
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
        </Card>
    );
}


export default CallDetailsForm;
