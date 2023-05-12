// import node module libraries
import React, { Fragment, useState } from "react";
import {
  Col,
  Row,
  Container,
  Nav,
  Card,
  Tab,
  ListGroup,
  Image,
} from "react-bootstrap";
import Link from "next/link";

// import popup youtube video
import ModalVideo from "react-modal-video";

// import widget/custom components
import {
  GKAccordionDefault,
  Ratings,
  CourseCard,
  GeeksSEO,
  GKTippy,
} from "widgets";

// import sub components
import {
  ReviewsTab,
  DescriptionTab,
  TranscriptTab,
  FAQTab,
} from "sub-components";

// import data files
import { CourseIndex } from "data/courses/CourseIndexData";
import { AllCoursesData } from "data/slider/AllCoursesData";
import { Button, CardContent, CardMedia, Typography } from "@mui/material";
import { useRouter } from "next/router";

const CourseSingle = () => {
  const [isOpen, setOpen] = useState(false);
  const [YouTubeURL] = useState("JRzWRZahOVU");
  const router = useRouter();

  function handleBackClick() {
    router.back();
  }
  return (
    <Fragment>
      {/* Geeks SEO settings  */}
      <GeeksSEO title="Course Single | Geeks Nextjs Template" />

      {/* Page header */}
      <section className="pt-lg-8 pb-lg-16 pt-8 pb-12 bg-primary">
        <Container>
          <Row className="align-items-flex-end">
            <Col xl={7} lg={7} md={12} sm={12} className="mt-lg-12">
              <div className="d-flex align-items-center">
                <Link
                  href="#"
                  onClick={handleBackClick}
                  style={{ marginRight: "10px" }}
                >
                  <i
                    className="fe fe-arrow-left"
                    style={{ color: "white" }}
                  ></i>
                </Link>
                <GKTippy content="Add to Bookmarks">
                  <Link
                    href="#"
                    className="bookmark text-white text-decoration-none"
                  >
                    <i className="fe fe-bookmark text-white-50 me-2"></i>{" "}
                    Bookmark
                  </Link>
                </GKTippy>
                <span className="text-white ms-4 d-none d-md-block">
                  <i className="fe fe-book text-white-50 me-2"></i> IIT JEE
                </span>
                <span className="text-white ms-3">
                  <i className="fe fe-user text-white-50"></i> 1200 Enrolled{" "}
                </span>
                <span className="text-white ms-3">
                  <i className="fe fe-speaker text-white-50"></i> Hinglish
                </span>
              </div>
              <div className="mt-5">
                <h1 className="text-white display-4 fw-semi-bold">
                  Getting Started with JavaScript
                </h1>
                <p className="text-white mb-6 lead">
                  JavaScript is the popular programming language which powers
                  web pages and web applications. This course will get you
                  started coding in JavaScript.
                </p>
              </div>
            </Col>
            <Col lg={5} md={12} sm={12} className="mt-lg-10">
              <Card>
                {/* Card body */}
                <Card.Body>
                  <div className="d-flex align-items-center">
                    <div className="position-relative">
                      <Image
                        src="/images/avatar/avatar-1.jpg"
                        alt=""
                        className="rounded-circle avatar-xl"
                      />
                      <Link
                        href="#"
                        className="position-absolute mt-2 ms-n3"
                        data-bs-toggle="tooltip"
                        data-placement="top"
                        title="Verifed"
                      >
                        <Image
                          src="/images/svg/checked-mark.svg"
                          alt=""
                          height="30"
                          width="30"
                        />
                      </Link>
                    </div>
                    <div className="ms-4">
                      <h4 className="mb-0">Jenny Wilson</h4>
                      <p className="mb-1 fs-6">Front-end Developer, Designer</p>
                      <span className="fs-6">
                        <span className="text-warning">4.5</span>
                        <span className="mdi mdi-star text-warning me-2"></span>
                        Instructor Rating
                      </span>
                    </div>
                  </div>
                  <Row className="border-top mt-3 border-bottom mb-3 g-0">
                    <Col>
                      <div className="pe-1 ps-2 py-3">
                        <h5 className="mb-0">11,604</h5>
                        <span>Students</span>
                      </div>
                    </Col>
                    <Col className="border-start">
                      <div className="pe-1 ps-3 py-3">
                        <h5 className="mb-0">32</h5>
                        <span>Courses</span>
                      </div>
                    </Col>
                    <Col className="border-start">
                      <div className="pe-1 ps-3 py-3">
                        <h5 className="mb-0">12,230</h5>
                        <span>Reviews</span>
                      </div>
                    </Col>
                  </Row>
                  <p>
                    I am an Innovation designer focussing on UX/UI based in
                    Berlin. As a creative resident at Figma explored the city of
                    the future and how new technologies.
                  </p>
                  <Link
                    href="/marketing/instructor/edit-profile/"
                    className="btn btn-outline-secondary btn-sm"
                  >
                    View Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
      {/* Page content */}
      <section className="pb-10">
        <Container>
          <Row>
            <Col lg={8} md={12} sm={12} className="mt-n8 mb-4 mb-lg-0">
              <Tab.Container defaultActiveKey="contents">
                <Card>
                  <Nav className="nav-lb-tab">
                    {["Contents", "Description"].map((item, index) => (
                      <Nav.Item key={index}>
                        <Nav.Link
                          href={`#${item.toLowerCase()}`}
                          eventKey={item.toLowerCase()}
                          className="mb-sm-3 mb-md-0"
                        >
                          {item}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                  <Card.Body className="p-0">
                    <Tab.Content>
                      <Tab.Pane eventKey="contents" className="pb-4 pt-3 px-4">
                        {/* Course Index Accordion */}
                        <GKAccordionDefault
                          accordionItems={CourseIndex}
                          itemClass="px-0"
                        />
                      </Tab.Pane>
                      <Tab.Pane eventKey="description" className="pb-4 p-4">
                        {/* Description */}
                        <DescriptionTab />
                      </Tab.Pane>
                      <Tab.Pane eventKey="reviews" className="pb-4 p-4">
                        {/* Reviews */}
                        <ReviewsTab />
                      </Tab.Pane>
                      <Tab.Pane eventKey="transcript" className="pb-4 p-4">
                        {/* Transcript */}
                        <TranscriptTab />
                      </Tab.Pane>
                      <Tab.Pane eventKey="faq" className="pb-4 p-4">
                        {/* FAQ */}
                        <FAQTab />
                      </Tab.Pane>
                    </Tab.Content>
                  </Card.Body>
                </Card>
              </Tab.Container>
            </Col>
            <Col lg={4} md={12} sm={12} className="mt-lg-n8">
              <Card sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  sx={{
                    width: "80px",
                    height: "80px",
                    margin: "25px 0px 1px 0px",
                    display: "flex",
                    alignSelf: "center",
                    justifyContent: "center",
                  }}
                  image="/images/png/get-subscription.svg"
                  alt="Your Image Title"
                />
                <CardContent sx={{ flex: 1, margin: "10px" }}>
                  <Typography component="h2" variant="h5">
                    Get access to all videos
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ mt: 2 }}
                  >
                    Get 800+hrs of full syllabus lectures with subscription
                  </Typography>
                  <Button variant="contained" sx={{ mt: 2 }}>
                    Get Subscription
                  </Button>
                </CardContent>
              </Card>
            </Col>
          </Row>
          {/* Card */}
          <div className="pt-12 pb-3">
            <Row className="d-md-flex align-items-center mb-4">
              <Col lg={12} md={12} sm={12}>
                <h2 className="mb-0">Related Courses</h2>
              </Col>
            </Row>
            <Row>
              {AllCoursesData.filter(function (datasource) {
                return datasource.category === "javascript";
              })
                .slice(0, 4)
                .map((item, index) => (
                  <Col lg={3} md={6} sm={12} key={index}>
                    <CourseCard item={item} free />
                  </Col>
                ))}
            </Row>
          </div>
        </Container>
      </section>
    </Fragment>
  );
};

export default CourseSingle;
