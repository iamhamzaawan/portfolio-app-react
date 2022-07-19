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
              <div className="col-4 portfolio_list_items">
               <a href="#">
                <img src="/images/gallery/workplace.jpg" />
               </a>
              </div>

              <div className="col-4 portfolio_list_items">
               <a href="#">
                <img src="/images/gallery/lahanur.jpg" />
               </a>
              </div>

              <div className="col-4 portfolio_list_items">
               <a href="#">
                <img src="/images/gallery/cp.jpg" />
               </a>
              </div>
            </Row>
            <Row>
              <div className="col-4 portfolio_list_items">
               <a href="#">
                <img src="/images/gallery/cardano-marketplace.jpg" />
               </a>
              </div>
            </Row>
          </div>
        </Container>
      </div>
    </section>
  );
}
