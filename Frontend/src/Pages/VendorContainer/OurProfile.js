import React, { useState, useEffect } from "react";
import Api from "../../Api";
import { useForm } from "react-hook-form";
import { Row, Card, Col, Button } from "react-bootstrap";
import "./index.scss";
import { Dropdown } from "primereact/dropdown";
import { Select } from "antd";
import { Option } from "antd/lib/mentions";

function TabsVendor() {
  const [countryList, setcountryList] = useState([]);
  const [countryValue, setCountryValue] = useState();
  const [stateList, setstateList] = useState([]);
  const [stateValue, setStateValue] = useState();
  const [districtList, setdistrictList] = useState([]);
  const [districtValue, setDistrictValue] = useState();

  // const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];
  const [cityvalue, setCityValue] = useState();

  const Cityselect = [
    { label: "Theni", value: "Theni" },
    { label: "Chennai", value: "Chennai" },
    { label: "Tiruvannamalai", value: "Tiruvannamalai" },
  ];

  const city = [
    { label: "Cumbum", value: "Cumbum" },
    { label: "Theni", value: "Theni" },
    { label: "Bodi", value: "Bodi" },
  ];

  // useEffect(() => {
  //   getCountry();
  // }, []);

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const getCountry = async () => {
    await Api.get("country/getallcountry").then((res) => {
      setcountryList(res.data.data);
    });
  };

  const getState = (country_id) => {
    console.log("stateList", country_id);
    setCountryValue(country_id);
    Api.get(`state/stateById/${country_id}`).then((res) => {
      setstateList(res.data.data);
    });
  };

  const getDistrict = (state_id) => {
    setStateValue(state_id);
    Api.get(`district/districtById/${state_id}`).then((res) => {
      setdistrictList(res.data.data);
    });
  };
  const [cityList, setCityList] = useState([]);
  const getCity = (districtId) => {
    setDistrictValue(districtId);
    Api.get(`city/cityById/${districtId}`).then((res) => {
      console.log(res.data, "ghjfhjgf");
      setCityList(res.data.data);
    });
  };
  const [companyNamess, setCompanyName] = useState();
  const [emailId, setEmailId] = useState();
  const [addresss, setAddress] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [vendorDetails, setVendorDetails] = useState([]);
  const [country, setCountry] = useState(null);
  console.log("country@@", country);
  const id = localStorage.getItem("userId");
  useEffect(() => {
    getValue();
  }, []);
  const getValue = () => {
    Api.get(`/vendor/vendor_get/${id}`).then((res) => {
      setVendorDetails(res.data.data);
      setCompanyName(res.data.data.companyName);
      setPhoneNumber(res.data.data.phone);
      setEmailId(res.data.data.email);
      setAddress(res.data.data.address);
      setCountry(res.data.data.country);
      setStateValue(res.data.data.state);
      setDistrictValue(res.data.data.district);
      setCityValue(res.data.data.city);
      console.log("res.data", res.data.data);
    });
  };
  console.log("vendorDetails", vendorDetails);
  console.log("companyNamess", companyNamess);

  const handleFormSubmit = async () => {
    console.log("getValues()", getValues());
    const Details = {
      Name: getValues().Name,
      email: getValues().email,
      phone: getValues().phone,
      address: getValues().address,
      businessName: getValues().businessName,
      country: getValues().country,
      state: getValues().state,
      district: getValues().district,
      city: getValues().city,
    };
    const userId = localStorage.getItem("userId");
    console.log("Detailsss", Details);
    await Api.put(`/vendor/vendorput/${userId}`, Details).then((resp) => {
      alert("your Semester datas stored");
      console.log(resp.data.data, "respppppp");
    });
  };

  return (
    <div>
      <Col xs={12} md={12} lg={12}>
       
        <div
          className="ourProfileParentdiv"
          style={{ backgroundColor: "white", padding: "10px 20px" }}
        >
          <div style={{ paddingLeft: "10px" }}>
            <center>
              {" "}
              <h4 className="pages-title mt-3 mb-5"> Vendor Details</h4>
            </center>
            <center>
              <form onSubmit={handleSubmit(handleFormSubmit)}>
                <Row className="xg-3">
                  <Col xs={12} md={4} lg={3}>
                    <div className="formrow">
                      Name:
                    </div>
                  </Col>
                  <Col xs={12} md={8} lg={8}>
                    <div>
                      <input
                        className="inputcolumn-ourProfile"
                        type="text"
                        name="name"
                        {...register("Name", { required: true })}
                        value={companyNamess}
                        onChange={(e) => {
                          setCompanyName(e.target.value);
                        }}
                        required="required"
                        placeholder="Name"
                      />
                      {errors.Name && (
                        <p className="text-danger">Name is required</p>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row className="xg-3 mt-1">
                  <Col xs={12} md={4} lg={3}>
                    <div className="formrow">
                      Email:
                    </div>
                  </Col>
                  <Col xs={12} md={8} lg={8}>
                    <div>
                      <input
                        className="inputcolumn-ourProfile"
                        type="text"
                        name="name"
                        value={emailId}
                        onChange={(e) => {
                          setEmailId(e.target.value);
                        }}
                        {...register("email", { required: true })}
                        // required="required"
                        placeholder="Name"
                      />
                      {errors.email && !emailId && (
                        <p className="text-danger">Email is required</p>
                      )}
                    </div>
                  </Col>
                </Row>
                <Row className="xg-3 mt-1">
                  <Col xs={12} md={4} lg={3}>
                    <div className="formrow mt-2">
                      Country:
                    </div>
                  </Col>
                  <Col xs={12} md={8} lg={8} >
                    {/* <Dropdown
                  filter
                  className="inputcolumn-ourProfile"
                  optionLabel="name"
                  optionValue="id"
                  placeholder="Select a Country"
                  value={country} 
                  options={countryList}
                  {...register("country", { required: true })}
                  onChange={(e) => {
                    setCountry(e.target.value); // Update the 'country' state when the selection changes
                    getState(e.target.value); // You can also call the 'getState' function here if needed
                  }}
                /> */}
                    <Select
                      className="inputcolumn_drp_ourProfile"
                      value={country}
                      onChange={(e) => {
                        setCountryValue(e);
                        getState(e);
                      }}
                      placeholder="Select a Gender"
                      style={{ border: "none" }}
                    >
                      {countryList?.map((option) => (
                        <Option key={option.id} value={option.id}>
                          {option.name}
                        </Option>
                      ))}
                    </Select>
                    {errors.country && (
                      <p className="error-text-color-Profile">
                        Country is required
                      </p>
                    )}
                  </Col>
                </Row>
                <Row className="xg-3 mt-1">
                  <Col xs={12} md={4} lg={3}>
                    <div className="formrow mt-2">
                      State:
                    </div>
                    &nbsp;
                  </Col>
                  <Col xs={12} md={8} lg={8} className="mt-2">
                    {/* <Dropdown
                    filter
                    className="inputcolumn-ourProfile"
                    value={stateValue}
                    options={stateList}
                    {...register("state", { required: true })}
                    optionLabel="name"
                    optionValue={"id"}
                    placeholder="Select a State"
                    onChange={(e) => getDistrict(e.value)}
                  /> */}
                    <Select
                      className="inputcolumn_drp_ourProfile"
                      value={stateValue}
                      onChange={(value) => getDistrict(value)}
                      placeholder="Select a Gender"
                      style={{ border: "none" }}
                    >
                      {stateList?.map((option) => (
                        <Option key={option.id} value={option.id}>
                          {option.name}
                        </Option>
                      ))}
                    </Select>
                    {errors.state && (
                      <p className="error-text-color-Profile">
                        State is required
                      </p>
                    )}
                  </Col>
                </Row>
                <Row className="xg-3 mt-1">
                  <Col xs={12} md={4} lg={3}>
                    <div className="formrow mt-2">
                      District:
                    </div>
                  </Col>
                  <Col xs={12} md={8} lg={8} className="mt-2">
                    {/* <Dropdown
                    filter
                    className="inputcolumn-ourProfile"
                    value={districtValue}
                    options={districtList}
                    {...register("district", { required: true })}
                    optionLabel={"name"}
                    placeholder="Select a District"
                    optionValue={"id"}
                    onChange={(e) => getCity(e.value)}
                  /> */}
                    <Select
                      className="inputcolumn_drp_ourProfile"
                      value={districtValue}
                      onChange={(value) => getCity(value)}
                      placeholder="Select a Gender"
                      style={{ border: "none" }}
                    >
                      {districtList?.map((option) => (
                        <Option key={option._id} value={option.name}>
                          {option.name}
                        </Option>
                      ))}
                    </Select>
                    {errors.district && (
                      <p className="error-text-color-Profile">
                        District is required
                      </p>
                    )}{" "}
                  </Col>
                </Row>
                <Row className="xg-3 mt-1">
                  <Col xs={12} md={4} lg={3}>
                    <div className="formrow mt-2">
                      City:
                    </div>
                  </Col>
                  <Col xs={12} md={8} lg={8} className="mt-2">
                    {/* <Dropdown
                    filter
                    className="inputcolumn-ourProfile"
                    value={cityvalue}
                    options={cityList}
                    {...register("city", { required: true })}
                    optionLabel={"cityName"}
                    placeholder="Select a City"
                    optionValue={"_id"}
                    onChange={(e) => setCityValue(e.value)}
                  /> */}
                    <Select
                      className="inputcolumn_drp_ourProfile"
                      value={cityvalue}
                      onChange={(value) => setCityValue(value)}
                      placeholder="Select a City"
                      style={{ border: "none" }}
                    >
                      {cityList?.map((option) => (
                        <Option key={option.id} value={option.name}>
                          {option.name}
                        </Option>
                      ))}
                    </Select>
                    {errors.city && (
                      <p className="error-text-color-Profile">
                        City is required
                      </p>
                    )}
                  </Col>
                </Row>
                <Row className="mt-1">
                  <Col xs={12} md={4} lg={3}>
                    <div className="formrow">
                      Mobile Number:
                    </div>
                  </Col>
                  <Col xs={12} md={8} lg={8}>
                    {" "}
                    <div>
                      <input
                        className="inputcolumn-ourProfile"
                        type="text"
                        name="name"
                        {...register("phone", { required: true })}
                        value={phoneNumber}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                        }}
                        required="required"
                        placeholder="Name"
                      />
                      {errors.phone && !phoneNumber && (
                        <p className="text-danger">Phone is required</p>
                      )}{" "}
                    </div>
                  </Col>
                </Row>
                <Row className="mt-1">
                  <Col xs={12} md={4} lg={3}>
                    <div className="formrow">
                      Address:
                    </div>
                  </Col>
                  <Col xs={12} md={8} lg={8}>
                    <div>
                      <input
                        className="inputcolumn-ourProfile"
                        type="text"
                        name="name"
                        {...register("address", { required: true })}
                        value={addresss}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                        required="required"
                        placeholder="Name"
                      />
                      {errors.address && !addresss && (
                        <p className="text-danger">Address is required</p>
                      )}{" "}
                    </div>
                  </Col>
                </Row>
                <Row className="mt-1">
                  <Col xs={12} md={4} lg={3}>
                    <div className="formrow">
                      Business Name:
                    </div>
                  </Col>
                  <Col xs={12} md={8} lg={8}>
                    {" "}
                    <div>
                      <input
                        className="inputcolumn-ourProfile"
                        type="text"
                        name="name"
                        value="test"
                        {...register("businessName", { required: true })}
                        required="required"
                        placeholder="Name"
                      />
                      {errors.businessName && (
                        <p className="text-danger">Name is required</p>
                      )}
                    </div>
                  </Col>
                </Row>
                <div className="upgrade_column mb-3">
                  <Button className="button1" type="submit">
                    Upgrade
                  </Button>
                </div>
              </form>
            </center>
          </div>
        </div>
        {/* </Card> */}
      </Col>
    </div>
  );
}

export default TabsVendor;
