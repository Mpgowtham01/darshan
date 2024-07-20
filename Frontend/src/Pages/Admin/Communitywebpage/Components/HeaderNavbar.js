import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate, useParams } from "react-router-dom";
//import temple from "../../../../components/Images/Blacklogo.png";
import temple from "../../../../components/Images/darshanJourneylogo.jpg"
function HeaderNavbar() {
  const params=useParams()
  const {groupName} = params

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        fixed="top"
        className="headerNav"
        style={{ height: 55 }}>
        <Container fluid>
          <Navbar.Brand className="nav-brand-temple">
            <img style={{ width: "150px",height:'57px' }} src={temple}></img>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="collapse-style ms-auto" style={{ fontSize: 16 }}>
              <Nav.Link className="ms-3">
                <NavLink to={`/CommunityTemple/${groupName}/signin`}>Sign In</NavLink>
              </Nav.Link>
              <Nav.Link className="ms-3">
                <NavLink to={`/CommunityTemple/${groupName}/signup`}>Sign Up</NavLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default HeaderNavbar;
