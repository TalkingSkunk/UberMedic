import React, {useEffect, useState} from 'react';
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
import DispatcherMap from "./DispatcherMap/DispatcherMap"
import getCoords from "../API/index"
import socketIOClient from 'socket.io-client'
const ENDPOINT = "http://localhost:8080"



function Dispatch() {

  const socket = socketIOClient(ENDPOINT)
  useEffect(()=>{
    socket.emit("dispatchlol", "hello from Dispatchside")
  },[])
  
  let sendtothisAmb = 3000

  const [ street, setStreet ] = useState('')
  const [ city, setCity ] = useState('')
  const [ prov, setProv ] = useState('')
  const [ postal, setPostal ] = useState('')


  
  const updateStreet = (e)=>{
    setStreet(e.target.value)
  }
  const updateCity = (e)=>{
    setCity(e.target.value)
  }
  const updateProv = (e)=>{
    setProv(e.target.value)
  }
  const updatePostal = (e)=>{
    setPostal(e.target.value)
  }

  //onSubmit event listener
  const handleSendDestination = async (e) => {
    e.preventDefault();

    setPostal('')
    setProv('')
    setCity('')
    setStreet('')

    const result = await getCoords( {city: city, postCode: postal, address: street} )
    socket.emit("medicDest", JSON.stringify ({ lng: result[0], lat: result[1] }) )
    console.log('sent destination to server with socket')
  }

    return (
        
      <div >

      <CardDeck >

      {/* INCIDENT LOCATION CARD */}
        <Card className="text-center" >
            <Card.Header>INCIDENT LOCATION</Card.Header>
        <Card.Body>
            
          
      <Form onSubmit={handleSendDestination}>
        

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" value={street} onChange={updateStreet} />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" value={city} onChange={updateCity} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Province</Form.Label>
            <Form.Control as="select" defaultValue="Choose..." value={prov} onChange={updateProv} >
              <option>Ontario</option>
              <option>Quebec</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control type="text" value={postal} onChange={updatePostal}>
            </Form.Control>
          </Form.Group>
        </Form.Row>

      </Form>
            </Card.Body>
            <Card.Footer className="text-muted"><Button variant="primary" onClick={handleSendDestination}>Submit</Button></Card.Footer>
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
              <Card.Title > Severity of Situation</Card.Title>
          
        
              <Button variant="light"  ><ModalInFunctionalComponent /></Button>

            </Card.Body>
          
            <Card.Footer className="text-muted"><Button variant="primary">Submit</Button></Card.Footer>
          </Card>


      {/* NEAREST AMBULANCE */}
          <Card className="text-center" >
            <Card.Header>NEAREST AMBULANCE</Card.Header>
            <Card.Body >       
              <DispatcherMap />
            
          
            </Card.Body>
            <Card.Footer className="text-muted">Submitted/not submitted</Card.Footer>
          </Card>

      </CardDeck>



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
