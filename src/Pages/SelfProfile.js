import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import UserProfileNavbar from "../Components/Navbars/UserProfileNavbar";
import Dropzone from "react-dropzone";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import Table from "react-bootstrap/Table";
import "../css/selfProfile.css"
const SelfProfile = () => {
  const [avatar, setAvatar] = useState(null);
  const handleDrop = (acceptedFiles) => {
    // Handle the uploaded image here (e.g., upload to a server)
    const file = acceptedFiles[0];
    setAvatar(URL.createObjectURL(file));
  };

  const btnStyle = {
    background: "transparent",
    outline: "none",
    border: "none",
    color: "#7F56D9",
    fontWeight: "700",
    width: "50%",
  };
  const followingDiv = {
    borderBottom: "1px solid lightgrey",
    paddingBottom: "5px",
    marginTop: "1rem",
    color: "#534f59",
    fontWeight: "600",
    display: "flex",
    justifyContent: "space-between",
  };

  return (
    <div>
      <UserProfileNavbar />
      <div>
        <svg
          width=" auto"
          height="240"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_83_5700)">
            <rect
              width="1664"
              height="240"
              transform="translate(-112)"
              fill="#7F56D9"
            />
          </g>
          <defs>
            <clipPath id="clip0_83_5700">
              <rect width="1440" height="240" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <Container className=" align-content-center justify-content-center text-center">
        <div className=" mt-n5 text-center align-items-center  mx-md-n5">
          <div>
            <Dropzone onDrop={handleDrop} accept="image/*">
              {({ getRootProps, getInputProps }) => (
                <div
                  {...getRootProps()}
                  className="dropzone"
                  style={{
                    position: "relative",
                    top: "-75px",
                    marginBottom: "-5rem",
                  }}
                >
                  <input {...getInputProps()} />
                  {avatar || (
                    <img
                      src={avatar}
                      height={160}
                      width={160}
                      className="uploaded-avatar  rounded-circle"
                      style={{ boxShadow: "1px 2px 6px 1px lightgrey" }}
                    ></img>
                  )}
                  {/* <h5>
                    Upload Image
                    <span style={{ fontSize: "0.8rem", color: "darkgray" }}>
                      (click above)
                    </span>
                  </h5> */}
                </div>
              )}
            </Dropzone>
          </div>
          {/* <Image
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle mt-n3  "
            height={160}
            width={160}
            alt="Black and White Portrait of a Man"
            loading="lazy"
          /> */}
        </div>
        <div className=" py-4 container-fluid">
          <div>
            <h3>Anika Levin</h3>
            <span>Australia, Melbourne</span>
          </div>
          <Col
            xs={12}
            md={6}
            lg={4}
          
            style={{ margin: "1rem auto" }}
          >
            {" "}
            <div className="input-group m-2">
              <input
                className="form-control align-content-center"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ border: "1px solid #7F56D9"}}
              />
            </div>
          </Col>
          <div
            style={{
              borderBottom: "1px solid lightgrey",
              paddingBottom: "5px",
            }}
          >
            <button style={btnStyle}>
              Following{" "}
              <span
                style={{
                  fontSize: "0.8rem",
                  backgroundColor: "#f2eff7",
                  padding: "6px",
                  borderRadius: "50%",
                }}
              >
                13
              </span>
            </button>
            <button style={btnStyle}>
              Followers{" "}
              <span
                style={{
                  fontSize: "0.8rem",
                  backgroundColor: "#f2eff7",
                  padding: "6px",
                  borderRadius: "50%",
                }}
              >
                37
              </span>
            </button>
          </div>

          <Table className="mt-4">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Social media</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="d-flex align-items-start ">
                    <FaCircleUser
                      className="mx-3"
                      style={{ fontSize: "3.5rem" }}
                    />
                    <div style={{ textAlign: "left" }}>
                      <h5 style={{ color: "#7F56D9" }}>Olivia Star</h5>
                      <p>Australia, Melburone</p>
                    </div>
                  </div>
                </td>
                <td style={{ verticalAlign: "middle" }}>Anika@levin.com</td>
                <td style={{ verticalAlign: "middle" }}>+1 123 456 789</td>
                <td style={{ verticalAlign: "middle" }}>
                  <div>
                    <FaInstagramSquare
                      style={{
                        color: "#7F56D9",
                        fontSize: "2rem",
                        borderRadius: "50%",
                      }}
                    />
                    <FaFacebookSquare
                      style={{
                        color: "#7F56D9",
                        fontSize: "2rem",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
};

export default SelfProfile;
