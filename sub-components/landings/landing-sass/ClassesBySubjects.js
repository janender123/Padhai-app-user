// import node module libraries
import { Col, Row, Container, Image, Card } from "react-bootstrap";
import Link from "next/link";

// import widget/custom components
import { SectionHeadingDarkCenter } from "widgets";

// import data files
import ClassesBySubjectsData from "data/landing-sass/ClassesBySubjectsData";

const ClassesBySubjects = () => {
  const title = "Integrate with the Apps";
  const subtitle = "App Integration Sections";
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
            return (
              <Col xl={2} lg={2} md={4} xs={6} sm={6}
              className="p-2" 
                key={index}
              >
                <Card className="h-100">
                  {/* card body  */}
                  <Card.Body>
                    <Image src={item.applogo} alt="" className="icon-lg mb-3" />
                    <h3>{item.appname}</h3>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
        <Row>
          {/* button  */}
          <Col xs={12} className="text-center mt-8">
            <Link href="#" className="btn btn-primary">
              View All Apps
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default ClassesBySubjects;
