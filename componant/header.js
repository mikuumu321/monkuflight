import React from 'react';
import {
  Navbar, Nav, Container, Image
} from 'react-bootstrap';

function Header() {
  return (
    <Navbar expand="lg" className="site-header shadow-sm" sticky="top">
      <Container className="px-3 py-2">
        {/* Left: Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
          <img src="/images/1.jpg" alt="Logo" className="logo-img" />
          <div className="d-flex flex-column lh-sm">
            <span className="brand-name">
              <span className="expedited">Expedited</span>
              <span className="holidays">Holidays</span>
            </span>
            <span className="tagline">GLOBAL FLIGHT DEALS</span>
          </div>
        </Navbar.Brand>

        {/* Hamburger Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Center: Navigation */}
          <Nav className="mx-auto gap-lg-4 text-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/submit-form">About Us</Nav.Link>
            <Nav.Link href="#">Refund Policy</Nav.Link>
            <Nav.Link href="#">Contact Us</Nav.Link>
          </Nav>

          {/* Right: Expert Call */}
          <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0 justify-content-center justify-content-lg-end">
            <img src="/images/1.jpg" alt="Expert" className="expert-img" />
            <div className="text-start">
              <div className="expert-label">Talk to our Expert</div>
              <div className="expert-phone">+1-800-809-5287</div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
