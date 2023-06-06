// import node module libraries
import React, { Fragment } from "react";
import {
  Col,
  Row,
  Container,
  Card,
  Image,
  Nav,
  Tab,
  Button,
} from "react-bootstrap";
import Link from "next/link";

// import MDI icons
import Icon from "@mdi/react";
import { mdiAccountMultipleOutline } from "@mdi/js";

// import widget/custom components
import GKYouTube from "widgets/video/GKYouTube";
import LevelIcon from "widgets/miscellaneous/LevelIcon";
import { Ratings, GKAccordionProgress, GeeksSEO, GKTippy } from "widgets";

// import sub components
import {
  ReviewsTab,
  DescriptionTab,
  TranscriptTab,
  FAQTab,
} from "sub-components";

// import data files
import { CourseIndex } from "data/courses/CourseIndexData";

// import hooks
import useMounted from "hooks/useMounted";
import { useRouter } from "next/router";
import { CardContent, CardMedia, Typography } from "@mui/material";

const CourseSingle2 = () => {
  const hasMounted = useMounted();
  const router = useRouter();

  function handleBackClick() {
    router.back();
  }
  return (
    <Fragment>
      {/* Geeks SEO settings  */}
      <GeeksSEO title="Course Single | Geeks Nextjs Template" />

      <section
        name="banner container"
        className="pt-lg-8 pb-lg-16 pt-8 pb-12 bg-primary"
      >
        <Container>
          <Row className="align-items-flex-end">
            <Col lg={5} md={12} sm={12} className="mt-lg-10">
              <div className="d-flex align-items-center mb-5">
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
              <Image
                src="/images/png/course-bundle-image.avif"
                alt="course-bundle-image"
                width="85%"
                style={{
                  borderRadius: "10px",
                }}
              />
            </Col>
            <Col xl={7} lg={7} md={12} sm={12} className="mt-lg-12">
              <div className="mt-5">
                <h1 className="text-white display-4 fw-semi-bold">
                  Surya Batch for IIT JEE 2024
                </h1>
                <h4 className="text-white fw-semi-bold">
                  Chandan Roy, Suresh Chand Meena and 1 more
                </h4>
                <p
                  className="text-white mb-6 "
                  style={{
                    fontSize: "14px",
                  }}
                >
                  Enrolling in this batch will help you with end-to-end
                  preparation for JEE Main and JEE Advanced Exams. In this
                  batch, Suresh Chand Meena Sir, Manoj Kumar Jha Sir, Chandan
                  Roy Sir will cover the entire course of Mathematics, Physics,
                  Physical Chemistry, Inorganic Chemistry, Organic Chemistry.
                  The course will be completed in 07* Months. It will be covered
                  in Hinglish and the notes will be provided in English in the
                  discussion forum
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="py-lg-5 py-5 mt-n12">
        <Container>
          {/*  Content  */}
          <Row>
            <Col xl={8} lg={12} md={12} sm={12} className="mb-4 mb-xl-0">
              {/*  Card  */}
              {hasMounted ? (
                <Tab.Container defaultActiveKey="description">
                  <Card className="mb-5">
                    {/*  Card body  */}
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-center">
                        <h1 className="fw-semi-bold mb-2">
                          Getting Started with JavaScript
                        </h1>
                        <GKTippy content="Add to Bookmarks">
                          <Link href="#">
                            <i className="fe fe-bookmark fs-3 text-inherit"></i>
                          </Link>
                        </GKTippy>
                      </div>
                      <div className="d-flex mb-5">
                        <span>
                          <span className="text-warning">
                            <Ratings rating={4.5} />
                          </span>
                          <span className="fw-medium">(140)</span>
                        </span>

                        <span className="ms-4 d-none d-md-block">
                          <LevelIcon level="Intermediate" />
                          <span>Intermediate</span>
                        </span>
                        <span className="ms-4 d-none d-md-block">
                          <Icon path={mdiAccountMultipleOutline} size={0.7} />{" "}
                          <span>Enrolled</span>
                        </span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center cursor-pointer">
                          <Image
                            src="/images/avatar/avatar-1.jpg"
                            className="rounded-circle avatar-md"
                            alt=""
                          />
                          <div className="ms-2 lh-1">
                            <h4 className="mb-1">Mohan Biswas</h4>
                            <p className="fs-6 mb-0">@mohan</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center cursor-pointer">
                          <Image
                            src="/images/avatar/avatar-2.jpg"
                            className="rounded-circle avatar-md"
                            alt=""
                          />
                          <div className="ms-2 lh-1">
                            <h4 className="mb-1">Kiran Sharma</h4>
                            <p className="fs-6 mb-0">@kiran</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center cursor-pointer">
                          <Image
                            src="/images/avatar/avatar-3.jpg"
                            className="rounded-circle avatar-md"
                            alt=""
                          />
                          <div className="ms-2 lh-1">
                            <h4 className="mb-1">Mohini Yadav</h4>
                            <p className="fs-6 mb-0">@mohini</p>
                          </div>
                        </div>
                      </div>
                    </Card.Body>
                    {/*  Nav tabs  */}
                    <Nav className="nav-lt-tab">
                      {["Description", "FAQ"].map((item, index) => (
                        <Nav.Item key={index}>
                          <Nav.Link
                            href={`#${item.toLowerCase()}`}
                            eventKey={item.toLowerCase()}
                            className="mb-sm-3 mb-md-0"
                          >
                            <a>{item}</a>
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Card>
                  {/*  Card  */}
                  <Card className="rounded-3">
                    {/*  Card body  */}
                    <Card.Body className="p-0">
                      <Tab.Content>
                        <Tab.Pane eventKey="description" className="pb-4 p-4">
                          {/* Description Tab */}
                          <DescriptionTab />
                        </Tab.Pane>
                        <Tab.Pane eventKey="reviews" className="pb-4 p-4">
                          {/* Reviews Tab */}
                          <ReviewsTab />
                        </Tab.Pane>
                        <Tab.Pane eventKey="transcript" className="pb-4 p-4">
                          {/* Transcript Tab */}
                          <TranscriptTab />
                        </Tab.Pane>
                        <Tab.Pane eventKey="faq" className="pb-4 p-4">
                          {/* FAQ Tab */}
                          <FAQTab />
                        </Tab.Pane>
                      </Tab.Content>
                    </Card.Body>
                  </Card>
                </Tab.Container>
              ) : null}
            </Col>
            <Col xl={4} lg={12} md={12} sm={12}>
              <Card style={{ display: "flex", marginBottom: "30px" }}>
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
              <Card>
                <GKAccordionProgress accordionItems={CourseIndex} />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default CourseSingle2;
