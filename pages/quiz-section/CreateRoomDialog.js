import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { Button, Image } from "react-bootstrap";
import Link from "next/link";
import CloseIcon from "@mui/icons-material/Close";

const randomFixedInteger = (length) => {
  return Math.floor(
    Math.pow(10, length - 1) +
      Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
  ).toString();
};

const CreateRoomDialog = () => {
  const [open, setOpen] = React.useState(false);
  const roomCode = randomFixedInteger(6); // Assuming you have a function that generates a 6-digit random integer

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    alert("The room is full!")
  };

  const handleCloseIconClick = () => {
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={handleClickOpen}>Create Room</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <h1>Room code: {roomCode}</h1>{" "}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseIconClick}
            aria-label="close"
            sx={{ position: "absolute", top: 8, right: 8 }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Typography variant="subtitle1">
            Share this room code to friends and ask them to join
          </Typography>
          <Link href="https://www.fb.com">
            <IconButton sx={{ color: "#4267b2" }}>
              <FacebookIcon />
            </IconButton>
          </Link>
          <Link href="https://web.whatsapp.com">
            <IconButton sx={{ color: "#25d366" }}>
              <WhatsAppIcon />
            </IconButton>{" "}
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                src="/images/png/person_image.png"
                alt="person_image"
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  margin: "10px",
                }}
              />
              <Typography variant="subtitle2">Person 1</Typography>
            </div>
            <strong>vs</strong>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                src="/images/png/person_image.png"
                alt="person_image"
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  margin: " 10px",
                }}
              />
              <Typography variant="subtitle2">Person 2</Typography>
            </div>
            <strong>vs</strong>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Image
                src="/images/png/person_image.png"
                alt="person_image"
                style={{
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  margin: "10px",
                }}
              />
              <Typography variant="subtitle2">Person 3</Typography>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Start Game</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CreateRoomDialog;
