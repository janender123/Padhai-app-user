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
    flexDirection: "column",
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
    border: "1px solid grey",
    borderRadius: "5px",
    textAlign: "center",
    "&.Mui-selected": {
      backgroundColor: "#3c65c4 !important",
      color: "white !important",
    },
  },
  accordions: {
    marginTop: theme.spacing(2),
  },
  accordion: {
    margin: theme.spacing(1.5, 0),
    minHeight: '100px',
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
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="transparent"
        aria-label="icon label tabs example"
      >
        <Tab
          icon={
            <Image
              src="/images/course/course-curriculum-1.svg"
              alt="My image"
            />
          }
          className={classes.tab}
          label={
            <Typography
              variant="h6"
              style={{
                fontWeight: "500",
                textTransform: "capitalize",
                color: "inherit",
              }}
            >
              Introduction to programming
            </Typography>
          }
          wrapped
        />
        <Tab
          icon={
            <Image
              src="/images/course/course-curriculum-2.svg"
              alt="My image"
            />
          }
          className={classes.tab}
          label={
            <Typography
              variant="h6"
              style={{
                fontWeight: "500",
                textTransform: "capitalize",
                color: "inherit",
              }}
            >
              Data Structures & Algorithms
            </Typography>
          }
          wrapped
        />
        <Tab
          icon={
            <Image
              src="/images/course/course-curriculum-3.png"
              alt="My image"
            />
          }
          className={classes.tab}
          label={
            <Typography
              variant="h6"
              style={{
                fontWeight: "500",
                textTransform: "capitalize",
                color: "inherit",
              }}
            >
              Special Features
            </Typography>
          }
          wrapped
        />
      </Tabs>
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
