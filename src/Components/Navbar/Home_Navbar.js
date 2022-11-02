/** @format */
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css';
import Nav_logo from '../../Assets/Brand-logos/Nav-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyUser } from '@fortawesome/free-solid-svg-icons';

const Home_Navbar = () => {
  const [show, setShow] = useState({
    drop1: false,
    drop2: false,
    drop3: false,
    drop4: false,
  });

  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} className='navbar-area'>
          <Container className='main-nav-w'>
            <Navbar.Brand href='#'>
              <img src={Nav_logo} alt='IIT HYDERABAD TIC' />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement='end'
              bg='#f9a33f'>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img src={Nav_logo} alt='IIT HYDERABAD TIC' />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav defaultActiveKey='#Home' className={`Nav-style`}>
                  <Nav.Link href='#Home'>
                    <FontAwesomeIcon icon={faHouseChimneyUser} />
                  </Nav.Link>
                  <NavDropdown
                    title='About'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    show={show.drop1}
                    onMouseEnter={() => setShow({ drop1: true })}
                    onMouseLeave={() => setShow({ drop1: false })}>
                    <NavDropdown.Item href='#About_us'>
                      About Us
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#eeiith'>
                      Entrepreneurship Ecosystem at IITH
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title='Program'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    show={show.drop2}
                    onMouseEnter={() => setShow({ drop2: true })}
                    onMouseLeave={() => setShow({ drop2: false })}>
                    <NavDropdown.Item href='#Nice'>NICE</NavDropdown.Item>
                    <NavDropdown.Item href='#TiHAN'>TiHAN</NavDropdown.Item>
                    <NavDropdown.Item href='#iDEX'>iDEX</NavDropdown.Item>
                    <NavDropdown.Item href='#Nidhi_prayas'>
                      NIDHI PRAYAS
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#Meity_tide'>
                      Meity TIDE 2.0
                    </NavDropdown.Item>
                    <NavDropdown.Item href='#Aisea'>AISEA</NavDropdown.Item>
                    <NavDropdown.Item href='#bel_seed_fund'>
                      BEL Seed Fund
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavDropdown
                    title='People'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    show={show.drop3}
                    onMouseEnter={() => setShow({ drop3: true })}
                    onMouseLeave={() => setShow({ drop3: false })}>
                    <NavDropdown.Item href='#action3'>Board</NavDropdown.Item>
                    <NavDropdown.Item href='#action4'>Mentors</NavDropdown.Item>
                    {/* <NavDropdown.Item href='#action5'>Coaches</NavDropdown.Item>
                    <NavDropdown.Item href='#action3'>Network</NavDropdown.Item> */}
                    <NavDropdown.Item href='#action4'>Team</NavDropdown.Item>
                    <NavDropdown.Item href='#action5'>Careers</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href='#Startup'>Startup</Nav.Link>
                  <NavDropdown
                    title='Media'
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    show={show.drop4}
                    onMouseEnter={() => setShow({ drop4: true })}
                    onMouseLeave={() => setShow({ drop4: false })}>
                    <NavDropdown.Item href='#action3'>Reports</NavDropdown.Item>
                    <NavDropdown.Item href='#action4'>
                      Downloads
                    </NavDropdown.Item>
                  </NavDropdown>

                  <Nav.Link href='#Contact_us'>Contact Us</Nav.Link>
                </Nav>
                <div className='others-options'>
                  <a className='default-btn' href='#action11'>
                    Apply for support <span></span>
                  </a>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
};

export default Home_Navbar;
