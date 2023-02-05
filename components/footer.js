import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Footer.module.css";

const Footer = () => (
  <>
    <footer className={styles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5 className="text-uppercase">Core values</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase">Links</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="col-md-4">
            <h5 className="text-uppercase">Favorite</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </footer>

    <section className={styles.finalfooter}>
      <Container>
        <Row className="col text-center d-flex justify-content-center">
          <Col md={6} sm={12} xs={12}>
            <p className="text-muted d-block">
              &copy; {new Date().getFullYear()} Copyright: Oluwaseun Anselm
            </p>
          </Col>
          <Col md={6} sm={12} xs={12}>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Privacy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Contact</a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  </>
);

export default Footer;
