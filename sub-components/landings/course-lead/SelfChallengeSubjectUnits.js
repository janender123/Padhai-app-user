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
import SelfChallengeQuestionsData from "data/quiz/SelfChallengeQuestionsData";

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

export default function SelfChallengeSubjectUnits({ selectedCategory }) {
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
        <h3>SELECT NUMBER OF QUESTIONS</h3>
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
        }}
      >
        {SelfChallengeQuestionsData[selectedCategory].map((item, index) => (
          <Tab
            key={index}
            className={classes.tab}
            label={
              <>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    textTransform: "capitalize",
                    color: "inherit",
                  }}
                >
                  {`${item.count}`}
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
            <h3>SELECT TIME PERIOD (IN MINUTES)</h3>
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
            }}
          >
            {SelfChallengeQuestionsData[selectedCategory].map((item, index) => (
              <Tab
                key={index}
                className={classes.tab}
                label={
                  <>
                    <Typography
                      variant="subtitle1"
                      color="text.secondary"
                      sx={{
                        mt: 1,
                        textTransform: "capitalize",
                        color: "inherit",
                      }}
                    >
                      {`${item.count}`}
                    </Typography>
                  </>
                }
                wrapped
              />
            ))}
          </Tabs>
        </TabPanel>
      ))}
    </div>
  );
}
