// import node module libraries
import Link from "next/link";
import PropTypes from "prop-types";
import { Button, Card, Image } from "react-bootstrap";

const LiveContestsCard = ({ item }) => {
  return (
    <Card className="shadow-lg m-2">
      <Card.Body
        className="p-2 p-md-2 mt-0 text-center"
        style={{ height: "auto" }}
      >
        <Image
          src={item.image}
          alt=""
          style={{ width: "100%", height: "160px" }}
        />
        <div className={`m-3 mt-0 text-start border-top-0`}>
          <Link href="/marketing/courses/course-single#">
            <h3 className="text-dark mt-2 mb-0">{item.name}</h3>
          </Link>
        </div>
        <p className="text-start m-3" style={{ whiteSpace: "pre-wrap" }}>
          {item.details}
        </p>
        <div
          className="p-md-4"
          style={{
            display: "flex",
            margin: "6px",
            position: "relative",
            width: "200px",
            height: "130px",
            border: "2px solid grey",
          }}
        >
          <div
            style={{ position: "absolute", top: 0, left: 0, padding: "5px" }}
          >
            <div>Entry Fees</div>
            <div>{item.efees}</div>
          </div>
          <div
            style={{ position: "absolute", top: 0, right: 0, padding: "5px" }}
          >
            <div>Ends On</div>
            <div>{item.endson}</div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              padding: "5px",
            }}
          >
            <div>Players</div>
            <div>{item.players}</div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              padding: "5px",
            }}
          >
            <Link href="/marketing/student/QuizZonePage">
              <Button className="text-light mb-0">Play</Button>
            </Link>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

// Typechecking With PropTypes
LiveContestsCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default LiveContestsCard;
