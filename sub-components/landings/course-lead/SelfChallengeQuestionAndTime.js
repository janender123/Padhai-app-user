import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Divider, Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import SubjectUnitsData from "data/quiz/SubjectUnitsData";
import TabPanelData from "data/quiz/TabPanelData";
import { Cursor } from "react-simple-typewriter";
import SelfChallengeQuestionsData from "data/quiz/SelfChallengeQuestionsData";
import SelfChallengeTimeData from "data/quiz/SelfChallengeTimeData";
import Link from "next/link";

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
    minWidth: '150px',
    maxWidth: '150px',
    padding: theme.spacing(1),
    paddingRight: theme.spacing(2),
    flexGrow: 1,
    margin: "6.5px",
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

export default function SelfChallengeQuestionAndTime({ selectedCategory }) {
  const classes = useStyles();
  const [qvalue, setqValue] = React.useState(0);

  const handleqChange = (e, newValue) => {
    setqValue(newValue);
  };

  const [uvalue, setuValue] = React.useState(0);

  const handleuChange = (e, newValue) => {
    setuValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Divider textAlign="center" sx={{ marginBottom: "20px" }}>
        <h3>SELECT NUMBER OF QUESTIONS</h3>
      </Divider>
      <Tabs
        value={qvalue}
        onChange={handleqChange}
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
      <Divider textAlign="center" sx={{ margin: "15px 0" }}>
        <h3>SELECT TIME PERIOD (IN MINUTES)</h3>
      </Divider>
      <Tabs
        value={uvalue}
        onChange={handleuChange}
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
        {SelfChallengeTimeData[selectedCategory].map((item, index) => (
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
      <Link
        href="/marketing/student/QuizZonePage"
        style={{
          display: "flex",
          justifyContent: 'center',
          alignContent: 'center',
          padding: '10px',
          margin: '10px'
        }}
      >
        <Button>Let's start</Button>
      </Link>
    </div>
  );
}
