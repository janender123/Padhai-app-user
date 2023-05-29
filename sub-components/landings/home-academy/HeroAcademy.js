// import node module libraries
import { useState } from "react";
import { Col, Row, Container, Image, Button } from "react-bootstrap";
import Link from "next/link";

// import popup youtube video
import ModalVideo from "react-modal-video";

const HeroAcademy = () => {
  const [isOpen, setOpen] = useState(false);
  const [YouTubeURL] = useState("JRzWRZahOVU");

  return (
    <section className="py-lg-16 py-8 bg-white">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} sm={6} className="mb-6 mb-lg-0">
            <div className="">
              <h5 className="text-dark mb-4">
                <i className="fe fe-check icon-xxs icon-shape bg-light-success text-success rounded-circle me-2"></i>{" "}
                Most trusted education platform
              </h5>
              <h1 className="display-3 fw-bold mb-3">
                Grow your skills and advance career
              </h1>
              <p className="pe-lg-10 mb-5">
                Start, switch, or advance your career with more than 5,000
                courses, Professional Certificates, and degrees from world-class
                universities and companies.
              </p>
              <Link
                href="#"
                style={{ backgroundColor: "#3c65c4" }}
                className="btn btn-primary "
              >
                Join Free Now
              </Link>
              <Link
                href="#"
                onClick={() => setOpen(true)}
                className="popup-youtube fs-4 text-inherit ms-3"
              >
                <Image src="/images/svg/play-btn.svg" alt="" className="me-2" />
                Watch Demo
              </Link>
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
            <div className="position-relative">
              <Image
                src="/images/brand/logo/padhae-landing-page.svg"
                alt=""
                className=""
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroAcademy;
