import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import styles from "../styles/Home.module.css";

const CoreValues = () => {
  return (
    <section id="core-values" className={styles.corevalues}>
      <Container>
        <div className={styles.corevhead}>
          <h2 className="text-center">Core Values</h2>
          <p className="text-center corevalues">
            I am Dr. HAN (Hannah Anselm), I believe in six core values that
            drive everything I do.
          </p>
        </div>
        <Row>
          <Col md={4}>
            <Card className="m-3">
              <CardBody>
                <h4 className="card-title">Integrity</h4>
                <p className="card-text">
                  I always act with honesty and ethical behavior, striving to
                  maintain the highest standards of professional conduct.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="m-3">
              <CardBody>
                <h4 className="card-title">Objectivity</h4>
                <p className="card-text">
                  I approach every project with an impartial and unbiased mind,
                  seeking evidence-based solutions that are free from personal
                  bias or influence.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="m-3">
              <CardBody>
                <h4 className="card-title">Excellence</h4>
                <p className="card-text">
                  I am committed to delivering the highest quality results
                  through the use of strict methodologies, critical thinking,
                  and continuous improvement.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="m-3">
              <CardBody>
                <h4 className="card-title">Curiosity</h4>
                <p className="card-text">
                  I am driven by a strong desire to learn and discover new
                  knowledge, always seeking new ways to grow and innovate.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="m-3">
              <CardBody>
                <h4 className="card-title">Collaboration</h4>
                <p className="card-text">
                  I believe in working together with our clients, partners, and
                  colleagues, sharing knowledge and ideas to achieve common
                  goals.
                </p>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="m-3">
              <CardBody>
                <h4 className="card-title">Responsibility</h4>
                <p className="card-text">
                  I take responsibility for my actions and the impact of my
                  work, always striving to do what is right and make a positive
                  impact in the world.
                </p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CoreValues;
