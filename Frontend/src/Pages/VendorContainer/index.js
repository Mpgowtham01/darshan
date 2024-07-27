import React, { useEffect, useState } from "react";
import { Row, Card, Col, Button, Dropdown, NavDropdown } from "react-bootstrap";
// import FerilNew1 from "../../../src/Images/FerilNew1.png";
import "./index.scss";
import Table from "react-bootstrap/Table";
import Myprofile from "./Myprofile";
import { Link, useNavigate } from "react-router-dom";
import Addcategory from "./Addcategory";
import Advertisement from "./Advertisement";
import Offer from "./Offer";
import Addlist from "./Addlist";
import Enquiry from "./Enquiry";
import Packages from "./Packages";

function Index() {
  const [route, setRoute] = useState("profile");
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const [logout, setLogout] = React.useState(false);
  //   useEffect(() => {
  //     if (!localStorage.getItem("USER_AUTH_STATE")) navigate("/login");
  //   }, [logout]);
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("USER_AUTH_STATE");
    localStorage.removeItem("role");
    localStorage.removeItem("id");
    localStorage.removeItem("name");
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    localStorage.removeItem("regid");
    localStorage.removeItem("userId");
    localStorage.removeItem("companyName");
    sessionStorage.removeItem("USER_AUTH_STATE");

    // setLogout(true);
  };
  return (
    <div>
      <div>
        <Row className="vendor_page">
          <Col xs={12} md={4} className="myHome_content">
            <Card className="myhome_column">
              <div>
                <Card className="myhome_title">
                  <h6
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "white",
                      fontWeight: "bold",
                      margin: "4%",
                    }}
                  >
                    My Home
                  </h6>
                  <ul className="myhome_list">
                    <li className="mt-2" onClick={() => setRoute("profile")}>
                      {" "}
                      My Profile
                    </li>
                    <li className="mt-2">
                      <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Category"
                        menuVariant="dark"
                      >
                        <NavDropdown.Item
                          onClick={() =>
                            setRoute("/vendordashboard/addcategory")
                          }
                          style={{ color: "white" }}
                        >
                          Add Category
                        </NavDropdown.Item>

                        <NavDropdown.Item
                          onClick={() => setRoute("/vendordashboard/addlist")}
                          style={{ color: "white" }}
                        >
                          Addlist
                        </NavDropdown.Item>
                      </NavDropdown>
                    </li>

                    <li className="mt-2">
                      <NavDropdown
                        id="nav-dropdown-dark-example"
                        title="Business"
                        menuVariant="dark"
                      >
                        <NavDropdown.Item
                          onClick={() =>
                            setRoute("/vendordashboard/advertisement")
                          }
                          eventKey="4.1"
                        >
                          Advertisement
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          onClick={() => setRoute("/vendordashboard/offer")}
                          eventKey="4.1"
                        >
                          Offer
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          onClick={() => setRoute("/vendordashboard/enquiry")}
                          eventKey="4.1"
                        >
                          Enquiry
                        </NavDropdown.Item>
                      </NavDropdown>
                    </li>
                    {/* <li className='mt-2'>Offer</li>*/}
                    <li className="mt-2" onClick={() => setRoute("packages")}>
                      Packages
                    </li>
                    <li className="mt-2" onClick={logoutHandler}>
                      Logout
                    </li>
                  </ul>
                </Card>
              </div>
            </Card>
          </Col>
          <Col xs={12} md={8}>
            {route === "profile" && <Myprofile />}
            {route === "/vendordashboard/addcategory" && <Addcategory />}
            {route === "/vendordashboard/advertisement" && <Advertisement />}
            {route === "/vendordashboard/offer" && <Offer />}
            {route === "/vendordashboard/addlist" && <Addlist />}
            {route === "/vendordashboard/enquiry" && <Enquiry />}
            {route === "packages" && <Packages />}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Index;
