import React, { useState } from "react";
import { Tabs, Tab, Container, IconButton, Grid } from "@mui/material";
import { Card, CardContent, Typography } from "@mui/material";
import UpcomingClasses from "data/testimonials/UpcomingClasses";
import UpcomingClassesCard from "widgets/testimonials/UpcomingClassesCard";
import { makeStyles } from "@material-ui/core/styles";
import LiveContests from "data/testimonials/LiveContests";
import LiveContestsCard from "widgets/testimonials/LiveContestsCard";

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

const MyTabsContainer = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const classes = useStyles();
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const [startClassIndex, setStartClassIndex] = useState(0);
  const classesToShow = 4;
  const renderTabContent = () => {
    switch (selectedTab) {
      case 0:
        return (
          <Typography
            variant="h6"
            className=""
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            No past contests
          </Typography>
        );
      case 1:
        return (
          <section name="Upcoming-classes" className="p-5">
            <Container>
              <div className={classes.upcomingClassesContainer}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h2
                    style={{ fontSize: "50px" }}
                    className="text-dark text-center display-4 fw-bold"
                  >
                    Live Contests
                  </h2>
                </div>
                <Grid container spacing={2}>
                  {LiveContests.slice(
                    startClassIndex,
                    startClassIndex + classesToShow
                  ).map((item, index) => (
                    <Grid item lg={3} md={6} sm={12} key={index}>
                      <LiveContestsCard item={item} />
                    </Grid>
                  ))}
                </Grid>
              </div>
            </Container>
          </section>
        );
      case 2:
        return (
          <Typography
            variant="h6"
            className=""
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "10px",
            }}
          >
            No Upcoming contests
          </Typography>
        );
      default:
        return null;
    }
  };

  return (
    <Container className="py-8">
      <Card>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          variant="fullWidth"
          aria-label="Tabs"
        >
          <Tab label="PAST" />
          <Tab label="LIVE" />
          <Tab label="UPCOMING" />
        </Tabs>
        <div style={{ marginTop: "20px" }}>{renderTabContent()}</div>
      </Card>
    </Container>
  );
};

export default MyTabsContainer;
