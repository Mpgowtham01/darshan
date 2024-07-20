import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TempleCard from "../AllTemplesPage/TempleCard";
import { famouseTemplesList } from "./utils";

const TempleList = () => {
  const [templeData, setTempleData] = useState([]);
  const [famousTemple, setFamousTemple] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const navigate = useNavigate();

  const showOnlyFamousTemple = async () => {
    const result = await axios.get(
      `${process.env.REACT_APP_DEV_BASE_URL}/temple/getonlyfamoustemple`
    );
    setFamousTemple(result.data.results);
  };
  // useEffect(() => {}, []);

  useEffect(() => {
    showOnlyFamousTemple();
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    let getTempleApiEndPoint = `${process.env.REACT_APP_DEV_BASE_URL}/home/getAllTemples?start=0&end=8&userLatitude=${latitude}&userLongitude=${longitude}`;

    axios
      .get(getTempleApiEndPoint)

      .then((res) => {
        if (res.data.status === "Success" && res.data.result?.length) {
          setTempleData(res.data.result);
        }
      })
      .catch((err) => console.log(err));
  }, [latitude, longitude]);

  return (
    <>
      <Container>
        <section>
          <h2 className="title">Temple </h2>
          <Row className="g-4">
            {templeData?.length ? (
              templeData.map((list, i) => (
                <Col key={i} sm={6} lg={3}>
                  <TempleCard item={list} />
                </Col>
              ))
            ) : (
              <h4 className="text-light text-center my-5">Loading....</h4>
            )}
          </Row>

          {templeData.length ? (
            <div className="btnContainer">
              <button
                className="customBtn"
                onClick={() => {
                  navigate("/alltemples");
                }}
              >
                View All
              </button>
            </div>
          ) : (
            []
          )}
        </section>

        {/* <section>
          <h2 className="title">All Main city Temples</h2>
          <Row className="g-4">
            {famousTemple?.length &&
              famousTemple.filter(temple => temple.starTemple === "yes").slice(0, 6).map((list, index) => (
                <Col key={index} sm={6} lg={4}>
                                 { console.log('listAjith', list)}

                  <Card>
                    <TempleCard item={list} />
                   
                  </Card>
                </Col>
              ))}
          </Row>
          {famousTemple.length ? (
            <div className="btnContainer">
              <button
                className="customBtn"
                onClick={() => {
                  navigate("/alltemples");
                }}
              >
                View All    
              </button>
            </div>
          ) : (
            []
          )}
        </section> */}
        {/* <section>
          <h2 className="title">Famous Temples</h2>
          <Row className="g-4">
            {famousTemple?.length &&
              famousTemple.slice(0, 6).map((list, index) => (
                <Col key={index} sm={6} lg={4}>
                  <Card>
                    <TempleCard item={list} />
                    
                  </Card>
                </Col>
              ))}
          </Row>
          {famousTemple.length ? (
            <div className="btnContainer">
              <button
                className="customBtn"
                onClick={() => {
                  navigate("/alltemples");
                }}
              >
                View All
              </button>
            </div>
          ) : (
            []
          )}
        </section> */}
      </Container>
    </>
  );
};

export default TempleList;
