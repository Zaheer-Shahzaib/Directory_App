import React, { useState } from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";

const SuccessModal = () => {

    // const [successOpen, setSuccessOpen] = useState(false)

    // const toggle = () => setSuccessOpen(!successOpen)

    return (
        <div>
            <Modal.Header closeButton>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="16" fill="#F4EBFF" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M22.7951 9.85334L13.2484 19.0667L10.7151 16.36C10.2484 15.92 9.51509 15.8933 8.98176 16.2667C8.46176 16.6533 8.31509 17.3333 8.63509 17.88L11.6351 22.76C11.9284 23.2133 12.4351 23.4933 13.0084 23.4933C13.5551 23.4933 14.0751 23.2133 14.3684 22.76C14.8484 22.1333 24.0084 11.2133 24.0084 11.2133C25.2084 9.98668 23.7551 8.90668 22.7951 9.84001V9.85334Z" fill="#7F56D9" />
                </svg>

            </Modal.Header>
            <Modal.Body>
                <h5>Success!</h5>
                <span>Thank you account have been completed.</span>
                <Row className=" text-center">
                    <Col >
                        <Button variant="secondary" onClick={(e) =>e.target(<a href="/"/>)} className=" w-100  mt-4" style={{ backgroundColor: '#5D3CB1' }} >
                            Go To HomePage
                        </Button>
                    </Col>
                </Row>
            </Modal.Body>

        </div>
    )
}


export default SuccessModal