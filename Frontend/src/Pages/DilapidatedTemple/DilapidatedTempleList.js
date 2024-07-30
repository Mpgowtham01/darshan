import React, { useEffect } from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../components/Css/sass/TempleList.scss";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import Api from "../../Api";

const TempleList = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);

  useEffect(() => {
    getTemple();
  }, []);

  const getTemple = async () => {
    await Api.get("/dilapidated/getAlldilapidate").then((res) => {
      console.log("res :>> ", res);
      setdata(res.data.data);
    });
  };

  return (
    <Layout>
      <div>
        <div className="home-1 py-10">
          {/* <div className="container font-style-1">
          <p className="text-white text-center ">
            The way you feel in the <span className="font-style-2">temple</span>
          </p>
          <p className="text-white text-center ">
            is a pattern for how you want to feel
          </p>
          <p className="text-white text-center">
            in your <span className="font-style-2">life</span>
          </p>
        </div> */}
          {/* <div>
          <div className="d-flex justify-content-center align-item-center">
            <input
              enterButton="Search"
              placeholder="Search Gods Here..."
              className="search-box-god-1"
            />
            <button
              className="search-box-god-2"
              enterButton="Search"
              onClick={onSearch}
            >
              Search
            </button>
            <button className="filter-button ms-3 px-4" onClick={handleShow}>
              <FontAwesomeIcon
                icon={faFilter}
                className="filter-icon-style me-1 text-black"
              />
              Filter
            </button>
          </div>
          <>
            <div>
              <Modal show={show} onHide={handleClose} className="mt-5">
                <Modal.Body>
                  <Form>
                    <Form.Group className="mb-3 ">
                      <h6>Select Country</h6>
                      <Select
                        options={[
                          {
                            value: "india",
                            label: "india",
                          },
                          {
                            value: "usa",
                            label: "usa",
                          },
                          {
                            value: "uk",
                            label: "uk",
                          },
                        ]}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <h6>Select State</h6>
                      <Select
                        options={[
                          {
                            value: "tamil nadu",
                            label: "tamil nadu",
                          },
                          {
                            value: "pune",
                            label: "pune",
                          },
                          {
                            value: "delhi",
                            label: "delhi",
                          },
                        ]}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <h6>Select District</h6>
                      <Select
                        options={[
                          {
                            value: "chennai",
                            label: "chennai",
                          },
                          {
                            value: "dharmapuri",
                            label: "dharmapuri",
                          },
                          {
                            value: "salem",
                            label: "salem",
                          },
                        ]}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <h6>Select City</h6>
                      <Select
                        options={[
                          {
                            value: "chennai",
                            label: "chennai",
                          },
                          {
                            value: "dharmapuri",
                            label: "dharmapuri",
                          },
                          {
                            value: "salem",
                            label: "salem",
                          },
                        ]}
                      />
                    </Form.Group>
                  </Form>
                  <h6>Area</h6>
                  <input type="text" className="form-control mb-3"></input>
                </Modal.Body>
                <div className="d-flex justify-content-center align-item-center">
                  <Modal.Footer>
                    <Button
                      variant="primary"
                      onClick={handleClose}
                      className=""
                    >
                      Submit
                    </Button>
                  </Modal.Footer>
                </div>
              </Modal>
            </div>
          </>
        </div> */}
          <Container>
            <Row className="text-center">
              <h2 className="text-white mt-5">Decaying Temples</h2>
              {data.map((list, i) => (
                <Col xs={12} sm={12} md={4} className="mt-5">
                  <img
                    onClick={() =>
                      navigate(`/dilapidatedTemples/${list.id}`, {
                        state: list,
                      })
                    }
                    src={list.imageUrl}
                    height={250}
                    width={"100%"}
                    style={{ borderRadius: 18 }}
                    alt="none"
                  />
                  <p className="text-white mb-0 mt-2">
                    <b>{list.name}</b>
                  </p>
                  <p className="text-white">{list.content}</p>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </Layout>
  );
};

export default TempleList;
