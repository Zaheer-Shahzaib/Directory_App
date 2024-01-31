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

const UserProfile = () => {
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
            {/* <h2>Avatar Upload</h2> */}
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
                  <h5>
                    Upload Image
                    <span style={{ fontSize: "0.8rem", color: "darkgray" }}>
                      (click above)
                    </span>
                  </h5>
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
          <div>
            <Row className=" d-flex">
              <Col>
                <Row>
                  <Col>
                    <span className=" m-2   fw-semibold text-black ">
                      Followers: 261
                    </span>
                    <span className=" m-2   fw-semibold texb ">
                      Followed: 158
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="p-2">
              <Col>
                <Row>
                  <Col>
                    <Button
                      href="#"
                      variant="light"
                      className="m-2 "
                      color="#7F56D9"
                      style={{ backgroundColor: "#F9F5FF" }}
                    >
                      <svg
                        width="20"
                        height="17"
                        className=" text-center me-1"
                        viewBox="0 0 20 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.83313 6.49998V9.83331M9.83313 13.1666H9.84146M8.67923 2.24308L1.82516 14.0819C1.44499 14.7386 1.2549 15.0669 1.28299 15.3364C1.3075 15.5714 1.43064 15.785 1.62177 15.924C1.8409 16.0833 2.22029 16.0833 2.97906 16.0833H16.6872C17.446 16.0833 17.8254 16.0833 18.0445 15.924C18.2356 15.785 18.3588 15.5714 18.3833 15.3364C18.4114 15.0669 18.2213 14.7386 17.8411 14.0819L10.987 2.24308C10.6082 1.58878 10.4188 1.26163 10.1717 1.15175C9.95616 1.0559 9.71009 1.0559 9.49455 1.15175C9.24744 1.26163 9.05803 1.58878 8.67923 2.24308Z"
                          stroke="#6941C6"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Report
                    </Button>

                    <Button
                      variant="light"
                      className="m-2"
                      style={{ backgroundColor: "#F9F5FF" }}
                    >
                      <svg
                        width="18"
                        height="16"
                        className=" text-center me-1"
                        viewBox="0 0 18 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.8261 8.50617C16.0296 8.3318 16.1313 8.24461 16.1686 8.14086C16.2013 8.0498 16.2013 7.9502 16.1686 7.85914C16.1313 7.75539 16.0296 7.6682 15.8261 7.49383L8.76719 1.44331C8.417 1.14315 8.24191 0.993063 8.09367 0.989386C7.96483 0.986191 7.84177 1.04279 7.76035 1.14269C7.66667 1.25764 7.66667 1.48825 7.66667 1.94948V5.52886C5.88777 5.84007 4.25966 6.74146 3.04976 8.09489C1.73069 9.57043 1.00103 11.48 1 13.4591V13.9691C1.87445 12.9157 2.96626 12.0638 4.20063 11.4716C5.28891 10.9495 6.46535 10.6403 7.66667 10.5588V14.0505C7.66667 14.5117 7.66667 14.7424 7.76035 14.8573C7.84177 14.9572 7.96483 15.0138 8.09367 15.0106C8.24191 15.0069 8.417 14.8569 8.76719 14.5567L15.8261 8.50617Z"
                          stroke="#6941C6"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Share
                    </Button>
                    <Button
                      variant="light"
                      className="m-2  fw-semibold  text-white"
                      style={{ backgroundColor: "  #7F56D9" }}
                    >
                      <svg
                        width="19"
                        height="20"
                        className=" text-center me-1"
                        viewBox="0 0 19 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.66671 6.66666V13.3333M6.33337 9.99999H13M18 9.99999C18 14.6024 14.2691 18.3333 9.66671 18.3333C5.06433 18.3333 1.33337 14.6024 1.33337 9.99999C1.33337 5.39762 5.06433 1.66666 9.66671 1.66666C14.2691 1.66666 18 5.39762 18 9.99999Z"
                          stroke="white"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      Follow
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* <svg width="464" height="160" viewBox="0 0 464 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="464" height="160" rx="8" fill="#F9FAFB" />
              <g clip-path="url(#clip0_98_5813)">
                <path d="M296 16H168V144H296V16Z" fill="white" />
                <path d="M206.054 22.9193H202.595V26.3788H206.054V22.9193Z" fill="black" />
                <path d="M216.432 22.9193H212.973V26.3788H216.432V22.9193Z" fill="black" />
                <path d="M219.892 22.9193H216.432V26.3788H219.892V22.9193Z" fill="black" />
                <path d="M223.351 22.9193H219.892V26.3788H223.351V22.9193Z" fill="black" />
                <path d="M230.27 22.9193H226.811V26.3788H230.27V22.9193Z" fill="black" />
                <path d="M240.649 22.9193H237.189V26.3788H240.649V22.9193Z" fill="black" />
                <path d="M257.946 22.9193H254.487V26.3788H257.946V22.9193Z" fill="black" />
                <path d="M209.514 26.379H206.054V29.8384H209.514V26.379Z" fill="black" />
                <path d="M212.973 26.379H209.514V29.8384H212.973V26.379Z" fill="black" />
                <path d="M216.432 26.379H212.973V29.8384H216.432V26.379Z" fill="black" />
                <path d="M219.892 26.379H216.432V29.8384H219.892V26.379Z" fill="black" />
                <path d="M223.351 26.379H219.892V29.8384H223.351V26.379Z" fill="black" />
                <path d="M226.811 26.379H223.351V29.8384H226.811V26.379Z" fill="black" />
                <path d="M240.649 26.379H237.189V29.8384H240.649V26.379Z" fill="black" />
                <path d="M244.108 26.379H240.649V29.8384H244.108V26.379Z" fill="black" />
                <path d="M212.973 29.8386H209.514V33.2981H212.973V29.8386Z" fill="black" />
                <path d="M219.892 29.8386H216.432V33.2981H219.892V29.8386Z" fill="black" />
                <path d="M226.811 29.8386H223.351V33.2981H226.811V29.8386Z" fill="black" />
                <path d="M230.27 29.8386H226.811V33.2981H230.27V29.8386Z" fill="black" />
                <path d="M233.73 29.8386H230.27V33.2981H233.73V29.8386Z" fill="black" />
                <path d="M237.189 29.8386H233.73V33.2981H237.189V29.8386Z" fill="black" />
                <path d="M240.649 29.8386H237.189V33.2981H240.649V29.8386Z" fill="black" />
                <path d="M244.108 29.8386H240.649V33.2981H244.108V29.8386Z" fill="black" />
                <path d="M251.027 29.8386H247.568V33.2981H251.027V29.8386Z" fill="black" />
                <path d="M257.946 29.8386H254.487V33.2981H257.946V29.8386Z" fill="black" />
                <path d="M206.054 33.2987H202.595V36.7582H206.054V33.2987Z" fill="black" />
                <path d="M209.514 33.2987H206.054V36.7582H209.514V33.2987Z" fill="black" />
                <path d="M216.433 33.2987H212.973V36.7582H216.433V33.2987Z" fill="black" />
                <path d="M219.892 33.2987H216.433V36.7582H219.892V33.2987Z" fill="black" />
                <path d="M233.73 33.2987H230.271V36.7582H233.73V33.2987Z" fill="black" />
                <path d="M237.189 33.2987H233.73V36.7582H237.189V33.2987Z" fill="black" />
                <path d="M251.027 33.2987H247.567V36.7582H251.027V33.2987Z" fill="black" />
                <path d="M254.487 33.2987H251.027V36.7582H254.487V33.2987Z" fill="black" />
                <path d="M206.054 36.7567H202.595V40.2161H206.054V36.7567Z" fill="black" />
                <path d="M209.514 36.7567H206.054V40.2161H209.514V36.7567Z" fill="black" />
                <path d="M233.73 36.7567H230.27V40.2161H233.73V36.7567Z" fill="black" />
                <path d="M237.189 36.7567H233.73V40.2161H237.189V36.7567Z" fill="black" />
                <path d="M244.108 36.7567H240.649V40.2161H244.108V36.7567Z" fill="black" />
                <path d="M251.027 36.7567H247.568V40.2161H251.027V36.7567Z" fill="black" />
                <path d="M254.487 36.7567H251.027V40.2161H254.487V36.7567Z" fill="black" />
                <path d="M206.054 40.2167H202.595V43.6761H206.054V40.2167Z" fill="black" />
                <path d="M209.514 40.2167H206.054V43.6761H209.514V40.2167Z" fill="black" />
                <path d="M212.973 40.2167H209.514V43.6761H212.973V40.2167Z" fill="black" />
                <path d="M219.892 40.2167H216.433V43.6761H219.892V40.2167Z" fill="black" />
                <path d="M230.271 40.2167H226.811V43.6761H230.271V40.2167Z" fill="black" />
                <path d="M237.189 40.2167H233.73V43.6761H237.189V40.2167Z" fill="black" />
                <path d="M247.567 40.2167H244.108V43.6761H247.567V40.2167Z" fill="black" />
                <path d="M251.027 40.2167H247.567V43.6761H251.027V40.2167Z" fill="black" />
                <path d="M254.487 40.2167H251.027V43.6761H254.487V40.2167Z" fill="black" />
                <path d="M257.946 40.2167H254.486V43.6761H257.946V40.2167Z" fill="black" />
                <path d="M261.405 40.2167H257.946V43.6761H261.405V40.2167Z" fill="black" />
                <path d="M206.054 43.6757H202.595V47.1351H206.054V43.6757Z" fill="black" />
                <path d="M212.973 43.6757H209.514V47.1351H212.973V43.6757Z" fill="black" />
                <path d="M219.892 43.6757H216.433V47.1351H219.892V43.6757Z" fill="black" />
                <path d="M226.811 43.6757H223.352V47.1351H226.811V43.6757Z" fill="black" />
                <path d="M233.73 43.6757H230.271V47.1351H233.73V43.6757Z" fill="black" />
                <path d="M240.648 43.6757H237.189V47.1351H240.648V43.6757Z" fill="black" />
                <path d="M247.567 43.6757H244.108V47.1351H247.567V43.6757Z" fill="black" />
                <path d="M254.487 43.6757H251.027V47.1351H254.487V43.6757Z" fill="black" />
                <path d="M261.405 43.6757H257.946V47.1351H261.405V43.6757Z" fill="black" />
                <path d="M206.054 47.1357H202.595V50.5951H206.054V47.1357Z" fill="black" />
                <path d="M216.432 47.1357H212.973V50.5951H216.432V47.1357Z" fill="black" />
                <path d="M226.811 47.1357H223.351V50.5951H226.811V47.1357Z" fill="black" />
                <path d="M237.189 47.1357H233.73V50.5951H237.189V47.1357Z" fill="black" />
                <path d="M240.649 47.1357H237.189V50.5951H240.649V47.1357Z" fill="black" />
                <path d="M244.108 47.1357H240.649V50.5951H244.108V47.1357Z" fill="black" />
                <path d="M247.568 47.1357H244.108V50.5951H247.568V47.1357Z" fill="black" />
                <path d="M251.027 47.1357H247.568V50.5951H251.027V47.1357Z" fill="black" />
                <path d="M261.405 47.1357H257.946V50.5951H261.405V47.1357Z" fill="black" />
                <path d="M178.378 50.5953H174.919V54.0548H178.378V50.5953Z" fill="black" />
                <path d="M192.216 50.5953H188.757V54.0548H192.216V50.5953Z" fill="black" />
                <path d="M199.135 50.5953H195.676V54.0548H199.135V50.5953Z" fill="black" />
                <path d="M202.595 50.5953H199.135V54.0548H202.595V50.5953Z" fill="black" />
                <path d="M206.054 50.5953H202.595V54.0548H206.054V50.5953Z" fill="black" />
                <path d="M212.973 50.5953H209.514V54.0548H212.973V50.5953Z" fill="black" />
                <path d="M219.892 50.5953H216.432V54.0548H219.892V50.5953Z" fill="black" />
                <path d="M230.27 50.5953H226.811V54.0548H230.27V50.5953Z" fill="black" />
                <path d="M237.189 50.5953H233.73V54.0548H237.189V50.5953Z" fill="black" />
                <path d="M247.568 50.5953H244.108V54.0548H247.568V50.5953Z" fill="black" />
                <path d="M251.027 50.5953H247.568V54.0548H251.027V50.5953Z" fill="black" />
                <path d="M254.487 50.5953H251.027V54.0548H254.487V50.5953Z" fill="black" />
                <path d="M257.946 50.5953H254.487V54.0548H257.946V50.5953Z" fill="black" />
                <path d="M264.865 50.5953H261.405V54.0548H264.865V50.5953Z" fill="black" />
                <path d="M268.324 50.5953H264.865V54.0548H268.324V50.5953Z" fill="black" />
                <path d="M271.784 57H268.324V60.4595H271.784V57Z" fill="black" />
                <path d="M275.243 50.5953H271.784V54.0548H275.243V50.5953Z" fill="black" />
                <path d="M278.703 50.5953H275.243V54.0548H278.703V50.5953Z" fill="black" />
                <path d="M289.081 50.5953H285.622V54.0548H289.081V50.5953Z" fill="black" />
                <path d="M181.838 54.0546H178.378V57.5141H181.838V54.0546Z" fill="black" />
                <path d="M195.676 54.0546H192.216V57.5141H195.676V54.0546Z" fill="black" />
                <path d="M202.595 54.0546H199.135V57.5141H202.595V54.0546Z" fill="black" />
                <path d="M212.973 54.0546H209.514V57.5141H212.973V54.0546Z" fill="black" />
                <path d="M216.433 54.0546H212.973V57.5141H216.433V54.0546Z" fill="black" />
                <path d="M230.271 54.0546H226.811V57.5141H230.271V54.0546Z" fill="black" />
                <path d="M233.73 54.0546H230.271V57.5141H233.73V54.0546Z" fill="black" />
                <path d="M237.189 54.0546H233.73V57.5141H237.189V54.0546Z" fill="black" />
                <path d="M240.648 54.0546H237.189V57.5141H240.648V54.0546Z" fill="black" />
                <path d="M251.027 54.0546H247.567V57.5141H251.027V54.0546Z" fill="black" />
                <path d="M254.487 54.0546H251.027V57.5141H254.487V54.0546Z" fill="black" />
                <path d="M257.946 54.0546H254.486V57.5141H257.946V54.0546Z" fill="black" />
                <path d="M264.865 54.0546H261.405V57.5141H264.865V54.0546Z" fill="black" />
                <path d="M278.703 54.0546H275.243V57.5141H278.703V54.0546Z" fill="black" />
                <path d="M282.162 54.0546H278.703V57.5141H282.162V54.0546Z" fill="black" />
                <path d="M289.081 54.0546H285.622V57.5141H289.081V54.0546Z" fill="black" />
                <path d="M178.378 57.5134H174.919V60.9728H178.378V57.5134Z" fill="black" />
                <path d="M185.297 57.5134H181.838V60.9728H185.297V57.5134Z" fill="black" />
                <path d="M192.216 57.5134H188.757V60.9728H192.216V57.5134Z" fill="black" />
                <path d="M195.676 57.5134H192.216V60.9728H195.676V57.5134Z" fill="black" />
                <path d="M199.135 57.5134H195.676V60.9728H199.135V57.5134Z" fill="black" />
                <path d="M202.595 57.5134H199.135V60.9728H202.595V57.5134Z" fill="black" />
                <path d="M206.054 57.5134H202.595V60.9728H206.054V57.5134Z" fill="black" />
                <path d="M223.351 57.5134H219.892V60.9728H223.351V57.5134Z" fill="black" />
                <path d="M226.811 57.5134H223.351V60.9728H226.811V57.5134Z" fill="black" />
                <path d="M230.27 57.5134H226.811V60.9728H230.27V57.5134Z" fill="black" />
                <path d="M240.649 57.5134H237.189V60.9728H240.649V57.5134Z" fill="black" />
                <path d="M257.946 57.5134H254.487V60.9728H257.946V57.5134Z" fill="black" />
                <path d="M264.865 57.5134H261.405V60.9728H264.865V57.5134Z" fill="black" />
                <path d="M278.703 57.5134H275.243V60.9728H278.703V57.5134Z" fill="black" />
                <path d="M285.622 57.5134H282.162V60.9728H285.622V57.5134Z" fill="black" />
                <path d="M185.297 60.9735H181.838V64.433H185.297V60.9735Z" fill="black" />
                <path d="M192.216 60.9735H188.757V64.433H192.216V60.9735Z" fill="black" />
                <path d="M202.595 60.9735H199.135V64.433H202.595V60.9735Z" fill="black" />
                <path d="M212.973 60.9735H209.514V64.433H212.973V60.9735Z" fill="black" />
                <path d="M219.892 60.9735H216.433V64.433H219.892V60.9735Z" fill="black" />
                <path d="M223.352 60.9735H219.892V64.433H223.352V60.9735Z" fill="black" />
                <path d="M233.73 60.9735H230.271V64.433H233.73V60.9735Z" fill="black" />
                <path d="M244.108 60.9735H240.649V64.433H244.108V60.9735Z" fill="black" />
                <path d="M247.567 60.9735H244.108V64.433H247.567V60.9735Z" fill="black" />
                <path d="M254.487 60.9735H251.027V64.433H254.487V60.9735Z" fill="black" />
                <path d="M261.405 60.9735H257.946V64.433H261.405V60.9735Z" fill="black" />
                <path d="M264.865 60.9735H261.405V64.433H264.865V60.9735Z" fill="black" />
                <path d="M268.324 60.9735H264.865V64.433H268.324V60.9735Z" fill="black" />
                <path d="M178.378 64.4325H174.919V67.8919H178.378V64.4325Z" fill="black" />
                <path d="M185.297 64.4325H181.838V67.8919H185.297V64.4325Z" fill="black" />
                <path d="M188.757 64.4325H185.297V67.8919H188.757V64.4325Z" fill="black" />
                <path d="M199.135 64.4325H195.676V67.8919H199.135V64.4325Z" fill="black" />
                <path d="M206.054 64.4325H202.595V67.8919H206.054V64.4325Z" fill="black" />
                <path d="M212.973 64.4325H209.514V67.8919H212.973V64.4325Z" fill="black" />
                <path d="M219.892 64.4325H216.433V67.8919H219.892V64.4325Z" fill="black" />
                <path d="M223.352 64.4325H219.892V67.8919H223.352V64.4325Z" fill="black" />
                <path d="M233.73 64.4325H230.271V67.8919H233.73V64.4325Z" fill="black" />
                <path d="M254.487 64.4325H251.027V67.8919H254.487V64.4325Z" fill="black" />
                <path d="M257.946 64.4325H254.486V67.8919H257.946V64.4325Z" fill="black" />
                <path d="M261.405 64.4325H257.946V67.8919H261.405V64.4325Z" fill="black" />
                <path d="M268.324 64.4325H264.865V67.8919H268.324V64.4325Z" fill="black" />
                <path d="M271.784 64.4325H268.324V67.8919H271.784V64.4325Z" fill="black" />
                <path d="M278.703 64.4325H275.243V67.8919H278.703V64.4325Z" fill="black" />
                <path d="M289.081 64.4325H285.622V67.8919H289.081V64.4325Z" fill="black" />
                <path d="M178.378 67.8924H174.919V71.3519H178.378V67.8924Z" fill="black" />
                <path d="M185.297 67.8924H181.838V71.3519H185.297V67.8924Z" fill="black" />
                <path d="M192.216 67.8924H188.757V71.3519H192.216V67.8924Z" fill="black" />
                <path d="M195.676 67.8924H192.216V71.3519H195.676V67.8924Z" fill="black" />
                <path d="M202.595 67.8924H199.135V71.3519H202.595V67.8924Z" fill="black" />
                <path d="M212.973 67.8924H209.514V71.3519H212.973V67.8924Z" fill="black" />
                <path d="M216.432 67.8924H212.973V71.3519H216.432V67.8924Z" fill="black" />
                <path d="M226.811 67.8924H223.351V71.3519H226.811V67.8924Z" fill="black" />
                <path d="M237.189 67.8924H233.73V71.3519H237.189V67.8924Z" fill="black" />
                <path d="M240.649 67.8924H237.189V71.3519H240.649V67.8924Z" fill="black" />
                <path d="M244.108 67.8924H240.649V71.3519H244.108V67.8924Z" fill="black" />
                <path d="M247.568 67.8924H244.108V71.3519H247.568V67.8924Z" fill="black" />
                <path d="M261.405 67.8924H257.946V71.3519H261.405V67.8924Z" fill="black" />
                <path d="M264.865 67.8924H261.405V71.3519H264.865V67.8924Z" fill="black" />
                <path d="M271.784 67.8924H268.324V71.3519H271.784V67.8924Z" fill="black" />
                <path d="M282.162 67.8924H278.703V71.3519H282.162V67.8924Z" fill="black" />
                <path d="M185.297 71.3524H181.838V74.8119H185.297V71.3524Z" fill="black" />
                <path d="M192.216 71.3524H188.757V74.8119H192.216V71.3524Z" fill="black" />
                <path d="M195.676 71.3524H192.216V74.8119H195.676V71.3524Z" fill="black" />
                <path d="M199.135 71.3524H195.676V74.8119H199.135V71.3524Z" fill="black" />
                <path d="M212.973 71.3524H209.514V74.8119H212.973V71.3524Z" fill="black" />
                <path d="M216.433 71.3524H212.973V74.8119H216.433V71.3524Z" fill="black" />
                <path d="M219.892 71.3524H216.433V74.8119H219.892V71.3524Z" fill="black" />
                <path d="M226.811 71.3524H223.352V74.8119H226.811V71.3524Z" fill="black" />
                <path d="M230.271 71.3524H226.811V74.8119H230.271V71.3524Z" fill="black" />
                <path d="M237.189 71.3524H233.73V74.8119H237.189V71.3524Z" fill="black" />
                <path d="M240.648 71.3524H237.189V74.8119H240.648V71.3524Z" fill="black" />
                <path d="M247.567 71.3524H244.108V74.8119H247.567V71.3524Z" fill="black" />
                <path d="M251.027 71.3524H247.567V74.8119H251.027V71.3524Z" fill="black" />
                <path d="M257.946 71.3524H254.486V74.8119H257.946V71.3524Z" fill="black" />
                <path d="M261.405 71.3524H257.946V74.8119H261.405V71.3524Z" fill="black" />
                <path d="M264.865 71.3524H261.405V74.8119H264.865V71.3524Z" fill="black" />
                <path d="M268.324 71.3524H264.865V74.8119H268.324V71.3524Z" fill="black" />
                <path d="M275.243 71.3524H271.784V74.8119H275.243V71.3524Z" fill="black" />
                <path d="M285.622 71.3524H282.162V74.8119H285.622V71.3524Z" fill="black" />
                <path d="M178.378 74.8114H174.919V78.2709H178.378V74.8114Z" fill="black" />
                <path d="M181.838 74.8114H178.378V78.2709H181.838V74.8114Z" fill="black" />
                <path d="M185.297 74.8114H181.838V78.2709H185.297V74.8114Z" fill="black" />
                <path d="M188.757 74.8114H185.297V78.2709H188.757V74.8114Z" fill="black" />
                <path d="M192.216 74.8114H188.757V78.2709H192.216V74.8114Z" fill="black" />
                <path d="M202.595 74.8114H199.135V78.2709H202.595V74.8114Z" fill="black" />
                <path d="M212.973 74.8114H209.514V78.2709H212.973V74.8114Z" fill="black" />
                <path d="M216.433 74.8114H212.973V78.2709H216.433V74.8114Z" fill="black" />
                <path d="M223.352 74.8114H219.892V78.2709H223.352V74.8114Z" fill="black" />
                <path d="M226.811 74.8114H223.352V78.2709H226.811V74.8114Z" fill="black" />
                <path d="M230.271 74.8114H226.811V78.2709H230.271V74.8114Z" fill="black" />
                <path d="M233.73 74.8114H230.271V78.2709H233.73V74.8114Z" fill="black" />
                <path d="M237.189 74.8114H233.73V78.2709H237.189V74.8114Z" fill="black" />
                <path d="M240.648 74.8114H237.189V78.2709H240.648V74.8114Z" fill="black" />
                <path d="M251.027 74.8114H247.567V78.2709H251.027V74.8114Z" fill="black" />
                <path d="M257.946 74.8114H254.486V78.2709H257.946V74.8114Z" fill="black" />
                <path d="M264.865 74.8114H261.405V78.2709H264.865V74.8114Z" fill="black" />
                <path d="M268.324 74.8114H264.865V78.2709H268.324V74.8114Z" fill="black" />
                <path d="M271.784 74.8114H268.324V78.2709H271.784V74.8114Z" fill="black" />
                <path d="M178.378 78.2701H174.919V81.7296H178.378V78.2701Z" fill="black" />
                <path d="M181.838 78.2701H178.378V81.7296H181.838V78.2701Z" fill="black" />
                <path d="M188.757 78.2701H185.297V81.7296H188.757V78.2701Z" fill="black" />
                <path d="M192.216 78.2701H188.757V81.7296H192.216V78.2701Z" fill="black" />
                <path d="M195.676 78.2701H192.216V81.7296H195.676V78.2701Z" fill="black" />
                <path d="M199.135 78.2701H195.676V81.7296H199.135V78.2701Z" fill="black" />
                <path d="M206.054 78.2701H202.595V81.7296H206.054V78.2701Z" fill="black" />
                <path d="M209.514 78.2701H206.054V81.7296H209.514V78.2701Z" fill="black" />
                <path d="M219.892 78.2701H216.432V81.7296H219.892V78.2701Z" fill="black" />
                <path d="M237.189 78.2701H233.73V81.7296H237.189V78.2701Z" fill="black" />
                <path d="M240.649 78.2701H237.189V81.7296H240.649V78.2701Z" fill="black" />
                <path d="M244.108 78.2701H240.649V81.7296H244.108V78.2701Z" fill="black" />
                <path d="M247.568 78.2701H244.108V81.7296H247.568V78.2701Z" fill="black" />
                <path d="M251.027 78.2701H247.568V81.7296H251.027V78.2701Z" fill="black" />
                <path d="M254.487 78.2701H251.027V81.7296H254.487V78.2701Z" fill="black" />
                <path d="M261.405 78.2701H257.946V81.7296H261.405V78.2701Z" fill="black" />
                <path d="M268.324 78.2701H264.865V81.7296H268.324V78.2701Z" fill="black" />
                <path d="M275.243 78.2701H271.784V81.7296H275.243V78.2701Z" fill="black" />
                <path d="M278.703 78.2701H275.243V81.7296H278.703V78.2701Z" fill="black" />
                <path d="M285.622 78.2701H282.162V81.7296H285.622V78.2701Z" fill="black" />
                <path d="M178.378 81.7294H174.919V85.1888H178.378V81.7294Z" fill="black" />
                <path d="M181.838 81.7294H178.378V85.1888H181.838V81.7294Z" fill="black" />
                <path d="M192.216 81.7294H188.757V85.1888H192.216V81.7294Z" fill="black" />
                <path d="M195.676 81.7294H192.216V85.1888H195.676V81.7294Z" fill="black" />
                <path d="M202.595 81.7294H199.135V85.1888H202.595V81.7294Z" fill="black" />
                <path d="M206.054 81.7294H202.595V85.1888H206.054V81.7294Z" fill="black" />
                <path d="M209.514 81.7294H206.054V85.1888H209.514V81.7294Z" fill="black" />
                <path d="M212.973 81.7294H209.514V85.1888H212.973V81.7294Z" fill="black" />
                <path d="M230.271 81.7294H226.811V85.1888H230.271V81.7294Z" fill="black" />
                <path d="M233.73 81.7294H230.271V85.1888H233.73V81.7294Z" fill="black" />
                <path d="M240.648 81.7294H237.189V85.1888H240.648V81.7294Z" fill="black" />
                <path d="M247.567 81.7294H244.108V85.1888H247.567V81.7294Z" fill="black" />
                <path d="M254.487 81.7294H251.027V85.1888H254.487V81.7294Z" fill="black" />
                <path d="M257.946 81.7294H254.486V85.1888H257.946V81.7294Z" fill="black" />
                <path d="M261.405 81.7294H257.946V85.1888H261.405V81.7294Z" fill="black" />
                <path d="M278.703 81.7294H275.243V85.1888H278.703V81.7294Z" fill="black" />
                <path d="M282.162 81.7294H278.703V85.1888H282.162V81.7294Z" fill="black" />
                <path d="M285.622 81.7294H282.162V85.1888H285.622V81.7294Z" fill="black" />
                <path d="M178.378 85.1895H174.919V88.6489H178.378V85.1895Z" fill="black" />
                <path d="M185.297 85.1895H181.838V88.6489H185.297V85.1895Z" fill="black" />
                <path d="M188.757 85.1895H185.297V88.6489H188.757V85.1895Z" fill="black" />
                <path d="M192.216 85.1895H188.757V88.6489H192.216V85.1895Z" fill="black" />
                <path d="M199.135 85.1895H195.676V88.6489H199.135V85.1895Z" fill="black" />
                <path d="M202.595 85.1895H199.135V88.6489H202.595V85.1895Z" fill="black" />
                <path d="M212.973 85.1895H209.514V88.6489H212.973V85.1895Z" fill="black" />
                <path d="M219.892 85.1895H216.432V88.6489H219.892V85.1895Z" fill="black" />
                <path d="M223.351 85.1895H219.892V88.6489H223.351V85.1895Z" fill="black" />
                <path d="M230.27 85.1895H226.811V88.6489H230.27V85.1895Z" fill="black" />
                <path d="M233.73 85.1895H230.27V88.6489H233.73V85.1895Z" fill="black" />
                <path d="M237.189 85.1895H233.73V88.6489H237.189V85.1895Z" fill="black" />
                <path d="M247.568 85.1895H244.108V88.6489H247.568V85.1895Z" fill="black" />
                <path d="M251.027 85.1895H247.568V88.6489H251.027V85.1895Z" fill="black" />
                <path d="M254.487 85.1895H251.027V88.6489H254.487V85.1895Z" fill="black" />
                <path d="M257.946 85.1895H254.487V88.6489H257.946V85.1895Z" fill="black" />
                <path d="M261.405 85.1895H257.946V88.6489H261.405V85.1895Z" fill="black" />
                <path d="M264.865 85.1895H261.405V88.6489H264.865V85.1895Z" fill="black" />
                <path d="M271.784 85.1895H268.324V88.6489H271.784V85.1895Z" fill="black" />
                <path d="M278.703 85.1895H275.243V88.6489H278.703V85.1895Z" fill="black" />
                <path d="M285.622 85.1895H282.162V88.6489H285.622V85.1895Z" fill="black" />
                <path d="M181.838 88.6492H178.378V92.1086H181.838V88.6492Z" fill="black" />
                <path d="M185.297 88.6492H181.838V92.1086H185.297V88.6492Z" fill="black" />
                <path d="M192.216 88.6492H188.757V92.1086H192.216V88.6492Z" fill="black" />
                <path d="M202.595 88.6492H199.135V92.1086H202.595V88.6492Z" fill="black" />
                <path d="M212.973 88.6492H209.514V92.1086H212.973V88.6492Z" fill="black" />
                <path d="M219.892 88.6492H216.432V92.1086H219.892V88.6492Z" fill="black" />
                <path d="M223.351 88.6492H219.892V92.1086H223.351V88.6492Z" fill="black" />
                <path d="M230.27 88.6492H199V92.1086H230.27V88.6492Z" fill="black" />
                <path d="M237.189 88.6492H233.73V92.1086H237.189V88.6492Z" fill="black" />
                <path d="M240.649 88.6492H237.189V92.1086H240.649V88.6492Z" fill="black" />
                <path d="M247.568 88.6492H244.108V92.1086H247.568V88.6492Z" fill="black" />
                <path d="M251.027 88.6492H247.568V92.1086H251.027V88.6492Z" fill="black" />
                <path d="M261.405 88.6492H257.946V92.1086H261.405V88.6492Z" fill="black" />
                <path d="M264.865 88.6492H261.405V92.1086H264.865V88.6492Z" fill="black" />
                <path d="M268.324 88.6492H264.865V92.1086H268.324V88.6492Z" fill="black" />
                <path d="M271.784 88.6492H268.324V92.1086H271.784V88.6492Z" fill="black" />
                <path d="M285.622 88.6492H282.162V92.1086H285.622V88.6492Z" fill="black" />
                <path d="M178.378 92.1093H174.919V95.5687H178.378V92.1093Z" fill="black" />
                <path d="M185.297 92.1093H181.838V95.5687H185.297V92.1093Z" fill="black" />
                <path d="M195.676 92.1093H192.216V95.5687H195.676V92.1093Z" fill="black" />
                <path d="M199.135 92.1093H195.676V95.5687H199.135V92.1093Z" fill="black" />
                <path d="M202.595 92.1093H199.135V95.5687H202.595V92.1093Z" fill="black" />
                <path d="M209.514 92.1093H206.054V95.5687H209.514V92.1093Z" fill="black" />
                <path d="M216.433 92.1093H212.973V95.5687H216.433V92.1093Z" fill="black" />
                <path d="M223.352 92.1093H219.892V95.5687H223.352V92.1093Z" fill="black" />
                <path d="M226.811 92.1093H223.352V95.5687H226.811V92.1093Z" fill="black" />
                <path d="M240.648 92.1093H237.189V95.5687H240.648V92.1093Z" fill="black" />
                <path d="M244.108 92.1093H240.649V95.5687H244.108V92.1093Z" fill="black" />
                <path d="M247.567 92.1093H244.108V95.5687H247.567V92.1093Z" fill="black" />
                <path d="M268.324 92.1093H264.865V95.5687H268.324V92.1093Z" fill="black" />
                <path d="M271.784 92.1093H268.324V95.5687H271.784V92.1093Z" fill="black" />
                <path d="M275.243 92.1093H271.784V95.5687H275.243V92.1093Z" fill="black" />
                <path d="M278.703 92.1093H275.243V95.5687H278.703V92.1093Z" fill="black" />
                <path d="M178.378 95.5685H174.919V99.0281H178.378V95.5685Z" fill="black" />
                <path d="M188.757 95.5685H185.297V99.0281H188.757V95.5685Z" fill="black" />
                <path d="M195.676 95.5685H192.216V99.0281H195.676V95.5685Z" fill="black" />
                <path d="M219.892 95.5685H216.432V99.0281H219.892V95.5685Z" fill="black" />
                <path d="M233.73 95.5685H230.27V99.0281H233.73V95.5685Z" fill="black" />
                <path d="M237.189 95.5685H233.73V99.0281H237.189V95.5685Z" fill="black" />
                <path d="M244.108 95.5685H240.649V99.0281H244.108V95.5685Z" fill="black" />
                <path d="M254.487 95.5685H251.027V99.0281H254.487V95.5685Z" fill="black" />
                <path d="M268.324 95.5685H264.865V99.0281H268.324V95.5685Z" fill="black" />
                <path d="M278.703 95.5685H275.243V99.0281H278.703V95.5685Z" fill="black" />
                <path d="M282.162 95.5685H278.703V99.0281H282.162V95.5685Z" fill="black" />
                <path d="M285.622 95.5685H282.162V99.0281H285.622V95.5685Z" fill="black" />
                <path d="M192.216 99.0272H188.757V102.487H192.216V99.0272Z" fill="black" />
                <path d="M195.676 99.0272H192.216V102.487H195.676V99.0272Z" fill="black" />
                <path d="M199.135 99.0272H195.676V102.487H199.135V99.0272Z" fill="black" />
                <path d="M202.595 99.0272H199.135V102.487H202.595V99.0272Z" fill="black" />
                <path d="M216.433 99.0272H212.973V102.487H216.433V99.0272Z" fill="black" />
                <path d="M219.892 99.0272H216.433V102.487H219.892V99.0272Z" fill="black" />
                <path d="M226.811 99.0272H223.352V102.487H226.811V99.0272Z" fill="black" />
                <path d="M233.73 99.0272H230.271V102.487H233.73V99.0272Z" fill="black" />
                <path d="M240.648 99.0272H237.189V102.487H240.648V99.0272Z" fill="black" />
                <path d="M244.108 99.0272H240.649V102.487H244.108V99.0272Z" fill="black" />
                <path d="M251.027 99.0272H247.567V102.487H251.027V99.0272Z" fill="black" />
                <path d="M257.946 99.0272H254.486V102.487H257.946V99.0272Z" fill="black" />
                <path d="M261.405 99.0272H257.946V102.487H261.405V99.0272Z" fill="black" />
                <path d="M264.865 99.0272H261.405V102.487H264.865V99.0272Z" fill="black" />
                <path d="M282.162 99.0272H278.703V102.487H282.162V99.0272Z" fill="black" />
                <path d="M285.622 99.0272H282.162V102.487H285.622V99.0272Z" fill="black" />
                <path d="M188.757 102.486H185.297V105.946H188.757V102.486Z" fill="black" />
                <path d="M192.216 102.486H188.757V105.946H192.216V102.486Z" fill="black" />
                <path d="M195.676 102.486H192.216V105.946H195.676V102.486Z" fill="black" />
                <path d="M202.595 102.486H199.135V105.946H202.595V102.486Z" fill="black" />
                <path d="M206.054 102.486H202.595V105.946H206.054V102.486Z" fill="black" />
                <path d="M212.973 102.486H209.514V105.946H212.973V102.486Z" fill="black" />
                <path d="M223.352 102.486H219.892V105.946H223.352V102.486Z" fill="black" />
                <path d="M237.189 102.486H233.73V105.946H237.189V102.486Z" fill="black" />
                <path d="M240.648 102.486H237.189V105.946H240.648V102.486Z" fill="black" />
                <path d="M244.108 102.486H240.649V105.946H244.108V102.486Z" fill="black" />
                <path d="M247.567 102.486H244.108V105.946H247.567V102.486Z" fill="black" />
                <path d="M251.027 102.486H247.567V105.946H251.027V102.486Z" fill="black" />
                <path d="M254.487 102.486H251.027V105.946H254.487V102.486Z" fill="black" />
                <path d="M264.865 102.486H261.405V105.946H264.865V102.486Z" fill="black" />
                <path d="M268.324 102.486H264.865V105.946H268.324V102.486Z" fill="black" />
                <path d="M275.243 102.486H271.784V105.946H275.243V102.486Z" fill="black" />
                <path d="M278.703 102.486H275.243V105.946H278.703V102.486Z" fill="black" />
                <path d="M285.622 102.486H282.162V105.946H285.622V102.486Z" fill="black" />
                <path d="M289.081 102.486H285.622V105.946H289.081V102.486Z" fill="black" />
                <path d="M178.378 105.946H174.919V109.406H178.378V105.946Z" fill="black" />
                <path d="M181.838 105.946H178.378V109.406H181.838V105.946Z" fill="black" />
                <path d="M185.297 105.946H181.838V109.406H185.297V105.946Z" fill="black" />
                <path d="M192.216 105.946H188.757V109.406H192.216V105.946Z" fill="black" />
                <path d="M199.135 105.946H195.676V109.406H199.135V105.946Z" fill="black" />
                <path d="M202.595 105.946H199.135V109.406H202.595V105.946Z" fill="black" />
                <path d="M212.973 105.946H209.514V109.406H212.973V105.946Z" fill="black" />
                <path d="M216.432 105.946H212.973V109.406H216.432V105.946Z" fill="black" />
                <path d="M223.351 105.946H219.892V109.406H223.351V105.946Z" fill="black" />
                <path d="M226.811 105.946H223.351V109.406H226.811V105.946Z" fill="black" />
                <path d="M230.27 105.946H226.811V109.406H230.27V105.946Z" fill="black" />
                <path d="M233.73 105.946H230.27V109.406H233.73V105.946Z" fill="black" />
                <path d="M237.189 105.946H233.73V109.406H237.189V105.946Z" fill="black" />
                <path d="M247.568 105.946H244.108V109.406H247.568V105.946Z" fill="black" />
                <path d="M251.027 105.946H247.568V109.406H251.027V105.946Z" fill="black" />
                <path d="M254.487 105.946H251.027V109.406H254.487V105.946Z" fill="black" />
                <path d="M261.405 105.946H257.946V109.406H261.405V105.946Z" fill="black" />
                <path d="M264.865 105.946H261.405V109.406H264.865V105.946Z" fill="black" />
                <path d="M268.324 105.946H264.865V109.406H268.324V105.946Z" fill="black" />
                <path d="M271.784 105.946H268.324V109.406H271.784V105.946Z" fill="black" />
                <path d="M275.243 105.946H271.784V109.406H275.243V105.946Z" fill="black" />
                <path d="M278.703 105.946H275.243V109.406H278.703V105.946Z" fill="black" />
                <path d="M285.622 105.946H282.162V109.406H285.622V105.946Z" fill="black" />
                <path d="M206.054 109.406H202.595V112.866H206.054V109.406Z" fill="black" />
                <path d="M212.973 109.406H209.514V112.866H212.973V109.406Z" fill="black" />
                <path d="M216.433 109.406H212.973V112.866H216.433V109.406Z" fill="black" />
                <path d="M223.352 109.406H219.892V112.866H223.352V109.406Z" fill="black" />
                <path d="M226.811 109.406H223.352V112.866H226.811V109.406Z" fill="black" />
                <path d="M233.73 109.406H230.271V112.866H233.73V109.406Z" fill="black" />
                <path d="M237.189 109.406H233.73V112.866H237.189V109.406Z" fill="black" />
                <path d="M251.027 109.406H247.567V112.866H251.027V109.406Z" fill="black" />
                <path d="M254.487 109.406H251.027V112.866H254.487V109.406Z" fill="black" />
                <path d="M257.946 109.406H254.486V112.866H257.946V109.406Z" fill="black" />
                <path d="M261.405 109.406H257.946V112.866H261.405V109.406Z" fill="black" />
                <path d="M275.243 109.406H271.784V112.866H275.243V109.406Z" fill="black" />
                <path d="M282.162 109.406H278.703V112.866H282.162V109.406Z" fill="black" />
                <path d="M206.054 112.865H202.595V116.325H206.054V112.865Z" fill="black" />
                <path d="M209.514 112.865H206.054V116.325H209.514V112.865Z" fill="black" />
                <path d="M212.973 112.865H209.514V116.325H212.973V112.865Z" fill="black" />
                <path d="M226.811 112.865H223.352V116.325H226.811V112.865Z" fill="black" />
                <path d="M230.271 112.865H226.811V116.325H230.271V112.865Z" fill="black" />
                <path d="M240.648 112.865H237.189V116.325H240.648V112.865Z" fill="black" />
                <path d="M261.405 112.865H257.946V116.325H261.405V112.865Z" fill="black" />
                <path d="M268.324 112.865H264.865V116.325H268.324V112.865Z" fill="black" />
                <path d="M275.243 112.865H271.784V116.325H275.243V112.865Z" fill="black" />
                <path d="M278.703 112.865H275.243V116.325H278.703V112.865Z" fill="black" />
                <path d="M216.432 116.325H212.973V119.785H216.432V116.325Z" fill="black" />
                <path d="M226.811 116.325H223.351V119.785H226.811V116.325Z" fill="black" />
                <path d="M230.27 116.325H226.811V119.785H230.27V116.325Z" fill="black" />
                <path d="M233.73 116.325H230.27V119.785H233.73V116.325Z" fill="black" />
                <path d="M244.108 116.325H240.649V119.785H244.108V116.325Z" fill="black" />
                <path d="M254.487 116.325H251.027V119.785H254.487V116.325Z" fill="black" />
                <path d="M261.405 116.325H257.946V119.785H261.405V116.325Z" fill="black" />
                <path d="M275.243 116.325H271.784V119.785H275.243V116.325Z" fill="black" />
                <path d="M289.081 116.325H285.622V119.785H289.081V116.325Z" fill="black" />
                <path d="M206.054 119.784H202.595V123.244H206.054V119.784Z" fill="black" />
                <path d="M216.433 119.784H212.973V123.244H216.433V119.784Z" fill="black" />
                <path d="M219.892 119.784H216.433V123.244H219.892V119.784Z" fill="black" />
                <path d="M223.352 119.784H219.892V123.244H223.352V119.784Z" fill="black" />
                <path d="M226.811 119.784H223.352V123.244H226.811V119.784Z" fill="black" />
                <path d="M233.73 119.784H230.271V123.244H233.73V119.784Z" fill="black" />
                <path d="M244.108 119.784H240.649V123.244H244.108V119.784Z" fill="black" />
                <path d="M254.487 119.784H251.027V123.244H254.487V119.784Z" fill="black" />
                <path d="M261.405 119.784H257.946V123.244H261.405V119.784Z" fill="black" />
                <path d="M264.865 119.784H261.405V123.244H264.865V119.784Z" fill="black" />
                <path d="M268.324 119.784H264.865V123.244H268.324V119.784Z" fill="black" />
                <path d="M271.784 119.784H268.324V123.244H271.784V119.784Z" fill="black" />
                <path d="M275.243 119.784H271.784V123.244H275.243V119.784Z" fill="black" />
                <path d="M278.703 119.784H275.243V123.244H278.703V119.784Z" fill="black" />
                <path d="M289.081 119.784H285.622V123.244H289.081V119.784Z" fill="black" />
                <path d="M209.514 123.243H206.054V126.703H209.514V123.243Z" fill="black" />
                <path d="M212.973 123.243H209.514V126.703H212.973V123.243Z" fill="black" />
                <path d="M219.892 123.243H216.432V126.703H219.892V123.243Z" fill="black" />
                <path d="M223.351 123.243H219.892V126.703H223.351V123.243Z" fill="black" />
                <path d="M240.649 123.243H237.189V126.703H240.649V123.243Z" fill="black" />
                <path d="M244.108 123.243H240.649V126.703H244.108V123.243Z" fill="black" />
                <path d="M247.568 123.243H244.108V126.703H247.568V123.243Z" fill="black" />
                <path d="M257.946 123.243H254.487V126.703H257.946V123.243Z" fill="black" />
                <path d="M268.324 123.243H264.865V126.703H268.324V123.243Z" fill="black" />
                <path d="M271.784 123.243H268.324V126.703H271.784V123.243Z" fill="black" />
                <path d="M275.243 123.243H271.784V126.703H275.243V123.243Z" fill="black" />
                <path d="M278.703 123.243H275.243V126.703H278.703V123.243Z" fill="black" />
                <path d="M282.162 123.243H278.703V126.703H282.162V123.243Z" fill="black" />
                <path d="M285.622 123.243H282.162V126.703H285.622V123.243Z" fill="black" />
                <path d="M209.514 126.703H206.054V130.162H209.514V126.703Z" fill="black" />
                <path d="M219.892 126.703H216.432V130.162H219.892V126.703Z" fill="black" />
                <path d="M226.811 126.703H223.351V130.162H226.811V126.703Z" fill="black" />
                <path d="M230.27 126.703H226.811V130.162H230.27V126.703Z" fill="black" />
                <path d="M240.649 126.703H237.189V130.162H240.649V126.703Z" fill="black" />
                <path d="M247.568 126.703H244.108V130.162H247.568V126.703Z" fill="black" />
                <path d="M251.027 126.703H247.568V130.162H251.027V126.703Z" fill="black" />
                <path d="M264.865 126.703H261.405V130.162H264.865V126.703Z" fill="black" />
                <path d="M268.324 126.703H264.865V130.162H268.324V126.703Z" fill="black" />
                <path d="M271.784 126.703H268.324V130.162H271.784V126.703Z" fill="black" />
                <path d="M275.243 126.703H271.784V130.162H275.243V126.703Z" fill="black" />
                <path d="M278.703 126.703H275.243V130.162H278.703V126.703Z" fill="black" />
                <path d="M216.433 130.163H212.973V133.622H216.433V130.163Z" fill="black" />
                <path d="M219.892 130.163H216.433V133.622H219.892V130.163Z" fill="black" />
                <path d="M223.352 130.163H219.892V133.622H223.352V130.163Z" fill="black" />
                <path d="M230.271 130.163H226.811V133.622H230.271V130.163Z" fill="black" />
                <path d="M233.73 130.163H230.271V133.622H233.73V130.163Z" fill="black" />
                <path d="M237.189 130.163H233.73V133.622H237.189V130.163Z" fill="black" />
                <path d="M240.648 130.163H237.189V133.622H240.648V130.163Z" fill="black" />
                <path d="M251.027 130.163H247.567V133.622H251.027V130.163Z" fill="black" />
                <path d="M257.946 130.163H254.486V133.622H257.946V130.163Z" fill="black" />
                <path d="M261.405 130.163H257.946V133.622H261.405V130.163Z" fill="black" />
                <path d="M268.324 130.163H264.865V133.622H268.324V130.163Z" fill="black" />
                <path d="M206.054 133.622H202.595V137.081H206.054V133.622Z" fill="black" />
                <path d="M212.973 133.622H209.514V137.081H212.973V133.622Z" fill="black" />
                <path d="M237.189 133.622H233.73V137.081H237.189V133.622Z" fill="black" />
                <path d="M244.108 133.622H240.649V137.081H244.108V133.622Z" fill="black" />
                <path d="M247.567 133.622H244.108V137.081H247.567V133.622Z" fill="black" />
                <path d="M251.027 133.622H247.567V137.081H251.027V133.622Z" fill="black" />
                <path d="M254.487 133.622H251.027V137.081H254.487V133.622Z" fill="black" />
                <path d="M257.946 133.622H254.486V137.081H257.946V133.622Z" fill="black" />
                <path d="M261.405 133.622H257.946V137.081H261.405V133.622Z" fill="black" />
                <path d="M264.865 133.622H261.405V137.081H264.865V133.622Z" fill="black" />
                <path d="M268.324 133.622H264.865V137.081H268.324V133.622Z" fill="black" />
                <path d="M278.703 133.622H275.243V137.081H278.703V133.622Z" fill="black" />
                <path d="M289.081 133.622H285.622V137.081H289.081V133.622Z" fill="black" />
                <path d="M195.503 22.9193H178.551H174.919V26.5517V43.5031V47.1355H178.551H195.503H199.135V43.5031V26.5517V22.9193H195.503ZM195.503 43.5031H178.551V26.5517H195.503V43.5031Z" fill="black" />
                <path d="M285.449 22.9193H268.497H264.865V26.5517V43.5031V47.1355H268.497H285.449H289.081V43.5031V26.5517V22.9193H285.449ZM285.449 43.5031H268.497V26.5517H285.449V43.5031Z" fill="black" />
                <path d="M195.503 112.865H178.551H174.919V116.498V133.449V137.081H178.551H195.503H199.135V133.449V116.498V112.865H195.503ZM195.503 133.449H178.551V116.498H195.503V133.449Z" fill="black" />
                <path d="M192.216 29.8386H181.838V40.217H192.216V29.8386Z" fill="black" />
                <path d="M282.162 29.8386H271.784V40.217H282.162V29.8386Z" fill="black" />
                <path d="M192.216 119.784H181.838V130.162H192.216V119.784Z" fill="black" />
              </g>
              <defs>
                <clipPath id="clip0_98_5813">
                  <rect width="128" height="128" fill="white" transform="translate(168 16)" />
                </clipPath>
              </defs>
            </svg> */}
            <Row className=" mt-3">
              <Col>
                <h5 className="  fw-semibold">Emails</h5>
                <Row className=" text-center position-relative align-items-center d-flex align-content-center">
                  <Col>
                    <Button
                      className=" w-50 btn-light"
                      style={{ background: "#F9F5FF", color: " #6941C6" }}
                    >
                      Anika@Levin.com
                    </Button>
                    <button style={btnStyle}>Edit</button> <br />
                    <button style={btnStyle} className="mt-2">
                      + Add email
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>

            {/* ///////////////////// phone number////////////// */}
            <Row className=" mt-3">
              <Col>
                <h5 className="  fw-semibold">Phone numbers</h5>{" "}
                <Row className=" text-center position-relative align-items-center d-flex align-content-center">
                  <Col>
                    <Button
                      className=" w-50 btn-light"
                      style={{ background: "#F9F5FF", color: " #6941C6" }}
                    >
                      +1 123 456 798
                    </Button>
                    <button style={btnStyle}>Edit</button> <br />
                    <button style={btnStyle} className="mt-2">
                      + Add phone number
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* //////////////////Linkkes//////////////// */}
            <Row className=" mt-3">
              <Col>
                <h5 className="  fw-semibold">Links</h5>
                <Row className=" text-center position-relative align-items-center d-flex align-content-center">
                  <Col>
                    <Button
                      className=" w-50 btn-light"
                      style={{ background: "#F9F5FF", color: " #6941C6" }}
                    >
                      www.Levin.com
                    </Button>
                    <button style={btnStyle}>Edit</button> <br />
                    <button style={btnStyle} className="mt-2">
                      + Add Link
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
            {/* /////////sSocial media/////////// */}
            <Row className=" mt-3">
              <Col>
                <h5 className="  fw-semibold">Social media</h5>
                <Row className=" text-center position-relative align-items-center d-flex align-content-center">
                  <Col lg={12}>
                    <Button
                      className=" w-50 btn-light text-centeralign-items-center "
                      style={{ background: "#F9F5FF" }}
                    >
                      <div className=" d-flex align-items-center   justify-content-center ">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                          alt="User Avatar"
                          className="rounded-circle me-2 text-center "
                          style={{ width: "30px", height: "30px" }}
                        />
                        www.Levin.com
                      </div>
                    </Button>
                    <button style={btnStyle}>Disconnect</button>
                    <Col lg={12} className=" mt-2">
                      <Button
                        className=" w-50 btn-light text-centeralign-items-center "
                        style={{ background: "#F9F5FF" }}
                      >
                        <div className=" d-flex align-items-center   justify-content-center ">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            alt="User Avatar"
                            className="rounded-circle me-2 text-center "
                            style={{ width: "30px", height: "30px" }}
                          />
                          www.Levin.com
                        </div>
                      </Button>
                      <button style={btnStyle}>Disconnect</button>
                    </Col>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UserProfile;
