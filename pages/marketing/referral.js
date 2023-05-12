import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Image } from "react-bootstrap";
import { ShareOutlined } from "@mui/icons-material"; // Import the new icon

const ReferralCard = () => {
  const cardStyles = {
    display: "flex",
    minWidth: 275,
    backgroundColor: "#f5f5f5",
    boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
    padding: "20px",
    marginBottom: "30px",
    backgroundColor: "white",
  };

  const contentStyles = {
    flexGrow: 1,
  };

  const titleStyles = {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const subtitleStyles = {
    fontSize: 18,
    marginBottom: "10px",
  };

  const buttonStyles = {
    backgroundColor: "#3f51b5",
    color: "white",
    marginTop: "10px",
  };

  const imgStyles = {
    marginLeft: "20px",
    alignSelf: "right",
  };

  return (
    <Card style={cardStyles}>
      <CardContent style={contentStyles}>
        <Typography style={titleStyles} gutterBottom>
          Refer friends to win Amazon vouchers and Plus Subscription
        </Typography>
        <Typography style={subtitleStyles} variant="body2" component="p">
          Invite your friends to join and you both can win Amazon vouchers and a
          Plus Subscription.
        </Typography>
        <Button
          variant="contained"
          style={buttonStyles}
          startIcon={ <ShareOutlined />}
        >
          Share now
        </Button>
      </CardContent>
      <Image
        src="/images/png/refer_friends_and_win_rewards_web.png"
        alt="Refer a friend"
        height="200px"
        width="300px!important"
        style={imgStyles}
      />
    </Card>
  );
};

export default ReferralCard;
