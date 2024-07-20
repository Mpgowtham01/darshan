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
import CustomNav from "../../components/HeaderNavBar/CustomNav";
import CustomNavF from "../../components/Footer/index";
import { useNavigate } from "react-router-dom";

const TempleList = () => {
    const navigate = useNavigate();
  const { Search } = Input;
  const [visible, setVisible] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setdata] = useState([
    {
      id: 1,
      name: "Nageswaran Temple, Kumbakonam",
      imageUrl:
        "https://swarajya.gumlet.io/swarajya/2020-11/71094bc0-3a93-4d6b-afa8-025e1c340a88/temple.png?w=640&q=75&auto=format,compress&format=webp",
    },
    {
      id: 2,
      name: "Agastheeswarar Temple",
      imageUrl:
        "https://tntemplesproject.in/wp-content/uploads/2022/05/2022-0415-6-azhagiyanathar-sholampettai-mayiladuthurai-45.jpg?w=800&h=400&crop=1",
    },
    {
      id: 3,
      name: "Azhagiyanathar, Sholampettai",
      imageUrl: "https://tntemplesproject.in/wp-content/uploads/2022/04/azhagiyanathar-sholampettai-mayiladuthurai-kadambur-vijay-1.jpg",
    },
    {
      id: 4,
      name: "Chidambareswarar, Kattalaicheri",
      imageUrl:
        "https://tntemplesproject.in/wp-content/uploads/2022/05/2022-0415-8-chidambareswarar-kattalaicheri-mayiladuthurai-2.jpg?w=800&h=400&crop=1",
    },
    {
      id: 5,
      name: "Keelavidayal Chidambareswarar Shiva Temple",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXJGYeiyPxZPfB5NIwkWLn63FndY95hZEfNprWh3WIaLVXCOYGKmanI1G_fieNBXwas-Y&usqp=CAU",
    },
    {
      id: 6,
      name: "Shiva Krupa",
      imageUrl:
        "https://2.bp.blogspot.com/-YgFdcbfM-Vg/UyWQXeaaLEI/AAAAAAAAEQo/lcEsqQ5hSvQ/s1600/DSC01275.JPG",
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
      name: "Dharma Temple",
      imageUrl:
        "https://behindeverytemple.org/wp-content/uploads/2020/12/section6.jpg",
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
        <CustomNav/>
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
        <div>
        {/* <div className="d-flex justify-content-center align-item-center">
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
            </div> */}
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
            <h1 className="text-white mt-4">Dilapidated Temples</h1>
            {data.map((list, i) => (
              <Col xs={12} sm={12} md={4} className="mt-3">
                <img onClick={() => navigate("/dilapidatedTemples/NageswaraTemple")}
                  src={list.imageUrl}
                  height={250}
                  width={"100%"}
                  style={{ borderRadius: 18 }} alt="none"
                />
                <p className="text-white mb-0 mt-2"><b>{list.name}</b></p>
                <p className="text-white">{list.content}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <CustomNavF/>
    </div>
  );
}

export default TempleList;
