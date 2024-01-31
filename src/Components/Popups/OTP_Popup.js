import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const OtpModal = ({ show, onClose }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal);

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleVerificationCodeChange = (event) => {
        setVerificationCode(event.target.value);
    };

    const handleConfirm = () => {
        // Handle OTP verification logic here
        console.log('Phone Number:', phoneNumber);
        console.log('Verification Code:', verificationCode);
        // Close the modal after processing
    };

    return (
        <div>
            <div>
                <Modal.Header closeButton >
                    <div><svg width="34" height="34" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_54_32447)">
                            <rect x="2" y="1" width="48" height="48" rx="10" fill="white" />
                            <path d="M31 23V21C31 18.2386 28.7614 16 26 16C23.2386 16 21 18.2386 21 21V23M26 27.5V29.5M22.8 34H29.2C30.8802 34 31.7202 34 32.362 33.673C32.9265 33.3854 33.3854 32.9265 33.673 32.362C34 31.7202 34 30.8802 34 29.2V27.8C34 26.1198 34 25.2798 33.673 24.638C33.3854 24.0735 32.9265 23.6146 32.362 23.327C31.7202 23 30.8802 23 29.2 23H22.8C21.1198 23 20.2798 23 19.638 23.327C19.0735 23.6146 18.6146 24.0735 18.327 24.638C18 25.2798 18 26.1198 18 27.8V29.2C18 30.8802 18 31.7202 18.327 32.362C18.6146 32.9265 19.0735 33.3854 19.638 33.673C20.2798 34 21.1198 34 22.8 34Z" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <rect x="2.5" y="1.5" width="47" height="47" rx="9.5" stroke="#EAECF0" />
                        </g>
                        <defs>
                            <filter id="filter0_d_54_32447" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.05 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_32447" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_32447" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    </div>
                </Modal.Header>
            </div>
            <Modal.Body>
                <div className="d-flex ">
                    <div className="ml-3">
                        <h6>Confirm the phone number</h6>
                        <p>Please input the 6-digit code we just send to +1 (***) *** 1234.
                            Edit my mobile number</p>

                    </div>
                </div>
                <Form.Group controlId="verificationCode">
                    <Form.Label>Verification Code</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter verification code"
                    />
                </Form.Group>
                <span className=" fw-normal ">Didn’t get a code? <a href="#"> Click to resend.</a></span>
            </Modal.Body>

            <Row className=" text-center">
                <Col lg={6} >
                    <Button variant="secondary" className=" w-75  mb-3" onClick={modal}>
                        Cancel
                    </Button>
                </Col>
                <Col lg={6}><Button variant="primary" className=" w-75 mb-3 " style={{ backgroundColor: '#5D3CB1' }} onClick={toggle}>
                    Confirm
                </Button></Col>
            </Row>
        </div>
    );
};

export default OtpModal;