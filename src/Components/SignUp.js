import { Checkbox, Input } from "@mui/material";
import React, { useState } from "react"
import { Button, Modal, Form, Col, Container, Row, ModalBody } from "react-bootstrap";
import AuthNavbar from "./Navbars/AuthNavbar";
import OtpModal from "./Popups/OTP_Popup";
import Login from "./login";
import SuccessModal from "./Popups/SucessModal";
import ErrorModal from "./Popups/ErrorModal";


const SignUp = () => {

    const [modal, setModal] = useState(false)
    const toggle = () => setModal(!modal);

    return (
        <div>
            <Modal show={modal} onHide={toggle} className=" fade" modalTransition={{ timeout: 2000 }} centered >
                <OtpModal />
             
          
            </Modal>
            <AuthNavbar />
            <section class="position-relative  overflow-hidden">
                <div className=" d-flex p-5 justify-content-center align-items-center">
                    <form className="  rounded-2 bg-white border-2  col-lg-5 col-12 ">
                        <div className="  ps-4 pe-4">
                            <h3 className=" fw-bold mb-3 ">Create an account</h3>
                            <div className="form-group mt-3">
                                <label>First Name*</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Last Name*</label>
                                <input
                                    type="text"
                                    className="form-control mt-1"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="form-group mt-3">
                                <label>Phone Number*</label>
                                <input
                                    type="number"
                                    className="form-control mt-1"
                                    placeholder="e.g +9230078009644"
                                />
                            </div>
                            <div className="d-grid gap-2 mt-3">
                                <span>To learn more, see  <a href="#" className='fw-semibold' style={{ color: '#5D3CB1' }}>Terms of Services</a> and  <a href="#" className=' fw-semibold' style={{ color: '#5D3CB1' }}>Privacy Policy</a></span>
                            </div>
                            <div className="d-grid gap-2 mt-1 ">
                                <p>By continuing your mobile number, you agree to receive SMS for verification.</p>
                            </div>

                            <div className="d-grid gap-2 mt-2">
                                <Button as="input" onClick={toggle} type="button" value="Send Code" className=" text-white fw-bold " style={{ backgroundColor: '#5D3CB1' }}></Button>
                            </div>
                            <p className=" text-center mt-2">
                                Already have an account? <a href="/auth/login" style={{ color: '#5D3CB1' }} className=' fw-bold'>Log In</a>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </div>

    );
}

export default SignUp