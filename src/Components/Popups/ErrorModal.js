import React, { useState } from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";

const ErrorModal = () => {

    // const [successOpen, setSuccessOpen] = useState(false)

    // const toggle = () => setSuccessOpen(!successOpen)

    return (
        <div>
            <Modal.Header closeButton>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="16" fill="#F4EBFF" />
                    <g clip-path="url(#clip0_286_14812)">
                        <path d="M16.0002 13.3334V16M16.0002 18.6667H16.0068M22.6668 16C22.6668 19.6819 19.6821 22.6667 16.0002 22.6667C12.3183 22.6667 9.3335 19.6819 9.3335 16C9.3335 12.3181 12.3183 9.33337 16.0002 9.33337C19.6821 9.33337 22.6668 12.3181 22.6668 16Z" stroke="#7F56D9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_286_14812">
                            <rect width="16" height="16" fill="white" transform="translate(8 8)" />
                        </clipPath>
                    </defs>
                </svg>


            </Modal.Header>
            <Modal.Body>
                <h5>Error</h5>
                <span>Ups. Something went wrong.</span>
                <Row className=" text-center">
                    <Col >
                        <button className=" w-100  mt-4 btn  btn-secondary " style={{ backgroundColor: '#5D3CB1' }} >
                            Go Back
                        </button>
                    </Col>
                </Row>
            </Modal.Body>

        </div>
    )
}


export default ErrorModal