import React, { useState } from "react";
import {
  Card,
  Container,
  Divider,
  Grid,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";
import SelfChallengeSubject from "data/quiz/SelfChallengeSubject";
import SelfChallengeSubjectUnits from "sub-components/landings/course-lead/SelfChallengeQuestionAndTime";
import SelfChallengeUnits from "data/quiz/SelfChallengeUnits";
import SelfChallengeQuestionAndTime from "sub-components/landings/course-lead/SelfChallengeQuestionAndTime";

const Categories = ({
  selectedCategory,
  handleCategorySelect,
  selectedUnit,
  handleUnitSelect,
}) => {
  return (
    <div style={{ padding: 4 }}>
      <Divider textAlign="center" sx={{ marginBottom: "20px" }}>
        <h3>SELECT SUBJECT</h3>
      </Divider>
      <div>
        <Select
          fullWidth
          value={selectedCategory}
          onChange={(event) => handleCategorySelect(event.target.value)}
          style={{
            marginBottom: "10px",
            borderRadius: "20px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
          }}
        >
          {SelfChallengeSubject.map((item, index) => (
            <MenuItem
              key={index}
              value={index}
              style={{
                display: "block",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </div>
      <Divider textAlign="center" sx={{ marginBottom: "20px" }}>
        <h3>SELECT UNITS</h3>
      </Divider>
      <div>
        <Select
          fullWidth
          value={selectedUnit}
          onChange={(event) => handleUnitSelect(event.target.value)}
          style={{
            marginBottom: "10px",
            borderRadius: "20px",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
          }}
        >
          {SelfChallengeUnits[selectedCategory].map((item, index) => (
            <MenuItem
              key={index}
              value={index}
              style={{
                display: "block",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </div>
    </div>
  );
};

const SelfChallengePage = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedUnit, setSelectedUnit] = useState(0);

  const handleCategorySelect = (index) => {
    setSelectedCategory(index);
    setSelectedUnit(0);
  };
  const handleUnitSelect = (index) => {
    setSelectedUnit(index);
  };

  return (
    <Container className="py-8 py-lg-8 bg-light">
      <Card>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={3} xl={3} m={3}>
            <Categories
              selectedCategory={selectedCategory}
              handleCategorySelect={handleCategorySelect}
              selectedUnit={selectedUnit}
              handleUnitSelect={handleUnitSelect}
            />
          </Grid>
          <Grid item sm={12} md={12} xs={12} lg={8}  xl={8} m={2}>
            <SelfChallengeQuestionAndTime selectedCategory={selectedCategory} />
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default SelfChallengePage;
