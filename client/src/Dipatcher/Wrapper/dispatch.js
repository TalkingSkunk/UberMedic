import React, { useState } from "react";
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
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import ModalInFunctionalComponent from "../Wrapper/modal/modal";
import API from "../API/index";

const apiCall = async (data) => {
  /////check for values

  const result = await API(data);
  console.log(result, "RESULT");
};

function Dispatch() {
  const [data, setData] = useState({
    postCode: "",
    address: "",
    city: "",
    province: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    // console.log(data);
  };

  return (
    <div>
      <CardDeck>
        {/* INCIDENT LOCATION CARD */}
        <Card className="text-center">
          <Card.Header>INCIDENT LOCATION</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  onChange={handleInputChange}
                  placeholder="1234 Main St"
                />
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control name="city" onChange={handleInputChange} />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Province</Form.Label>
                  <Form.Control
                    name="province"
                    onChange={handleInputChange}
                    as="select"
                    defaultValue="ontario"
                  >
                    <option value="ontario">Ontario</option>
                    <option value="quebec">Quebec</option>
                    <option value="british columbia">British Columbia</option>
                    <option value="alberta">Alberta</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Postal Code</Form.Label>
                  <Form.Control
                    type="text"
                    name="postCode"
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </Form.Row>
            </Form>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Button onClick={apiCall(data)} variant="primary">
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
                <label> Name of Caller</label>
                <input />
              </div>
              <div>
                <label> Phone number</label>
                <input />
              </div>
              <div>
                <label> Postal/ZIP code</label>
                <input />
              </div>
            </form>
          </Card.Body>
          <Card.Footer className="text-muted">
            <Button variant="primary">Submit</Button>
          </Card.Footer>
        </Card>
      </CardDeck>

      {/* MEDICAL QUESTIONS */}
      <CardDeck>
        <Card className="text-center">
          <Card.Header>ECHO SCRENNING</Card.Header>
          <Card.Body>
            <Card.Title> Severity of Situation</Card.Title>

            <Button variant="light">
              <ModalInFunctionalComponent />
            </Button>
          </Card.Body>

          <Card.Footer className="text-muted">
            <Button variant="primary">Submit</Button>
          </Card.Footer>
        </Card>

        {/* NEAREST AMBULANCE */}
        <Card className="text-center">
          <Card.Header>NEAREST AMBULANCE</Card.Header>
          <Card.Body>
            <Card.Title>MAP BELOW</Card.Title>
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

            <Button variant="primary">POLICE</Button>
            <Button variant="danger">FIREFIGHTER</Button>
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
            <Card.Title>Card Title Goes Here</Card.Title>
            <Card.Text>Some Card body content goes here</Card.Text>
            <Button variant="primary">Primary Button</Button>
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
