import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
//import temple from "../../components/Images/Blacklogo.png";
import temple from "../../components/Images/darshanJourneylogo.jpg"
function HeaderNavbar() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        fixed="top"
        className="headerNav"
        style={{ height: 55 }}
      >
        <Container fluid>
          <Navbar.Brand className="nav-brand-temple">
            <Link to="/"><img style={{ width: "150px", height: "57px" }} src={temple} ></img></Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="collapse-style ms-auto" style={{ fontSize: 16 }}>
               <Nav.Link className="ms-0">
                <NavLink to="/bookmyiyer">HOME</NavLink>
              </Nav.Link>
              <Nav.Link className="ms-3">
                <NavLink to="/bookmyiyer/aboutus">ABOUT US</NavLink>
              </Nav.Link>
              {/*<Nav.Link className="ms-3">
                <NavLink to="/bookmyiyer/puja">PUJA</NavLink>
              </Nav.Link> */}
              {/* <Nav.Link>
                <NavLink to={"/temple-service"}>DARSHAN SERVICE</NavLink>
              </Nav.Link>
              <Nav.Link className="ms-3">
                <NavLink to="/bookmyiyer/calendar">CALENDAR</NavLink>
              </Nav.Link>
              <Nav.Link className="ms-3">
                <NavLink to="/bookmyiyer/training-class">TRAINING</NavLink>
              </Nav.Link>

              <Nav.Link className="ms-3">
                <NavLink to="/bookmyiyer/guide">GUIDE</NavLink>
              </Nav.Link>
            
              <Nav.Link className="ms-3">
                <NavLink to="/bookmyiyer/blog">BLOG</NavLink>
              </Nav.Link>
              <Nav.Link className="ms-3">
                <NavLink to="/bookmyiyer/contact-us">CONTACT US</NavLink>
              </Nav.Link> */}
              {/* <NavDropdown className="ms-3" title="BOOK MY IYER" id="collasible-nav-dropdown">
              <NavDropdown.Item>
                  <NavLink to="/bookmyiyer">HOME</NavLink>
                </NavDropdown.Item>
              <NavDropdown.Item>
                  <NavLink to="/bookmyiyer/aboutus">ABOUT US</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/temple-service">DARSHAN SERVICE</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/bookmyiyer/calendar">CALENDAR</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/bookmyiyer/training-class">TRAINING</NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink to="/bookmyiyer/guide">GUIDE</NavLink>
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderNavbar;
