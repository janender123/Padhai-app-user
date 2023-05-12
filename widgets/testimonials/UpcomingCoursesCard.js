// import node module libraries
import { Box } from "@mui/material";
import Link from "next/link";
import PropTypes from "prop-types";
import { Card, Image } from "react-bootstrap";

const UpcomingCoursesCard = ({ item }) => {
  return (
    <Card className="shadow-lg mb-1">
      <Card.Body
        className="p-2 p-md-2 mt-0 text-center"
        style={{ minHeight: "470px" }}
      >
        <Image src={item.image} alt="" style={{ width: "100%" }} />
        <div className="p-md-4">
          <div style={{ display: "flex" }}>
            <div
              style={{
                border: "1px solid grey",
                fontWeight: '800',
                padding: '2px',
              }}
            >
              {item.language}
            </div>
            <div>
              <h4
                style={{
                  marginLeft: "10px",
                  textTransform: "uppercase",
                  fontSize: "15px",
                  color: "#3c65c4",
                  paddingTop: "4px",
                }}
              >
                {item.subject}
              </h4>
            </div>
          </div>
          <div className={`mt-0 text-start border-top-0`}>
            <Link href="/marketing/courses/course-single#">
              <h3 className="text-dark mb-0 mt-2">{item.name}</h3>
            </Link>
          </div>
          <p className="text-start mt-3">{item.instructor}</p>
          <p className="text-start m-0 ">{item.time}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

// Typechecking With PropTypes
UpcomingCoursesCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default UpcomingCoursesCard;
