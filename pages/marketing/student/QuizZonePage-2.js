import React, { useState } from "react";
import {
  Card,
  Container,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import QuizSubject from "data/quiz/QuizSubject";
import { makeStyles } from "@material-ui/core";
import SubjectUnitsData from "data/quiz/SubjectUnitsData";
import TabPanelData from "data/quiz/TabPanelData";
import QuizZoneSubjectUnits from "sub-components/landings/course-lead/QuizZoneSubjectUnits";
import { Col, Row } from "react-bootstrap";

const Categories = ({ selectedCategory, handleCategorySelect }) => {
  return (
    <div style={{ padding: 4 }}>
      <Divider textAlign="center" sx={{ marginBottom: "20px" }}>
        <h3>SUBJECTS</h3>
      </Divider>
      <div>
        <Row>
          {QuizSubject.map((item, index) => (
            <Typography
              key={index}
              variant="body1"
              className="col-12 "
              onClick={() => handleCategorySelect(index)}
              style={{
                backgroundColor:
                  selectedCategory === index ? "#3c65c4" : "white",
                color: selectedCategory === index ? "white" : "black",
                borderRadius: "20px",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                padding: "10px",
                marginBottom: "10px",
                width: "100%",
                cursor: "pointer",
                wordWrap: "break-word",
              }}
            >
              {item.name}
            </Typography>
          ))}
        </Row>
      </div>
    </div>
  );
};

const MyCard = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategorySelect = (index) => {
    setSelectedCategory(index);
  };
  return (
    <Container className="py-8 py-lg-8 bg-light">
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3} m={3}>
            <Categories
              selectedCategory={selectedCategory}
              handleCategorySelect={handleCategorySelect}
            />
          </Grid>
          <Grid item sm={12} md={12} xs={12} lg={8} xl={8} m={2}>
            <QuizZoneSubjectUnits selectedCategory={selectedCategory} />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default MyCard;
