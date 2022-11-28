import React from "react";
import './popup.scss';
import { Button } from "react-bootstrap";
import {useNavigate} from 'react-router-dom';

const Popup = (props) => {
    const navigate = useNavigate();
  
    const handleNavigation=()=>{
      props.setTrigger(false);
      navigate('/login');
      
    }
    return (props.triger) ? (
        <div className="popup">
            <div className="popup-inner">
            <h3>{props.text}</h3>
            <h5>{props.subText}</h5>
            <Button variant="dark" className="close-btn" style={{width:"100px",marginTop:"30px"} }
             onClick={handleNavigation} >{props.buttonReturnText}</Button>
            </div>
        </div>
    ) : '';

}
export default Popup;