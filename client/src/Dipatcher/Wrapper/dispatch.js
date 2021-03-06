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

import ActiveCalls from "./ActiveCalls/ActiveCalls";
import socketIOClient from "socket.io-client";
const ENDPOINT = "ws://localhost:8080";


function Dispatch() {
  const socket = socketIOClient(ENDPOINT, {transports: ['websocket']})
  // relay dispatch destination coords to dispatch map marker
  const { medDest } = useContext(MedicDispatchContext);
  const [medicDispatch, setMedicDispatch] = medDest;




  useEffect(() => {
    socket.emit("dispatchlol", "hello from Dispatchside");
  }, []);

  let sendtothisAmb = 3000;

  // call details states
  const [deployUnits, setDeployUnits] = useState([])
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");
  const [intersection, setIntersection] = useState("");
  const [callerName, setCallerName] = useState("");
  const [callerNum, setCallerNum] = useState("");
  const [ctas, setCtas] = useState("");
  const [cc, setCC] = useState("");
  const [notes, setNotes] = useState("");
  const [police, setPolice] = useState("");
  const [fire, setFire] = useState("");
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
    setCallerName(e.target.value)
  }
  const updateCallerNum = (e)=>{
    setCallerNum(e.target.value)
  }
  const updateCtas = (e)=>{
    setCtas(e.target.value)
  }
  const updateCC = (e)=>{
    setCC(e.target.value)
  }
  const updateNotes = (e)=>{
    setNotes(e.target.value)
  }
  const updatePolice = (e)=>{
    setPolice(e.target.innerText)
  }
  const updateFire = (e)=>{
    setFire(e.target.innerText)
  }

  // check for registered pt
  const updateRegisteredPt = (e)=>{
    setRegisteredPt(e.target.value)
  }
  const handleRegisteredPt = async (e)=>{
    console.log('sending registeredPt', registeredPt)
    await socket.emit('fetchRegisteredPt', JSON.stringify({
      registeredId: registeredPt
    }))
    console.log('sent request for registered info')
    socket.on('fetchRegisteredPtOut', data=>{
      const patient = JSON.parse(data)
      if (patient !== null){
        console.log("this is the patient received", patient)
        setRegisteredPtExist(patient.firstName)
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


  // available unit section
  const [ availUnits, setAvailUnits ] = useState([])
  useEffect(()=>{
    socket.emit('fetchUnits')
  },[])
  useEffect(()=>{
    socket.on('fetchUnitsOut', data=>{
        const populateUnits = JSON.parse(data)
        console.log('populating available units, dispatchside', populateUnits)
        setAvailUnits(populateUnits)
    })
  },[])
  //clickety click listgroupitem makes them active
  const handleActive = (e) => {
    if(e.target.classList.contains('active')){
        e.target.classList.remove('active')
        const offUnit = e.target.dataset.unit
        setDeployUnits((oldArray) =>
        oldArray.filter((unit) => unit !== offUnit)
      )
    } else {
        e.target.classList.add('active')
        const onUnit = e.target.dataset.unit
        setDeployUnits((oldArray) => [...oldArray, onUnit]);
    }
  }
  useEffect(() => {
    console.log("units to be deployed:", deployUnits);
  }, [deployUnits]);



  //one button to rule them all
  const handleSendCall = async (e) => {
    e.preventDefault();

    console.log("sending call details to medicside");
    // turn dest input to coords
    const destLngLat = await getCoords({
      city: city,
      postCode: postal,
      address: street,
    });

    socket.emit(
      "callDetails",
      JSON.stringify({
        deployedUnit: deployUnits,
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
        registeredPt: registeredPt,
      })
    );

    setDeployUnits([])
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
    setRegisteredPt("");

    const availunitsTag = document.querySelectorAll('.availunits')
    availunitsTag.forEach((item)=>{
      item.classList.remove('active')
      console.log('actives removed')
    })
  };

  // the infamour MEDREQ
  useEffect(()=>{
    socket.emit('fetchRequests')
},[])
useEffect(()=>{
    socket.on('fetchRequestsOut', data=>{
        const populateReq = JSON.parse(data)
        console.log('populating medic requests, dispatchside', populateReq)
        setMedReqOut(populateReq)
    })
},[])

const [ medReqOut, setMedReqOut ] = useState([])

const [reqContent, setReqContent] = useState("")

const handleApprove = (e)=>{
    // clear request after approve from the list
    // setMedReqOut(prevReq => [...prevReq, {id: dataOut.id, for: dataOut.for}])
    // const revisedComments = state.comments.filter( (_,idx)=>idx!==action.value )
    const isUnit = e.target.dataset.unit
    const isFor = e.target.dataset.for
    socket.emit('approveReq', JSON.stringify({
        unit: isUnit,
        isFor: isFor,
        status: "approved"
    }))
    setShow(false);
}

const handleClose = (e) => {
    const isUnit = e.target.dataset.unit
    const isFor = e.target.dataset.for
    socket.emit('rejectReq', JSON.stringify({
        unit: isUnit,
        isFor: isFor,
        status: "rejected"
    }))
    setShow(false);
}

// modals stuff clicks
const [show, setShow] = useState(false);
const [modalUnit, setModalUnit] = useState("")
const [modalFor, setModalFor] = useState("")

// when the request list is clicked... show modal
const handleShow = (e) => {
    setReqContent(e.target.innerText)
    setModalUnit(e.target.dataset.unit)
    setModalFor(e.target.dataset.for)
    setShow(true);
}





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
                  <input type="text" value={ctas} onChange={updateCtas} />

                  <label style={{ marginRight: "10px", fontWeight: "bolder" }}>
                    {" "}
                    Chief Complaint{" "}
                  </label>

                  <input type="text" value={cc} onChange={updateCC} />
                </Col>
                <Col>
                  <label style={{ marginRight: "10px", fontWeight: "bolder" }}>
                    {" "}
                    Additional Notes{" "}
                  </label>
                  <input type="text" value={notes} onChange={updateNotes} />
                </Col>
              </div>
            </Row>

            <div>
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Police {police}</button>
              <ul class="dropdown-menu">
                <li class="dropdown-item" onClick={updatePolice}>Deploy</li>
                <li class="dropdown-item" onClick={updatePolice}>N/A</li>
              </ul>

              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Fire {fire}</button>
              <ul class="dropdown-menu">
                <li class="dropdown-item" onClick={updateFire}>Deploy</li>
                <li class="dropdown-item" onClick={updateFire}>N/A</li>
              </ul>
            </div>
          </Card.Body>
        </Card>

        {/* AVAILABLE UNITS */}
        <Card className="text-center">
          <Card.Header style={{ fontWeight: "bolder" }}>
            Closest Available Unit
          </Card.Header>
          <Card.Body>
            <ListGroup as="ul">


              {availUnits.map(data=>{
                  return (
                      <>
                          <li className="list-group-item availunits" aria-current="true" onClick={handleActive} data-unit={data.unit}>
                              [{data.unit}]: Status [ {data.availability} ]
                          </li>
                      </>
                  )
              })}


            </ListGroup>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Button variant="danger" onClick={handleSendCall}>
                  SEND CALL NOW
            </Button>
          </Card.Footer>
        </Card>

            {/* ACTIVE CALLS */}
            <Card className="text-center">
          <Card.Header style={{ fontWeight: "bolder" }}>
            Active Calls
          </Card.Header>
          <Card.Body>
            <ListGroup as="ul">

              <ActiveCalls />
              
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

          <ListGroup>
            {medReqOut.map(data=>{
                return (
                    <>
                        <ListGroup.Item action onClick={handleShow} data-unit={data.unit} data-for={data.reqFor}>
                            {data.createdAt}: [{data.unit}] Requesting >> {data.reqFor}...
                        </ListGroup.Item>
                        <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                            keyboard={false}
                        >
                            <Modal.Header closeButton>
                                <Modal.Title>Resource Request</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                {reqContent}
                                <br/>
                                Please Contact Ambulance Prior to Decision.
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose} data-unit={modalUnit} data-for={modalFor}>
                                    Disregard
                                </Button>
                                <Button variant="primary" onClick={handleApprove} data-unit={modalUnit} data-for={modalFor}>Approve</Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                )
            })}
        </ListGroup>


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
