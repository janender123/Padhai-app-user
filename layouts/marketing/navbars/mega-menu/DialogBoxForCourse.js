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
import { Button } from "react-bootstrap";
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

    const selectedClassText =
      ExploreMegaMenuClass[0].children[selectedClass].subtitle;

    const extractedDigits = selectedClassText.props.children
      .toString()
      .replace(/\D/g, "");

    const examTextWithClass =
      selectedExamText === "Boards"
        ? `Class : ${extractedDigits} ${selectedExamText}`
        : selectedExamText;

    setExploreButtonText(
      <h3
        style={{
          fontWeight: "bold",
          fontSize: "1em",
          textTransform: "capitalize",
          marginTop: "-4px",
          marginBottom: "-4px",
        }}
      >
        {examTextWithClass}
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

  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
    if (isEditMode === false) seteditTitle("Done");
    else seteditTitle("Edit");
  };

  const [exploreMegaMenuExams, setExploreMegaMenuExams] =
    useState(ExploreMegaMenuExams);

  const handleRemove = (index, subindex) => {
    const updatedMenu = [...ExploreMegaMenuExams];
    updatedMenu[index].children = updatedMenu[index].children.filter(
      (_, i) => i !== subindex
    );
    setExploreMegaMenuExams(updatedMenu);
  };

  const [EditTitle, seteditTitle] = useState("Edit");

  return (
    <Fragment>
      <Button
        onClick={handleExploreClick}
        variant="outline-primary"
        id="explore-button"
        style={{
          marginRight: "40px",
          marginLeft: "10px",
        }}
      >
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
            style={{
              marginLeft: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span style={{ marginRight: "auto" }}>My Goals</span>
            <span>
              <h5
                style={{ marginRight: "10px", cursor: "pointer" }}
                onClick={handleEditClick}
              >
                {EditTitle}
              </h5>
            </span>
          </h2>

          {exploreMegaMenuExams.map((item, index) => (
            <>
              {item.children.map(
                (subitem, subindex) =>
                  subitem.subtitle && (
                    <MenuItem
                      key={`${index}-${subindex}`}
                      style={{
                        height: "55px",
                        width: "400px",
                        margin: "10px",
                        border: "1px solid #D9D9D9",
                        backgroundColor: "#F5F5F5",
                        borderRadius: "25px",
                        position: "relative", // Added position relative
                      }}
                    >
                      {isEditMode && (
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            right: "10px",
                            transform: "translateY(-50%)",
                            cursor: "pointer",
                          }}
                          onClick={() => handleRemove(index, subindex)}
                        >
                          <Image
                            src="/images/png/delete.png"
                            alt="Cross Icon"
                            width="16px"
                          />
                        </div>
                      )}
                      <Image
                        src={subitem.image}
                        alt=""
                        width="55px"
                        height="52px"
                        style={{ marginRight: "10px" }}
                      />
                      <h4
                        style={{
                          color: "black",
                          ":hover": { color: "blue" },
                        }}
                      >
                        {subitem.subtitle}
                      </h4>
                    </MenuItem>
                  )
              )}
            </>
          ))}
          <Button
            style={{
              backgroundColor: "white",
              margin: "10px",
              marginTop: "25px",
              marginLeft: "10px",
              height: "45px",
              width: "210px",
              border: "1px solid grey",
              borderRadius: "25px",
              display: "flex", // Added display flex
              alignItems: "center", // Align items vertically
            }}
            onClick={handleAddNewGoal}
          >
            <div
              style={{
                backgroundColor: "#F08223",
                borderRadius: "50%",
                padding: "3px",
                marginRight: "5px",
                marginLeft: "-10px",
              }}
            >
              <Image src="/images/png/PlusIcon.png" height="20px" />
            </div>
            <h4 style={{ color: "black", margin: 0 }}>Add another Goal</h4>
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
