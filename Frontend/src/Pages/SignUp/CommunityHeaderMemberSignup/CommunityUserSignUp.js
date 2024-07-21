import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Radio, Space } from "antd";
import { useParams, Link, useLocation } from "react-router-dom";
import UserLayout from "../../Admin/Communitywebpage/Components/Layout";
import "../../../components/Css/sass/Login.scss";
import HeaderSignup from "./HeaderSignup";
import MemberSignup from "./MemberSignup";
import { StarTwoTone } from "@ant-design/icons";

const CommunitySignUp = () => {
  const params = useParams();
  const { state } = useLocation();
  const [a, setA] = useState(state);
  const { groupName, id } = params;
  const [role, setrole] = useState("Header");

  const data = { from: role };
  const onChange = e => {
    setrole(e.target.value);
    setA(e.target.value);
  };

  const stateCheck = state ? a : role;

  return (
    <UserLayout>
      <div className=" login-section pt-5 mt-4 pb-3">
        <Container>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={4}
              className="d-grid align-items-center mt-1"
            >
              <div className="left-content">
                <h3
                  className="mb-3"
                  style={{ fontWeight: "bold", fontFamily: "serif" }}
                >
                  Sign Up
                </h3>

                {state ? (
                  <Radio.Group onChange={onChange} value={a} className="ps-3">
                    <Space direction="vertical">
                      <Radio value={"Header"} className="login-options">
                        Community Header Sign Up
                      </Radio>
                      <Radio value={"Member"} className="login-options">
                        Community Member Sign Up
                      </Radio>
                    </Space>
                  </Radio.Group>
                ) : (
                  <Radio.Group
                    onChange={onChange}
                    value={role}
                    className="ps-3"
                  >
                    <Space direction="vertical">
                      <Radio value={"Header"} className="login-options">
                        Community Header Sign Up
                      </Radio>
                      <Radio value={"Member"} className="login-options">
                        Community Member Sign Up
                      </Radio>
                    </Space>
                  </Radio.Group>
                )}
              </div>
            </Col>
            <Col xs={12} sm={12} md={8}>
              <div className="right-content pt-4 pb-3 px-5 mx-2 mt-3">
                <div className="d-flex justify-content-center community-signup mb-2">
                  {" "}
                  <h3
                    style={{
                      fontWeight: "bold",
                      fontFamily: "serif",
                      fontSize: 34,
                    }}
                  >{`${"Community" + " " + stateCheck + " " + "Sign Up"}`}</h3>
                </div>

                <div className="maincontent ">
                  <h5
                    style={{
                      fontFamily: "serif",
                    }}
                  >
                    Already have an account ?
                  </h5>
                  <Link to={`/CommunityTemple/${groupName}/signin`} state={a}>
                    SignIn Now
                  </Link>
                </div>
                {state &&
                  (() => {
                    if (a === "Header") {
                      return <HeaderSignup state={state} />;
                    }
                    if (a === "Member") {
                      return <MemberSignup state={state} />;
                    }
                  })()}
                {!state &&
                  (() => {
                    if (role === "Header") {
                      return <HeaderSignup state={state} />;
                    }
                    if (role === "Member") {
                      return <MemberSignup state={state} />;
                    }
                  })()}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </UserLayout>
  );
};
export default CommunitySignUp;
