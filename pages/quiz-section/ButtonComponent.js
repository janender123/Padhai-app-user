import React, { useState } from "react";
import { Box } from "@mui/material";
import { Image } from "react-bootstrap";

const BoxComponent = ({ text, onClick, isSelected }) => {
  const handleSelect = () => {
    onClick(text);
  };

  const boxStyles = {
    width: "120px",
    height: "50px",
    border: "1px solid black",
    textAlign: "center",
    lineHeight: "45px",
    fontSize: "18px",
    color: isSelected ? "white" : "black",
    backgroundColor: isSelected ? "#3c65c4" : "white",
    position: "relative",
    cursor: "pointer",
    marginRight: "10px", // Added margin for spacing between boxes
  };

  const imageStyles = {
    position: "absolute",
    top: "100%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "25px",
    width: "50px",
  };

  return (
    <Box sx={boxStyles} onClick={handleSelect}>
      {text}
      <Image
        src="/images/contests/coin.svg"
        alt="Coin Image"
        style={imageStyles}
      />
    </Box>
  );
};

const ButtonComponent = ({ currentCoins, setCurrentCoins }) => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleCoinClick = (amount) => {
      setCurrentCoins((prevCoins) => prevCoins - amount)
  };

  const handleBoxSelect = (text) => {
    setSelectedBox(text);
    handleCoinClick(Number(text)); // Call handleCoinClick here
  };

  return (
    <div style={{ display: "flex" }}>
      <BoxComponent
        text="5"
        onClick={handleBoxSelect}
        isSelected={selectedBox === "5"}
      />
      <BoxComponent
        text="10"
        onClick={handleBoxSelect}
        isSelected={selectedBox === "10"}
      />
      <BoxComponent
        text="15"
        onClick={handleBoxSelect}
        isSelected={selectedBox === "15"}
      />
      <BoxComponent
        text="20"
        onClick={handleBoxSelect}
        isSelected={selectedBox === "20"}
      />
    </div>
  );
};

export default ButtonComponent;
