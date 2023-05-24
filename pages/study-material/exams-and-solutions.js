// import node module libraries
import Link from "next/link";
import { Clock, Video, Users } from "react-feather";
import {
  Container,
  Image,
  Button,
  Row,
  Col,
  Card,
  Form,
  ListGroup,
  ButtonGroup,
} from "react-bootstrap";

import FormData from "./FormData"; // Import the data from a separate file
import { Chip } from "@mui/material";

const HeroFormRight = () => {
  return (
    <section className="py-6">
      <Container className="bg-light">
        {/*  Card  */}
        {FormData.map((item, index) => (
          <Link  key={index} href="/study-material/question-solution">
            <Card style={{ zIndex: 1 }} className="smooth-shadow-md mt-3">
              <Card.Body className="p-6">
                <div className="mb-4">
                  <h1 className="mb-4 lh-1 fw-bold h3">
                    Question {item.id}
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
                  </h1>

                  <div>
                    <div style={{ color: "black" }}>{item.question}</div>
                  </div>
                  <div
                    style={{
                      color: "black",
                      marginLeft: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <div>a) {item.optiona}</div>
                    <div>b) {item.optionb}</div>
                    <div>c) {item.optionc}</div>
                    <div>d) {item.optiond}</div>
                  </div>
                  <div
                    style={{
                      color: "black",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "20px",
                    }}
                  >
                    <p>Topic: {item.topic}</p>
                    <Button
                      variant="outline-primary"
                      style={{ borderRadius: "20px" }}
                    >
                      View Solution
                    </Button>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </Container>
    </section>
  );
};
export default HeroFormRight;
