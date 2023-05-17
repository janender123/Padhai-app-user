import React, { useState } from "react";
import { Card, CardContent, Box, Container, Typography } from "@mui/material";
import { Button, Image } from "react-bootstrap";
import { AppBar, Tab, Tabs, TextField } from "@mui/material";
import QuizSubject from "data/quiz/QuizSubject";
import TodaysExam from "data/quiz/TodaysExam";
import CompletedExams from "data/quiz/CompletedExams";
import Link from "next/link";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Divider,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const CardComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const ExamResultDialog = ({
    open,
    onClose,
    totalQuestions,
    correctQuestions,
    incorrectQuestions,
  }) => {
    return (
      <Dialog
        open={open}
        onClose={onClose}
        PaperProps={{ style: { width: 520 } }}
      >
        <Card
          sx={{
            padding: "40px",
          }}
        >
          <DialogTitle
            display="flex"
            justifyContent="center"
            sx={{
              backgroundColor: "#3c65c4",
              color: "white",
              borderRadius: "10px",
            }}
          >
            Exam Result
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                color: "black",
                backgroundColor: "3c65c4",
                position: "absolute",
                top: "10px",
                right: "10px",
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <Divider style={{ marginTop: "20px" }} />
          <div
            className="result-box mt-3"
            style={{
              backgroundColor: "#8080804d",
              display: "flex",
              borderRadius: "10px",
            }}
          >
            <div className="column m-3">
              <div className="column-title" style={{ fontWeight: "bold" }}>
                Total Questions
              </div>
              <div className="mt-2">{totalQuestions}</div>
            </div>
            <div className="column m-3">
              <div className="column-title" style={{ fontWeight: "bold" }}>
                Correct Questions
              </div>
              <div className="mt-2">{correctQuestions}</div>
            </div>
            <div className="column m-3">
              <div className="column-title" style={{ fontWeight: "bold" }}>
                Incorrect Questions
              </div>
              <div className="mt-2">{incorrectQuestions}</div>
            </div>
          </div>
        </Card>
      </Dialog>
    );
  };

  return (
    <Container className="py-8">
      <Card>
        <CardContent>
          <Box display="flex" alignItems="center" marginBottom="20px">
            <Box width="500px" height="400px" margin="20px">
              <Image
                src="/images/contests/exam.svg"
                alt="Card Image"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Box width="50%" margin="20px">
              <Card>
                <AppBar position="static" color="default">
                  <Tabs value={selectedTab} onChange={handleTabChange}>
                    <Tab sx={{ width: "50%" }} label="Today" />
                    <Tab sx={{ width: "50%" }} label="Completed" />
                  </Tabs>
                </AppBar>
                <Box p={2}>
                  {selectedTab === 0 && (
                    <div>
                      {TodaysExam.map((item, index) => (
                        <Link href="/marketing/student/QuizZonePage">
                          <div
                            className="p-md-4"
                            style={{
                              display: "flex",
                              margin: "10px",
                              position: "relative",
                              width: "auto",
                              padding: "10px",
                              height: "70px",
                              borderRadius: "20px",
                              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <div
                              style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                padding: "10px",
                                color: "black",
                              }}
                            >
                              <div>{item.name}</div>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                top: 0,
                                right: 0,
                                padding: "10px",
                                color: "black",
                              }}
                            >
                              <div> {item.marks}</div>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                padding: "10px",
                                color: "black",
                              }}
                            >
                              <div>{item.time}</div>
                            </div>
                            <div
                              style={{
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                padding: "10px",
                                color: "black",
                              }}
                            >
                              <div> {item.duration}</div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                  {selectedTab === 1 && (
                    <div>
                      {CompletedExams.map((item, index) => (
                        <div
                          className="p-md-4"
                          style={{
                            display: "flex",
                            margin: "10px",
                            position: "relative",
                            width: "auto",
                            padding: "10px",
                            height: "70px",
                            borderRadius: "20px",
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                          }}
                          onClick={handleOpenDialog}
                        >
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              padding: "10px",
                              color: "black",
                            }}
                          >
                            <div>{item.name}</div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              right: 0,
                              padding: "10px",
                              color: "black",
                            }}
                          >
                            <div> {item.marks}</div>
                          </div>
                          <div
                            style={{
                              position: "absolute",
                              bottom: 0,
                              left: 0,
                              padding: "10px",
                              color: "black",
                            }}
                          >
                            <div>{item.time}</div>
                          </div>
                        </div>
                      ))}
                      <ExamResultDialog
                        open={dialogOpen}
                        onClose={handleCloseDialog}
                        totalQuestions={10} // Replace with the actual value
                        correctQuestions={8} // Replace with the actual value
                        incorrectQuestions={2} // Replace with the actual value
                      />
                    </div>
                  )}
                </Box>
              </Card>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CardComponent;
