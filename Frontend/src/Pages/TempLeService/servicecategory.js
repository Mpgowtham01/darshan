import React from "react";
import { useState, useEffect } from "react";
import {
  useNavigate,
  useParams,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { useRef } from "react";
import Pagination from "react-bootstrap/Pagination";
// import axios from "axios";
import Api from "../../Api";
import Select from "react-select";
import HeaderNavBar from "../../components/HeaderNavBar";
import Footer from "../../components/Footer";
import Form from "react-bootstrap/Form";
import { Image, CardGroup, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BiSearch } from "react-icons/bi";
import { BsCheckCircleFill, BsFileEarmarkEasel } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import ContactPopup from "./ventorcontact";
import VendorEnquiry from "./enquiry";

const ServiceCategory = (props) => {
  const [stateList, setStateList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [selectState, setSelectState] = useState("");
  const [selectDistrict, setSelectDistrict] = useState("");
  const [selectCity, setSelectCity] = useState("");
  const [selectSubCategories, setSelectSubCategories] = useState("");
  const [subCategoriesList, setSubCategoriesList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);
  const [templeData, setTempleData] = useState();

  const [serviceId, setServiceId] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const categoryIDs = searchParams.get("categoryId");

  const [final, setFinal] = useState(categoryIDs);
  const [searchFilter, setSearchFilter] = useState([]);

  console.log(categoryIDs, "searr");

  const [vendorCategoriesList, setVendorCategoriesList] = useState(null);

  const [details, setDetails] = useState({
    stateId: "",
    districtId: "",
    cityId: "",
    subCategoriesId: "",
  });

  const scrollRef = useRef();
  const handleScrollRef = () => {
    scrollRef.current?.scrollIntoView({
      behavior: "smooth",
      scrollIntoViewOptions: {
        block: "start",
      },
    });
  };

  useEffect(() => {
    getStateList();
    getCategoriesList();
    setServiceId(params.categoryId);
  }, []);

  useEffect(() => {
    getVendorCategoriesList();
  }, [searchParams]);

  const getStateList = () => {
    Api.get(`/state/getAll`).then((res) => {
      setStateList(res.data);
    });
  };
  const getDistrictList = (cityId) => {
    Api.get(`/district/getdistrict/${cityId}`).then((res) => {
      setDistrictList(res.data);
    });
  };
  const getCityList = (stateId) => {
    Api.get(`/city/getCity/${stateId}`).then((res) => {
      setCityList(res.data);
    });
  };
  // const getSubCategoriesList = (cityId) => {
  //     Api.get(`subCategoriesList/getSubCategoriesWithCityID/${cityId}`).then(
  //         (res) => {
  //             setSubCategoriesList(res.data);
  //         }
  //     );
  // };

  const getCategoriesList = async () => {
    Api.get(
      `${process.env.REACT_APP_DEV_BASE_URL}/categoriesList/getCategories`
    )
      .then((res) => {
        console.log(res.data, "udshi");
        setCategoriesList(res.data);
        // setFilteredData(res.data);
      })
      .catch((error) => console.log(error));
  };

  // const getCategoriesList = async () => {
  //     Api.get(`/categories/getTopVendorCategries`, details).then((res) => {
  //         setTempleData(res.data);
  //         handleScrollRef();
  //         // console.log("asedrfrt", res);
  //     });
  // };

  //vendor
  useEffect(() => {}, []);

  const params = useParams();
  const getVendorCategoriesList = async () => {
    console.log("first");
    Api.get(`/vendor/servicevendor/${categoryIDs}`)
      .then((res) => {
        setVendorCategoriesList(res.data);
        setSearchFilter(res.data);
        // setFilteredData(res.data);
      })
      .catch((error) => console.log(error));
  };

  const { Option } = Select;
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const newData = searchFilter.filter((list) =>
      list.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setVendorCategoriesList(newData);
  };

  function filteringResults(label) {
    const data = searchFilter.filter((ele, index) => {
      if (ele.location === label) {
        return ele;
      }
    });
    setVendorCategoriesList(data);
  }

  return (
    <div className="main-container">
      <HeaderNavBar />
      <div className="content-page">
        <div className="top-left">
          <div
            className="ventor-title"
            style={{ margin: "100px 80px 80px 80px" }}
          >
            <h4>
              {vendorCategoriesList
                ? vendorCategoriesList[0]?.categoryname
                : "title"}
            </h4>
            <p className="sub-title">Showing all available vendors!</p>
            <div className="top-right">
              <Form className="d-flex" style={{ marginTop: "-30px" }}>
                <Form.Control
                  type="search"
                  placeholder="Search by Vendor..."
                  className="me-2 search-field"
                  aria-label="Search"
                  onChange={handleSearch}
                />
                <Button className="search-btn ">
                  <BiSearch />
                </Button>
              </Form>
            </div>
          </div>
        </div>

        <div className="filter">
          <p
            style={{
              fontWeight: "bold",
              marginLeft: "-18px",
              marginBottom: "20px",
            }}
          >
            REFINE RESULT
          </p>
          <div
            className="select-fields"
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              marginLeft: "-40px",
            }}
          >
            {/* services */}
            <Select
              className="templ-ser-select-feild"
              name="Services"
              placeholder="Select Service"
              onChange={(e) => {
                setSelectSubCategories(e);
                setDetails({ ...details, subCategoriesId: e.value });
                const values = e.value;
                setSearchParams({ categoryId: values });
                console.log(values, "values");
              }}
              values={categoriesList}
              options={categoriesList.map((list) => ({
                label: list.categoryName,
                value: list.categoryId,
              }))}
            />
            {/* end */}
            <Select
              className="templ-ser-select-feild"
              name="State"
              placeholder="Select State"
              value={selectState}
              optionFilterProp="children"
              onChange={(e) => {
                setSelectState(e);
                setDetails({ ...details, stateId: e.value });
                const values = e.value;
                const label = e.label;
                getDistrictList(values);
                filteringResults(label);
                // setSearchParams({ categoryId: values });
                console.log("stateisddd", values);
              }}
              values={selectState}
              options={stateList.map((list) => ({
                label: list.state,
                value: list.id,
              }))}
            />
            <Select
              className="templ-ser-select-feild"
              name="District"
              placeholder="Select District"
              value={selectDistrict}
              onChange={(e) => {
                setSelectDistrict(e);
                setDetails({ ...details, districtId: e.value });
                const values = e.value;
                getCityList(values);
              }}
              values={selectDistrict}
              options={districtList.map((list) => ({
                label: list.district,
                value: list.id,
              }))}
            />
            <Select
              className="templ-ser-select-feild"
              name="City"
              placeholder="Select City"
              value={selectCity}
              onChange={(e) => {
                setSelectCity(e);
                setDetails({ ...details, cityId: e.value });
                const values = e.value;
              }}
              values={selectCity}
              options={cityList.map((list) => ({
                label: list.city,
                value: list.id,
              }))}
            />

            <button className="filter-btn">Filter</button>
          </div>
        </div>
      </div>
      {/*  */}

      <div
        className="row filter-card justify-content-center"
        style={{ marginLeft: "58px" }}
      >
        {/*  */}
        {vendorCategoriesList && vendorCategoriesList.length > 0 ? (
          vendorCategoriesList.map((item) => (
            <div
              className="card-detail"
              style={{
                boxSizing: "border-box",
                backgroundColor: "#ffff",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
              }}
              onClick={() => {
                navigate(`/user/Temple/vendor/${item.id}`);
              }}
            >
              <div>
                <div className="top-image">
                  <Image
                     src={`${process.env.REACT_APP_DEV_BASE_URL}${item.photo}`}
                    className="suggest-img"
                    style={{ width: "100%", height: "170px" }}
                  />
                </div>
                <div className="bottom-details mt-2">
                  <h5> {item.name}</h5>
                  <p style={{ float: "right", fontSize: "14px" }}>
                    <span style={{ marginBottom: "20px", fontWeight: "500" }}>
                      <br />
                      <HiStar
                        style={{ color: "#FFD700", marginBottom: "6px" }}
                      />{" "}
                      4.8
                    </span>
                  </p>
                  <p>
                    <HiLocationMarker
                      style={{ color: "#674343", marginBottom: "4px" }}
                    />
                    {item.location}
                  </p>
                  <div className="down">
                    <p>Starting Price</p>
                    <p>
                      Rs.{item.price}{" "}
                      <span style={{ fontSize: "12px", opacity: "0.6" }}>
                        onwards
                      </span>{" "}
                      <span>
                        <BsCheckCircleFill
                          style={{
                            color: "#674343",
                            marginBottom: "10px",
                            float: "right",
                          }}
                        />
                      </span>
                    </p>
                    <div className="  detail-btn ">
                      <ContactPopup />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <h3 className="centering">No data found</h3>
        )}
        {/* pagination */}
        <div className="pagination">
          <Pagination className="pagination-container">
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            {/* <Pagination.Ellipsis /> */}

            <Pagination.Item>{2}</Pagination.Item>
            <Pagination.Item>{3}</Pagination.Item>
            <Pagination.Item>{4}</Pagination.Item>
            <Pagination.Item>{5}</Pagination.Item>
            {/* <Pagination.Item disabled>{14}</Pagination.Item> */}

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
      {/* footer */}

      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default ServiceCategory;
