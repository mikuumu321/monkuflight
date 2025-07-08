import React, { useState } from 'react';
import {
  Form, Button, Tab, Nav, Row, Col, ListGroup
} from 'react-bootstrap';
import {
  FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt,
  FaUser, FaChair, FaExchangeAlt, FaMapMarkerAlt
} from 'react-icons/fa';
import airportData from '../utils/airportdata.json';

function Flightform2() {
  const [tripType, setTripType] = useState('round');
  const [formData, setFormData] = useState({
    from: '', to: '', dep: '', arrival: '',
    name: '', email: '', phone: '',
    travelers: '1 TRAVELER',
    cabin: 'Economy'
  });

  const [queryFrom, setQueryFrom] = useState('');
  const [queryTo, setQueryTo] = useState('');
  const [showFromList, setShowFromList] = useState(false);
  const [showToList, setShowToList] = useState(false);

  const handleSelect = (field, airport) => {
    const display = `${airport.airportName} - ${airport.airportCode}`;
    if (field === 'from') {
      setQueryFrom(display);
      setFormData(prev => ({ ...prev, from: display }));
      setShowFromList(false);
    } else {
      setQueryTo(display);
      setFormData(prev => ({ ...prev, to: display }));
      setShowToList(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const filteredFrom = airportData.filter(a =>
    [a.cityName, a.airportCode, a.airportName]
      .some(val => val.toLowerCase().includes(queryFrom.toLowerCase()))
  );

  const filteredTo = airportData.filter(a =>
    [a.cityName, a.airportCode, a.airportName]
      .some(val => val.toLowerCase().includes(queryTo.toLowerCase()))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Form:", formData);
  };

  return (
    <div className="flight-box">
      <Tab.Container activeKey={tripType} onSelect={(k) => setTripType(k)}>
        <Nav variant="tabs" className="trip-tabs">
          <Nav.Item><Nav.Link eventKey="round" className="trip-tab">ROUND TRIP</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link eventKey="one" className="trip-tab">ONE WAY</Nav.Link></Nav.Item>
        </Nav>

        <Form className="flight-form" onSubmit={handleSubmit}>
          <Row className="mb-2 align-items-center">
            <Col xs={5}>
              <div className="form-icon-group position-relative">
                <FaPlaneDeparture className="form-icon" />
                <Form.Control
                  placeholder="City or Airport"
                  name="from"
                  value={queryFrom}
                  onChange={(e) => {
                    setQueryFrom(e.target.value);
                    setShowFromList(true);
                  }}
                  onFocus={() => setShowFromList(true)}
                  onBlur={() => setTimeout(() => setShowFromList(false), 200)}
                />
                {showFromList && queryFrom && (
                  <ListGroup className="autocomplete-dropdown">
                    {filteredFrom.map((airport, idx) => (
                      <ListGroup.Item key={idx} className="autocomplete-item" onClick={() => handleSelect('from', airport)}>
                        <FaMapMarkerAlt className="location-icon" />
                        <div className="info-text">
                          <div className="airport-name">{airport.airportName}<span className="airport-code"> - {airport.airportCode}</span></div>
                          <div className="airport-city">{airport.cityName}, {airport.countryName}</div>
                        </div>
                      </ListGroup.Item>
                    ))}
                    {filteredFrom.length === 0 && <ListGroup.Item>No results</ListGroup.Item>}
                  </ListGroup>
                )}
              </div>
            </Col>

            <Col xs={2} className="text-center">
              <div className="switch-icon"><FaExchangeAlt /></div>
            </Col>

            <Col xs={5}>
              <div className="form-icon-group position-relative">
                <FaPlaneArrival className="form-icon" />
                <Form.Control
                  placeholder="City or Airport"
                  name="to"
                  value={queryTo}
                  onChange={(e) => {
                    setQueryTo(e.target.value);
                    setShowToList(true);
                  }}
                  onFocus={() => setShowToList(true)}
                  onBlur={() => setTimeout(() => setShowToList(false), 200)}
                />
                {showToList && queryTo && (
                  <ListGroup className="autocomplete-dropdown">
                    {filteredTo.map((airport, idx) => (
                      <ListGroup.Item key={idx} className="autocomplete-item" onClick={() => handleSelect('to', airport)}>
                        <FaMapMarkerAlt className="location-icon" />
                        <div className="info-text">
                          <div className="airport-name">{airport.airportName}<span className="airport-code"> - {airport.airportCode}</span></div>
                          <div className="airport-city">{airport.cityName}, {airport.countryName}</div>
                        </div>
                      </ListGroup.Item>
                    ))}
                    {filteredTo.length === 0 && <ListGroup.Item>No results</ListGroup.Item>}
                  </ListGroup>
                )}
              </div>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col xs={6}>
              <div className="form-icon-group">
                <FaCalendarAlt className="form-icon" />
                <Form.Control type="date" name="dep" value={formData.dep} onChange={handleChange} />
              </div>
            </Col>
            <Col xs={6}>
              <div className="form-icon-group">
                <FaCalendarAlt className="form-icon" />
                <Form.Control type="date" name="arrival" value={formData.arrival} onChange={handleChange} disabled={tripType === 'one'} />
              </div>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col xs={6}>
              <div className="form-icon-group">
                <FaUser className="form-icon" />
                <Form.Select name="travelers" onChange={handleChange}>
                  <option>1 TRAVELER</option>
                  <option>2 TRAVELERS</option>
                  <option>3 TRAVELERS</option>
                </Form.Select>
              </div>
            </Col>
            <Col xs={6}>
              <div className="form-icon-group">
                <FaChair className="form-icon" />
                <Form.Select name="cabin" onChange={handleChange}>
                  <option>Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </Form.Select>
              </div>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col xs={6}><Form.Control placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} /></Col>
            <Col xs={6}><Form.Control placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} /></Col>
          </Row>

          <Row className="mb-3">
            <Col><Form.Control placeholder="Your Phone with Code" name="phone" value={formData.phone} onChange={handleChange} /></Col>
          </Row>

          <Button type="submit" className="search-btn w-100">Search Flight</Button>
        </Form>
      </Tab.Container>
    </div>
  );
}

export default Flightform2;
