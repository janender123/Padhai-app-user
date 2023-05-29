import React, { useState } from "react";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Grid,
  Typography,
  TextField,
  useMediaQuery,
  useTheme,
  DialogActions,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { Button } from "react-bootstrap";
import { IconButton } from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

dayjs.extend(localizedFormat);

const useStyles = makeStyles({
  timeSlot: {
    border: "1px solid black",
    borderRadius: "4px",
    padding: "8px",
    margin: "4px",
    cursor: "pointer",
  },
  selectedTimeSlot: {
    backgroundColor: "#3c65c4",
    color: "white",
  },
  dialog: {
    minWidth: "50%",
  },
});

const TimeSlot = ({ time, selected, onClick }) => {
  const classes = useStyles();

  const handleClick = () => {
    onClick(time);
  };

  return (
    <div
      className={`${classes.timeSlot} ${
        selected ? classes.selectedTimeSlot : ""
      }`}
      onClick={handleClick}
    >
      {time}
    </div>
  );
};

const CalendarDialog = () => {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };

  const handleTimeSlotClick = (time) => {
    setSelectedTimeSlot(time);
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };
  const renderTimeSlots = () => {
    const timeSlots = [];

    for (let hour = 6; hour <= 23; hour++) {
      for (let minute = 0; minute < 60; minute += 60) {
        const startTime = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        const endTime = `${hour.toString().padStart(2, "0")}:${(minute + 59)
          .toString()
          .padStart(2, "0")}`;
        const time = `${startTime} - ${endTime}`;
        const isSelected = time === selectedTimeSlot;

        timeSlots.push(
          <TimeSlot
            key={time}
            time={time}
            selected={isSelected}
            onClick={handleTimeSlotClick}
          />
        );
      }
    }

    return timeSlots;
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Button onClick={handleOpenDialog} className="mt-4">
          Next
        </Button>
        <Dialog
          open={dialogOpen}
          onClose={handleCloseDialog}
          classes={{ paper: classes.dialog }}
        >
          <DialogTitle>
            <h1>1:1 Session</h1>
            <h5>Choose your preferred date and slot for 1:1 session</h5>
            <IconButton
              aria-label="close"
              onClick={handleCloseDialog}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Grid container spacing={isMobile ? 2 : 6}>
              <Grid item xs={12} sm={6}>
                <DateCalendar
                  value={selectedDate}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
                  disablePast
                  cancelText=""
                  okText=""
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                {selectedDate && (
                  <>
                    <Typography variant="h5" gutterBottom ml={-3}>
                      Available slots on {selectedDate.format("LL")}
                    </Typography>
                    <Grid
                      container
                      spacing={isMobile ? 2 : 4}
                      mt={isMobile ? 1 : 3}
                    >
                      {renderTimeSlots()}
                    </Grid>
                  </>
                )}
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions style={{ justifyContent: "center", margin: "10px" }}>
            <Button variant="outline-primary">Enroll Now</Button>
            <Button variant="outline-primary" onClick={handleCloseDialog}>
              {" "}
              Discard{" "}
            </Button>
          </DialogActions>
        </Dialog>
      </LocalizationProvider>
    </>
  );
};

export default CalendarDialog;
