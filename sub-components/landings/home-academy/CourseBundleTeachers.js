// import node module libraries
import { Col, Row, Container } from "react-bootstrap";
import Link from "next/link";

// import widget/custom components
import { Ratings, TestimonialsSlider3 } from "widgets";
import CourseBundleTeachersSlider from "widgets/testimonials/CourseBundleTeachersSlider";

const CourseBundleTeachers = () => {
  return (
    <section
      className="bg-white py-2"
      style={{
        borderRadius: "20px",
      }}
    >
      <Container className="container">
        <Row>
          <Col md={12}>
            {/*  Testimonial slider */}
            <CourseBundleTeachersSlider />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CourseBundleTeachers;
