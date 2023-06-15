// CourseBundleTeacherCard ( added with v2.0.0 )

// import node module libraries
import PropTypes from "prop-types";
import { Card, Image } from "react-bootstrap";


const CourseBundleTeacherCard = ({ item }) => {
  return (
    <Card>
      <Card.Body
        style={{
          backgroundColor: "#3c65c4",
          borderRadius: "20px",
          height: "150px",
        }}
        className="text-center py-5 px-3 d-flex align-items-center"
      >
        {/* img */}
        <div className="col-5">
          <Image
            src={item.image}
            alt="instrctor"
            className="avatar avatar-lg rounded-circle d-inline"
            style={{
              height: "110px",
              width: "auto",
            }}
          />
        </div>
        <div className="col-6">
          <h3 className="mb-0 h4 text-start" style={{ color: "white" }}>
            {item.name}
          </h3>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Image
              src="/images/png/ProfessionIcon.png"
              alt="profession-icon"
              style={{
                backgroundColor: "#3c65c4",
                height: "20px",
                width: "20px",
              }}
              className="avatar avatar-lg rounded-circle"
            />
            <span
              className="text-start "
              style={{ fontSize: "10px", marginLeft: "5px", color: "white" }}
            >
              {item.designation}
            </span>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "5px" }}
          >
            <Image
              src="/images/png/LanguageIcon.png"
              alt="language-icon"
              style={{
                backgroundColor: "#3c65c4",
                height: "20px",
                width: "20px",
              }}
              className="avatar avatar-lg rounded-circle"
            />{" "}
            <span
              className="text-start "
              style={{ fontSize: "10px", marginLeft: "5px", color: "white" }}
            >
              {item.language}
            </span>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

// Typechecking With PropTypes
CourseBundleTeacherCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CourseBundleTeacherCard;
