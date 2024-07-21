import React, { useEffect, useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { Field, Formik } from "formik";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "../../../components/Css/sass/Login.scss";
import UserLayout from "../../Admin/Communitywebpage/Components/Layout";
import { Radio, Input, Space } from "antd";
import MemberLogin from "./MemberLogin";
import HeaderLogin from "./HeaderLogin";

const CommunityLogin = () => {
  const { state } = useLocation();

  const [a, setA] = useState(state);

  const params = useParams();
  const { groupName, id } = params;

  const [role, setrole] = useState("Header");

  const onChange = e => {
    setrole(e.target.value);
    setA(e.target.value);
  };

  const stateCheck = state ? a : role;
  return (
    <UserLayout>
      <div className="login-section pt-2 mt-4">
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
                  Sign In
                </h3>
                {state ? (
                  <Radio.Group onChange={onChange} value={a} className="ps-3">
                    <Space direction="vertical">
                      <Radio value={"Header"} className="login-options">
                        Community Header Sign In
                      </Radio>
                      <Radio value={"Member"} className="login-options">
                        Community Member Sign In
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
                        Community Header Sign In
                      </Radio>
                      <Radio value={"Member"} className="login-options">
                        Community Member Sign In
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
                  >{`${"Community" + " " + stateCheck + " " + "Sign In"}`}</h3>
                </div>

                <div className="maincontent ">
                  <h5
                    style={{
                      fontFamily: "serif",
                    }}
                  >
                    Don't have an account ?
                  </h5>
                  <Link to={`/CommunityTemple/${groupName}/signup`} state={a}>
                    Sign up Now
                  </Link>
                </div>
                {state &&
                  (() => {
                    if (a === "Header") {
                      return <HeaderLogin />;
                    }
                    if (a === "Member") {
                      return <MemberLogin />;
                    }
                  })()}
                {!state &&
                  (() => {
                    if (role === "Header") {
                      return <HeaderLogin />;
                    }
                    if (role === "Member") {
                      return <MemberLogin />;
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

export default CommunityLogin;
