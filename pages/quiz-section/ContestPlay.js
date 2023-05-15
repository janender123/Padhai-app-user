import React, { useState } from "react";
import { Tabs, Tab, Container, IconButton, Grid } from "@mui/material";
import { Card, CardContent, Typography } from "@mui/material";
import UpcomingClasses from "data/testimonials/UpcomingClasses";
import UpcomingClassesCard from "widgets/testimonials/UpcomingClassesCard";
import { makeStyles } from "@material-ui/core/styles";

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
        return <Typography variant="h6">No past contests</Typography>;
      case 1:
        return (
          <section name="Upcoming-classes">
            <Container>
              <Card>
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
                      Upcoming Classes
                    </h1>
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
              </Card>
            </Container>
          </section>
        );
      case 2:
        return <Typography variant="h6">No upcoming contests</Typography>;
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
