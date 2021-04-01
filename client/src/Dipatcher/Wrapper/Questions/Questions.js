import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

function Questions () {

        return (
            <>
            <ul>
        {/* QUESTION 1 */}
                 <h1>1.) Is the patient conscious?</h1>
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
    <label> Comments</label>
    </div>
   
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with checkbox" />
  </InputGroup> 


  {/* QUESTION 2 */}

  <h1>2.) Is the Patient breathing? </h1>
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
    <label> Comments</label>
    </div>
   
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with checkbox" />
  </InputGroup> 

    {/* QUESTION 3 */}


    <h1>3.) Is the patient bleeding? </h1>
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
    <label> Comments</label>
    </div>
   
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with checkbox" />
  </InputGroup> 
            </ul>     

<Button variant= 'primary'> Alpha </Button>
<Button variant= 'btn btn-success'> Bravo </Button>
<Button variant= 'btn btn-warning'> Charlie </Button>
<Button variant= 'btn btn-warning'> Delta </Button>
<Button variant= 'btn btn-danger'> Echo </Button>


            </>
        )

}

export default Questions