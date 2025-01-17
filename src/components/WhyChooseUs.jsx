import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Unmatched Quality",
      description:
        "Our shoes are crafted with premium materials to ensure durability and style.",
    },
    {
      title: "Free Shipping Over $50",
      description:
        "Shop without the extra cost—your order ships free when you spend $50 or more.",
    },
    {
      title: "Hassle-Free Returns",
      description: "Not satisfied? No problem. Enjoy easy returns within 30 days.",
    },
    {
      title: "24/7 Customer Support",
      description: "We’re here for you anytime you need help, day or night.",
    },
  ];

  return (
    <Container className="my-5">
        {/* Top Content */}
      <div className="product-list-homepage text-center mb-5">
        <span className="Home-content">
          At KickStash, Responsibility Goes beyond Just Words.
        </span>
        <p className="mt-3">
          We are mindful of what we create and how it shapes the world around us.  
          With a focus on circularity and transparency, we're crafting a future  
          that's better than yesterday.
        </p>
      </div>
      <h2 className="text-center mb-4">Why Choose Us?</h2>
      <Row className="gy-4">
        {features.map((feature, index) => (
          <Col xs={12} md={6} lg={3} key={index}>
            <Card className="h-100 text-center">
              <Card.Body>
                <Card.Title className="fw-bold">{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
