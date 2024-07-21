import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Input } from "antd";
import '../../components/Css/sass/TempleList.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Select from 'react-select';

const TempleList = () => {
  const { Search } = Input;
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setdata] = useState([
    {
      id: 1,
      name: "Ganesha Temples",
      imageUrl:
        "https://w0.peakpx.com/wallpaper/813/95/HD-wallpaper-ganesha-god-origins.jpg",
    },
    {
      id: 2,
      name: "Perumal Temples",
      imageUrl:
        "https://i.pinimg.com/474x/9b/9e/50/9b9e509ca53b93c7357638f3b125bffd.jpg",
    },
    {
      id: 3,
      name: "Murugar Temples",
      imageUrl: "https://wallpaperaccess.com/full/3883176.jpg",
    },
    {
      id: 4,
      name: "Ayyapan Temples",
      imageUrl:
        "http://www.efillinfoindia.com/wp-content/uploads/2021/12/ayyappa-swamy.jpg",
    },
    {
      id: 5,
      name: "Amman Temples",
      imageUrl: "https://wallpapercave.com/wp/wp7516273.jpg",
    },
    {
      id: 6,
      name: "Shivan Temples",
      imageUrl:
        "https://tweakindia.com/wp-content/uploads/2019/09/1024px-Lord_Shiva_Statue_In_Murdeshwara-400x440.jpg",
    },
    {
      id: 7,
      name: "Sai Baba Temple",
      imageUrl:
        "https://www.kanyakumarians.com/data/catalog/pothayadi/potrayadi-sai-baba-temple.jpg",
    },
    {
      id: 7,
      name: "Hunuman Temple",
      imageUrl:
        "https://i.pinimg.com/736x/03/a9/bd/03a9bdbbd0836df165bced58b53a48e0.jpg",
    },
    {
      id: 7,
      name: "Krishnan Temple",
      imageUrl:
        "https://www.hdimages.pics/images/quotes/english/general/lord-krishna-hd-images-52650-307840.jpg",
    },
    {
      id: 7,
      name: "Raagavendra Temple",
      imageUrl: "https://wallpaperaccess.com/full/4573184.jpg",
    },
    {
      id: 7,
      name: "Ramar Temple",
      imageUrl:
        "https://i.pinimg.com/originals/58/35/5d/58355d1fe5a13fb345e888fea99f9301.jpg",
    },
    {
      id: 7,
      name: "Narasimha Temple",
      imageUrl: "https://wallpaperaccess.com/full/2787144.jpg",
    },
  ]);
  const onSearch = (value) => console.log(value);
  return (
    <div>
      <div className="home-1 py-5">
        <div className="container font-style-1">
          <p className="text-white text-center ">
            The way you feel in the <span className="font-style-2">temple</span>
          </p>
          <p className="text-white text-center ">
            is a pattern for how you want to feel
          </p>
          <p className="text-white text-center">
            in your <span className="font-style-2">life</span>
          </p>
        </div>
        <div>
        <div className="d-flex justify-content-center align-item-center">
          <input
            enterButton="Search"
            placeholder="Search Gods Here..."
            className="search-box-god-1"
          />
          <button className="search-box-god-2" enterButton="Search" onClick={onSearch}>
            Search
          </button>
          <button className="filter-button ms-3 px-4" onClick={handleShow}>
              <FontAwesomeIcon icon={faFilter} className="filter-icon-style me-1 text-black" />
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
                    <Button variant="primary" onClick={handleClose} className="">
                      Submit
                    </Button>
                  </Modal.Footer>
                </div>
              </Modal>
            </div>
          </>
        </div>
        <Container>
          <Row className="text-center">
            <h1 className="text-white mt-4">Temples</h1>
            {data.map((list, i) => (
              <Col xs={12} sm={12} md={4} className="mt-3">
                <img
                  src={list.imageUrl}
                  height={250}
                  width={"100%"}
                  style={{ borderRadius: 18 }}
                />
                <p className="text-white mb-0 mt-2">{list.name}</p>
                <p className="text-white">{list.content}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default TempleList;
