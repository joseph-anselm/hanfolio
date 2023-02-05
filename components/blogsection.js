import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

const BlogSection = () => {
  return (
    <section className="blog my-5">
      <Container>
        <h2 className="section-title text-center mb-5">My Recent Posts</h2>
        <Row>
          <Col md={3}>
            <Card>
              <CardImg top src={"/images/integrity2.jpg"} alt="Blog Post 1" />
              <CardBody>
                <CardTitle>Blog Post 1</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer malesuada est non congue tempor...
                </CardText>
                <Button color="primary" className="mt-3">
                  Read More
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top src={"/images/integrity2.jpg"} alt="Blog Post 2" />
              <CardBody>
                <CardTitle>Blog Post 2</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer malesuada est non congue tempor...
                </CardText>
                <Button color="primary" className="mt-3">
                  Read More
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top src={"/images/integrity2.jpg"} alt="Blog Post 3" />
              <CardBody>
                <CardTitle>Blog Post 3</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer malesuada est non congue tempor...
                </CardText>
                <Button color="primary" className="mt-3">
                  Read More
                </Button>
              </CardBody>
            </Card>
          </Col>
          <Col md={3}>
            <Card>
              <CardImg top src={"/images/integrity2.jpg"} alt="Blog Post 4" />
              <CardBody>
                <CardTitle>Blog Post 4</CardTitle>
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer malesuada est non congue tempor...
                </CardText>
                <Button color="primary" className="mt-3">
                  Read More
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
