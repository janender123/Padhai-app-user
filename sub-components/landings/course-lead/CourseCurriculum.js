import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Image } from "react-bootstrap";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row", // Change the direction to row
    justifyContent: "space-between", // Add space between the panels
  },
  tabContainer: {
    flex: 3, // Occupy 3 parts of the column
    paddingRight: theme.spacing(2),
  },
  accordionContainer: {
    flex: 9, // Occupy 9 parts of the column
    paddingLeft: theme.spacing(2),
  },
  tab: {
    width: "90%",
    minWidth: 0,
    padding: theme.spacing(1),
    paddingRight: theme.spacing(2),
    flexGrow: 1,
    margin: "3px",
    fontWeight: "bold",
    color: "initial",
    backgroundColor: "#FFFFFF",
    borderRadius: "15px",
    textAlign: "center",
    "&.Mui-selected": {
      backgroundColor: "#3c65c4 !important",
      color: "white !important",
    },
    "&:hover": {
      backgroundColor: "#FFFFFF",
    },
    "&.Mui-selected:hover": {
      backgroundColor: "#3c65c4 !important",
      color: "white !important",
    },
  },
  accordions: {
    marginLeft: "auto",
    marginTop: theme.spacing(2),
    width: "98%",
  },
  accordion: {
    margin: theme.spacing(1, 0),
    minHeight: "50px",
    borderRadius: "10px",
    height: "auto",
    "& .MuiAccordionSummary-root": {
      borderRadius: "10px",
    },
    "& .MuiAccordionSummary-root.Mui-expanded": {
      borderRadius: "10px",
    },
    "& .MuiAccordionSummary-content": {
      marginTop: "12px",
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

function AccordionPanel(props) {
  const { title, children, ...other } = props;
  const classes = useStyles();

  return (
    <Accordion className={classes.accordion} {...other}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        classes={{
          content: classes.accordionSummary,
          expandIcon: classes.accordionSummaryIcon,
          root: classes.accordionTitle,
        }}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails className={classes.accordionDetails}>
        {children}
      </AccordionDetails>
    </Accordion>
  );
}

export default function CourseCurriculum() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [tab1Accordions, setTab1Accordions] = React.useState([
    {
      title: "Basics of Programming",
      content: "Content 1",
      expanded: false,
    },
    {
      title: "Loops and Functions",
      content: "Content 2",
      expanded: false,
    },
    {
      title: "Arrays",
      content: "Content 3",
      expanded: false,
    },
  ]);

  const [tab2Accordions, setTab2Accordions] = React.useState([
    {
      title: "Problem Solving Techniques",
      content: "Content 1",
      expanded: false,
    },
    {
      title: "Object Oriented Programming",
      content: "Content 2",
      expanded: false,
    },
    {
      title: "Linear Data Structures",
      content: "Content 3",
      expanded: false,
    },
  ]);

  const [tab3Accordions, setTab3Accordions] = React.useState([
    {
      title: "Special Features",
      content: "Content 1",
      expanded: false,
    },
  ]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const calculateProgress = (accordions) => {
    const accordionCount = accordions.length;
    const expandedAccordionCount = accordions.filter((a) => a.expanded).length;
    return Math.round((expandedAccordionCount / accordionCount) * 100);
  };

  return (
    <div className={classes.root} style={{ display: "flex" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        orientation="vertical"
        variant="scrollable"
        className={classes.tabs}
        classes={{
          indicator: classes.indicator, // Apply the indicator class to the Tabs component
        }}
        aria-label="icon label tabs example"
      >
        <Tab
          className={classes.tab}
          label={
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/images/course/course-curriculum-1.png"
                alt="My image"
                style={{ marginRight: "8px" }}
              />
              <span className="fw-bolder">Introduction to programming</span>
            </div>
          }
          wrapped
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            justifyContent: "flex-start", // Align items to start
          }}
        />
        <Tab
          className={classes.tab}
          label={
            <div style={{ display: "flex", alignItems: "center" }}>
              <Image
                src="/images/course/course-curriculum-2.png"
                alt="My image"
                style={{ marginRight: "8px" }}
              />
              <span className="fw-bolder">Data Structures & Algorithms</span>
            </div>
          }
          wrapped
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            justifyContent: "flex-start", // Align items to start
          }}
        />
        <Tab
          className={classes.tab}
          label={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Image
                src="/images/course/course-curriculum-4.png"
                alt="My image"
                style={{ marginRight: "8px" }}
              />
              <span className="fw-bolder">Special Features of this course</span>
            </div>
          }
          wrapped
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            justifyContent: "flex-start", // Align items to start
          }}
        />
      </Tabs>

      <div style={{ flex: 1 }}>
        <TabPanel value={value} index={0}>
          <div className={classes.accordions}>
            {tab1Accordions.map((accordion, index) => (
              <AccordionPanel
                key={index}
                title={accordion.title}
                expanded={accordion.expanded}
                onChange={() => {
                  const updatedAccordions = [...tab1Accordions];
                  updatedAccordions[index].expanded =
                    !updatedAccordions[index].expanded;
                  setTab1Accordions(updatedAccordions);
                }}
              >
                {accordion.content}
              </AccordionPanel>
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className={classes.accordions}>
            {tab2Accordions.map((accordion, index) => (
              <AccordionPanel
                key={index}
                title={accordion.title}
                expanded={accordion.expanded}
                onChange={() => {
                  const updatedAccordions = [...tab2Accordions];
                  updatedAccordions[index].expanded =
                    !updatedAccordions[index].expanded;
                  setTab2Accordions(updatedAccordions);
                }}
              >
                {accordion.content}
              </AccordionPanel>
            ))}
          </div>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <div className={classes.accordions}>
            {tab3Accordions.map((accordion, index) => (
              <AccordionPanel
                key={index}
                title={accordion.title}
                expanded={accordion.expanded}
                onChange={() => {
                  const updatedAccordions = [...tab3Accordions];
                  updatedAccordions[index].expanded =
                    !updatedAccordions[index].expanded;
                  setTab3Accordions(updatedAccordions);
                }}
              >
                {accordion.content}
              </AccordionPanel>
            ))}
          </div>
        </TabPanel>
      </div>
      <div className={classes.progress}>
        <LinearProgress
          variant="determinate"
          value={
            value === 0
              ? calculateProgress(tab1Accordions)
              : value === 1
              ? calculateProgress(tab2Accordions)
              : calculateProgress(tab3Accordions)
          }
        />
      </div>
    </div>
  );
}
