import React, { useState } from 'react';
import { Row, Col, Card } from 'antd';
import { useHistory } from "react-router-dom";
import "./register.style.css";
import InputForm from '../../component/inputForm';

const registerForm = [
    { name: "userId", error: "Enter Email either Phone Number", type: "text", placeholder: "EMAIL / PHONE NUMBER", key: "userId" },
    { name: "userSecret", error: "Enter 4 digit PIN / OTP", type: "number", placeholder: "OTP / PIN", disabled:true, key: "userSecret" },
    
    { name: "submit-form", text: "Play", key: "user-submit-form" },

];

const ConfirmPinForm = [
    { name: "userPin", error: "Enter Password", type: "password", placeholder: "Enter Password", key: "userPin" },
    { name: "userPinConfirm", error: "Enter Password", type: "text", placeholder: "Enter Password", key: "userPinConfirm" },
    { name: "submit-form", text: "Get In", key: "user-submit-pin-form" },
   

];
const RegisterUser = () => {
    const history = useHistory();
    const [activeForm, setForm] = useState(registerForm);
    const [title, setTitle] = useState("GETTING STARTED");

    const getValues = (w) => {
        console.log(w);
        if (w.userId === "9936142128" && w.userSecret === "2323") {
            setTitle("SET PIN")
            setForm(ConfirmPinForm);

        }

        if (w.userPin === "2323" && w.userPinConfirm === "2323") {
            history.push("/Login");
        }
    }
    return (
        <>
            <Row>
                <Col span={23} >
                    <Card className="register-card">
                        <Row justify="end">
                            <Col span={9} className="background-banner">
                                <h2><b>PATHSHALA</b></h2>
                                <InputForm props={activeForm} title={title} submitUser={getValues} />
                            </Col>
                            <Col span={15}
                                style={{ overflowX: "hidden", overflowY: "hidden", marginRight: "-25px", bottom: 0, top: 0 }}
                                className="background-banner">
                                <img  alt="bg" src="/assets/background.jpg" width="100%" />
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </>
    )
}


export default RegisterUser;