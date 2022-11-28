import React from "react";
import "../Login/login.scss";
import { Form, Button } from "react-bootstrap";

const login = (props) => {
  return (
    <div className="login-info color-overlay d-flex justify-content-center align-items-center">
      <Form className="rounded p-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div style={{textAlign: "left"}}>
          <Form.Label >Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <div style={{textAlign: "left"}}>
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
          </div>
        </Form.Group>

        <div style={{textAlign: "left"}}>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>
        </div>

        <div className="buttons-area">
          <Button variant="dark" className="login-btn" style={{marginRight: "20px" , width:"100px"}} >Login</Button>
          <Button style={{ width:"100px"}} variant="secondary">Sign In</Button>
        </div>
      </Form>
    </div>
  );
};
export default login;
