import React, { useState } from "react";
import { Card, Container, Divider, Grid, Typography } from "@mui/material";
import SelfChallengeSubject from "data/quiz/SelfChallengeSubject";
import SelfChallengeSubjectUnits from "sub-components/landings/course-lead/SelfChallengeSubjectUnits";

const Categories = ({ selectedCategory, handleCategorySelect }) => {
  return (
    <div style={{ padding: 4 }}>
      <Divider textAlign="center" sx={{ marginBottom: "20px" }}>
        <h3>SELECT SUBJECT</h3>
      </Divider>
      <div>
        {SelfChallengeSubject.map((item, index) => (
          <Typography
            key={index}
            variant="body1"
            onClick={() => handleCategorySelect(index)}
            style={{
              backgroundColor: selectedCategory === index ? "#3c65c4" : "white",
              color: selectedCategory === index ? "white" : "black",
              borderRadius: "20px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              padding: "10px",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            {item.name}
          </Typography>
        ))}
      </div>
    </div>
  );
};

const SelfChallengePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const handleCategorySelect = (index) => {
    setSelectedCategory(index);
  };
  return (
    <Container className="py-8 py-lg-8 bg-light">
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={3.3} m={2}>
            <Categories
              selectedCategory={selectedCategory}
              handleCategorySelect={handleCategorySelect}
            />
          </Grid>
          <Grid item xs={8} m={2}>
            <SelfChallengeSubjectUnits selectedCategory={selectedCategory} />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default SelfChallengePage;
