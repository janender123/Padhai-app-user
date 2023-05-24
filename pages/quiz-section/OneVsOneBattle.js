import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Select,
  MenuItem,
  Button,
  Container,
  Divider,
} from "@mui/material";
import { Image } from "react-bootstrap";
import Link from "next/link";

const CardComponent = () => {
  return (
    <Container className="py-8">
      <Card>
        <CardContent>
          <Box display="flex" alignItems="center" marginBottom="20px">
            <Box width="500px" height="400px" margin="20px">
              <Image
                src="/images/contests/1vs1battle.svg"
                alt="Card Image"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Box width="50%" margin="20px">
              <h1>Random Battle</h1>
              <Box
                display="flex"
                justifyContent="space-between"
                marginBottom="20px"
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: 1,
                    bgcolor: "background.paper",
                    padding: "10px",
                    "& svg": {
                      m: 1.5,
                    },
                    "& hr": {
                      mx: 0.5,
                    },
                  }}
                >
                  <Typography sx={{ width: "50%" }} variant="body1">
                    Entry Fee: 5 Coins
                  </Typography>
                  <Divider orientation="vertical" flexItem />
                  <Typography
                    sx={{ width: "50%", marginLeft: "10px" }}
                    variant="body1"
                  >
                    Current Coins: 374
                  </Typography>
                </Box>
              </Box>
              <Select
                variant="outlined"
                defaultValue="subject1"
                fullWidth
                marginBottom="20px"
              >
                <MenuItem value="subject1">Maths</MenuItem>
                <MenuItem value="subject2">Physics</MenuItem>
                <MenuItem value="subject3">Chemistry</MenuItem>
                <MenuItem value="subject4">Biology</MenuItem>
                <MenuItem value="subject5">English</MenuItem>
              </Select>
              <Link href="/marketing/student/QuizZonePage">
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ marginTop: "10px" }}
                  fullWidth
                >
                  Let&apos;s Play
                </Button>
              </Link>
              <Typography variant="h6" marginTop="20px">
                Play With Friend
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "10px" }}
                fullWidth
              >
                Play With Friend
              </Button>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default CardComponent;
