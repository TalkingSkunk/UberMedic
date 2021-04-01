import React from 'react';
import './style.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import CardDeck from 'react-bootstrap/CardDeck';
import CardText from 'react-bootstrap/CardDeck';
import 'bootstrap/dist/css/bootstrap.min.css';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import ModalInFunctionalComponent from '../Wrapper/modal/modal'






// function Example() {
//   const [show, setShow] = useState(true);

//   const handleClose = () => setShow(true);
//   const handleShow = () => setShow(true);

//   return (
//     <div>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>
//       <Modal show={true} onHide={handleClose} animation={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }



function Dispatch() {
  
    return (
  
<div >

<CardDeck >

{/* INCIDENT LOCATION CARD */}
  <Card className="text-center" >
      <Card.Header>INCIDENT LOCATION</Card.Header>
      <Card.Body>
       
    
<Form>
  

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridState">
      <Form.Label>Province</Form.Label>
      <Form.Control as="select" defaultValue="Choose...">
        <option>Ontario</option>
        <option>Quebec</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Postal Code</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>

</Form>
      
      </Card.Body>
      <Card.Footer className="text-muted"><Button variant="primary">Submit</Button></Card.Footer>
    </Card>



{/* CALLER INFOMATION CARD*/}
    <Card className="text-center" >
      <Card.Header>CALLER INFORMATION</Card.Header>
      <Card.Body>
      
        <form> 
         <div>
           <label> Name of Caller</label>
         <input/>
         </div>
         <div>
         <label > Phone number</label>
         <input/>
         </div>
         <div>
         <label> Postal/ZIP code</label>
         <input/>
         </div>
       </form>
        
      </Card.Body>
      <Card.Footer className="text-muted"><Button variant="primary">Submit</Button></Card.Footer>
    </Card>
</CardDeck>

{/* MEDICAL QUESTIONS */}
<CardDeck >

<Card className="text-center" >
      <Card.Header>ECHO SCRENNING</Card.Header>
      <Card.Body>
        <Card.Title > Medical Questions</Card.Title>
    
        <Button variant="primary"  ><ModalInFunctionalComponent /></Button>
  
        

{/* <InputGroup className="mb-3">
    <InputGroup.Prepend>
    <div>
    <label>  Bleeding?</label>
    </div>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with checkbox" />
  </InputGroup>

  <InputGroup className="mb-3">
    <InputGroup.Prepend>
    <div>
    <label>  Breathing?</label>
    </div>
      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with checkbox" />
  </InputGroup> */}

  {/* <InputGroup className="mb-3">
    <InputGroup.Prepend>
    <div>
    <label> Comments?</label>
    </div>
     
    </InputGroup.Prepend>
    <FormControl aria-label="Text input with checkbox" />
  </InputGroup>
         */}


         
      </Card.Body>
      <Card.Footer className="text-muted"><Button variant="primary">Submit</Button></Card.Footer>
    </Card>

</CardDeck>
{/* conditional rendering - > put stuff in the return. It only renders when action is taken  */}


<CardDeck>

{/* POLICE/FIREFIGHTERS REQUIRED? */}
<Card className="text-center" >
      <Card.Header>POLICE & FIREFIGHTERS ?</Card.Header>
      <Card.Body >
        <Card.Title>FOR ADDITIONAL ASSISTANCE ONLY</Card.Title>
       
        <Button variant="primary" >POLICE</Button>
        <Button variant="danger">FIREFIGHTER</Button>
      
     
      </Card.Body>
      <Card.Footer className="text-muted">Submitted/not submitted</Card.Footer>
    </Card>

{/* CALLER HISTORY */}
    <Card className="text-center" >
      <Card.Header>CALLER HISTORY</Card.Header>
      <Card.Body>

        <ListGroup>
  <ListGroup.Item>Cras justo odio</ListGroup.Item>
  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
  <ListGroup.Item>Morbi leo risus</ListGroup.Item>

</ListGroup>
     
      </Card.Body>
      <Card.Footer className="text-muted">Submitted/not submitted</Card.Footer>
    </Card>


{/* REGISTERED PATIENTS PROGRAM */}
    <Card className="text-center" >
      <Card.Header>REGISTERED PATIENTS PROGRAM</Card.Header>
      <Card.Body>
        <Card.Title>Card Title Goes Here</Card.Title>
        <Card.Text>
          Some Card body content goes here
        </Card.Text>
        <Button variant="primary">Primary Button</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Submitted/not submitted</Card.Footer>
    </Card>

</CardDeck>
</div>
   
    )
}


export default Dispatch
