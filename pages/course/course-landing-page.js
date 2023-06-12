// import node module libraries
import { Fragment, useEffect, useState } from "react";
import { Col, Row, Container, Button, Image } from "react-bootstrap";

// import widget/custom components
import { CourseSlider, FeaturesList, HeroHeader } from "widgets";
import { StatTopSVGIcon } from "widgets";
import { useMediaQuery } from "@material-ui/core";

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
import { FAQs, FAQsection, HeroAcademy, HeroTyped } from "sub-components";
import CourseFeatures from "data/testimonials/CourseFeatures";
import FeaturesCard from "widgets/testimonials/FeaturesCard";
import CourseCurriculum from "sub-components/landings/course-lead/CourseCurriculum";
import UpcomingClasses from "data/testimonials/UpcomingClasses";
import UpcomingClassesCard from "widgets/testimonials/UpcomingClassesCard";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { Card, Grid, IconButton } from "@mui/material";
import LiveClasses from "data/testimonials/LiveClasses";
import ClassesBySubjects from "sub-components/landings/landing-sass/ClassesBySubjects";
import Pricing from "pages/marketing/pricing";
import ReferralCard from "pages/marketing/referral";
import Courses from "data/testimonials/Courses";
import UpcomingCoursesCard from "widgets/testimonials/UpcomingCoursesCard";
import CourseLandingPageBanner from "sub-components/landings/landing-courses/CourseLandingPageBanner";

const useStyles = makeStyles((theme) => ({
  upcomingClassesContainer: {
    position: "relative",
    maxWidth: "100%",
    overflowX: "auto",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  arrowButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  arrowLeft: {
    left: "0",
  },
  arrowRight: {
    right: "0",
  },
}));

const Home = () => {
  const classes = useStyles();
  const description = `1+ million people are already learning on Padhae`;
  const [startClassIndex, setStartClassIndex] = useState(0);
  const [startLiveClassIndex, setStartLiveClassIndex] = useState(0);
  const [startCourseIndex, setStartCourseIndex] = useState(0);
  const classesToShow = 4;
  const LiveClassesToShow = 4;
  const CoursesToShow = 4;
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const handleLeftArrowClickClass = () => {
    if (startClassIndex > 0) {
      setStartClassIndex(startClassIndex - 1);
    }
  };

  const handleRightArrowClickClass = () => {
    if (startClassIndex + classesToShow < UpcomingClasses.length) {
      setStartClassIndex(startClassIndex + 1);
    }
  };
  const handleLeftArrowClickLiveClass = () => {
    if (startLiveClassIndex > 0) {
      setStartLiveClassIndex(startLiveClassIndex - 1);
    }
  };

  const handleRightArrowClickLiveClass = () => {
    if (startLiveClassIndex + LiveClassesToShow < LiveClasses.length) {
      setStartLiveClassIndex(startLiveClassIndex + 1);
    }
  };

  const handleLeftArrowClickCourses = () => {
    if (startCourseIndex > 0) {
      setStartCourseIndex(startCourseIndex - 1);
    }
  };

  const handleRightArrowClickCourses = () => {
    if (startCourseIndex + CoursesToShow < Courses.length) {
      setStartCourseIndex(startCourseIndex + 1);
    }
  };

  useEffect(() => {
    document.body.className = "bg-light";
  });
  return (
    <Fragment>
      <div style={{ padding: isSmallScreen ? "10px" : "" }}>
        {/*  Page Content  */}
        <section name="banner">
          <CourseLandingPageBanner />
        </section>
        <section name="Features" className="py-3 py-lg-3 bg-white">
          <div style={{ margin: "0 250px" }}>
            <div className="py-9 py-lg-0 mt-5 mb-10">
              <h1
                style={{ fontSize: "55px" }}
                className="text-dark text-center display-4 fw-bold"
              >
                Why
                <span style={{ color: "#3c65c4" }}> choose us ?</span>
              </h1>
            </div>
            <div
              style={{
                backgroundColor: "#1D397A",
                borderRadius: "40px",
                margin: "0px",
                padding: "20px 40px",
              }}
            >
              <Row>
                {CourseFeatures.slice(0, 4).map((item, index) => (
                  <Col lg={3} md={6} sm={12} key={index}>
                    <FeaturesCard item={item} />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </section>
        <section
          name="course-curriculum"
          style={{ backgroundColor: "#FFFBEB" }}
          className="py-12 py-lg-12"
        >
          <div className="mx-23">
            <h1
              style={{ whiteSpace: "pre-wrap", fontSize: "55px" }}
              className="text-dark text-center display-4 fw-bold"
            >
              Course Curriculum
            </h1>
            <CourseCurriculum />
          </div>
        </section>
        <section name="Upcoming-classes" className="py-12 py-lg-12 bg-light">
          <Container>
            <div className={classes.upcomingClassesContainer}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h1
                  style={{ whiteSpace: "pre-wrap", fontSize: "55px" }}
                  className="text-dark text-center display-4 fw-bold"
                >
                  Upcoming Classes
                </h1>{" "}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src="/images/icons/LeftArrow.png"
                    style={{
                      opacity: startClassIndex == 0 ? 0.5 : 1,
                      cursor: "pointer",
                    }}
                    onClick={handleLeftArrowClickClass}
                    alt="left arrow"
                  />
                  <Image
                    src="/images/icons/RightArrow.png"
                    onClick={handleRightArrowClickClass}
                    alt="right arrow"
                    style={{
                      opacity:
                        startClassIndex + classesToShow >=
                        UpcomingClasses.length
                          ? 0.5
                          : 1,
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
              <Grid container spacing={2}>
                {UpcomingClasses.slice(
                  startClassIndex,
                  startClassIndex + classesToShow
                ).map((item, index) => (
                  <Grid item lg={3} md={6} sm={12} key={index}>
                    <UpcomingClassesCard item={item} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </Container>
        </section>

        <section name="Upcoming-live-classes" className="py-8 py-lg-8 bg-light">
          <Container>
            <div className={classes.upcomingClassesContainer}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h1
                  style={{ whiteSpace: "pre-wrap", fontSize: "55px" }}
                  className="text-dark text-center display-4 fw-bold"
                >
                  Upcoming Live Classes
                </h1>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Image
                    src="/images/icons/LeftArrow.png"
                    style={{
                      opacity: startLiveClassIndex == 0 ? 0.5 : 1,
                      cursor: "pointer",
                    }}
                    onClick={handleLeftArrowClickLiveClass}
                    alt="left arrow"
                  />
                  <Image
                    src="/images/icons/RightArrow.png"
                    onClick={handleRightArrowClickLiveClass}
                    alt="right arrow"
                    style={{
                      opacity:
                        startLiveClassIndex + classesToShow >=
                        UpcomingClasses.length
                          ? 0.5
                          : 1,
                      cursor: "pointer",
                    }}
                  />
                </div>
              </div>
              <Grid container spacing={2}>
                {LiveClasses.slice(
                  startLiveClassIndex,
                  startLiveClassIndex + LiveClassesToShow
                ).map((item, index) => (
                  <Grid item lg={3} md={6} sm={12} key={index}>
                    <UpcomingClassesCard item={item} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </Container>
        </section>
        <section name="Classes-by-subject" className="bg-light">
          <ClassesBySubjects />
        </section>
        <section name="Upcoming-courses" className="py-8 py-lg-8bg-light">
          <Container>
            <div className={classes.upcomingClassesContainer}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h1
                  style={{ fontSize: "55px" }}
                  className="text-dark text-center display-4 fw-bold"
                >
                  Courses
                </h1>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <IconButton
                    className={`${classes.arrowButton} ${classes.arrowLeft}`}
                    onClick={handleLeftArrowClickCourses}
                    style={{
                      backgroundColor: "white",
                      border: "1px solid transparent",
                      borderRadius: "50%",
                      marginRight: "10px",
                      opacity: startCourseIndex == 0 ? 0.5 : 1,
                    }}
                  >
                    <KeyboardArrowLeft />
                  </IconButton>
                  <IconButton
                    className={`${classes.arrowButton} ${classes.arrowRight}`}
                    onClick={handleRightArrowClickCourses}
                    style={{
                      backgroundColor: "white",
                      border: "1px solid transparent",
                      borderRadius: "50%",
                      opacity:
                        startCourseIndex + CoursesToShow >= Courses.length
                          ? 0.5
                          : 1,
                    }}
                  >
                    <KeyboardArrowRight />
                  </IconButton>
                </div>
              </div>
              <Grid container spacing={2}>
                {Courses.slice(
                  startCourseIndex,
                  startCourseIndex + CoursesToShow
                ).map((item, index) => (
                  <Grid item lg={3} md={6} sm={12} key={index}>
                    <UpcomingCoursesCard item={item} />
                  </Grid>
                ))}
              </Grid>
            </div>
          </Container>
        </section>
        <section name="Pricing" className="bg-light">
          <Pricing />
        </section>
        <section name="refer" className="py-8 py-lg-8 bg-white">
          <Container>
            <ReferralCard />
          </Container>
        </section>
        <section name="app-download" className="bg-white">
          <Container className="bg-white rounded-3 ">
            <Card
              style={{
                display: "flex",
                minWidth: 275,
                backgroundColor: "white",
                boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
                padding: "20px",
                marginBottom: "30px",
              }}
            >
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
                      Download lessons and learn anytime, anywhere with the
                      Padhae app
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
            </Card>
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
        <section name="footer-links" className="bg-white">
          <FooterWithLinks />
        </section>
      </div>
    </Fragment>
  );
};

export default Home;
