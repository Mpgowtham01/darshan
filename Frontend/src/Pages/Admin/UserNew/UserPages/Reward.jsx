import React, { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { Row, Col } from "react-bootstrap";
import "./Reward.scss";
import axios from "axios";

function Reward() {
  const [count, setCount] = useState([]);
  useEffect(() => {
    getTempleData();
  }, []);

  const getTempleData = () => {
    const id = localStorage.getItem("id");
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/temple/getTempleBasedOnUserId/inactive/${id}`
      )
      .then((res) => {
        setCount(res.data.length);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/* <Element className="gift__Container" id="Gift"> */}
      <div style={{ marginLeft: "10%" }}>
        <Row className="gift__Container ">
          <Col md={12} sm={12}>
            <center>
              {" "}
              <h2 className="mt-4">Rewards Points</h2>
            </center>

            <img
              className="reward_imgs"
              src="https://img.freepik.com/free-vector/couple-winning-prize-man-woman-holding-gift-box-flat-vector-illustration-lottery-present-birthday-party_74855-8307.jpg?w=826&t=st=1672218290~exp=1672218890~hmac=7797f07551ec149206b124d1abda1b1634220b7a94c465bf0541cfc7f8da4c3b"
              alt="GiftImage"
              sizes="40%"
            />
            <h2 className="Reward_title">
              You Have Got{" "}
              <span className=" gift2 px-2" style={{ color: "black" }}>
                {count}
              </span>{" "}
              Reward Points
            </h2>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Reward;
