// import node module libraries
import { Fragment, useState } from "react";
import { Card, Image } from "react-bootstrap";
import Link from "next/link";

// import sub components
import {
  Question,
  QuizProgress,
  QuizPagination,
  QuizTimer,
} from "sub-components";

// import profile layout wrapper
import ProfileLayout from "layouts/marketing/student/ProfileLayout";

// import data files
import { QuizData } from "data/marketing/quiz/QuizData";
import { Chip, Container } from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import QuestionSolution from "sub-components/quiz/QuestionSolution";
import SolutionData from "data/marketing/quiz/SolutionData";
import ExamsAndSolutionsQData from "data/marketing/quiz/ExamsAndSolutionsQData";

const QuizZonePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(1);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = ExamsAndSolutionsQData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(ExamsAndSolutionsQData.length / recordsPerPage);
  const [counter, setCounter] = useState(10);

  const handleCounterClick = (likes) => {};
  return (
    <Container className="py-8">
      <Card className="mb-4">
        <Card.Body>
          {/* Question(s) */}
          <div className="mt-5">
            <span>
              Question {currentRecords[0].id}
              <Chip
                label="Easy"
                color="success"
                variant="outlined"
                sx={{
                  borderRadius: "0",
                  height: "21px",
                  width: "55px",
                  marginLeft: "15px",
                }}
              />
            </span>
            <QuestionSolution item={currentRecords[0]} />
          </div>
        </Card.Body>
      </Card>
      {SolutionData.map((item, index) => {
        const [counter, setCounter] = useState(item.likes);

        const handleClickLike = () => {
          if (item.likes === counter) {
            setCounter(counter + 1);
          } else {
            setCounter(counter - 1);
          }
        };

        return (
          <Card className="mb-4">
            <Card.Body>
              <h4 style={{ color: "#1356c5" }}>Solution : {item.id} </h4>
              <div style={{ color: "black" }}>{item.solution}</div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Chip
                  label={counter}
                  onClick={handleClickLike}
                  avatar={
                    <ThumbUpIcon
                      style={{
                        marginLeft: "15px",
                        color: counter === item.likes ? "inherit" : "#3c65c4",
                      }}
                    />
                  }
                  variant="outlined"
                  style={{
                    borderRadius: "10px",
                    marginRight: "10px",
                  }}
                />
                <Link href="#">
                  <Chip
                    avatar={<ShareIcon style={{ marginLeft: "15px" }} />}
                    label="Share"
                    variant="outlined"
                    style={{ borderRadius: "10px", cursor: 'pointer' }}
                  />
                </Link>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};

export default QuizZonePage;
