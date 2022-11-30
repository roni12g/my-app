import React from "react";
import './popup.scss';
import { Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { resetLogin } from '../Login/loginSlice';
import { useDispatch } from 'react-redux';

const Popup = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigation = () => {
        props.setTrigger(false);
        dispatch(resetLogin());
        navigate('/login');

    }
    if (props.triger) {
        if (props.popupType === 'info') {
            return (
                <div className="popup">
                    <div className="popup-inner">
                        <h3>{props.text}</h3>
                        <h5>{props.subText}</h5>
                        <Button variant="dark" className="close-btn" style={{ width: "100px", marginTop: "30px" }}
                            onClick={handleNavigation} >{props.buttonReturnText}</Button>
                    </div>
                </div>
            );
        }
        else if (props.popupType === 'error') {
            if (props.loginTry && !props.loginStatus) {
                return (
                    <div className="popup">
                        <div className="popup-inner">
                            <h3>{props.text}</h3>
                            <h5>{props.subText}</h5>
                            <Button variant="dark" className="close-btn" style={{ width: "100px", marginTop: "30px" }}
                                onClick={handleNavigation} >{props.buttonReturnText}</Button>
                        </div>
                    </div>
                );
            }
        }
    }
    else {
        return '';
    }

}

export default Popup;
