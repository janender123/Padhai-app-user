import { Fragment, useEffect, useState } from "react";
import { Col, Row, Container, Button, Image } from "react-bootstrap";

// import widget/custom components
import { useMediaQuery } from "@material-ui/core";

// import required data files
import UpcomingClasses from "data/testimonials/UpcomingClasses";
import { makeStyles } from "@material-ui/core/styles";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import { Card, Grid, IconButton } from "@mui/material";
import LiveClasses from "data/testimonials/LiveClasses";
import Courses from "data/testimonials/Courses";
import UpcomingCoursesCard from "widgets/testimonials/UpcomingCoursesCard";

const useStyles = makeStyles((theme) => ({
  upcomingClassesContainer: {
    position: "relative",
    maxWidth: "100%",
    overflowX: "auto",
    whiteSpace: "nowrap",
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
  const [startClassIndex, setStartClassIndex] = useState(0);
  const [startLiveClassIndex, setStartLiveClassIndex] = useState(0);
  const [startCourseIndex, setStartCourseIndex] = useState(0);
  const CoursesToShow = 8;

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
    <Container>
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
              >
                Classes By Subject
              </h1>
              <div style={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  className={`${classes.arrowButton} ${classes.arrowLeft}`}
                  onClick={handleLeftArrowClickCourses}
                  style={{
                    backgroundColor: "white",
                    border: "1px solid grey",
                    borderRadius: "4px",
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
                    border: "1px solid grey",
                    borderRadius: "4px",
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
    </Container>
  );
};

export default Home;
