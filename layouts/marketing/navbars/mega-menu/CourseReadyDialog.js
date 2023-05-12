// import node module libraries
import { Fragment, useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Image, Modal, NavDropdown } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
// import data files
import NavbarMegaMenuRoutes from "routes/marketing/NavbarMegaMenuRoutes";
// import hooks
import useMounted from "hooks/useMounted";
import { Checkbox, IconButton, Menu, MenuItem, TextField } from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Button } from "@mui/material";
import ExploreMegaMenuClass, {
  ExploreMegaMenuBoards,
  ExploreMegaMenuExams,
  ExploreMegaMenuLanguage,
  ExploreMegaMenuStream,
} from "routes/marketing/ExploreMegaMenu";
import { Close } from "@material-ui/icons";


const CourseReadyDialog = ({
  dialogOpenCourseReady,
  handleCloseCourseReady,
  handleSubmitCourseReady,
  handleBackClickCourseReady,
  selectedClass,
  selectedBoard,
  selectedExam,
}) => {
  return (
    <Dialog open={dialogOpenCourseReady} onClose={handleCloseCourseReady}>
      <Fragment>
        <DialogTitle>
          <div className={` text-center border-top-0 `}>
            <h1 className="text-dark mb-0 mt-3">
              Your customised <span style={{ color: "#3c65c4" }}> course </span>
              <br />
              is ready!
            </h1>
          </div>
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseCourseReady}
          style={{ position: "absolute", top: 0, right: 0 }}
        >
          <Close />
        </IconButton>
        <DialogContent>
          <Row style={{ width: "380px" }}>
            <Col lg={12} xs={12}>
              <div
                className="d-flex text-center"
                style={{
                  border: "1px solid grey",
                  margin: "5px",
                  height: "60px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "flex-start",
                  borderRadius: "10px",
                  // backgroundColor:
                  //   selectedLanguage === subindex ? "#3c65c4" : null,
                  alignItems: "center", // align items to center
                  paddingLeft: "15px", // add padding to the left
                }}
                // onClick={() => handleSelectLanguage(subindex)}
              >
                {ExploreMegaMenuClass[0].children.map((subitem, subindex) => {
                  if (subindex === selectedClass) {
                    return (
                      <p key={subindex} style={{ marginTop: "10px" }}>
                        Class
                        <h3
                          key={subindex}
                          style={{
                            marginBottom: "0",
                            width: "60px",
                          }}
                        >
                          {subitem.subtitle}
                        </h3>
                      </p>
                    );
                  }
                })}
                <div
                  style={{
                    borderRight: "1px solid grey",
                    height: "40px",
                    margin: "0 15px",
                  }}
                ></div>

                {ExploreMegaMenuBoards[0].children.map((subitem, subindex) => {
                  if (subindex === selectedBoard) {
                    return (
                      <>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "start",
                          }}
                        >
                          <p style={{ marginTop: "0px", marginBottom: "0" }}>
                            Board
                          </p>
                          <div
                            key={subindex}
                            style={{
                              margin: "0px",
                              display: "flex",
                              justifyContent: "start",
                              alignItems: "start",
                              backgroundColor: "white",
                              borderRadius: "10%",
                              width: "200px",
                              overflow: "hidden",
                            }}
                          >
                            <Image src={subitem.image} alt="" height="30px" />
                            <h3 style={{ margin: "0px" }}>
                              {subitem.subtitle}
                            </h3>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
              </div>
            </Col>
            <Col lg={12} xs={12}>
              <h5>Exams you are preparing for</h5>
              <div
                className="d-flex text-center"
                style={{
                  border: "1px solid grey",
                  margin: "5px",
                  height: "60px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "flex-start",
                  borderRadius: "10px",
                  // backgroundColor:
                  //   selectedLanguage === subindex ? "#3c65c4" : null,
                  alignItems: "center", // align items to center
                  paddingLeft: "0px", // add padding to the left
                }}
                // onClick={() => handleSelectLanguage(subindex)}
              >
                {ExploreMegaMenuExams[0].children.map((subitem, subindex) => {
                  if (subindex === selectedExam) {
                    return (
                      <div
                        key={subindex}
                        style={{
                          margin: "0",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "white",
                          borderRadius: "10%",
                          width: "200px",
                          marginRight: "15px", // add margin to the right
                          overflow: "hidden",
                        }}
                      >
                        <Image src={subitem.image} alt="" height="30px" />
                        <h3
                          style={{
                            marginTop: "0px",
                            marginBottom: "0", // remove bottom margin
                          }}
                        >
                          {subitem.subtitle}
                        </h3>
                      </div>
                    );
                  }
                })}
              </div>
            </Col>
            <Col lg={6}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleBackClickCourseReady}
                style={{ marginTop: "10px" }}
              >
                Start Over
              </Button>
            </Col>
            <Col lg={6}>
              <Button
                fullWidth
                variant="contained"
                onClick={handleSubmitCourseReady}
                style={{ marginTop: "10px" }}
              >
                Join this course
              </Button>
            </Col>
          </Row>
        </DialogContent>
      </Fragment>
    </Dialog>
  );
};



export default CourseReadyDialog;