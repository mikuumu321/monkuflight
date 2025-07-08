import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Container>
          <Row className="py-5 text-white">
            {/* Contact Us */}
            <Col md={4} sm={12} className="mb-4 mb-md-0">
              <h5 className="footer-title">Connect Us</h5>
              <p>ExpeditedHolidays Travels Private Limited</p>
              <p>30 N Gould St, STE R, Sheridan, WY 82801</p>
              <p><FaPhone className="me-2" /> <strong>+1-800-809-5287</strong></p>
              <p><FaEnvelope className="me-2" /> <strong>bookings@airlinesreservationshelpdesk.com</strong></p>
            </Col>

            {/* Quick Links */}
            <Col md={4} sm={6} className="mb-4 mb-md-0">
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

            {/* Payment Methods */}
            <Col md={4} sm={6}>
              <h5 className="footer-title">More Information</h5>
              <p className="mb-2">Payment Methods</p>
              <div className="payment-icons d-flex flex-wrap gap-2">
                <img src="/visa.png" alt="Visa" />
                <img src="/mastercard.png" alt="MasterCard" />
                <img src="/amex.png" alt="Amex" />
                <img src="/discover.png" alt="Discover" />
                <img src="/paypal.png" alt="Paypal" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom text-center text-white py-3">
        <Container>
          <p className="mb-2 disclaimer">
            Disclaimer: We at reservations.expeditedholidays.com are the resellers for all your travel needs.
            We work with consolidators and Third Party suppliers to get you a ticket that meets any budget, including taxes & fees!
          </p>
          <strong className="footer-phone">+1-800-809-5287</strong>
        </Container>
      </div>
    </footer>
  );
}

export default Footer;
