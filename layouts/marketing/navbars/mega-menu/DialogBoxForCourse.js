// import node module libraries
import { Fragment, useState, useRef } from "react";
import {
  Checkbox,
  IconButton,
  ListItemText,
  Menu,
  MenuItem,
  TextField,
} from "@mui/material";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Button } from "@mui/material";
import ExploreMegaMenuClass, {
  ExploreMegaMenuBoards,
  ExploreMegaMenuExams,
  ExploreMegaMenuLanguage,
  ExploreMegaMenuStream,
} from "routes/marketing/ExploreMegaMenu";
import ChooseClassDialog from "./ChooseClassDialog";
import ChooseStreamDialog from "./ChooseStreamDialog";
import ChooseBoardDialog from "./ChooseBoardDialog";
import ChooseExamDialog from "./ChooseExamDialog";
import ChooseLanguageDialog from "./ChooseLanguageDialog";
import CourseReadyDialog from "./CourseReadyDialog";
import { Col, Image, Row } from "react-bootstrap";
import { Add as AddIcon } from "@material-ui/icons";

const DialogBoxForCourse = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [exploreButtonText, setExploreButtonText] = useState("Explore");
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedStream, setSelectedStream] = useState(null);
  const [selectedBoard, setSelectedBoard] = useState(null);
  const [selectedExam, setSelectedExam] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [dialogOpenChooseClass, setDialogOpenChooseClass] = useState(false);
  const [dialogOpenChooseStream, setDialogOpenChooseStream] = useState(false);
  const [dialogOpenChooseBoard, setDialogOpenChooseBoard] = useState(false);
  const [dialogOpenChooseExam, setDialogOpenChooseExam] = useState(false);
  const [dialogOpenChooseLanguage, setDialogOpenChooseLanguage] =
    useState(false);
  const [dialogOpenCourseReady, setDialogOpenCourseReady] = useState(false);

  const handleNextClickClass = () => {
    setDialogOpenChooseClass(false);
    setDialogOpenChooseStream(true);
  };

  const handleNextClickStream = () => {
    setDialogOpenChooseStream(false);
    setDialogOpenChooseBoard(true);
  };

  const handleBackClickStream = () => {
    setDialogOpenChooseStream(false);
    setDialogOpenChooseClass(true);
  };

  const handleNextClickBoard = () => {
    setDialogOpenChooseBoard(false);
    setDialogOpenChooseExam(true);
  };

  const handleBackClickBoard = () => {
    setDialogOpenChooseBoard(false);
    setDialogOpenChooseStream(true);
  };

  const handleNextClickExam = () => {
    setDialogOpenChooseExam(false);
    setDialogOpenChooseLanguage(true);
  };

  const handleBackClickExam = () => {
    setDialogOpenChooseExam(false);
    setDialogOpenChooseBoard(true);
  };

  const handleNextClickLanguage = () => {
    setDialogOpenCourseReady(true);
    setDialogOpenChooseLanguage(false);
  };

  const handleBackClickLanguage = () => {
    setDialogOpenChooseLanguage(false);
    setDialogOpenChooseExam(true);
  };

  const handleSubmitCourseReady = () => {
    setDialogOpenCourseReady(false);
    const selectedExamText =
      ExploreMegaMenuExams[0].children[selectedExam].subtitle;
    setExploreButtonText(
      <h3
        style={{
          fontWeight: "500",
          fontSize: "1em",
          textTransform: "capitalize",
          border: "1px solid grey",
          padding: "5px",
        }}
      >
        {selectedExamText}
        <ArrowDropDownIcon />
      </h3>
    );
  };

  const handleBackClickCourseReady = () => {
    setDialogOpenChooseClass(true);
    setDialogOpenCourseReady(false);
  };

  const handleSelectClass = (index) => {
    setSelectedClass(index);
  };

  const handleSelectStream = (index) => {
    setSelectedStream(index);
  };

  const handleSelectBoard = (index) => {
    setSelectedBoard(index);
  };

  const handleSelectExam = (index) => {
    setSelectedExam(index);
  };

  const handleSelectLanguage = (index) => {
    setSelectedLanguage(index);
  };

  const handleCloseChooseClass = () => {
    setDialogOpenChooseClass(false);
  };

  const handleCloseChooseStream = () => {
    setDialogOpenChooseStream(false);
  };

  const handleCloseChooseBoard = () => {
    setDialogOpenChooseBoard(false);
  };

  const handleCloseChooseExam = () => {
    setDialogOpenChooseExam(false);
  };

  const handleCloseChooseLanguage = () => {
    setDialogOpenChooseLanguage(false);
  };

  const handleCloseCourseReady = () => {
    setDialogOpenCourseReady(false);
  };

  const handleExploreClick = (e) => {
    selectedExam.length === 0
      ? setDialogOpenChooseClass(true)
      : setAnchorEl(e.currentTarget);
  };

  const handleAddNewGoal = () => {
    setDialogOpenChooseExam(true);
    setAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Button onClick={handleExploreClick} id="explore-button">
        {exploreButtonText}
      </Button>

      <ChooseClassDialog
        dialogOpenChooseClass={dialogOpenChooseClass}
        handleCloseChooseClass={handleCloseChooseClass}
        handleNextClickClass={handleNextClickClass}
        handleSelectClass={handleSelectClass}
        selectedClass={selectedClass}
      />

      {selectedExam.length != 0 ? (
        <Menu
          id="explore-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <h2
            style={{ fontWeight: "bold", margin: "10px", marginLeft: "20px" }}
          >
            My Goals
          </h2>
          {ExploreMegaMenuExams.map((item, index) => (
            <>
              {item.children.map(
                (subitem, subindex) =>
                  subitem.subtitle && (
                    <MenuItem
                      key={`${index}-${subindex}`}
                      style={{
                        width: "400px",
                        margin: "10px",
                        border: "1px solid grey",
                        borderRadius: "10px",
                      }}
                    >
                      <Image
                        src={subitem.image}
                        alt=""
                        height="40px"
                        width="50px"
                        style={{ marginRight: "10px" }}
                      />
                      <ListItemText primary={subitem.subtitle} />
                    </MenuItem>
                  )
              )}
            </>
          ))}
          <Button
            startIcon={<AddIcon />}
            variant="contained"
            style={{ margin: "10px", marginLeft: "10px" , width: '400px'}}
            onClick={handleAddNewGoal}
          >
            Add another Goal
          </Button>
        </Menu>
      ) : null}

      <ChooseStreamDialog
        dialogOpenChooseStream={dialogOpenChooseStream}
        handleCloseChooseStream={handleCloseChooseStream}
        handleNextClickStream={handleNextClickStream}
        handleBackClickStream={handleBackClickStream}
        handleSelectStream={handleSelectStream}
        selectedStream={selectedStream}
      />

      <ChooseBoardDialog
        dialogOpenChooseBoard={dialogOpenChooseBoard}
        handleCloseChooseBoard={handleCloseChooseBoard}
        handleNextClickBoard={handleNextClickBoard}
        handleBackClickBoard={handleBackClickBoard}
        handleSelectBoard={handleSelectBoard}
        selectedBoard={selectedBoard}
      />

      <ChooseExamDialog
        dialogOpenChooseExam={dialogOpenChooseExam}
        handleCloseChooseExam={handleCloseChooseExam}
        handleNextClickExam={handleNextClickExam}
        handleBackClickExam={handleBackClickExam}
        handleSelectExam={handleSelectExam}
        selectedExam={selectedExam}
      />

      <ChooseLanguageDialog
        dialogOpenChooseLanguage={dialogOpenChooseLanguage}
        handleCloseChooseLanguage={handleCloseChooseLanguage}
        handleNextClickLanguage={handleNextClickLanguage}
        handleBackClickLanguage={handleBackClickLanguage}
        handleSelectLanguage={handleSelectLanguage}
        selectedLanguage={selectedLanguage}
      />

      <CourseReadyDialog
        dialogOpenCourseReady={dialogOpenCourseReady}
        handleCloseCourseReady={handleCloseCourseReady}
        handleSubmitCourseReady={handleSubmitCourseReady}
        handleBackClickCourseReady={handleBackClickCourseReady}
        selectedClass={selectedClass}
        selectedBoard={selectedBoard}
        selectedExam={selectedExam}
      />
    </Fragment>
  );
};

export default DialogBoxForCourse;
