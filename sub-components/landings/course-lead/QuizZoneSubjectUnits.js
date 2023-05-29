import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Divider, Typography } from "@mui/material";
import SubjectUnitsData from "data/quiz/SubjectUnitsData";
import TabPanelData from "data/quiz/TabPanelData";
import { Cursor } from "react-simple-typewriter";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  boxContainer: {
    display: "flex",
    flexWrap: "wrap",
    padding: 20,
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 90,
    height: 80,
    borderRadius: 20,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
    margin: 15,
    marginTop: 0,
    backgroundColor: "#ffffff",
  },
  boxContent: {
    position: "relative",
  },
  boxNumber: {
    fontSize: 18,
    fontWeight: "bold",
  },
  tab: {
    minWidth: 0,
    padding: theme.spacing(1),
    paddingRight: theme.spacing(2),
    flexGrow: 1,
    margin: "3px",
    fontWeight: "bold",
    color: "initial",
    backgroundColor: "white",
    border: "1px solid white",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0px -1px 7px 0px",
    "&.Mui-selected": {
      backgroundColor: "#3c65c4",
      border: "1px solid white",
      boxShadow: "0px -1px 7px 0px",
      color: "white",
    },
  },
  accordions: {
    marginTop: theme.spacing(2),
  },
  accordion: {
    margin: theme.spacing(1.5, 0),
    minHeight: "100px",
    height: "auto",
    "& .MuiAccordionSummary-root": {
      borderRadius: 10,
    },
    "& .MuiAccordionSummary-root.Mui-expanded": {
      borderRadius: 10,
    },
    "& .MuiAccordionSummary-content": {
      marginTop: "32px",
      display: "flex",
      alignItems: "center",
      height: "100%",
    },
  },
  accordionTitle: {
    marginTop: "10px",
    fontSize: "20px",
    fontWeight: "500",
  },
  accordionSummary: {
    display: "flex",
    alignItems: "center",
  },
  accordionDetails: {
    flexDirection: "column",
    minHeight: "10px",
  },
  progress: {
    marginTop: theme.spacing(2),
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}

export default function QuizZoneSubjectUnits({ selectedCategory }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  const handleUnitClick = (index, unlockLength) => {
    if (index < unlockLength) {
      window.location.href = "/marketing/student/QuizZonePage";
    } else {
      alert("Please complete unlock level first");
    }
  };
  return (
    <div className={classes.root}>
      <Divider textAlign="center" sx={{ marginBottom: "20px" }}>
        <h3>UNITS</h3>
      </Divider>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="on"
        indicatorColor="transparent"
        aria-label="icon label tabs example"
        sx={{
          "& .MuiTabs-scroller": {
            overflow: "visible",
          },
          width: "100%", // Set the width to 100% for small and extra-small screens
          maxWidth: "500px", // Define a maximum width for larger screens
          margin: "0 auto", // Center the tabs horizontally
        }}
      >
        {SubjectUnitsData[selectedCategory].map((item, index) => (
          <Tab
            key={index}
            className={classes.tab}
            label={
              <>
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: "500",
                    textTransform: "capitalize",
                    color: "inherit",
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    textTransform: "capitalize",
                    color: "inherit",
                  }}
                >
                  {`${item.subtitle}: ${item.count}`}
                </Typography>
              </>
            }
            wrapped
          />
        ))}
      </Tabs>
      {TabPanelData[selectedCategory].map((tab, index) => (
        <TabPanel key={index} value={value} index={tab.index}>
          <Divider textAlign="center" sx={{ margin: "15px 0" }}>
            <h3>LEVELS</h3>
          </Divider>
          <div className={classes.boxContainer}>
            {Array.from(tab.data, (_, index) => (
              <div
                key={index}
                style={{ cursor: "pointer", width: "6em" }}
                className={classes.box}
                onClick={() => handleUnitClick(index, tab.data.unlockLength)}
              >
                <div className={classes.boxContent}>
                  <span
                    className="fa-stack"
                    style={{
                      display: "inline-block",
                      height: "4em",
                      lineHeight: "2em",
                      position: "relative",
                      verticalAlign: "middle",
                      width: "2.5em",
                    }}
                  >
                    {index < tab.data.unlockLength ? (
                      <>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="fa-stack-2x"
                          height="2em"
                          width="1.1em"
                          color="#3c65c4"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M400 256H152V152.9c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v16c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-16C376 68 307.5-.3 223.5 0 139.5.3 72 69.5 72 153.5V256H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                        </svg>
                        <strong
                          style={{ fontSize: ".9em", marginTop: "1.5rem" }}
                          className="fa-stack-1x text-white"
                        >
                          {index + 1}
                        </strong>
                      </>
                    ) : (
                      <>
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          strokeWidth="0"
                          viewBox="0 0 448 512"
                          className="fa-stack-2x"
                          height="2em"
                          width="1.1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"></path>
                        </svg>
                        <strong
                          style={{ fontSize: ".9em", marginTop: "1.5rem" }}
                          className="fa-stack-1x text-white"
                        >
                          {index + 1}
                        </strong>
                      </>
                    )}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </TabPanel>
      ))}
    </div>
  );
}
