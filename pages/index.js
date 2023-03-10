import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  FaLaptop,
  FaPencilAlt,
  FaCloud,
  FaUserEdit,
  FaPrescription,
  FaResearchgate,
  FaPenNib,
  FaBullhorn,
  FaLightbulb,
  FaDatabase,
} from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <Row>
            <Col className="order-2 order-md-1">
              <div className={styles.bannercta}>
                <h1>
                  Hi<span>,</span> <br /> I am <span>Oluwaseun H. Anselm</span>
                </h1>
                <p>
                  I am a complete complete blend of passionate researcher
                  <br /> and Climate Advocate
                </p>
                <br />
                <div className="mb-2 buttons">
                  <Button variant="primary" size="lg" className="btn-lg">
                    Get in touch <i className="bi bi-arrow-up-right-circle"></i>
                  </Button>{" "}
                  <Button
                    variant="outline-primary"
                    size="lg"
                    className="btn-lg"
                  >
                    Download Profile <i class="bi bi-arrow-down-circle"></i>
                  </Button>
                </div>
              </div>
            </Col>
            <Col className="order-1 order-md-2">
              <Image
                src={"/images/darl-img3.png"}
                width={200}
                height={400}
                className={styles.bannerimg}
                alt="wifey's image"
              />
            </Col>
          </Row>
        </Container>
      </header>
      {/* <section className={styles.section1}>
        <Container>
          <Row className="pt-5">
            <Col className="col-lg-3 col-md-6 col-12">
              <div className="text-center d-grid">
                <i class="bi bi-award-fill"></i>
                <h3>02</h3>

                <h3>Awards</h3>
              </div>
            </Col>
            <Col>
              <div className="text-center d-grid">
                <i class="bi bi-award-fill"></i>
                <h3>50+</h3>

                <h3>Published Papers</h3>
              </div>
            </Col>
            <Col>
              <div className="text-center d-grid">
                <i class="bi bi-award-fill"></i>
                <h3>10+</h3>
                <h3>Experience</h3>
              </div>
            </Col>
            <Col>
              <div className="text-center d-grid">
                <i class="bi bi-award-fill"></i>
                <h3>100+</h3>

                <h3>Projects</h3>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      <section className="p-3 section1">
        <Container>
          <Row className="text-center">
            <Col md={3} sm={6} className="mb-3">
              <i className="bi bi-award"></i>
              <h3>
                02 <br />
                Awards
              </h3>
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <i className="bi bi-book"></i>
              <h3>
                50+ <br /> Papers
              </h3>
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <i className="bi bi-briefcase"></i>
              <h3>
                10+ <br /> Experience
              </h3>
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <i className="bi bi-person-fill-gear"></i>
              <h3>
                100+
                <br /> Research
              </h3>
            </Col>
          </Row>
        </Container>
      </section>

      <section className={styles.section3}>
        <Container>
          <Row>
            <Col sm={6} xs={12}>
              <img
                src="/images/darl-img4.png"
                alt="about me"
                className="img-fluid mr-auto d-block"
              />
            </Col>
            <Col sm={6} xs={12} className={styles.secondcol}>
              <div>
                <h5>ABOUT ME</h5>
                <h2>
                  Hi, I can help with your <br />
                  Next project.{" "}
                </h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer suscipit est vel nibh aliquam, a ullamcorper tortor
                  interdum.
                </p>
                <p>
                  Curabitur euismod lacus ut leo molestie, sit amet sagittis
                  nunc convallis. Aliquam ut eros eget quam tincidunt bibendum.
                </p>
                <button className="btn btn-primary mb-5" variant="primary">
                  Learn More
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <Container>
          <Row className="mt-5">
            <Col>
              <h3>My Skills</h3>
              <h1 className="text-left py-4">My Skills and Expertise</h1>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <FaUserEdit size={50} color="#007bff" />
              <h3>Business proposal</h3>
              <p>
                I have extensive experience creating winning business proposals
                for individual and corporate clients across a variety of
                industries. With a strong understanding of the sales process.
              </p>
            </Col>
            <Col md={3}>
              <FaLightbulb size={50} color="#007bff" />
              <h3>Brand Set Up</h3>
              <p>
                My skills in market research and brand strategy enable me to
                develop and implement effective branding campaigns that resonate
                with target audiences and drive results.
              </p>
            </Col>
            <Col md={3}>
              <FaPenNib size={50} color="#007bff" />
              <h3>Research</h3>
              <p>
                Whether it is market / academic research, customer surveys or
                data analysis, I am confident in my ability to deliver accurate
                and actionable results that drive business success.
              </p>
            </Col>
            <Col md={3}>
              <FaDatabase size={50} color="#007bff" />
              <h3>Data Analysis</h3>
              <p>
                I am a data-driven individual with a strong background in data
                analysis. I have experience working with large datasets and
                using various tools and techniques to extract meaningful
                insights from data.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
