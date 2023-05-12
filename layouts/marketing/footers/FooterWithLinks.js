// import node module libraries
import Link from "next/link";
import { Row, Col, Image, Container, ListGroup } from "react-bootstrap";

// import MDI icons
import Icon from "@mdi/react";
import { mdiFacebook, mdiTwitter, mdiInstagram } from "@mdi/js";

const FooterWithLinks = () => {
  return (
    <footer className="pt-lg-10 pt-5 footer bg-white">
      <Container
        style={{
          backgroundColor: "#3c65c4",
          maxWidth: "100%",
          padding: "0 180px",
        }}
      >
        <Row>
          <div className="mb-4 mt-10">
            {/* list */}
            <h2 className="fw-bold text-white text-center mb-3">
              Important questions from NCERT
            </h2>
            <ListGroup as="ul" bsPrefix="list-unstyled row">
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Class 11 Biology
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Class 11 Maths
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Class 11 Physics
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Class 11 Chemistry
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Class 11 Biology
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Class 11 Maths
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Class 11 Physics
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Class 11 Chemistry
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Row>
        <Row>
          <div className="mb-4">
            {/* list */}
            <h2 className="fw-bold text-white text-center mb-3">
              Questions from important books and exams
            </h2>
            <ListGroup as="ul" bsPrefix="list-unstyled row">
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  NCERT 11th Biology
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  NCERT 11th Physics I
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  NCERT 12th Biology
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  NCERT 12th Physics I
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  NCERT 12th Maths II
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  NEET 2020
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  NCERT 11th Chemistry I
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  NCERT 11th Physics II
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  NCERT 11th Physics II
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  NCERT 12th Chemistry I
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  NCERT 12th Physics II
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Row>
        <Row>
          <div className="mb-4">
            {/* list */}
            <h2 className="fw-bold text-white text-center mb-3">
              Important questions asked by Filo students
            </h2>
            <ListGroup as="ul" bsPrefix="list-unstyled row">
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Class 11 Biology
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Class 11 Maths
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Class 11 Physics
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Class 11 Chemistry
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Class 11 Biology
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Class 11 Maths
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Class 11 Physics
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-4 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Class 11 Chemistry
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Row>
        <Row className="align-items-center g-0 border-top py-2 mt-6">
          {/*  Links  */}
          <Col lg={5} md={5} sm={12}>
            {/* about company  */}
            <div className="mb-4">
              <Image
                src="/images/brand/logo/logo-padhae-3.png"
                height={80}
                width={200}
                alt=""
                className="logo-inverse"
              />
              <div className="mt-4 text-white">
                <p>
                  Padhae is a learning app for all your learning needs.
                  <br /> Padhae has everything you need for all your education
                  needs.
                </p>
                {/* social media */}
                <div className="fs-4 mt-4">
                  <Link href="#" className="text-white mdi mdi-facebook me-2">
                    <Icon path={mdiFacebook} size={0.7} />
                  </Link>
                  <Link href="#" className="text-white mdi mdi-twitter  me-2">
                    <Icon path={mdiTwitter} size={0.7} />
                  </Link>
                  <Link href="#" className="text-white mdi mdi-instagram ">
                    <Icon path={mdiInstagram} size={0.7} />
                  </Link>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <ListGroup as="ul" bsPrefix="list-unstyled row">
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-6 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  About Us
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-6 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Become a Tutor
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-6 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Padhae Instant Ask Button
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-6 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Instant Tutoring
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-6 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  High Dosage Tutoring
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-6 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Careers
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-6 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Contact Us
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-6 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Blog
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-6 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Privacy Policy
                </Link>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                bsPrefix="col-lg-6 col-md-6 col-sm-12 mb-2"
              >
                <Link href="#" className="text-white nav-link">
                  Terms and Conditions
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterWithLinks;
