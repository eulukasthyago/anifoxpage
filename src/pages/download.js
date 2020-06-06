import React from "react";
import Header from "../layout/header";
import { Container, Row, Col, Image, Carousel, Badge } from "react-bootstrap";

const DownloadApp = () => (
  <>
    <Header />
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          <Carousel>
            <Carousel.Item>
              <Image src="https://i.imgur.com/TrhQeLm.jpg" height="500px" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src="https://i.imgur.com/JNdW6Wr.jpg" height="500px" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src="https://i.imgur.com/ER1UzQe.jpg" height="500px" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src="https://i.imgur.com/ubf7Ak2.jpg" height="500px" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>
            <span className="h1">Anifox app 1.0 </span>
            <Badge variant="warning" className="text-uppercase">
              Beta
            </Badge>
          </span>
          <p>
            Olá, estamos desenvolvendo um aplicativo de streaming de animes, o
            aplicativo ainda está em desenvolvimento, ele ainda esta em sua
            versão beta.
          </p>
          <p>Sejá um dos primeiro a testar nosso aplicativo</p>
        </Col>
      </Row>
    </Container>
  </>
);

export default DownloadApp;
