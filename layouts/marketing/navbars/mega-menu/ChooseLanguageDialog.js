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
  ExploreMegaMenuLanguages,
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
              <Row key={index}>
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
                            border: "1px solid #D9D9D9",
                            margin: "5px",
                           height: "55px",
                            display: "flex",
                            justifyContent: "flex-start",
                            borderRadius: "40px",
                            backgroundColor: "#F5F5F5",
                            alignItems: "center", // align items to center
                            paddingLeft: "15px", // add padding to the left
                          }}
                        >
                          <div
                            style={{
                              margin: "0",
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              backgroundColor:
                                selectedLanguage === subindex
                                  ? "#3c65c4"
                                  : "#ccc",
                              borderRadius: "50%",
                              width: "25px",
                              height: "25px",
                              marginRight: "15px",
                              cursor: "pointer",
                            }}
                            onClick={() => handleSelectLanguage(subindex)}
                          >
                            {/* Render a checkmark icon or any other indicator inside the circle if selected */}
                            {selectedLanguage === subindex && (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="black" // Change the fill color of the checkmark icon to black
                                width="16px"
                                height="16px"
                              >
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                              </svg>
                            )}
                          </div>
                          <h2
                            style={{
                              marginTop: "3px",
                              marginBottom: "0", // remove bottom margin
                            }}
                          >
                            {subitem.subtitle}
                          </h2>
                        </div>
                      </Col>
                    );
                  })}{" "}
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
                    onClick={handleBackClickLanguage}
                    style={{
                      padding: "7px",
                      borderRadius: "50%",
                      fontWeight: "strong",
                      backgroundColor: "#F08223",
                      border: "none",
                    }}
                  >
                    <Image src="/images/png/PrevIcon.png" height="30px" />
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
                    onClick={handleNextClickLanguage}
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

export default ChooseLanguageDialog;
