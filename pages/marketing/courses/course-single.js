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
import {
  Box,
  CardContent,
  CardMedia,
  Divider,
  Rating,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

const CourseSingle = () => {
  const [isOpen, setOpen] = useState(false);
  const [YouTubeURL] = useState("JRzWRZahOVU");
  const router = useRouter();

  function handleBackClick() {
    router.back();
  }
  return (
    <Fragment>
      {/* Page header */}
      <section
        name="banner container"
        className="py-16 py-lg-16 bg-primary"
        style={{
          backgroundImage: "url('/images/icons/course-single-background.png')",
          backgroundSize: "102% 110%",
        }}
      >
        <Container>
          <Row className="align-items-flex-end">
            <Col xl={7} lg={7} md={12} sm={12} xs={12} className="mt-lg-n2">
              <div className="d-flex align-items-center mt-10">
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
                  Getting Started with
                  <br /> <span style={{ color: "#FFE500" }}>JavaScript</span>
                </h1>
                <p className="text-white mb-6 lead">
                  JavaScript is the popular programming language which <br />{" "}
                  powers web pages and web applications. This course will <br />{" "}
                  get you started coding in JavaScript.
                  <br />
                  <Button
                    style={{
                      backgroundColor: "#28CE8E",
                      border: "0",
                      marginTop: "10px",
                    }}
                  >
                    Get Started
                  </Button>
                </p>
              </div>
              <Box display="flex" alignItems="center" className="mt-10">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    11,604
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Students
                  </Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ margin: "0 22px" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    32
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Courses
                  </Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ margin: "0 22px" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    12,230
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Reviews
                  </Typography>
                </Box>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ margin: "0 22px" }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    4.5 <Rating value={4.5} precision={0.5} readOnly />
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    Instructor Rating
                  </Typography>{" "}
                </Box>
              </Box>
            </Col>
            <Col
              xl={5}
              lg={5}
              md={12}
              sm={12}
              xs={12}
              className="mt-sm-0 mt-md-0 mt-lg-n10 mt-xl-n10"
            >
              <Image
                src="/images/icons/course-single-instructor.png"
                alt="instructor-image"
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Page content */}
      <section className="pb-10">
        <Container>
          <Row>
            <Col
              name="contents"
              lg={8}
              md={12}
              sm={12}
              className="order-md-1 order-sm-2 mt-n8 mb-4 mb-lg-0"
              order={{ xs: 2, sm: 2, md: 1 }}
            >
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
                    </Tab.Content>
                  </Card.Body>
                </Card>
              </Tab.Container>
            </Col>
            <Col
              name="subscription section"
              lg={4}
              md={12}
              sm={12}
              className="order-md-2 order-sm-1  mt-lg-n8"
              order={{ xs: 1, sm: 1, md: 2 }}
            >
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
                  <Button className="mt-3">Get Subscription</Button>
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
