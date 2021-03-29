import React from 'react'

const CallDetails = (props) =>{
    return(
      <form id="readOnlyFromDispatch">
        <label for="callID">Call ID</label>
        <input type="text" id="callID" name="callID" value="12345" readonly required />
        <br/>
        <label for="unitNum">Unit Number</label>
        <input type="text" id="unitNum" name="unitNum" value="2021" readonly required />
        <br/>
        <label for="CTAS">CTAS</label>
        <input type="text" id="CTAS" name="CTAS" value="ECHO" readonly required />
        <br/>
        <label for="CC">Chief Complaint</label>
        <input type="text" id="CC" name="CC" value="chest pain" readonly required />
        <br/>
        <label for="location">Location</label>
        <input type="text" id="location" name="location" value="401 sunnyside dr" readonly required />
        <br/>
        <label for="intersection">Intersection</label>
        <input type="text" id="intersection" name="intersection" value="bloor st & bathurst ave" readonly required />
        <br/>
        <label for="police">Police</label>
        <input type="text" id="police" name="police" value="En Route" readonly required />
        <br/>
        <label for="fire">Fire</label>
        <input type="text" id="fire" name="fire" value="On-Scene" readonly required />
        <br/>
        <label for="medic">Additional Crew</label>
        <input type="text" id="medic" name="medic" value="En Route" readonly required />
      </form>
    )
}

export default CallDetails