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


const ChooseLanguageDialog = ({
  dialogOpenChooseLanguage,
  handleCloseChooseLanguage,
  handleNextClickLanguage,
  handleBackClickLanguage,
  handleSelectLanguage,
  selectedLanguage,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <Dialog open={dialogOpenChooseLanguage} onClose={handleCloseChooseLanguage}>
      {ExploreMegaMenuLanguage.map((item, index) => {
        return (
          <Fragment key={index}>
            <DialogTitle>
              <div className={` text-center border-top-0 `}>
                <h1 className="text-dark mb-0">{item.menuitem}</h1>
              </div>
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleCloseChooseLanguage}
              style={{ position: "absolute", top: 0, right: 0 }}
            >
              <Close />
            </IconButton>
            <DialogContent>
              <TextField
                fullWidth
                label="Search Language..."
                variant="outlined"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  marginBottom: "10px",
                  marginTop: "-10px",
                  borderRadius: "10px",
                }}
              />
              <Row key={index} style={{ width: "380px" }}>
                {item.children
                  .filter(
                    (subitem) =>
                      subitem.subtitle &&
                      subitem.subtitle
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase())
                  )
                  .map((subitem, subindex) => {
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
                              selectedLanguage === subindex ? "#3c65c4" : null,
                            alignItems: "center", // align items to center
                            paddingLeft: "15px", // add padding to the left
                          }}
                          onClick={() => handleSelectLanguage(subindex)}
                        >
                          <h2
                            style={{
                              color:
                                selectedLanguage === subindex
                                  ? "white"
                                  : "black",
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
                    onClick={handleBackClickLanguage}
                    style={{ marginTop: "10px" }}
                  >
                    Back
                  </Button>
                </Col>
                <Col lg={6}>
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={handleNextClickLanguage}
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


export default ChooseLanguageDialog;