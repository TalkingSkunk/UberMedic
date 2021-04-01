import React from 'react'
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import ModalInFunctionalComponent from '../../Wrapper/Questions/modal2/modal2'
import '../Questions/Questions.css'


function Questions () {

        return (
            <>

          <h1 >Screening Form</h1>
            <ul>
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

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
    <div>
    <label> Comments</label>
    </div>
   
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with checkbox" />
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

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
    <div>
    <label> Comments</label>
    </div>
   
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with checkbox" />
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

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
    <div>
    <label> Comments</label>
    </div>
   
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with checkbox" />
  </InputGroup> 
            </ul>     

{/* <div >
<Button variant= 'primary'> Alpha </Button>
<Button variant= 'info'> Bravo </Button>
<Button variant= 'btn btn-success'> Charlie </Button>
<Button variant= 'btn btn-warning'> Delta  </Button>
<Button variant= 'btn btn-danger'> Echo </Button>

</div> */}

{/* <Container>
  <Row>
    <Col sm={8}><strong> Select Approriate Scenario</strong> </Col>
    <Col sm={4}> <strong> LEGEND </strong></Col>
  </Row>
  <Row>
    <Col sm><Button variant= 'primary'> Alpha </Button></Col>

    <Col sm><Button variant= 'primary'> Alpha </Button> Non Serious or non life threatening</Col>
  </Row>
  <Row>
  <Col sm><Button variant= 'info'> Bravo </Button></Col>

  <Col sm><Button variant= 'info'> Bravo </Button>    Serious not life threatening – urgent</Col>
  </Row>
  <Row>
  <Col sm><Button variant= 'btn btn-success'> Charlie </Button></Col>

  <Col sm><Button variant= 'btn btn-success'> Charlie </Button>   Serious not life threatening – immediate</Col>
  </Row>
  <Row>
  <Col sm><Button variant= 'btn btn-warning'> Delta  </Button></Col>
  
  <Col sm><Button variant= 'btn btn-warning'> Delta  </Button> Life threatening other than cardiac or respiratory arrest</Col>
  </Row>
  <Row>
  <Col sm><Button variant= 'btn btn-danger'> Echo </Button></Col>

  <Col sm><Button variant= 'btn btn-danger'> Echo </Button>         Life threatening – Cardiac or respiratory arrest</Col>
  </Row>

</Container> */}


<CardDeck >


<Card className="text-center" >
      <Card.Header>SEVERITY LEVELS</Card.Header>
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