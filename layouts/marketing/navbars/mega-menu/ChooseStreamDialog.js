// import node module libraries
import { Fragment } from "react";
import { Image } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import { IconButton } from "@mui/material";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { Button } from "react-bootstrap";
import { ExploreMegaMenuStream } from "routes/marketing/ExploreMegaMenu";
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
            <DialogTitle className="pb-0">
              <div className={`text-center border-top-0`}>
                <h1
                  className="text-dark mb-0 "
                  style={{
                    fontSize: "30px",
                  }}
                >
                  {item.menuitem}
                </h1>
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
              <Row key={index}>
                {item.children.map((subitem, subindex) => {
                  return (
                    <Col lg={12} xs={12} key={index}>
                      <div
                        className="d-flex text-center"
                        style={{
                          border: "1px solid #D9D9D9",
                          margin: "5px",
                         height: "55px",
                          backgroundColor: "#F5F5F5",
                          display: "flex",
                          justifyContent: "flex-start",
                          borderRadius: "40px",
                          alignItems: "center",
                          paddingLeft: "15px",
                        }}
                      >
                        <div
                          style={{
                            margin: "0",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor:
                              selectedStream === subindex ? "#3c65c4" : "#ccc",
                            borderRadius: "50%",
                            width: "25px",
                            height: "25px",
                            marginRight: "15px",
                            cursor: "pointer",
                          }}
                          onClick={() => handleSelectStream(subindex)}
                        >
                          {/* Render a checkmark icon or any other indicator inside the circle if selected */}
                          {selectedStream === subindex && (
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
                            color: "black",
                            marginTop: "3px",
                            marginBottom: "0",
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
                    paddingBottom: "10px",
                  }}
                >
                  <Button
                    onClick={handleBackClickStream}
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
                    onClick={handleNextClickStream}
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

export default ChooseStreamDialog;
