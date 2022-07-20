import { Container, Row, Col } from "react-bootstrap";

import image from './contact.jpeg'

import "./contact.scss";

export default function Contact() {

  return (
    <section>
      <div className="contact">
        <div className='img-container' style={{backgroundImage: 'url(' + image + ')'}}>
          <div className='shape'>
            <img className='svg' src='/images/paper.svg' alt='paper shape' />
          </div>
          <div className='background'>
            <div className='overlay'></div>
          </div>
          <div className='inner'>
            <div className='text'>
              <h3>Let's work together!</h3>
            </div>
            <div className='button'>
              <button className='white-fill-bg'>Make an Enquiry</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
