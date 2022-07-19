import { Container, Row, Col } from "react-bootstrap";

import "./footer.scss";

export default function Footer() {

  return (
    <footer>
      <div className="copyright">
        <Container>
          <p>© 2022 by Hamza Awan. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
}
