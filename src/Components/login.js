import React from 'react';
import { Col, Row } from 'react-bootstrap';
import SignUp from './SignUp';
import { Icon } from '@mui/material';
import AuthNavbar from './Navbars/AuthNavbar';
const Login = () => {

    return (
        
        <div>
            {/* <AuthNavbar />
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
                            <div className="d-grid gap-2 mt-1">
                                <p>By continuing your mobile number, you agree to receive SMS for verification.</p>
                            </div>

                            <div className="d-grid gap-2 mt-2">
                                <button type="submit" className="btn text-white fw-bold" style={{ backgroundColor: '#5D3CB1' }}>
                                    Send Code
                                </button>
                            </div>
                            <p className=" text-center mt-2">
                                Already have an account? <a href="/auth/signup" style={{ color: '#5D3CB1' }} className=' fw-bold'>Log In</a>
                            </p>
                        </div>
                    </form>
                </div>
            </section> */}
            
           
        <AuthNavbar/>
            <section class="position-relative overflow-hidden">
                <div class="container position-relative mx-auto">
                    <div class=" align-items-center">
                        <Row >
                            <div className=" d-flex p-5 justify-content-center align-items-center">
                    <form className="  rounded-2 bg-white border-2  col-lg-5 col-12 ">
                        <div className="  ps-4 pe-4">
                            <h3 className=" fw-bold mb-3 ">Sign In</h3>
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
                                <span>To learn more, see  <a href="#">Terms of Services</a> and  <a href="#">Privacy Policy</a></span>
                            </div>
                            <div className="d-grid gap-2 mt-2">
                                <span>By continuing your mobile number, you agree to receive SMS for verification.  </span>
                            </div>

                            <div className="d-grid gap-2 mt-3">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </div>
                            {/* <p className="forgot-password text-right mt-2">
                                Forgot <a href="#">password?</a>
                            </p> */}
                        </div>
                    </form>
                </div>
                        </Row>
                    </div>
                </div>
            </section>
        </div>
      
    );

}

export default Login;