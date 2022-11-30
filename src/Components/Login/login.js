import React, { useState } from "react";
import "./login.scss";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Popup from '../Popup/Popup';
import {loginUser} from './loginSlice';
import {useSelector,useDispatch} from 'react-redux';


const Login = (props) => {

  const users = useSelector((state)=> state.login.users);
  const loginState = useSelector((state)=> state.login.loginState);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/signIn');
  }
  console.log(users);

  const getUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const getPasswordHandler = (event) => {
    setPassword(event.target.value);
  };


  const loginHandler = () => {
    const info={
      user: username,
      password: password,
    }
    dispatch(loginUser(info));
    setShowPopup(true)
  }



  return (
    <div className="login-info color-overlay d-flex justify-content-center align-items-center">
      <Form className="rounded p-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <div style={{ textAlign: "left" }}>
            <Form.Label >Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email"
              onChange={getUsernameHandler}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <div style={{ textAlign: "left" }}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Password"
              onChange={getPasswordHandler}
            />
          </div>
        </Form.Group>

        <div style={{ textAlign: "left" }}>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
        </div>

        <div className="buttons-area" style={{ marginTop: "5px" }}>
          <Button variant="dark"
            onClick={loginHandler}
            className="login-btn" style={{ marginRight: "20px", width: "100px" }} >Login</Button>
        </div>
        <div style={{ textAlign: "center", color: "gray", fontSize: "14px" }}>
          <span>{'Not a member? '}</span>

          <a style={{ width: "100px", color: "blue", cursor: "pointer" }} variant="secondary" onClick={handleNavigation}> Sign In</a>
        </div>
      </Form>


      <Popup
        triger={showPopup}
        text={'Login Failed,Wrong username or passwoed'}
        subText={'Return To Login Page'}
        buttonReturnText={'Login'}
        setTrigger={setShowPopup}
        loginTry={loginState.loginTry}
        loginStatus={loginState.loginStatus}
        popupType={'error'}
      >
      </Popup>

    </div>
  );

};

export default Login;
