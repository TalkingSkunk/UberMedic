import React, { useEffect, useState, useContext } from "react";
import {MedicDispatchContext} from "../../utils/MedicDispatchContext";
import "./style.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import CardDeck from "react-bootstrap/CardDeck";
import CardText from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import ModalInFunctionalComponent from "../Wrapper/modal/modal";
import DispatcherMap from "./DispatcherMap/DispatcherMap";
import getCoords from "../API/index";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8080";

function Dispatch() {
  const [medicDispatch, setMedicDispatch] = useContext(MedicDispatchContext)

  const socket = socketIOClient(ENDPOINT);
  useEffect(() => {
    socket.emit("dispatchlol", "hello from Dispatchside");
  }, []);

  let sendtothisAmb = 3000;

  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [prov, setProv] = useState("");
  const [postal, setPostal] = useState("");

  const updateStreet = (e) => {
    setStreet(e.target.value);
  };
  const updateCity = (e) => {
    setCity(e.target.value);
  };
  const updateProv = (e) => {
    setProv(e.target.value);
  };
  const updatePostal = (e) => {
    setPostal(e.target.value);
  };

  //onSubmit event listener
  const handleSendDestination = async (e) => {
    e.preventDefault();


    setPostal('')
    setProv('')
    setCity('')
    setStreet('')
    //turn dest input to coords
    const result = await getCoords( {city: city, postCode: postal, address: street} )
    // send dest coords to medicside
    socket.emit("medicDest", JSON.stringify ({ lng: result[0], lat: result[1] }) )
    console.log('sending destination coords to medicside')
    //send dest coords to dispatch map for ambulance id [2021]
    setMedicDispatch({ 2021: { lngDest: result[0], latDest: result[1] } })
  
  }
  
  return (
    <div>
      <CardDeck>
        {/* INCIDENT LOCATION CARD */}
        <Card className="text-center">
          <Card.Header>INCIDENT LOCATION</Card.Header>
          <Card.Body>
            <Form onSubmit={handleSendDestination}>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  value={street}
                  onChange={updateStreet}
                />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    value={city}
                    onChange={updateCity}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Province</Form.Label>
                  <Form.Control
                    as="select"
                    defaultValue="Choose..."
                    value={prov}
                    onChange={updateProv}
                  >
                    <option>Ontario</option>
                    <option>Quebec</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control
                    type="text"
                    value={postal}
                    onChange={updatePostal}
                  ></Form.Control>
                </Form.Group>
              </Form.Row>
            </Form>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Button variant="primary" onClick={handleSendDestination}>
              Submit
            </Button>
          </Card.Footer>
        </Card>

        {/* CALLER INFOMATION CARD*/}
        <Card className="text-center">
          <Card.Header>CALLER INFORMATION</Card.Header>
          <Card.Body>

            <form>
              <div>
                <label style={{marginRight: "15px", fontWeight: "bolder"}}> Name of Caller</label>
                <input />
              </div>
              <div>
                <label style={{marginRight: "18px", fontWeight: "bolder"}}> Phone number</label>
                <input />
              </div>
              <div>
                <label style={{marginRight: "10px", fontWeight: "bolder"}}> Postal/ZIP code</label>
                <input />
              </div>
            </form>
          </Card.Body>
        
        </Card>
      </CardDeck>

      {/* MEDICAL QUESTIONS */}
      <CardDeck>
        <Card className="text-center">
          <Card.Header> <ModalInFunctionalComponent /></Card.Header>
          <Card.Body>
        <Row style={{marginTop:"-22px"}}>
         </Row>
            <Row style={{marginBottom:"22px"}} >
          <div>
            <Col>
            <label style={{fontWeight: "bolder"}}> CTAS </label>
        </Col>
        <Col>
        <input>
        </input>
        </Col>
        <Col>
        <label style={{fontWeight: "bolder"}}> Chief Complaint </label>
        </Col>
        <Col>
        <input>
        </input>
        </Col>
        <Col>
        <label style={{fontWeight: "bolder"}}> Additional Notes </label>
        </Col>
        <Col>
        <input>
        </input>
        </Col>
          </div>
          </Row >


          

          <div>

          <Button variant="primary">POLICE</Button>
            <Button variant="danger">FIREFIGHTER</Button>
          
            </div>
     
          </Card.Body>
        

       
        </Card>

        {/* NEAREST AMBULANCE */}
        <Card className="text-center">
          <Card.Header>NEAREST AMBULANCE</Card.Header>
          <Card.Body>
            <DispatcherMap />
          </Card.Body>
          <Card.Footer className="text-muted">
            Submitted/not submitted
          </Card.Footer>
        </Card>
      </CardDeck>

      <CardDeck>
        {/* POLICE/FIREFIGHTERS REQUIRED? */}
        <Card className="text-center">
          <Card.Header>POLICE & FIREFIGHTERS ?</Card.Header>
          <Card.Body>
            <Card.Title>FOR ADDITIONAL ASSISTANCE ONLY</Card.Title>

          </Card.Body>
          <Card.Footer className="text-muted">
            Submitted/not submitted
          </Card.Footer>
        </Card>

        {/* CALLER HISTORY */}
        <Card className="text-center">
          <Card.Header>CALLER HISTORY</Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            </ListGroup>
          </Card.Body>
          <Card.Footer className="text-muted">
            Submitted/not submitted
          </Card.Footer>
        </Card>

        {/* REGISTERED PATIENTS PROGRAM */}
        <Card className="text-center">
          <Card.Header>REGISTERED PATIENTS PROGRAM</Card.Header>
          <Card.Body>
            <div>
              <Col style={{marginBottom:"20px"}}>
              <label style={{marginRight: "12px", fontWeight: "bolder"}}> Name </label>
      <input/>
            </Col>
            <Col style={{ marginLeft:"-11px"}}>
            <label style={{marginRight: "12px",fontWeight: "bolder"}}> Program </label>
            <input/>
            </Col>
            </div>
           
           
          </Card.Body>
          <Card.Footer className="text-muted">
            Submitted/not submitted
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
}

export default Dispatch;
