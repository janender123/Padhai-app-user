import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Select,
  MenuItem,
  Container,
  Divider,
} from "@mui/material";
import { Button, Image } from "react-bootstrap";
import Link from "next/link";
import { AppBar, Tab, Tabs, TextField } from "@mui/material";
import ButtonComponent from "./ButtonComponent";
import CreateRoomDialog from "./CreateRoomDialog";

const CardComponent = () => {
  const [currentCoins, setCurrentCoins] = useState(374);

  const [roomCode, setRoomCode] = useState("");
  const [selectedTab, setSelectedTab] = useState(0);
  const handleJoinRoom = () => {
    if (roomCode.trim() === "") {
      alert("Please enter a room code.");
    } else {
      alert("Room code is not valid.");
    }
  };
  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const handleChangeRoomCode = (event) => {
    setRoomCode(event.target.value);
  };

  return (
    <Container className="py-8">
      <Card>
        <CardContent>
          <Box display="flex" alignItems="center" marginBottom="20px">
            <Box width="500px" height="400px" margin="20px">
              <Image
                src="/images/contests/groupbattle.svg"
                alt="Card Image"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>
            <Box width="50%" margin="20px">
              <Card>
                <AppBar position="static" color="default">
                  <Tabs value={selectedTab} onChange={handleTabChange}>
                    <Tab sx={{ width: "50%" }} label="Create" />
                    <Tab sx={{ width: "50%" }} label="Join" />
                  </Tabs>
                </AppBar>
                <Box p={2}>
                  {selectedTab === 0 && (
                    <>
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
                      <div className="mt-4">
                        <ButtonComponent
                          currentCoins={currentCoins}
                          setCurrentCoins={setCurrentCoins}
                        />
                      </div>
                      <Typography
                        className="mt-3"
                        sx={{ marginLeft: "10px" }}
                        variant="body1"
                      >
                        Current Coins: {currentCoins}
                      </Typography>
                      <div className="mt-3">
                        <CreateRoomDialog />
                      </div>
                    </>
                  )}
                  {selectedTab === 1 && (
                    <>
                      <h3 className="mt-2">Enter room code here</h3>
                      <TextField
                        fullWidth
                        className="mt-3"
                        value={roomCode}
                        onChange={handleChangeRoomCode}
                        label="Enter Code"
                      />
                      <div className="mt-3">
                        <Button onClick={handleJoinRoom}>Join Room</Button>
                      </div>
                    </>
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
