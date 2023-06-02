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

const ChooseClassDialog = ({
  dialogOpenChooseClass,
  handleCloseChooseClass,
  handleNextClickClass,
  handleSelectClass,
  selectedClass,
}) => {
  return (
    <Dialog open={dialogOpenChooseClass} onClose={handleCloseChooseClass}>
      {ExploreMegaMenuClass.map((item, index) => {
        return (
          <Fragment key={index}>
            <DialogTitle>
              <div className={` text-center border-top-0`}>
                <h1
                  className="text-dark mb-1"
                  style={{
                    fontSize: "30px",
                  }}
                >
                  {item.menuitem}
                </h1>
              </div>
              <IconButton
                aria-label="close"
                onClick={handleCloseChooseClass}
                style={{ position: "absolute", top: 0, right: 0 }}
              >
                <Close />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Row key={index} style={{ width: "450px" }}>
                {item.children.map((subitem, subindex) => {
                  return (
                    <Col xl={4} lg={4} md={4} xs={6} sm={6}>
                      <div
                        className="d-flex text-center"
                        style={{
                          border: "1px solid #D9D9D9",
                          margin: "6px 0",
                          width: "135px",
                          height: "50px",
                          cursor: "pointer",
                          borderRadius: "20px",
                          justifyContent: "center",
                          backgroundColor:
                            selectedClass === subindex ? "#3c65c4" : "#F5F5F5",
                        }}
                        onClick={() => handleSelectClass(subindex)}
                      >
                        <h2
                          className="d-flex text-center"
                          style={{
                            color:
                              selectedClass === subindex ? "white" : "black",
                            marginTop: "6px",
                          }}
                        >
                          {subitem.subtitle}
                        </h2>
                      </div>
                    </Col>
                  );
                })}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    paddingTop: "20px",
                    paddingBottom: '10px'
                  }}
                >
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
                    onClick={handleNextClickClass}
                    style={{
                      padding: "7px",
                      borderRadius: "50%",
                      fontWeight: "strong",
                      backgroundColor: "#F08223",
                      border: "none",
                    }}
                  >
                    <Image src="/images/png/NextIcon.png" height="30px" />
                  </Button>
                </div>
              </Row>
            </DialogContent>
          </Fragment>
        );
      })}
    </Dialog>
  );
};

export default ChooseClassDialog;
