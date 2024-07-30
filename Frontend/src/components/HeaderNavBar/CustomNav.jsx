import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import temple from "../../components/Images/darshanJourneylogo.jpg";
import { HiUserCircle } from "react-icons/hi";
import { Popover } from "antd";
import axios from "axios";
import "../Css/sass/Navbar.scss";

const CustomNav = ({ handleShow }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const role = localStorage.getItem("Role");
  const groupName = localStorage.getItem("Group_Name");
  const auth = localStorage.getItem("USER_AUTH_STATE");

  const handleLogout = () => {
    sessionStorage.removeItem("USER_AUTH_STATE");
    localStorage.removeItem("USER_AUTH_STATE");
    sessionStorage.removeItem("id");
    localStorage.removeItem("Role");
    localStorage.removeItem("id");
    sessionStorage.removeItem("Group_Name");
    axios.get("/logout", { withCredentials: false }).then(() => {
      navigate("/login");
    });
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="light"
        fixed="top"
        className="headerNav"
      >
        <Container>
          <Navbar.Brand>
            <h1 className="headerNav__logo" onClick={() => navigate("/")}>
              <img
                style={{ width: "150px", height: "80px" }}
                src={temple}
                alt="Temple Logo"
              />
            </h1>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className="mx-3">
                <NavLink to="/">Home</NavLink>
              </Nav.Link>
              <Nav.Link className="mx-3">
                <NavLink to="/about-us">About Us</NavLink>
              </Nav.Link>
              <Nav.Link className="mx-3">
                <NavLink to="/bookmyiyer/contact-us">Contact Us</NavLink>
              </Nav.Link>
              <Nav.Link className="mx-3">
                <NavLink to="/dilapidatedTemples">Decaying temples</NavLink>
              </Nav.Link>
              <Nav.Link className="mx-3">
                <NavLink to="/product">Product</NavLink>
              </Nav.Link>
            </Nav>
            <Nav>
              {auth &&
              [
                "user",
                "vendor",
                "admin",
                "community",
                "communityUser",
                "communityMember",
              ].includes(role) ? (
                <Popover
                  content={
                    <div>
                      <Nav.Link>
                        <NavLink
                          to={
                            role === "community" || role === "communityUser"
                              ? `/${role}/${groupName}`
                              : role === "communityMember"
                              ? "/communityFamilyMember"
                              : `/${role}`
                          }
                        >
                          Dashboard
                        </NavLink>
                      </Nav.Link>
                      <hr />
                      <Nav.Link>
                        <NavLink onClick={handleLogout}>LogOut</NavLink>
                      </Nav.Link>
                    </div>
                  }
                  trigger="click"
                  open={open}
                >
                  <HiUserCircle
                    style={{ fontSize: 40, cursor: "pointer" }}
                    onClick={() => setOpen(!open)}
                  />
                </Popover>
              ) : (
                <Nav.Link>
                  <NavLink to="/login">Login</NavLink>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default React.memo(CustomNav);

/* <NavDropdown
                title={
                  <span className="nav-dropdown-title">Darshan Service</span>
                }
                id="darshan-service-dropdown"
                className="custom-darshan-service-dropdown"
              >
                <NavDropdown.Item as={NavLink} to="/bookmyiyer/puja">
                  Puja
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/bookmyiyer/priestbooking">
                  Book My Iyer
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/bookmyiyer/calendar">
                  Calendar
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/bookmyiyer/training-class">
                  Training
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/bookmyiyer/guide">
                  Guide
                </NavDropdown.Item>
              </NavDropdown> */

/* <NavDropdown
                title={
                  <span className="nav-dropdown-title">Vendor Service</span>
                }
                id="vendor-service-dropdown"
                className="custom-vendor-service-dropdown"
              >
                <NavDropdown.Item as={NavLink} to="/yatrabooking">
                  Yatra Booking
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/roombooking">
                  Room Booking
                </NavDropdown.Item>
              </NavDropdown> */

/* <Nav.Link>
                <NavLink to="/temple-blogs">Blog</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to="/events-list">Events</NavLink>
              </Nav.Link> */
