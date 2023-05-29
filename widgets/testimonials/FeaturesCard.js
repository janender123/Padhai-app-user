// import node module libraries
import PropTypes from "prop-types";
import { Card, Image } from "react-bootstrap";

const FeaturesCard = ({ item }) => {
  return (
    <Card className="shadow-lg mb-4">
      <Card.Body
        className="p-2 p-md-2 mt-5 text-center"
        style={{
          height: "500px",
          "@media (max-width: 600px)": {
            height: "auto",
          },
        }}
      >
        <div className="d-flex flex-column align-items-center">
          <Image src={item.image} alt="" height="100px" className="mb-3" />
          <i className="mdi mdi-48px mdi-format-quote-open text-light-info lh-1"></i>
          <div className="p-md-4">
            <div className="mt-4 text-start border-top-0">
              <h1 className="text-dark mb-0">{item.name}</h1>
            </div>
            <p className="lead text-start text-dark mt-3">{item.content}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

// Typechecking With PropTypes
FeaturesCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeaturesCard;
