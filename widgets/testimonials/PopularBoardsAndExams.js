// import node module libraries
import PropTypes from "prop-types";
import { Card, Image } from "react-bootstrap";

const PopularBoardsAndExams = ({ item }) => {
  return (
    <Card className="shadow-lg mb-4">
      <Card.Body className="p-2 p-md-2 text-center">
        <Image src={item.image} alt="" width="100%!important" />
        <i className="mdi mdi-48px mdi-format-quote-open text-light-info lh-1"></i>
        <div className="p-md-4">
          <div className={`mt-4 text-center border-top-0`}>
            <h1 className="text-dark mb-0">{item.name}</h1>
          </div>
          <p className="lead text-dark mt-3">{item.content}</p>
        </div>
      </Card.Body>
    </Card>
  );
};

// Typechecking With PropTypes
PopularBoardsAndExams.propTypes = {
  item: PropTypes.object.isRequired,
};

export default PopularBoardsAndExams;
