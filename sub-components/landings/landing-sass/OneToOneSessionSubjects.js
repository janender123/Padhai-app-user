// import node module libraries
import { useState } from "react";
import { Col, Row, Container, Image, Card } from "react-bootstrap";
import Link from "next/link";

// import widget/custom components
import { SectionHeadingDarkCenter } from "widgets";

// import data files
import OneToOneSubjectsData from "data/landing-sass/OneToOneSubjectsData";
import DialogBoxForOneToOneSession from "widgets/section-headings/DialogBoxForOneToOneSession";

const OneToOneSessionSubjects = () => {
  const [selectedCards, setSelectedCards] = useState([]);

  const handleCardClick = (index) => {
    const isSelected = selectedCards.includes(index);

    if (isSelected) {
      setSelectedCards(
        selectedCards.filter((cardIndex) => cardIndex !== index)
      );
    } else {
      setSelectedCards([...selectedCards, index]);
    }
  };
  return (
    <section className="py-lg-14 py-8 bg-gray-200">
      <Container>
        <Row className="justify-content-center">
          <Col lg={12} md={12} xs={12}>
            <SectionHeadingDarkCenter
              title="Start with the subject you love or find the most difficult"
              dark={false}
            />
          </Col>
        </Row>
        <Row>
          {OneToOneSubjectsData.map((item, index) => {
            const isSelected = selectedCards.includes(index);
            const selectedCardStyles = isSelected
              ? { border: "2px solid #3c65c4" }
              : null;

            return (
              <Col xl={2} lg={2} md={4} xs={6} sm={6} className="p-2" key={index}>
                <Card
                  className="h-100"
                  style={selectedCardStyles}
                  onClick={() => handleCardClick(index)}
                >
                  {/* card body */}
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
          <DialogBoxForOneToOneSession  />
        </Row>
      </Container>
    </section>
  );
};
export default OneToOneSessionSubjects;
