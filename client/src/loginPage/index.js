import { Button, FormGroup } from "react-bootstrap";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

import RegisterForm from "./RegisterForm";

function Login() {
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    const value = e.target.value;
    const name = e.target.name;
    setInputs({ ...inputs, [name]: value });
    // console.log(inputs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /////////////fetch db check for correspondence
    const result = await fetch("/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(inputs),
    });

    console.log(result, "SUBMIT");
  };

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicId">
          <Form.Label>ID/OASIS number</Form.Label>
          <Form.Control
            name="id"
            type="id"
            placeholder="Enter ID/OASIS"
            onChange={handleInputChange}
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleInputChange}
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <FormGroup>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <RegisterForm />
        </FormGroup>
      </Form>
    </div>
  );
}

export default Login;
