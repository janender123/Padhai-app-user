// import node module libraries
import { useState } from "react";
import { Col, Row, Container, Image, Card } from "react-bootstrap";
import Link from "next/link";

// import widget/custom components
import { SectionHeadingDarkCenter } from "widgets";

// import data files
import ClassesBySubjectsData from "data/landing-sass/ClassesBySubjectsData";

const ClassesBySubjects = () => {
  const description = `Learn with Video Classes`;
  return (
    <section className="py-lg-14 py-8 bg-gray-200">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={12} xs={12}>
            <SectionHeadingDarkCenter
              title="Classes By Subjects"
              description={description}
              dark={false}
            />
          </Col>
        </Row>
        <Row>
          {ClassesBySubjectsData.map((item, index) => {
            const [hoverIndex, setHoverIndex] = useState(null);

            const handleMouseEnter = (index) => {
              setHoverIndex(index);
            };

            const handleMouseLeave = () => {
              setHoverIndex(null);
            };

            return (
              <Col
                xl={2}
                lg={2}
                md={4}
                xs={6}
                sm={6}
                className="p-2"
                key={index}
              >
                <Link href="/course/classes-by-subject">
                  <Card
                    className="h-100"
                    style={{
                      border:
                        hoverIndex === index
                          ? "2px solid #3c65c4"
                          : "2px solid transparent",
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                    onBlur={handleMouseLeave}
                  >
                    {/* card body  */}
                    <Card.Body>
                      <Image
                        src={item.applogo}
                        alt=""
                        className="icon-lg mb-3"
                      />
                      <h3>{item.appname}</h3>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
        <Row>
          {/* button  */}
          <Col xs={12} className="text-center mt-8">
            <Link href="#" className="btn btn-primary">
              View All Classes
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default ClassesBySubjects;
