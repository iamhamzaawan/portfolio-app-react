import { Container, Row, Col } from "react-bootstrap";

import "./portfolio.scss";

export default function Portfolio() {

  return (
    <section>
      <div className="portfolio">
        <Container>
          <div className="section_title">
            <span>Portfolio</span>
            <h3>Websites</h3>
          </div>
          <div className="portfolio_list">
            <Row>
              <Col md='4' className="portfolio_list_items">
               <a href="#">
                <img src="/images/gallery/workplace.jpg" />
               </a>
              </Col>

              <Col md='4' className="portfolio_list_items">
               <a href="#">
                <img src="/images/gallery/lahanur.jpg" />
               </a>
              </Col>

              <Col md='4' className="portfolio_list_items">
               <a href="#">
                <img src="/images/gallery/cp.jpg" />
               </a>
              </Col>
            </Row>
            <Row>
              <Col md='4' className="portfolio_list_items">
               <a href="#">
                <img src="/images/gallery/cardano-marketplace.jpg" />
               </a>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
}
