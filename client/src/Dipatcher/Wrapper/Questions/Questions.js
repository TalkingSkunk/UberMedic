import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import ModalInFunctionalComponent from '../../Wrapper/Questions/modal2/modal2'
import Form from 'react-bootstrap/Form'
import './Questions.css'


function Questions () {

        return (
            <>
            <ul>
              <h1>Screening Questions</h1>
        {/* QUESTION 1 */}
                 <h2>1.) Is the patient conscious?</h2>
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

 

  {/* QUESTION 2 */}

  <h2>2.) Is the Patient breathing? </h2>
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

  

    {/* QUESTION 3 */}


    <h2>3.) Is the patient bleeding? </h2>
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

  
            </ul>     


<CardDeck >

<Card className="text-center" >
      <Card.Header>Recommended Severity Levels</Card.Header>
      <Card.Body>
        <Card.Title > SELECT ONE</Card.Title>
    
    <div>
        <Button variant= 'primary'> Alpha </Button>
        <Button variant= 'info'> Bravo </Button>
        <Button variant= 'btn btn-success'> Charlie </Button>
        <Button variant= 'btn btn-warning'> Delta  </Button>
        <Button variant= 'btn btn-danger'> Echo </Button>
        </div>
      </Card.Body>
     
      <Col sm> <ModalInFunctionalComponent/></Col>
      <Card.Footer className="text-muted"><Button variant="primary">Submit</Button></Card.Footer>
    </Card>





    
<Card className="text-center" >
      <Card.Header>CHIEF COMPLIANT</Card.Header>
      <Card.Body>
        <Card.Title >IMPORTANT DETAILS ONLY <i class="fas fa-info-circle"></i></Card.Title>
    
    <div>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
        </div>
      </Card.Body>

      <Card.Footer className="text-muted"><Button variant="primary">Submit</Button></Card.Footer>
    </Card>



    
<Card className="text-center" >
      <Card.Header>NOTES</Card.Header>
      <Card.Body>
      <Card.Title >ADDITIONAL DETAILS TO NOTE </Card.Title>
      <div>
    <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
        </div>
      </Card.Body>
     
      <Card.Footer className="text-muted"><Button variant="primary">Submit</Button></Card.Footer>
    </Card>

</CardDeck>
            </>

        )

}

export default Questions