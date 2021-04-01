import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function Questions () {

        return (
            <>
            <ul>
                 <h1>1.) Are you able to wake the patient?</h1>
                 <InputGroup className="mb-3">
    <InputGroup.Prepend>
    <div>
    <label>  YES</label>
    </div>
   
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />

    
    <div>
    <label>  NO</label>
    </div>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    </InputGroup.Prepend>
    
    
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
    <div>
    <label>  Breathing?</label>
    </div>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with checkbox" />
  </InputGroup> 

   <InputGroup className="mb-3">
    <InputGroup.Prepend>
    <div>
    <label> Comments?</label>
    </div>
     
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with checkbox" />
  </InputGroup>
   


                 <h1>Test</h1>
                 <h1>Test</h1>
                 <h1>Test</h1>
                 <h1>Test</h1>
                 <h1>Test</h1>
                 <h1>Test</h1>
                 <h1>Test</h1>   
            </ul>     
            </>
        )

}

export default Questions