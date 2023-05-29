// import node module libraries
import Link from "next/link";
import { Row, Col, Image, Container, ListGroup } from "react-bootstrap";

// import MDI icons
import Icon from "@mdi/react";
import { mdiFacebook, mdiTwitter, mdiInstagram } from "@mdi/js";

const ImpQuestionData = [
  { id: 1, subject: "Class 11 Biology" },
  { id: 2, subject: "Class 11 Maths" },
  { id: 3, subject: "Class 11 Physics" },
  { id: 4, subject: "Class 11 Chemistry" },
  { id: 5, subject: "Class 11 Biology" },
  { id: 6, subject: "Class 11 Maths" },
  { id: 7, subject: "Class 11 Physics" },
  { id: 8, subject: "Class 11 Chemistry" },
  { id: 9, subject: "NCERT 11th Physics II" },
];

const ImpBookQuestionData = [
  { id: 1, subject: "NCERT 11th Biology" },
  { id: 2, subject: "NCERT 11th Physics I" },
  { id: 3, subject: "NCERT 12th Biology" },
  { id: 4, subject: "NCERT 12th Physics I" },
  { id: 5, subject: "NCERT 12th Maths II" },
  { id: 6, subject: "NEET 2020" },
  { id: 7, subject: "NCERT 11th Chemistry I" },
  { id: 8, subject: "NCERT 11th Physics II" },
  { id: 9, subject: "NCERT 11th Physics II" },
  { id: 10, subject: "NCERT 12th Chemistry I" },
  { id: 11, subject: "NCERT 11th Physics II" },
  { id: 12, subject: "NCERT 12th Chemistry I" },
];

const ImpQuestionsAsked = [
  { id: 1, subject: "Class 11 Biology" },
  { id: 2, subject: "Class 11 Maths" },
  { id: 3, subject: "Class 11 Physics" },
  { id: 4, subject: "Class 11 Chemistry" },
  { id: 5, subject: "Class 11 Biology" },
  { id: 6, subject: "Class 11 Maths" },
  { id: 7, subject: "Class 11 Physics" },
  { id: 8, subject: "Class 11 Chemistry" },
];

const AboutSection = [
  { id: 1, subject: "About Us" },
  { id: 2, subject: "Become a Tutor" },
  { id: 3, subject: "Padhae Instant Ask Button" },
  { id: 4, subject: "Instant Tutoring" },
  { id: 5, subject: "High Dosage Tutoring" },
  { id: 6, subject: "Careers" },
  { id: 7, subject: "Contact Us" },
  { id: 8, subject: "Blog" },
];

const FooterWithLinks = () => {
  return (
    <footer className="pt-lg-10 pt-5 footer bg-white">
      <Container
        style={{
          backgroundColor: "#3c65c4",
          maxWidth: "100%",
          padding: "0 20%",
        }}
      >
        <Row>
          <div className="mb-4 mt-10">
            {/* list */}
            <h2 className="fw-bold text-white text-start text-md-center mb-3">
              Important questions from NCERT
            </h2>
            <ListGroup as="ul" bsPrefix="list-unstyled row">
              {ImpQuestionData.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  as="li"
                  bsPrefix="col-lg-4 col-md-6 col-sm-6 col-6 mb-2"
                >
                  <Link href="#" className="text-white  nav-link">
                    {item.subject}
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Row>
        <Row>
          <div className="mb-4">
            {/* list */}
            <h2 className="fw-bold text-white text-start text-md-center mb-3">
              Questions from important books and exams
            </h2>
            <ListGroup as="ul" bsPrefix="list-unstyled row">
              {ImpBookQuestionData.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  as="li"
                  bsPrefix="col-lg-4 col-md-6 col-sm-6 col-6 mb-2"
                >
                  <Link href="#" className="text-white nav-link">
                    {item.subject}
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Row>
        <Row>
          <div className="mb-4">
            {/* list */}
            <h2 className="fw-bold text-white text-start text-md-center mb-3">
              Important questions asked by Padhae students
            </h2>
            <ListGroup as="ul" bsPrefix="list-unstyled row">
              {ImpQuestionsAsked.map((item) => (
                <ListGroup.Item
                  key={item.id}
                  as="li"
                  bsPrefix="col-lg-4 col-md-6 col-sm-6 col-6 mb-2"
                >
                  <Link href="#" className="text-white nav-link">
                    {item.subject}
                  </Link>
                </ListGroup.Item>
              ))}
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
              {AboutSection.map((item) => (
                <ListGroup.Item
                  as="li"
                  bsPrefix="col-lg-4 col-md-6 col-sm-6 col-6 mb-2"
                >
                  <Link href="#" className="text-white nav-link">
                    {item.subject}
                  </Link>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterWithLinks;
