import React, { useEffect, useState, useContext } from "react";
import { MedicDispatchContext } from "../../utils/MedicDispatchContext";
import "./style.css";
import Button from "react-bootstrap/Button";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import CardDeck from "react-bootstrap/CardDeck";
import CardText from "react-bootstrap/CardDeck";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import ModalInFunctionalComponent from "../Wrapper/modal/modal";
import DispatcherMap from "./DispatcherMap/DispatcherMap";
import getCoords from "../API/index";
import MedReq from "./medReq/medReq";
import AvailUnits from "./AvailUnits/AvailUnits";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:8080";

function Dispatch() {
  // relay dispatch destination coords to dispatch map marker
  const { medDest } = useContext(MedicDispatchContext);
  const [medicDispatch, setMedicDispatch] = medDest;

  // modals stuff clicks
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const socket = socketIOClient(ENDPOINT);
  useEffect(() => {
    socket.emit("dispatchlol", "hello from Dispatchside");
  }, []);

  let sendtothisAmb = 3000;

  // call details states
  const [deployedUnit, setDeployedUnit] = useState([]);
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [intersection, setIntersection] = useState("");
  const [callerName, setCallerName] = useState("");
  const [callerNum, setCallerNum] = useState("");
  const [ctas, setCtas] = useState("delta");
  const [cc, setCC] = useState("blunt trauma");
  const [notes, setNotes] = useState("buzz #1234 and beware of the dog");
  const [police, setPolice] = useState("Attending");
  const [fire, setFire] = useState("N/A");
  const [additional, setAdditional] = useState("N/A");
  const [registeredPt, setRegisteredPt] = useState("");
  const [registeredPtExist, setRegisteredPtExist] = useState("");

  const updateStreet = (e) => {
    setStreet(e.target.value);
  };
  const updateCity = (e) => {
    setCity(e.target.value);
  };
  const updateInters = (e) => {
    setIntersection(e.target.value);
  };
  const updatePostal = (e) => {
    setPostal(e.target.value);
  };
  const updateCallerName = (e) => {
    setCallerName(e.target.value);
  };
  const updateCallerNum = (e) => {
    setCallerNum(e.target.value);
  };
  const updateCtas = (e) => {
    setCtas(e.target.value);
  };
  const updateCC = (e) => {
    setCC(e.target.value);
  };
  const updateNotes = (e) => {
    setNotes(e.target.value);
  };
  const updatePolice = (e) => {
    setPolice(e.target.value);
  };
  const updateFire = (e) => {
    setFire(e.target.value);
  };
  const updateAdditional = (e) => {
    setAdditional(e.target.value);
  };
  const updateRegisteredPt = (e) => {
    setRegisteredPt(e.target.value);
  };
  const handleRegisteredPt = async (e) => {
    console.log("sending registeredPt", registeredPt);
    await socket.emit(
      "fetchRegisteredPt",
      JSON.stringify({
        registeredId: registeredPt,
      })
    );
    console.log("sent request for registered info");
    socket.on("fetchRegisteredPtOut", (data) => {
      const patient = JSON.parse(data);
      if (patient !== null) {
        console.log("this is the patient received", patient);
        setRegisteredPtExist(patient.firstName);
      } else {
        setRegisteredPtExist("N/A");
      }
    });
    console.log("received info for registered pt back");
  };

  //onSubmit event listener
  const handleCheckInters = async (e) => {
    e.preventDefault();

    // turn dest input to coords
    const result = await getCoords({
      city: city,
      postCode: postal,
      address: street,
    });
    // send dest coords to medicside
    // socket.emit("medicDest", JSON.stringify ({ lng: result[0], lat: result[1] }) )

    console.log("sending destination coords to medicside");
    //send dest coords to dispatch map for ambulance id [2021]
    setMedicDispatch({ 2021: { lngDest: result[0], latDest: result[1] } });
  };

  //one button to rule them all
  const handleSendCall = async (e) => {
    e.preventDefault();

    // turn dest input to coords
    const destLngLat = await getCoords({
      city: city,
      postCode: postal,
      address: street,
    });

    await socket.emit(
      "callDetails",
      JSON.stringify({
        deployedUnit: deployedUnit,
        streetDest: street,
        cityDest: city,
        postalDest: postal,
        intersection: intersection,
        callerName: callerName,
        callerNum: callerNum,
        destLngLat: [destLngLat[0], destLngLat[1]],
        ctas: ctas,
        cc: cc,
        notes: notes,
        police: police,
        fire: fire,
        additional: additional,
        registeredPt: registeredPt,
      })
    );

    console.log("sending call details to medicside");
    setStreet("");
    setCity("");
    setIntersection("");
    setPostal("");
    setCallerName("");
    setCallerNum("");
    setCtas("");
    setCC("");
    setNotes("");
    setPolice("");
    setFire("");
    setAdditional("");
    setRegisteredPt("");
  };

  //listen for choice of unit
  useEffect(() => {
    socket.on("offUnitOut", (data) => {
      console.log("this is offunit", JSON.parse(data));
      setDeployedUnit((oldArray) =>
        oldArray.filter((unit) => unit !== JSON.parse(data))
      );
    });
  }, []);
  useEffect(() => {
    socket.on("onUnitOut", (data) => {
      console.log("this is onunit", JSON.parse(data));
      setDeployedUnit((oldArray) => [...oldArray, JSON.parse(data)]);
    });
  }, []);

  useEffect(() => {
    console.log("units to be deployed:", deployedUnit);
  }, [deployedUnit]);

  return (
    <div>
      <CardDeck>
        {/* INCIDENT LOCATION CARD */}
        <Card className="text-center">
          <Card.Header style={{ fontWeight: "bolder" }}>
            INCIDENT LOCATION
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="formGridAddress1">
                <Form.Label style={{ fontWeight: "bolder" }}>
                  Address
                </Form.Label>
                <Form.Control
                  type="text"
                  value={street}
                  onChange={updateStreet}
                />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label style={{ fontWeight: "bolder" }}>City</Form.Label>
                  <Form.Control
                    type="text"
                    value={city}
                    onChange={updateCity}
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label style={{ fontWeight: "bolder" }}>
                    Postal Code
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={postal}
                    onChange={updatePostal}
                  ></Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label style={{ fontWeight: "bolder" }}>
                    Intersection
                  </Form.Label>
                  <Form.Control
                    type="text"
                    value={intersection}
                    onChange={updateInters}
                  />
                </Form.Group>
              </Form.Row>
            </Form>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Button
              variant="primary"
              onClick={handleCheckInters}
              style={{ fontWeight: "bolder" }}
            >
              Check for Intersection
            </Button>
          </Card.Footer>
        </Card>

        {/* CALLER INFOMATION CARD*/}
        <Card className="text-center">
          <Card.Header style={{ fontWeight: "bolder" }}>
            CALLER INFORMATION
          </Card.Header>
          <Card.Body>
            <form>
              <div>
                <label style={{ marginRight: "15px", fontWeight: "bolder" }}>
                  {" "}
                  Name of Caller
                </label>
                <input
                  type="text"
                  value={callerName}
                  onChange={updateCallerName}
                />
              </div>
              <div>
                <label style={{ marginRight: "15px", fontWeight: "bolder" }}>
                  {" "}
                  Phone number
                </label>
                <input
                  type="text"
                  value={callerNum}
                  onChange={updateCallerNum}
                />
              </div>
            </form>
          </Card.Body>
          {/* <Card.Footer className="text-muted">
            <Button variant="primary">Submit</Button>
          </Card.Footer> */}
        </Card>
      </CardDeck>

      {/* MEDICAL QUESTIONS */}
      <CardDeck>
        <Card className="text-center">
          <Card.Header>
            {" "}
            <ModalInFunctionalComponent />
          </Card.Header>
          <Card.Body>
            <Row style={{ marginTop: "-3px" }}></Row>
            <Row style={{ marginBottom: "30px" }}>
              <div>
                <Col>
                  <label style={{ marginRight: "10px", fontWeight: "bolder" }}>
                    {" "}
                    CTAS{" "}
                  </label>
                  <input style={{ marginRight: "10px" }}></input>

                  <label style={{ marginRight: "10px", fontWeight: "bolder" }}>
                    {" "}
                    Chief Complaint{" "}
                  </label>

                  <input></input>
                </Col>
                <Col>
                  <label style={{ marginRight: "10px", fontWeight: "bolder" }}>
                    {" "}
                    Additional Notes{" "}
                  </label>
                  <input></input>
                </Col>
              </div>
            </Row>

            <div>
              <Button variant="primary">POLICE</Button>
              <Button variant="danger">FIREFIGHTER</Button>
              <Button variant="warning" onClick={handleSendCall}>
                SEND
              </Button>
            </div>
          </Card.Body>
        </Card>

        {/* NEAREST AMBULANCE */}
        <Card className="text-center">
          <Card.Header style={{ fontWeight: "bolder" }}>
            Closest Available Unit
          </Card.Header>
          <Card.Body>
            <ListGroup as="ul">
              <AvailUnits />
            </ListGroup>
          </Card.Body>
          <Card.Footer className="text-muted">
            Submitted/not submitted
          </Card.Footer>
        </Card>
      </CardDeck>

      {/* this is a really cool map */}
      <CardDeck>
        <Card className="text-center">
          <Card.Header style={{ fontWeight: "bolder" }}>
            NEAREST AMBULANCE
          </Card.Header>
          <Card.Body>
            <DispatcherMap />
          </Card.Body>
          <Card.Footer className="text-muted">
            Submitted/not submitted
          </Card.Footer>
        </Card>
      </CardDeck>

      <CardDeck>
        {/* MEDIC REQUESTS SIGNAL INCOMING */}
        <Card className="text-center">
          <Card.Header style={{ fontWeight: "bolder" }}>
            MEDIC REQUESTS
          </Card.Header>
          <Card.Body>
            <MedReq />
          </Card.Body>
          <Card.Footer className="text-muted">
            Submitted/not submitted
          </Card.Footer>
        </Card>

        {/* CALLER HISTORY */}
        <Card className="text-center">
          <Card.Header style={{ fontWeight: "bolder" }}>
            CALLER HISTORY
          </Card.Header>
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
          <Card.Header style={{ fontWeight: "bolder" }}>
            REGISTERED PATIENTS PROGRAM
          </Card.Header>
          <Card.Body>
            <form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridRegisteredPt">
                  <Form.Label>Registered Patient #</Form.Label>
                  <Form.Control
                    type="number"
                    value={registeredPt}
                    onChange={updateRegisteredPt}
                  ></Form.Control>
                </Form.Group>
                <Button variant="primary" onClick={handleRegisteredPt}>
                  Search
                </Button>
              </Form.Row>
            </form>
            {registeredPtExist !== "N/A" ? (
              <Card.Text>
                Patient Found Patient FirstName: {registeredPtExist}
              </Card.Text>
            ) : (
              <Card.Text>Unregistered ID!</Card.Text>
            )}
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
