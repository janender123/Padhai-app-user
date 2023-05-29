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
                <Col lg={6} md={12} sm={12}>
                  <Button
                    fullWidth
                    onClick={handleBackClickStream}
                    style={{ marginTop: "10px", width: "100%" , borderRadius: "25px",}}
                  >
                    Back
                  </Button>
                </Col>
                <Col lg={6} md={12} sm={12}>
                  <Button
                    fullWidth
                    onClick={handleNextClickStream}
                    style={{ marginTop: "10px", width: "100%" , borderRadius: "25px"}}
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
