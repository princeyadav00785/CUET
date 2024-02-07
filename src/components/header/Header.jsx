import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  const location = useLocation();
  const gradientBackground = {
    background: 'linear-gradient(90deg, #ACBCFF -4.3%, #FFFFFF 400%)',
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={gradientBackground}>
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/" className="no-underline gap-2 items-center flex">
          <img
            style={{ marginLeft: '80px' }}
            className="h-[40.5px] w-[30px] relative object-cover"
            loading="eager"
            alt=""
            src={require('../../assets/images/logo_final.png')}
          />
          <b className="relative text-blueviolet-100">CUET-TESTKNOCK</b>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className={`no-underline mr-5 text-blueviolet-100 ${location.pathname === '/' ? 'active' : ''}`} style={{ color: '#8A2BE2', fontWeight: 'bold', padding: '10px', marginLeft:'0px' }}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/courses" className={`no-underline mr-5 text-blueviolet-100 ${location.pathname === '/courses' ? 'active' : ''}`} style={{ color: '#8A2BE2', fontWeight: 'bold', padding: '10px' }}>
              Courses
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="no-underline mr-5 text-blueviolet-100" style={{ color: '#8A2BE2', fontWeight: 'bold', padding: '10px' }}>
              About Us
            </Nav.Link>
            <Nav.Link as={NavLink} to="/syllabus" className="no-underline text-blueviolet-100" style={{ color: '#8A2BE2', fontWeight: 'bold', padding: '10px' }}>
              Syllabus
            </Nav.Link>
          </Nav>

          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/login" className="no-underline text-blueviolet-100" style={{ color: '#8A2BE2', fontWeight: 'bold', padding: '10px',border: '2px solid #8A2BE2', borderRadius: '17px' }}>
              Log In
            </Nav.Link>
            <Nav.Link as={NavLink} to="/signup" className="no-underline text-blueviolet-100" style={{ color: '#8A2BE2', fontWeight: 'bold', padding: '10px' }}>
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
