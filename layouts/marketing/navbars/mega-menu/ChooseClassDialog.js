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
                <h1 className="text-dark mb-3">{item.menuitem}</h1>
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
              <Row key={index} style={{ width: "380px" }}>
                {item.children.map((subitem, subindex) => {
                  return (
                    <Col lg={4} xs={12} key={index} style={{ padding: "6px" }}>
                      <div
                        className="d-flex text-center"
                        style={{
                          border: "1px solid grey",
                          margin: "3px",
                          height: "60px",
                          width: "100px",
                          height: "60px",
                          cursor: "pointer",
                          borderRadius: "10px",
                          justifyContent: "center",
                          backgroundColor:
                            selectedClass === subindex ? "#3c65c4" : null,
                        }}
                        onClick={() => handleSelectClass(subindex)}
                      >
                        <h2
                          className="d-flex text-center"
                          style={{
                            color:
                              selectedClass === subindex ? "white" : "black",
                            marginTop: "12px",
                          }}
                        >
                          {subitem.subtitle}
                        </h2>
                      </div>
                    </Col>
                  );
                })}
                <Col lg={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleNextClickClass}
                    style={{
                      marginTop: "20px",
                      marginLeft: "50%",
                      borderRadius: "10px",
                      fontWeight: "strong",
                    }}
                  >
                    Next
                  </Button>
                </Col>
              </Row>
            </DialogContent>
          </Fragment>
        );
      })}
    </Dialog>
  );
};


export default ChooseClassDialog