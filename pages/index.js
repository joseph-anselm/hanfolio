import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Container>
          <Row>
            <Col>
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
            <Col>
              <Image
                src={"/images/darl-img.png"}
                width={200}
                height={400}
                className={styles.bannerimg}
              />
            </Col>
          </Row>
        </Container>
      </header>
      <section className={styles.section1}></section>
    </>
  );
}
