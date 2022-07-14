import { Container } from "react-bootstrap";
import { Facebook, Twitter, Instagram, Behance, Discord  } from 'react-bootstrap-icons'

import './banner.scss'

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-row ms-5">
        <Container>
          <div className="content">
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
                    <a><Facebook /></a>
                  </li>
                  <li>
                    <a><Twitter /></a>
                  </li>
                  <li>
                    <a><Instagram /></a>
                  </li>
                  <li>
                    <a><Behance /></a>
                  </li>
                  <li>
                    <a><Discord /></a>
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </Container>
        <div className="background">
          <div className="banner-img"></div>
          {/* <img src="/images/banner/bg.png" alt="banner-img" className="banner-image" /> */}
        </div>
      </div>
    </div>
  )
}
