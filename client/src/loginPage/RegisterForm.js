import { Button, Col, FormGroup } from "react-bootstrap";
import React, { useState } from "react";
import ReactBootstrap, { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";

function RegisterForm() {
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    password: "",
    passwordConfirm: "",
    id: "",
    role: "",
  });

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    const value = e.target.value;
    const name = e.target.name;
    setInputs({ ...inputs, [name]: value });
    // console.log(inputs);
  };

  const handleClose = () => setShow(false);
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handleSubmit = async () => {
    try {
      /////create new User
      const newUser = await fetch("/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputs),
      });
    } catch {
      console.log(new Error("ERROR---- POST REQUEST FAILED"));
    }

    handleClose();
  };

  return (
    <div>
      <div className="container">
        <Button
          onClick={handleShow}
          style={{ position: "relative", marginLeft: "150px", top: "-38px" }}
          variant="primary"
          type="submit"
        >
          Register Here
        </Button>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Register User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  onChange={handleInputChange}
                  type="name"
                  name="name"
                  placeholder="Enter Full Name"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  onChange={handleInputChange}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridConfirmPassword">
                <Form.Label>Retype Password</Form.Label>
                <Form.Control
                  name="passwordConfirm"
                  onChange={handleInputChange}
                  type="password"
                  placeholder="Retype Password"
                />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridId">
                <Form.Label>Insert OASIS Number/Dispatcher ID</Form.Label>
                <Form.Control
                  name="id"
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter OASIS/ID"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={handleSubmit}>
              Register
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default RegisterForm;
