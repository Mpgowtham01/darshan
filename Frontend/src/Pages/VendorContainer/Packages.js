import React, { useEffect, useState } from "react";
import { Col, Row, Card, Button, Table } from "react-bootstrap";
import profile from "../../Assets/profile.b5d5876b2990f5319342.jpg";
import "./index.scss";
import Api from "../../Api";

function Packages() {
  const id = localStorage.getItem("userId");
  const [vendorDetails, setVendorDetails] = useState("");

  useEffect(() => {
    getValues();
  }, []);

  const getValues = async () => {
    await Api.get(`Vendor/vendor_get/${id}`).then((res) => {
      console.log("res", res.data.data);
      setVendorDetails(res.data.data);
    });
  };

  return (
    <div>
      <Card className="packagecard">
        <Row>
          <Col lg={6}>
          <div className="ps-3">
          <img className="imagecolumn" src={profile} alt="add" />
          </div>
          </Col>
          <Col lg={6}>
            <Row>
              <Col >
                <h5 style={{ marginTop: "5%", fontWeight: "bold" }}>cognex</h5>
              </Col>
              <Col>
                <Button className="vendor_view_profile">View profile</Button>
              </Col>
            </Row>
            <Row>
              <div>
                <Table striped className="detailstable">
                  <tbody>
                    <tr>
                      <td>Name</td>
                      <td>{vendorDetails.companyName}</td>
                    </tr>
                    <tr>
                      <td>Date of Birth</td>
                      <td>20/09/2000</td>
                    </tr>
                    <tr>
                      <td>Age</td>
                      <td>33</td>
                    </tr>
                    <tr>
                      <td>Contact </td>
                      <td>{vendorDetails.phone}</td>
                    </tr>
                    <tr>
                      <td>Email </td>
                      <td>{vendorDetails.email}</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Row>
          </Col>
        </Row>
      </Card>
      <div className="plan_column">
        <h5 style={{ color: "white", padding: "10px" }}>Current Plan</h5>
      </div>
      <div>
        <Card className="diamond_column">
          <h5
            style={{
              color: "red",
              marginTop: "1%",
              marginRight: "5%",
              marginLeft: "2%",
              marginBottom:"20px"
            }}
          >
            Diamond Plus
          </h5>
          <hr className="hr_view" />
          <Row className="daimond mt-2 mb-1">
            <Col md={6} lg={3} sm={12}>
              <h5 className="planduration_column">Plan Duration</h5>

              <p className="days_column">180 Days</p>
              <div>
                <h5 className="planduration_column">Allowed Chat</h5>
                <p className="days_column">No</p>
              </div>
              <div>
                <h5 className="planduration_column">View Profile</h5>
                <p className="days_column">150 out of 150</p>
              </div>
            </Col>
            <Col md={6} lg={3} sm={12}>
              <h5 className="planduration_column">Plan Activated on</h5>

              <p className="days_column">Jan 25 2023</p>
              <div>
                <h5 className="planduration_column">Allowed Message</h5>
                <p className="days_column">100 out of 100</p>
              </div>
              <div>
                <h5 className="planduration_column">Allowed Contact</h5>
                <p className="days_column">80 out of 80</p>
              </div>
            </Col>
            <Col md={6} lg={3} sm={12}>
              <h5 className="planduration_column">Plan Expired on</h5>

              <p style={{ color: "red" }}>April 25 2023</p>
            </Col>

            <Col md={5} lg={3} sm={12}>
              <h5 className="planduration_column">Plan Activated on</h5>

              <p className="days_column">Jan 25 2023</p>
              <div>
                <h5 className="planduration_column">Allowed Message</h5>
                <p className="days_column">100 out of 100</p>
              </div>
              <div>
                <h5 className="planduration_column">Allowed Contact</h5>
                <p className="days_column">80 out of 80</p>
              </div>
            </Col>
          </Row>
        </Card>
      </div>

      <div>
        <Card className="diamond_column pb-2">
          <h5
            style={{
              color: "red",
              marginTop: "1%",
              marginRight: "5%",
              marginLeft: "2%",
              marginBottom:"20px"

            }}
          >
            Diamond Plus
          </h5>
          <hr className="hr_view" />
          <Row className="daimond mt-2 mb-1">
            <Col md={6} lg={3} sm={12}>
              <h5 className="planduration_column">Plan Duration</h5>

              <p className="days_column">180 Days</p>
              <div>
                <h5 className="planduration_column">Allowed Chat</h5>
                <p className="days_column">No</p>
              </div>
              <div>
                <h5 className="planduration_column">View Profile</h5>
                <p className="days_column">150 out of 150</p>
              </div>
            </Col>
            <Col md={6} lg={3} sm={12}>
              <h5 className="planduration_column">Plan Activated on</h5>

              <p className="days_column">Jan 25 2023</p>
              <div>
                <h5 className="planduration_column">Allowed Message</h5>
                <p className="days_column">100 out of 100</p>
              </div>
              <div>
                <h5 className="planduration_column">Allowed Contact</h5>
                <p className="days_column">80 out of 80</p>
              </div>
            </Col>
            <Col md={6} lg={3} sm={12}>
              <h5 className="planduration_column">Plan Expired on</h5>

              <p style={{ color: "red" }}>April 25 2023</p>
            </Col>

            <Col md={5} lg={3} sm={12}>
              <h5 className="planduration_column">Plan Activated on</h5>

              <p className="days_column">Jan 25 2023</p>
              <div>
                <h5 className="planduration_column">Allowed Message</h5>
                <p className="days_column">100 out of 100</p>
              </div>
              <div>
                <h5 className="planduration_column">Allowed Contact</h5>
                <p className="days_column">80 out of 80</p>
              </div>
            </Col>
          </Row>
        </Card>
      </div>

      <div>
        <Card className="diamond_column">
          <h5
            style={{
              color: "red",
              marginTop: "1%",
              marginRight: "5%",
              marginLeft: "2%",
              marginBottom:"20px"

            }}
          >
            Diamond Plus
          </h5>
          <hr className="hr_view" />
          <Row className="daimond mt-2 mb-1">
            <Col md={6} lg={3} sm={12}>
              <h5 className="planduration_column">Plan Duration</h5>

              <p className="days_column">180 Days</p>
              <div>
                <h5 className="planduration_column">Allowed Chat</h5>
                <p className="days_column">No</p>
              </div>
              <div>
                <h5 className="planduration_column">View Profile</h5>
                <p className="days_column">150 out of 150</p>
              </div>
            </Col>
            <Col md={6} lg={3} sm={12}>
              <h5 className="planduration_column">Plan Activated on</h5>

              <p className="days_column">Jan 25 2023</p>
              <div>
                <h5 className="planduration_column">Allowed Message</h5>
                <p className="days_column">100 out of 100</p>
              </div>
              <div>
                <h5 className="planduration_column">Allowed Contact</h5>
                <p className="days_column">80 out of 80</p>
              </div>
            </Col>
            <Col md={6} lg={3} sm={12}>
              <h5 className="planduration_column">Plan Expired on</h5>

              <p style={{ color: "red" }}>April 25 2023</p>
            </Col>

            <Col md={5} lg={3} sm={12}>
              <h5 className="planduration_column">Plan Activated on</h5>

              <p className="days_column">Jan 25 2023</p>
              <div>
                <h5 className="planduration_column">Allowed Message</h5>
                <p className="days_column">100 out of 100</p>
              </div>
              <div>
                <h5 className="planduration_column">Allowed Contact</h5>
                <p className="days_column">80 out of 80</p>
              </div>
              <div>
                <Button className="profilebutton2">Upgrade</Button>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}

export default Packages;
