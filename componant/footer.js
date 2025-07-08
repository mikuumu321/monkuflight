import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Top Section */}
      <div className="footer-top">
        <Container>
          <Row className="py-5 text-white">
            {/* Column 1 - Contact */}
            <Col md={4}>
              <h5 className="footer-title">Connect Us</h5>
              <p>ExpeditedHolidays Travels Private Limited</p>
              <p>30 N Gould St, STE R, Sheridan, WY 82801</p>
              <p className="footer-contact">
                <FaPhone className="me-2" />
                <strong>+1-800-809-5287</strong>
              </p>
              <p className="footer-contact">
                <FaEnvelope className="me-2" />
                <strong>bookings@airlinesreservationshelpdesk.com</strong>
              </p>
            </Col>

            {/* Column 2 - Links */}
            <Col md={4}>
              <h5 className="footer-title">Quick Links</h5>
              <ul className="footer-links list-unstyled">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Copyright</a></li>
                <li><a href="#">Refund Policy</a></li>
              </ul>
            </Col>

            {/* Column 3 - Payment */}
            <Col md={4}>
              <h5 className="footer-title">More Information</h5>
              <p>Payment Methods</p>
              <div className="payment-icons d-flex gap-2">
                <img src="/images/1.jpg" alt="Visa" />
                <img src="/images/1.jpg" alt="MasterCard" />
                <img src="/images/1.jpg" alt="Amex" />
                <img src="/images/1.jpg" alt="Discover" />
                <img src="/images/1.jpg" alt="PayPal" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom Disclaimer */}
      <div className="footer-disclaimer text-center">
        <Container>
          <p>
            Disclaimer: We at reservations.expeditedholidays.com are the resellers for all your travel needs.
            We work with consolidators and Third Party suppliers to get you a ticket that meets any budget, including taxes & fees!
          </p>
        </Container>
      </div>

      {/* TFN Bottom White Row */}
      <div className="footer-tfn text-center">
        <strong className="footer-phone">+1-800-809-5287</strong>
      </div>
    </footer>
  );
};

export default Footer;
