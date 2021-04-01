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


{/* NEAREST AMBULANCE */}
    {/* <Card className="text-center" >
      <Card.Header>LEGEND</Card.Header>
      <Card.Body >
        <Row>
        <Col sm><Button variant= 'primary'> Alpha </Button> Non Serious or non life threatening</Col>
        </Row>
        <Row>
        <Col sm><Button variant= 'info'> Bravo </Button>Serious not life threatening – urgent</Col>
        </Row>
        <Row>
        <Col sm><Button variant= 'btn btn-success'> Charlie </Button> Serious not life threatening – immediate</Col>
        </Row>
        <Row>
        <Col sm><Button variant= 'btn btn-warning'> Delta  </Button> Life threatening other than cardiac or respiratory arrest</Col>
        </Row>
        <Row>
        <Col sm><Button variant= 'btn btn-danger'> Echo </Button>  Life threatening – Cardiac or respiratory arrest</Col>
        </Row>
      */}
     {/* <Button variant= 'primary'> Alpha </Button> Non Serious or non life threatening
     <Button variant= 'info'> Bravo </Button>Serious not life threatening – urgent
     <Button variant= 'btn btn-success'> Charlie </Button> Serious not life threatening 
     <Button variant= 'btn btn-warning'> Delta  </Button> Life threatening other than cardiac or respiratory arrest
     <Button variant= 'btn btn-danger'> Echo </Button>  Life threatening – Cardiac or respiratory arrest */}

      {/* </Card.Body>
      <Card.Footer className="text-muted">Submitted/not submitted</Card.Footer>
    </Card> */}

</CardDeck>
            </>

        )

}

export default Questions