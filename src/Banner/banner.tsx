import { Col, Container, Row } from "react-bootstrap";
import { Facebook, Twitter, Instagram, Linkedin, Github  } from 'react-bootstrap-icons'

import './banner.scss'

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-row ms-md-5">
        <Container>
          <Row>
            <Col md='4' className="content">
              <div className="name-wrap">
                <h3>
                  <span>I am</span>
                  &nbsp; Hamza
                </h3>
              </div>
              <div className="job-wrap">
                <span className="job">Software Engineer</span>
              </div>
              <div className="job-wrap sociallo">
                <span className="job">
                  <ul className="social">
                    <li>
                      <a href="https://www.facebook.com/iamhamzawan/"><Facebook /></a>
                    </li>
                    <li>
                      <a href="https://twitter.com/iamhamzawan"><Twitter /></a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/iamhamzaamir/"><Instagram /></a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/in/iamhamzaawan/"><Linkedin /></a>
                    </li>
                    <li>
                      <a href="https://github.com/iamhamzaawan"><Github /></a>
                    </li>
                  </ul>
                </span>
              </div>
            </Col>
            <Col md='8'>
              <div className="background">
                <div className="banner-img"></div>
                {/* <img src="/images/banner/bg.png" alt="banner-img" className="banner-image" /> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
