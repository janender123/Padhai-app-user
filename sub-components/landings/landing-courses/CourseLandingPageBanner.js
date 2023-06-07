// import node module libraries
import { Fragment, useState } from "react";
import { Col, Row, Container, Image, Button } from "react-bootstrap";
import Link from "next/link";

// import popup youtube video
import ModalVideo from "react-modal-video";

const CourseLandingPageBanner = () => {
  const [isOpen, setOpen] = useState(false);
  const [YouTubeURL] = useState("JRzWRZahOVU");

  return (
    <div className="bg-white">
      <div
        style={{
          backgroundImage: "url('/images/png/RectangleBG.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <Row className="align-items-center">
          <Col lg={6} sm={6} className="mb-6 mb-lg-0">
            <div style={{ marginLeft: "30%" }}>
              <h1 className="display-3 fw-bold text-white mb-3">
                Build a Better <br /> Future for yourself
              </h1>
              <p
                style={{ fontSize: "20px" }}
                className="pe-lg-10 text-white mb-5"
              >
                Build skills with courses Join Padhae to <br /> watch, play,
                learn, make, and discover
              </p>
              <div style={{ display: "flex", height: "50px" }}>
                <Link
                  href="#"
                  style={{
                    backgroundColor: "#28CE8E",
                    border: "0",
                    display: "inline-flex",
                    alignItems: "center",
                    textDecoration: "none",
                    justifyContent: "center",
                    textAlign: "center",
                    boxShadow: "0px 7px 7px rgba(0, 0, 0, 0.5)",
                  }}
                  className="btn btn-primary"
                >
                  View Plans
                </Link>
                <Link
                  href="#"
                  onClick={() => setOpen(true)}
                  style={{
                    backgroundColor: "white",
                    border: "0",
                    padding: "7px",
                    alignItems: "center",
                    textDecoration: "none",
                    justifyContent: "center",
                    textAlign: "center",
                    boxShadow: "0px 7px 7px rgba(0, 0, 0, 0.5)",
                  }}
                  className="popup-youtube fs-4 btn btn-primary text-blue ms-3"
                >
                  <Image
                    src="/images/png/PlayImage.png"
                    alt="Play Image"
                    style={{ marginRight: "5px" }}
                  />
                  <span style={{ color: "blue" }}>Watch Demo</span>
                </Link>
              </div>

              {/* video popup */}
              <ModalVideo
                channel="youtube"
                autoplay
                isOpen={isOpen}
                videoId={YouTubeURL}
                onClose={() => setOpen(false)}
              />
            </div>
          </Col>
          <Col lg={6} sm={6} className="d-flex justify-content-center">
            <div className="position-relative mb-n15">
              <Image
                src="/images/png/girl2.png"
                alt=""
                height="720px"
                className=""
              />
            </div>
          </Col>
        </Row>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          marginLeft: "280px",
          marginTop: "-50px",
        }}
      >
        <Image
          src="/images/brand/CourseLandingIcon1.svg"
          alt="Image 1"
          width="140px"
          className="me-2"
        />
        <Image
          src="/images/brand/CourseLandingIcon2.svg"
          alt="Image 2"
          width="140px"
          className="me-2"
        />
        <Image
          src="/images/brand/CourseLandingIcon3.svg"
          alt="Image 3"
          width="140px"
          className="me-2"
        />
      </div>
    </div>
  );
};

export default CourseLandingPageBanner;
