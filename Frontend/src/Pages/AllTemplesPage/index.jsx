import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsSearch } from "react-icons/bs";
import { useLocation } from "react-router-dom";
import { Col, Container, Form, InputGroup, Row } from "react-bootstrap";

import {
  fetchTemplesList,
  NUMBER_BLOGS_SHOW,
  removeFilterData,
  resetFilterQueries,
} from "../../components/Redux_Toolkit/allTempleSlice";
import RightSection from "./RightSection";
import "./AllTemplePage.scss";
import Layout from "../../components/Layout";
import FilterBar from "./FilterBar";
import useDebounce from "./useDebounce";

const TempleAllPage = () => {
  const [searchedTempleVal, setSearchedTemple] = useState("");
  const debouncedSearchTerm = useDebounce(searchedTempleVal, 500);
  const isSearchModal = useSelector((state) => state.allTemples.isSearchModal);
  const filteredData = useSelector((state) => state.allTemples.filteredData);
  const[latitude,setLatitude]=useState('');
  const [longitude,setLongitude]=useState('')

  const { state } = useLocation();
  console.log("Location", state);
  const dispatch = useDispatch();

  const handleSearchedTemple = (e) => {
    setSearchedTemple(e.target.value);

    if (e.target.value === "") {
      dispatch(fetchTemplesList({ start: 0, end: NUMBER_BLOGS_SHOW }));
    }
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      dispatch(fetchTemplesList({ searchBy: debouncedSearchTerm }));
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    // console.log("Search Modal", state?.isSearchModal);
    // if (state?.isSearchModal) return;
    if (isSearchModal) return;

    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
   
    dispatch(
      fetchTemplesList({ type: "PUSH DATA", userLatitude:latitude,userLongitude:longitude,start: 0, end: NUMBER_BLOGS_SHOW })
    );

    return () => {
      dispatch(removeFilterData());
      dispatch(resetFilterQueries());
    };
  }, [isSearchModal,latitude,longitude]);

  return (
    <>
      <Layout>
        <div className="allTemplePage">
          <Row>
            <Col md={4} lg={3}>
              <div className="allTemplePage__leftSection">
                <FilterBar />
              </div>
            </Col>

            <Col md={8} lg={9}>
              <div className="allTemplePage__rightSection">
                <Container>
                  <div className="d-flex ">
                    {filteredData.length > 0 && (
                      <h3 className="title">{filteredData.length} Temple</h3>
                    )}
                    <div className="allTemplePage__rightSection--searchBar">
                      <InputGroup className="mb-3">
                        <Form.Control
                          value={searchedTempleVal}
                          onChange={handleSearchedTemple}
                          placeholder="Search Your Temple Name, God Name or City"
                          aria-describedby="SearchTemple"
                        />

                        <InputGroup.Text id="SearchTemple">
                          <BsSearch />
                        </InputGroup.Text>
                      </InputGroup>
                    </div>
                  </div>
                  <RightSection />
                </Container>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
};

export default TempleAllPage;
