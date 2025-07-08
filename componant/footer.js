import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
function Footer() {

    return (
        <footer className="footer-section">
            {/* Top Section */}
            <div className="footer-top">
                <Container>
                    <Row className="py-5 text-white">
                        {/* Connect Us */}
                        <Col md={4} className="mb-4 mb-md-0">
                            <h5 className="footer-title">Connect Us</h5>
                            <p className="footer-text">ExpeditedHolidays Travels Private Limited</p>
                            <p className="footer-text">30 N Gould St, STE R, Sheridan, WY 82801</p>
                            <p className="footer-contact">
                                <FaPhone className="me-2" />
                                <strong>+1-800-809-5287</strong>
                            </p>
                            <p className="footer-contact">
                                <FaEnvelope className="me-2" />
                                <strong>bookings@airlinesreservationshelpdesk.com</strong>
                            </p>
                        </Col>

                        {/* Quick Links */}
                        <Col md={4} className="mb-4 mb-md-0">
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
                        <Col md={4}>
                            <h5 className="footer-title">More Information</h5>
                            <p className="footer-text">Payment Methods</p>
                            <div className="payment-icons d-flex flex-wrap gap-2">
                                <img src="/images/p.jpg" alt="Visa" />
                                <img src="/images/1.jpg" alt="MasterCard" />
                                <img src="/images/1.jpg" alt="Amex" />
                                <img src="/images/1.jpg" alt="Discover" />
                                <img src="/images/1.jpg" alt="PayPal" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Bottom Section */}
            <div className="footer-bottom text-center text-white py-3">
                <Container>
                    <p className="footer-disclaimer mb-1">
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
