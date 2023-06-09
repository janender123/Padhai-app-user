import { Box } from "@mui/material";
import Link from "next/link";
import PropTypes from "prop-types";
import { Card, Image } from "react-bootstrap";

const UpcomingClassesCard = ({ item }) => {
  return (
    <Card className="shadow-lg mb-1">
      <Link
        href="#"
        // href="/marketing/courses/course-single#"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <Card.Body
          className="p-2 p-md-2 mt-0 text-center"
          style={{ minHeight: "470px" }}
        >
          <Image src={item.image} alt="" style={{ width: "100%" }} />
          <div className="p-md-4">
            <div style={{ display: "flex" }}>
              <div
                style={{
                  borderRadius: "4px",
                  marginRight: "10px",
                  textTransform: "uppercase",
                  fontSize: "15px",
                  paddingTop: "2px",
                  paddingBottom: "2px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                  backgroundColor: "#0029FF17",
                }}
              >
                <h4
                  style={{
                    color: "#0066FF",
                    marginTop: "0",
                    marginBottom: "0",
                  }}
                >
                  {item.subject}
                </h4>
              </div>
              <div
                style={{
                  border: "1px solid grey",
                  borderRadius: "4px",
                  fontWeight: "800",
                  padding: "2px",
                }}
              >
                {item.language}
              </div>
            </div>
            <div
              className="w-100 mt-2 text-start border-top-0 d-flex justify-content-between"
              style={{ flexWrap: "wrap" }}
            >
              <div
                style={{
                  width: "49%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <h2
                  className="text-dark mb-0"
                  style={{
                    wordWrap: "break-word",
                    maxWidth: "100%",
                    fontWeight: "800",
                  }}
                >
                  {item.title}
                </h2>
                <h5 className="text-dark mb-0" style={{ maxWidth: "100%" }}>
                  {item.subtitle}
                </h5>
                <div>
                  <p className="text-start m-0">{item.instructor}</p>
                </div>
              </div>

              <div className="w-47">
                <span className="fw-bold" style={{ fontSize: "large" }}>
                  Starts on <br />{" "}
                </span>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                  }}
                >
                  <Image
                    src="/images/icons/icon_calendar.png"
                    alt="calendar"
                    style={{ marginRight: "5px" }}
                  />
                  <p className="text-start m-0" style={{ fontSize: "12px" }}>
                    {item.time}
                  </p>
                </div>
              </div>
            </div>
            <div
              className="w-100 mt-3 text-start border-top-0 d-flex justify-content-between"
              style={{ flexWrap: "wrap" }}
            >
              <div
                style={{
                  width: "49%",
                  marginTop: "auto",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/icons/eye-icon.png"
                  alt="calendar"
                  style={{ marginRight: "5px" }}
                />
                <p className="text-start m-0" style={{ fontSize: "12px" }}>
                  287 viewing
                </p>
              </div>
              <div
                className="w-47"
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Image
                  src="/images/icons/camera-icon.png"
                  alt="camera"
                  style={{ marginRight: "5px" }}
                />
                <p className="text-start m-0" style={{ fontSize: "12px" }}>
                  Recorded session
                </p>
              </div>
            </div>
          </div>
        </Card.Body>
      </Link>
    </Card>
  );
};

// Typechecking With PropTypes
UpcomingClassesCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default UpcomingClassesCard;
