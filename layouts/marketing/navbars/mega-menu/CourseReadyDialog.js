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
import { Button } from "react-bootstrap";
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
              Your{" "}
              <span style={{ color: "#3c65c4" }}>
                {" "}
                customised <br />
                course{" "}
              </span>
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
          <Row>
            <Col lg={12} xs={12}>
              <div
                className="d-flex text-center"
                style={{
                  border: "1px solid #D9D9D9",
                  margin: "5px",
                  height: "60px",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "flex-start",
                  backgroundColor: "#F5F5F5",
                  borderRadius: "30px",
                  alignItems: "center",
                  paddingLeft: "15px",
                }}
                // onClick={() => handleSelectLanguage(subindex)}
              >
                {ExploreMegaMenuClass[0].children.map((subitem, subindex) => {
                  if (subindex === selectedClass) {
                    return (
                      <div
                        key={subindex}
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <h3 style={{ marginBottom: "0", marginRight: "0px" }}>
                          Class :
                        </h3>
                        <h3 style={{ marginBottom: "0", width: "60px" }}>
                          {subitem.subtitle}
                        </h3>
                      </div>
                    );
                  }
                })}

                <div
                  style={{
                    border: "1px solid #D9D9D9",
                    height: "40px",
                    margin: "0 15px",
                  }}
                ></div>

                {ExploreMegaMenuBoards[0].children.map((subitem, subindex) => {
                  if (subindex === selectedBoard) {
                    return (
                      <div
                        key={subindex}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          margin: "0px",
                          backgroundColor: "#F5F5F5",
                          borderRadius: "10%",
                          width: "200px",
                          overflow: "hidden",
                        }}
                      >
                        <div style={{ marginLeft: "10px" }}>
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <h3 style={{ margin: "0px", marginRight: "5px" }}>
                              Board :
                            </h3>

                            <Image src={subitem.image} alt="" height="30px" />
                            <h3 style={{ margin: "0px" }}>
                              {subitem.subtitle}
                            </h3>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </Col>
            <Col lg={12} xs={12}>
              <h3 className="text-center ">Exams you are preparing for : </h3>
              <div
                className="d-flex text-center"
                style={{
                  border: "1px solid #D9D9D9",
                  margin: "5px",
                  height: "60px",
                  cursor: "pointer",
                  backgroundColor: "#F5F5F5",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "30px",
                  alignItems: "center",
                  paddingLeft: "0px",
                }}
              >
                {ExploreMegaMenuExams[0].children.map((subitem, subindex) => {
                  if (subindex === selectedExam) {
                    return (
                      <div
                        key={subindex}
                        style={{
                          margin: "0",
                          backgroundColor: "#F5F5F5",
                          borderRadius: "10%",
                          width: "200px",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Image src={subitem.image} alt="" height="30px" />
                          <h3
                            style={{
                              marginTop: "0px",
                              marginBottom: "0",
                              marginLeft: "10px",
                            }}
                          >
                            {subitem.subtitle}
                          </h3>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </Col>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "center",
                paddingTop: "20px",
                paddingBottom: "10px",
              }}
            >
              <Button
                onClick={handleBackClickCourseReady}
                style={{
                  padding: "7px",
                  borderRadius: "30px",
                  fontWeight: "strong",
                  backgroundColor: "#F08223",
                  border: "none",
                }}
              >
                <Image
                  src="/images/png/StartOver.png"
                  height="15px"
                  style={{ margin: "0 5px 2px 5px" }}
                />
                <span className="mt-2">Start Over</span>
              </Button>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/images/brand/logo/logo-padhae-2.png"
                  height="50px"
                />
              </div>
              <Button
                onClick={handleSubmitCourseReady}
                style={{
                  padding: "7px",
                  borderRadius: "30px",
                  fontWeight: "strong",
                  backgroundColor: "#F08223",
                  border: "none",
                }}
              >
                <Image
                  src="/images/png/JoinNow.png"
                  height="15px"
                  style={{ margin: "0 5px 2px 5px" }}
                />
                Join Now
              </Button>
            </div>
          </Row>
        </DialogContent>
      </Fragment>
    </Dialog>
  );
};

export default CourseReadyDialog;
