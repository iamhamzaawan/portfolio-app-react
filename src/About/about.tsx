import { Container, Row, Col } from "react-bootstrap";

import "./about.scss";

export default function About() {

  return (
    <section>
      <div className="about">
        <Container>
          <Row className="about_inner">
            <Col className="left">
              <div className="about_image_parent">
                {/* <div className="about_image">Hello</div> */}
                <img src="/images/dp.jpg" className="about_image" />
              </div>
            </Col>
            <Col className="right">
              <div className="section_title">
                <span>About Me</span>
                <h3>Full stack Web Developer | DevOps Engineer</h3>
              </div>
              <div className="about_text">
                <p>
                  I am a Full Stack Web Developer having 2+ years of experience
                  and also been working as a Blockchain Developer most recently for 6 months now. 
                  I have got familarized with multiple tools and technologies through out my tenure, 
                  and aquired the skills and knowledge necessary to make your project a success.
                  I enjoy every step of the design process, from discussion and collaboration.
                </p>
              </div>
              <div className="cv_btn">
                <a href="#">Download CV</a>
              </div>
            </Col>
          </Row>

        </Container>
      </div>
    </section>
  );
}
