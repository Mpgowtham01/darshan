
import React, { useEffect, useState } from "react";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { useLocation } from "react-router-dom";
import Api from "../../Api";
import { useNavigate } from "react-router-dom";

//style
import "../TempLeService/Templservice.scss"

function ServiceVendor() {
  useEffect(() => {
    searchListItem()
  }, []);

const navigate = useNavigate();
  const location = useLocation()
  const [filtered, setFiltered] = useState([]);
  console.log('filtered', filtered)
  console.log('location :>> ', location.state.Data);
  const [data,setData]=useState([location.state.Data]);
  console.log('data', data)
  const [searchList, setSearchList] = useState([]);
  
  const searchListItem = async () => {
    Api.post(`/categories/getVendorSearchCategories`, location.state.detail)
      .then((res) => {
        setSearchList(res.data);
        console.log("serachhhhhhhh", res);
      });
  }

  const handleFilterBlogByText = e => {
    const re = RegExp(
      `.*${e.target.value.toLowerCase().split("").join(".*")}.*`
    );

    const newData = filtered.filter(list =>
      list.companyName.toLowerCase().match(re)
    );

    setFiltered(newData);

    if (e.target.value == "") {
      setFiltered(data);
    }
  };



  return (
    <div>
      <Container className="Servicepage-vendor">
        <Row className="justify-content-center">
          <h1 className="ad" >Category List</h1>

          <Row>
            <Col sm={8} lg={6} xl={5} className="ms-auto mt-3">
              <div>
                <InputGroup>
                  <Form.Control
                    onChange={handleFilterBlogByText}
                    placeholder="Search category..."
                  
                  />
                  <InputGroup.Text>
                    <AiOutlineSearch />
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </Col>
          </Row>

          <Row>
            {searchList &&
              searchList.map((list, i) => (
                <Col xs={12} sm={12} md={4} className="mt-3" key={i} >
                  <img
                    src={`${process.env.REACT_APP_DEV_BASE_URL}${list.businessPhoto}`}
                    height={250}
                    width={"100%"}
                    style={{ borderRadius: 18 }}
                  onClick={() =>{
                    console.log('data :>> ', data);
                    console.log('list.CategoriesId :>> ', list.CategoriesId);
             let idValue =   data[0].filter((item)=>list.CategoriesId === item.id)

                    navigate(`/temple-service/templeDetailsPage/${idValue[0]?.post}/${idValue[0]?.id}`, {

                    })
                  }}
                  />
                  <h5 className="mb-0 mt-2" style={{ color: "red" }}>
                    {list.CompanyName}
                  </h5>
                  <h5 style={{ color: "red" }}>{list.city}</h5>
                </Col>
              ))}

          </Row>


        </Row>
      </Container>
    </div>
  )
}

export default ServiceVendor