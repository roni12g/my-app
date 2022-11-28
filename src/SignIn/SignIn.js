import  React from "react";
import "./SignIn.scss";
import { Form, Button } from "react-bootstrap";

const signIn = () => {

    return (
        <div className="sign-info color-overlay d-flex justify-content-center align-items-center">
        <Form className="rounded p-4">
        <Form.Group className="mb-3" controlId="formBasicText">
            <div style={{textAlign: "left"}}>
            <Form.Label >First Name</Form.Label>
            <Form.Control type="name" placeholder="Enter First Name" />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <div style={{textAlign: "left"}}>
            <Form.Label >Last Name</Form.Label>
            <Form.Control type="name" placeholder="Enter Last Name" />
            </div>
          </Form.Group>
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
          <Form.Group className="mb-3" controlId="formBasicPassword">
          <div style={{textAlign: "left"}}>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password" />
            </div>
          </Form.Group>
  
          <div style={{textAlign: "left"}}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
          </div>
  
          <div className="buttons-area">
            <Button variant="dark" className="sign-btn" style={{marginRight: "20px" , width:"100px"}} >Login</Button>
          </div>
        </Form>
      </div>

    );
};

export default signIn;
