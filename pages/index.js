// import node module libraries
import { Fragment, useEffect, useState } from "react";
import { Col, Row, Container, Button, Image } from "react-bootstrap";

// import widget/custom components
import { CourseSlider, FeaturesList, HeroHeader } from "widgets";
import { StatTopSVGIcon } from "widgets";

// import required data files
import { GoalCategoriesData } from "data/marketing/jobs/GoalCategoriesData";
import { SectionHeadingCenter, TestimonialColorCard } from "widgets";
import { TestimonialsList } from "data/testimonials/TestimonialsList";
import PopularBoardsAndExams from "widgets/testimonials/PopularBoardsAndExams";
import PopularBoardsAndExamsList from "data/testimonials/PopularBoardsAndExamsList";
import ModalVideo from "react-modal-video";
import Link from "next/link";
import WhyChooseUs from "data/testimonials/WhyChooseUs";
import Icon from "@mdi/react";
import { ImageAlt } from "react-bootstrap-icons";
import FooterWithLinks from "layouts/marketing/footers/FooterWithLinks";
import { HeroAcademy } from "sub-components";

const Home = () => {
  const title = "What our learners are saying";
  const subtitle = "Testimonials";
  const description = `1+ million people are already learning on Padhae`;

  useEffect(() => {
    document.body.className = "bg-light";
  });
  return (
    <Fragment>
      {/*  Page Content  */}
      <HeroAcademy />
      <section name="all boards and exams-1">
        <Container style={{ marginTop: "30px" }}>
          {/*  Hero Section  */}
          <Row className="align-items-center g-0">
            <Col xl={6} lg={6} md={12}>
              <div className="py-5 py-lg-0">
                <h1
                  style={{ fontSize: "55px" }}
                  className="text-dark display-4 fw-bold"
                >
                  Built for all boards
                  <br /> and exams with <br />
                  <span style={{ color: "#3c65c4" }}>widest syllabus</span>
                  <br />
                  coverage
                </h1>
              </div>
            </Col>
            <Col xl={5} lg={6} md={12}>
              <p
                style={{ color: "#26252f", fontSize: "26px" }}
                className="text-dark mb-4 lead"
              >
                Your learning needs are unique and we do everything to ensure
                that they are met.
              </p>
              <p style={{ fontSize: "18px" }} className="text-dark">
                Students can chart their own path by creating customised{" "}
                syllabus that helps them attain their learning goals. With over
                120,000 syllabus combinations at their learning was never so
                easy.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <section name="All Boards and Exams-2" className="py-8 py-lg-8 bg-light">
        <Container>
          <Row>
            {PopularBoardsAndExamsList.slice(0, 3).map((item, index) => (
              <Col lg={4} md={6} sm={12} key={index}>
                <PopularBoardsAndExams item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section name="Popular goals" className=" bg-light pb-10">
        <Container>
          <Row>
            <Col xl={{ span: 10, offset: 1 }} md={12} xs={12}>
              <Row className="text-center">
                <Col md={12} className="px-lg-10 mb-8 ">
                  <div className="py-5 py-lg-0">
                    <h1
                      style={{ fontSize: "55px" }}
                      className="text-dark display-4 fw-bold"
                    >
                      Popular
                      <span style={{ color: "#3c65c4" }}> Goals</span>
                    </h1>
                  </div>
                  <p style={{ fontWeight: "bold" }} className="mb-0 fs-4">
                    Select a goal and we will show you relevant courses for it!
                  </p>
                </Col>
              </Row>
              <Row className="gy-4">
                {GoalCategoriesData.map((item, index) => {
                  return (
                    <Col lg={4} md={4} xs={12} key={index}>
                      <StatTopSVGIcon item={item} />
                    </Col>
                  );
                })}
                {/* view all categories button/link */}
                <Col xs={12} className="mt-8 text-center">
                  <Button as="a" variant="outline-primary" href="#">
                    View All Goals
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section name="next-pattern" className="py-lg-16 py-8 bg-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} sm={6} className="mb-6 mb-lg-0">
              <div className="">
                <h1 className="display-3 fw-bold mb-3">
                  Video Lectures Based on
                  <br /> NExT Pattern
                </h1>
                <p
                  className="pe-lg-10 mb-5 text-dark"
                  style={{ fontSize: "1.4em" }}
                >
                  Access easy-to-follow video lectures as per <br />
                  NExT/NEET PG exam pattern by India’s top <br /> medical
                  faculty.
                </p>
              </div>
            </Col>
            <Col lg={6} sm={6} className="d-flex justify-content-center">
              <div className="position-relative">
                <Image
                  src="/images/pattern/video_lectures_pattern.png"
                  alt=""
                  className=""
                  width="100%"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} sm={6} className="d-flex justify-content-center">
              <div className="position-relative">
                <Image
                  src="/images/pattern/qbank_next.png"
                  alt=""
                  className=""
                  width="100%"
                />
              </div>
            </Col>
            <Col lg={6} sm={6} className="mb-6 mb-lg-0">
              <div className="">
                <h1 className="display-3 fw-bold mb-3">QBank Next Edition</h1>
                <p
                  className="pe-lg-10 mb-5 text-dark"
                  style={{ fontSize: "1.4em" }}
                >
                  Utilize our extensive online QBank <br />
                  featuring over 70% clinical questions, <br /> organized
                  subject and topic-wise to <br />
                  make you NExT/NEET PG-ready.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} sm={6} className="mb-6 mb-lg-0">
              <div className="">
                <h1 className="display-3 fw-bold mb-3">
                  Next Edition Test Series
                </h1>
                <p
                  className="pe-lg-10 mb-5 text-dark"
                  style={{ fontSize: "1.4em" }}
                >
                  Evaluate your exam preparation and <br /> make necessary
                  improvements by <br /> practicing full-length tests designed
                  as <br /> per the NExT/NEET PG exam pattern.
                </p>
              </div>
            </Col>
            <Col lg={6} sm={6} className="d-flex justify-content-center">
              <div className="position-relative">
                <Image
                  src="/images/pattern/next-test-series.png"
                  alt=""
                  className=""
                  width="100%"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} sm={6} className="d-flex justify-content-center">
              <div className="position-relative">
                <Image
                  src="/images/pattern/digital-notes.png"
                  alt=""
                  className=""
                  width="100%"
                />
              </div>
            </Col>
            <Col lg={6} sm={6} className="mb-6 mb-lg-0">
              <div className="">
                <h1 className="display-3 fw-bold mb-3">
                  Comprehensive Digital Notes
                </h1>
                <p
                  className="pe-lg-10 mb-5 text-dark"
                  style={{ fontSize: "1.4em" }}
                >
                  Find the most comprehensive and <br /> clinically oriented
                  notes featuring high-quality
                  <br /> images prepared by India’s top <br /> medical faculty
                  with extensive subject <br /> knowledge.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} sm={6} className="mb-6 mb-lg-0">
              <div className="">
                <h1 className="display-3 fw-bold mb-3">
                  Access Treasures and <br /> Custom Modules
                </h1>
                <p
                  className="pe-lg-10 mb-5 text-dark"
                  style={{ fontSize: "1.4em" }}
                >
                  Simplify your NExT/NEET PG exam <br /> preparations with the
                  help of Treasures, <br /> brief summary of a topic, and Custom{" "}
                  <br /> Module that is designed to enable you <br /> to
                  practice what and how you want.
                </p>
              </div>
            </Col>
            <Col lg={6} sm={6} className="d-flex justify-content-center">
              <div className="position-relative">
                <Image
                  src="/images/pattern/custom-models.png"
                  alt=""
                  className=""
                  width="100%"
                />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} sm={6} className="d-flex justify-content-center">
              <div className="position-relative">
                <Image
                  src="/images/pattern/performance-analysis.png"
                  alt=""
                  className=""
                  width="100%"
                />
              </div>
            </Col>
            <Col lg={6} sm={6} className="mb-6 mb-lg-0">
              <div className="">
                <h1 className="display-3 fw-bold mb-3">
                  Detailed Performance Analysis
                </h1>
                <p
                  className="pe-lg-10 mb-5 text-dark"
                  style={{ fontSize: "1.4em" }}
                >
                  Leverage our rank analysis to monitor <br /> your preparation
                  journey and growth <br /> trajectory and utilize our detailed
                  report <br /> to enhance your performance.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section name="why choose us" className="py-8 py-lg-8 bg-light">
        <Container>
          <div className="py-5 py-lg-0 mb-10">
            <h1
              style={{ fontSize: "55px" }}
              className="text-dark text-center display-4 fw-bold"
            >
              Why
              <span style={{ color: "#3c65c4" }}> choose us ?</span>
            </h1>
          </div>
          <Row>
            {WhyChooseUs.slice(0, 3).map((item, index) => (
              <Col lg={4} md={6} sm={12} key={index}>
                <PopularBoardsAndExams item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section name="Testimonials" className="py-8 py-lg-8 bg-light">
        <Container>
          <Row className="mb-10 justify-content-center">
            <Col lg={8} md={12} sm={12} className="text-center">
              <h1
                style={{ fontSize: "55px" }}
                className="text-dark text-center display-4 fw-bold"
              >
                What our learners
                <span style={{ color: "#3c65c4" }}> are saying ?</span>
              </h1>
              <p className="lead">{description}</p>
            </Col>
          </Row>
          <Row>
            {TestimonialsList.slice(0, 3).map((item, index) => (
              <Col lg={4} md={6} sm={12} key={index}>
                <TestimonialColorCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section
        name="personalised-classes"
        className="py-lg-16 py-8 bg-white"
      >
        <Container >
          <Row className="align-items-center">
            <Col lg={6} sm={6} className="mb-6 mb-lg-0">
              <div className="">
                <h5 className="text-dark mb-4">
                  Go beyond the power of instant tutoring
                </h5>
                <h1
                  style={{ fontSize: "55px" }}
                  className="text-dark display-4 fw-bold"
                >
                  {" "}
                  Personalised Private Classes by
                  <span style={{ color: "#3c65c4" }}> Padhae</span>
                </h1>
                <p
                  className="pe-lg-10 mb-5 text-dark"
                  style={{ fontSize: "1.4em" }}
                >
                  Our experts will design a course plan that is specific to your
                  needs, which will be taught through private classes and
                  monitored by dedicated counsellors.
                </p>
                <Row lg={6} sm={6}>
                  <Col lg={4} sm={4}>
                    <Image
                      alt="academic-expert"
                      src="images/pattern/academic-expert.webp"
                      height={105}
                    />
                    <h3 className="text-dark ">1. Academic Expert</h3>
                    <p>
                      For 1-on-1 teaching in the classes to enhance problem
                      solving
                    </p>
                  </Col>
                  <Col lg={4} sm={4}>
                    <Image
                      alt="academic-expert"
                      src="images/pattern/domain-expert.webp"
                      height={105}
                    />
                    <h3 className="text-dark ">2. Domain Expert</h3>
                    <p>For strategic planning designing your course plan</p>
                  </Col>
                  <Col lg={4} sm={4}>
                    <Image
                      alt="academic-expert"
                      src="images/pattern/academic-counsellor.webp"
                      height={105}
                    />
                    <h3 className="text-dark ">3. Academic Counsellor</h3>
                    <p>
                      For continuous monitoring & feedback about your
                      performance
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6} sm={6} className="d-flex justify-content-center">
              <div className="position-relative">
                <Image
                  src="/images/pattern/private-classes.webp"
                  alt=""
                  className=""
                  width="100%"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section name="app-download" className="bg-white">
        <Container className="bg-white rounded-3 ">
          <Row className="align-items-center">
            <Col lg={6} sm={6} xs={12}>
              <div className="d-flex justify-content-center ">
                <div className="position-relative">
                  <Image
                    src="/images/pattern/app-download.avif"
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </Col>
            <Col lg={5} xs={12}>
              <div className="text-dark p-5 p-lg-0">
                <h1
                  style={{ fontSize: "35px" }}
                  className="text-dark text-uppercase display-4 fw-bold"
                >
                  Get the learning app
                </h1>
                <h3 className="mb-0 text-dark">
                  Download lessons and learn anytime, anywhere with the Padhae
                  app
                </h3>
                <div className="d-flex mt-15">
                  <Link href="#">
                    <Image
                      src="/images/svg/appstore.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                  <Link href="#" className="ms-2">
                    <Image
                      src="/images/svg/playstore.svg"
                      alt=""
                      className="img-fluid"
                    />
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section name="footer-links" className="bg-white">
        <FooterWithLinks />
      </section>
    </Fragment>
  );
};

export default Home;
