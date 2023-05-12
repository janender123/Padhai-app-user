// import node module libraries
import Link from "next/link";
import PropTypes from "prop-types";
import { Card, Image } from "react-bootstrap";

const UpcomingClassesCard = ({ item }) => {
  return (
    <Card className="shadow-lg mb-1">
      <Card.Body
        className="p-2 p-md-2 mt-0 text-center"
        style={{ height: "400px" }}
      >
        <Image src={item.image} alt="" style={{ width: "100%" }} />
        <div className="p-md-4">
          <div className={`mt-0 text-start border-top-0`}>
            <Link href="/marketing/courses/course-single#">
              <h3 className="text-dark mb-0">{item.name}</h3>
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
UpcomingClassesCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default UpcomingClassesCard;
