import React, { useState } from "react";
import { Input } from "antd";
import { BsFillFunnelFill } from "react-icons/bs";
import { Row, Col, Container, Button, Modal, Form } from "react-bootstrap";
import Select from "react-select";
import god from "../../components/Images/bg.jpg";

//style
import "../../components/Css/sass/FamousTempleList.scss"

function FamousTempleList() {
  const { Search } = Input;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const list = [
    {
      Id: 1,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdAZTrDNm3s168guwOab1vOLnY71p3673RUA&usqp=CAU",
      Content: "Brihadeeswarar Temple",
      Place: "Thanjavur",
    },
    {
      Id: 2,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiZNMzlNWm_2iU-JrZznoQo-CT9S38R-oxwA&usqp=CAU",
      Content: "Brihadisvara Temple",
      Place: "Gangaikonda Cholapuram",
    },
    {
      Id: 3,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSizr-6fyMhCvt_sZgKgVD4Tak5vRNSDHXZ0g&usqp=CAU",
      Content: "Meenakshi Amman Temple",
      Place: "Madurai",
    },
    {
      Id: 4,
      Image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/40/89/b8/l-entree-pricipale.jpg?w=1200&h=1200&s=1",
      Content: "Sri Ranganathaswamy Temple",
      Place: " Srirangam",
    },
    {
      Id: 5,
      Image:
        "https://lh3.googleusercontent.com/p/AF1QipOy8pDzdiQqeSlKsBBKje5AUGp2eRTXi_DGc23N",
      Content: "Sri Rajagopala Swamy Temple",
      Place: "Mannargudi",
    },
    {
      Id: 6,
      Image:
        "https://images.unsplash.com/photo-1544588440-fc7551331160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpZGFtYmFyYW0lMjB0aGlsbGFpJTIwbmF0YXJhamElMjB0ZW1wbGV8ZW58MHx8MHx8&w=1000&q=80",
      Content: "Thillai Nataraja Temple",
      Place: "Chidambaram",
    },
    {
      Id: 7,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEWBr8oLY_Bj0Nve9y3agLZ1qyZUD2WJAEMQ&usqp=CAU",
      Content: "Kanchi Kailasanathar Temple",
      Place: "MKanchipuram",
    },
    {
      Id: 8,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwOkxuo3-CL6X4FZ5lFoRg1DM78yEqPEp8EQ&usqp=CAU",
      Content: "Ramanathaswamy Temple",
      Place: "Rameshwaram",
    },
    {
      Id: 9,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYRfVGUC1NHRCceBvu0FGBSH9s2q585MY4IA&usqp=CAU",
      Content: "Kapaleeshwarar Temple",
      Place: " Chennai",
    },
    {
      Id: 10,
      Image:
        "https://www.oneindia.com/ph-big/2018/11/devotees-enter-sabarimala-temple-as-it-opens-amid-tight-security_154269029610.jpg",
      Content: "Sabarimala Temple",
      Place: "Kerala",
    },
    {
      Id: 11,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIFYWejEX1c6r3J7314N3BtJhFQx-ZqXyHzg&usqp=CAU",
      Content: " Murugan Temple",
      Place: "Thiruparankundram",
    },
    {
      Id: 12,
      Image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT20rNSsE_uACOc6H_r_z4ydFc_V0CzPEXbQQ&usqp=CAU",
      Content: "Murugan Temple",
      Place: "Swamimalai",
    },
  ];

  const onSearch = (value) => console.log(value);

  return (
    <div
      className=" FamousTemple-main"
      style={{ backgroundImage: `url(${god})` }}
    >
      <Container>
        <div className="FamousTemple-style-1">
          <p className="text-white text-center ">
            The way you feel in the{" "}
            <span className="FamousTemple-style-2">temple</span>
          </p>
          <p className="text-white text-center ">
            is a pattern for how you want to feel
          </p>
          <p className="text-white text-center">
            in your <span className="FamousTemple-style-2">life</span>
          </p>
        </div>

        <div className="d-flex justify-content-center">
          <input
            enterButton="Search"
            placeholder="Search Temples..."
            className="search-box-temple1"
          />
          <button
            className="search-box-temple2 px-3"
            enterButton="Search"
            onClick={onSearch}
          >
            Search
          </button>
          <button className="filter-button ms-3 px-4" onClick={handleShow}>
            <BsFillFunnelFill size={20} /> Filter
          </button>
        </div>
      </Container>

      <Modal
        show={show}
        onHide={handleClose}
        className="mt-5 famous-temple-model"
      >
        <div class="model-close-header">
          <button
            type="button"
            className="model-close-icon"
            data-dismiss="modal"
            aria-label="Close"
            onClick={handleClose}
          >
            <span aria-hidden="true" className="cross-simbol">
              &times;
            </span>
          </button>
        </div>
        <Modal.Body className="px-5">
          <Form>
            <Form.Group className="mb-2 ">
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
            <Form.Group className="mb-2">
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
            <Form.Group className="mb-2">
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
            <Form.Group className="mb-2">
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
          <input type="text" className="form-control mb-2"></input>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <Button
            variant="primary"
            onClick={handleClose}
            className="text-center"
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <div>
        <Container>
          <Row>
            <div className="mt-5">
              <h1 className="text-center text-light">
                <b>Famous Temple</b>
              </h1>
            </div>

            {list.map((list, i) => (
              <Col className="p-4" xs={12} sm={12} md={4}>
                <div key={i}>
                  <img src={list.Image} className="FamousTemple-image p-3" />
                  <div className="text-center text-light FamousTemple-para mt-3">
                    {list.Content}
                  </div>
                  <div className="text-center text-light FamousTemple-para mt-3">
                    {list.Place}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default FamousTempleList;
