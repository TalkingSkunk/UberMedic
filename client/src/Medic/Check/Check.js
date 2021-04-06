 
//  import React, { useRef, useEffect, useState } from 'react';


//  //button turnstile
//  const buttonArray = ['Acknowledge', 'Mobile', 'Arrived at Destination', 'Contacted Patient','Depart Destination', 'Arrived at Hospital', 'Transfer of Care', 'Clear Call']
//  const [counter, setCounter] = useState(1)
//  const [title, setTitle] = useState(buttonArray[0])
//  // when confirmed button clicks...
//  const handleButton = () =>{

//    // count the clicks
//    if (counter <7 ) {
//      setCounter(counter+1)
//    } else {
//      setCounter ( 0 )
//    }
//    setTitle(buttonArray[counter])

//    // if clicked, send state of medic position 
//    if (title===buttonArray[0]){
     
//    }
//  }
 
//  function Check (){
//      return(

        
// <div>
//  <button className="lol" data-bs-toggle="modal" data-bs-target="#confirmMode">{title}</button>
// </div>
// <div className="modal fade" id="confirmMode" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="confirmTitle" aria-hidden="true">
// <div className="modal-dialog">
//    <div className="modal-content">
//    <div className="modal-header">
//        <h5 className="modal-title" id="confirmTitle">{title}</h5>
//        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//    </div>
//    <div className="modal-footer">
//        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleButton}>Confirm</button>
//    </div>
//    </div>

//    </div>
//    </>

//      );
//  } export default Check;