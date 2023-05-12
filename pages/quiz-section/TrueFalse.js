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

// import data files
import { TrueFalseData } from "data/marketing/quiz/TrueFalseData";
import { Container } from "@mui/material";

const QuizZonePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(1);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = TrueFalseData.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );
  const nPages = Math.ceil(TrueFalseData.length / recordsPerPage);

  return (
    <Container className="py-8">
      <Card className="mb-4">
        <Card.Body>
          {/* Question Title + Timer */}
          <div className="d-flex justify-content-between align-items-center border-bottom pb-3 mb-3">
            <div className="d-flex align-items-center">
              {/* quiz img */}
              <Link href="#">
                {" "}
                <Image
                  src="/images/stream-icons/gk.png"
                  alt=""
                  className="rounded img-4by3-lg"
                  height="60px"
                  width="10px"
                />
              </Link>
              {/* quiz content */}
              <div className="ms-3">
                <h3 className="mb-0">
                  <Link href="#" className="text-inherit">
                    General Knowledge Quiz{" "}
                  </Link>
                </h3>
              </div>
            </div>
            {/* Timer */}
            <QuizTimer hours={0} minutes={5} seconds={55} />
          </div>

          {/* Progress */}
          <QuizProgress
            currentQuestion={currentRecords[0].id}
            totalQuestion={TrueFalseData.length}
          />

          {/* Question(s) */}
          <div className="mt-5">
            <span>Question {currentRecords[0].id}</span>
            <Question item={currentRecords[0]} />
          </div>
        </Card.Body>
      </Card>

      {/* Quiz Pagination */}
      <QuizPagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  );
};

export default QuizZonePage;
