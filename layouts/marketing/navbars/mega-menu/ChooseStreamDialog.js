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

const ChooseStreamDialog = ({
  dialogOpenChooseStream,
  handleCloseChooseStream,
  handleNextClickStream,
  handleBackClickStream,
  handleSelectStream,
  selectedStream,
}) => {
  return (
    <Dialog open={dialogOpenChooseStream} onClose={handleCloseChooseStream}>
      {ExploreMegaMenuStream.map((item, index) => {
        return (
          <Fragment key={index}>
            <DialogTitle>
              <div className={` text-center border-top-0`}>
                <h1 className="text-dark mb-0 pb-0">{item.menuitem}</h1>
              </div>
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleCloseChooseStream}
              style={{ position: "absolute", top: 0, right: 0 }}
            >
              <Close />
            </IconButton>
            <DialogContent>
              <Row key={index} style={{ width: "380px" }}>
                {item.children.map((subitem, subindex) => {
                  return (
                    <Col lg={12} xs={12} key={index}>
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
                          backgroundColor:
                            selectedStream === subindex ? "#3c65c4" : null,
                          alignItems: "center", // align items to center
                          paddingLeft: "15px", // add padding to the left
                        }}
                        onClick={() => handleSelectStream(subindex)}
                      >
                        <div
                          style={{
                            margin: "0",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "white",
                            borderRadius: "10%",
                            width: "30px",
                            marginRight: "15px", // add margin to the right
                            overflow: "hidden",
                          }}
                        >
                          <Image src={subitem.image} alt="" height="30px" />
                        </div>
                        <h2
                          style={{
                            color:
                              selectedStream === subindex ? "white" : "black",
                            marginTop: "8px",
                            marginBottom: "0", // remove bottom margin
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
                    onClick={handleBackClickStream}
                    style={{ marginTop: "10px" }}
                  >
                    Back
                  </Button>
                </Col>
                <Col lg={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleNextClickStream}
                    style={{ marginTop: "10px" }}
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


export default ChooseStreamDialog;