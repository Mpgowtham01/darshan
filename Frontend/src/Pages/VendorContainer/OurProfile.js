import React, { useState, useEffect } from "react";
import Api from "../../Api";
import { useForm } from "react-hook-form";
import { Row, Card, Col, Button } from "react-bootstrap";
import "./index.scss";
import { Dropdown } from "primereact/dropdown";
import { Select } from "antd";
import { Option } from "antd/lib/mentions";

function TabsVendor() {
  const [typeValue, setTypeValue] = useState();
  const [languageDetais, setLanguageDetais] = useState();

  const [countryValue, setCountryValue] = useState();
  const [country, setCountry] = useState(null);
  const [stateValue, setStateValue] = useState();
  const [stateList, setstateList] = useState([]);
  const [districtValue, setDistrictValue] = useState();
  const [districtList, setdistrictList] = useState([]);
  const [cityvalue, setCityValue] = useState();
  const [cityList, setCityList] = useState([]);

  const typeDetails = [
    { name: "Iyer", id: "Iyer" },
    { name: "Vendor", id: "Vendor" },
  ];
  const languageDetails = [
    { language: "Tamil", value: "Tamil" },
    { language: "Malayalam", value: "Malayalam" },
    { language: "English", value: "English" },
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

  // const getState = (country_id) => {
  //   console.log("stateList", country_id);
  //   setCountryValue(country_id);
  //   Api.get(`state/stateById/${country_id}`).then((res) => {
  //     setstateList(res.data.data);
  //   });
  // };

  // const getDistrict = (state_id) => {
  //   setStateValue(state_id);
  //   Api.get(`district/districtById/${state_id}`).then((res) => {
  //     setdistrictList(res.data.data);
  //   });
  // };
  // const [cityList, setCityList] = useState([]);
  // const getCity = (districtId) => {
  //   setDistrictValue(districtId);
  //   Api.get(`city/cityById/${districtId}`).then((res) => {
  //     console.log(res.data, "ghjfhjgf");
  //     setCityList(res.data.data);
  //   });
  // };
  const id = localStorage.getItem("userId");
  // useEffect(() => {
  //   getValue();
  // }, []);
  // const getValue = () => {
  //   Api.get(`/vendor/vendor_get/${id}`).then((res) => {
  //     setVendorDetails(res.data.data);
  //     setCompanyName(res.data.data.companyName);
  //     setPhoneNumber(res.data.data.phone);
  //     setEmailId(res.data.data.email);
  //     setAddress(res.data.data.address);
  //     setCountry(res.data.data.country);
  //     setStateValue(res.data.data.state);
  //     setDistrictValue(res.data.data.district);
  //     setCityValue(res.data.data.city);
  //     console.log("res.data", res.data.data);
  //   });
  // };

  const handleFormSubmit = async () => {
    // console.log("getValues()", getValues());
    // const Details = {
    //   Name: getValues().Name,
    //   email: getValues().email,
    //   phone: getValues().phone,
    //   address: getValues().address,
    //   businessName: getValues().businessName,
    //   country: getValues().country,
    //   state: getValues().state,
    //   district: getValues().district,
    //   city: getValues().city,
    // };
    // const userId = localStorage.getItem("userId");
    // console.log("Detailsss", Details);
    // await Api.put(`/vendor/vendorput/${userId}`, Details).then((resp) => {
    //   alert("your Semester datas stored");
    //   console.log(resp.data.data, "respppppp");
    // });
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

            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <div>
                <p className="ourProfile_Heading_div">Personal Details</p>

                <Row>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">
                          Priest Name
                        </label>
                      </div>
                      <div>
                        <input
                          className="inputcolumn-ourProfile"
                          type="text"
                          name="priestName"
                          {...register("priestName", { required: true })}
                          required="required"
                          placeholder="Priest Name"
                        />
                        {errors.priestName && (
                          <p className="text-danger">Name is required</p>
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">
                          Temple Name
                        </label>
                      </div>
                      <div>
                        <input
                          className="inputcolumn-ourProfile"
                          type="text"
                          name="templeName"
                          {...register("Name", { required: true })}
                          required="required"
                          placeholder="Temple Name"
                        />
                        {errors.templeName && (
                          <p className="text-danger">Name is required</p>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">
                          Aadhar Number
                        </label>
                      </div>
                      <div>
                        <input
                          className="inputcolumn-ourProfile"
                          type="number"
                          name="aadharNumber"
                          {...register("Name", { required: true })}
                          required="required"
                          placeholder="Aadhar Number"
                        />
                        {errors.Name && (
                          <p className="text-danger">Name is required</p>
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">
                          Mobile Number
                        </label>
                      </div>
                      <div>
                        <input
                          className="inputcolumn-ourProfile"
                          type="number"
                          name="mobileNumber"
                          {...register("Name", { required: true })}
                          required="required"
                          placeholder="Mobile Number"
                        />
                        {errors.mobileNumber && (
                          <p className="text-danger">Name is required</p>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">
                          Alternate Number
                        </label>
                      </div>
                      <div>
                        <input
                          className="inputcolumn-ourProfile"
                          type="number"
                          name="mobileNumber"
                          {...register("Name", { required: true })}
                          required="required"
                          placeholder="Alternate Number"
                        />
                        {errors.mobileNumber && (
                          <p className="text-danger">Name is required</p>
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">Language</label>
                      </div>
                      <div>
                        <Select
                          className="inputcolumn_drp"
                          value={languageDetais}
                          onChange={(e) => {
                            setLanguageDetais(e);
                          }}
                          placeholder="Select a Type"
                          style={{ border: "none" }}
                        >
                          {languageDetails?.map((option) => (
                            <Option value={option.value}>{option.name}</Option>
                          ))}
                        </Select>
                        {errors.country && (
                          <p className="error-text-color-Profile">
                            Language is required
                          </p>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">Country</label>
                      </div>
                      <div>
                        <Select
                          className="inputcolumn_drp"
                          value={country}
                          onChange={(e) => {
                            setCountryValue(e);
                            // getState(e);
                          }}
                          placeholder="Select a Country"
                          style={{ border: "none" }}
                        >
                          {countryValue?.map((option) => (
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
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">State</label>
                      </div>
                      <div>
                        <Select
                          className="inputcolumn_drp"
                          value={stateValue}
                          // onChange={(value) => getDistrict(value)}
                          placeholder="Select a State"
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
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">District</label>
                      </div>
                      <div>
                        <Select
                          className="inputcolumn_drp"
                          value={districtValue}
                          // onChange={(value) => getCity(value)}
                          placeholder="Select a District"
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
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">City</label>
                      </div>
                      <div>
                        <Select
                          className="inputcolumn_drp"
                          value={cityvalue}
                          // onChange={(value) => setCityValue(value)}
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
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">Address</label>
                      </div>
                      <div>
                        <textarea
                          className="inputcolumn-ourProfile"
                          type="textarea"
                          name="address"
                          {...register("pinCode", { required: true })}
                          required="required"
                          placeholder="Address"
                        />
                        {errors.pinCode && (
                          <p className="text-danger">Name is required</p>
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">Pincode</label>
                      </div>
                      <div>
                        <input
                          className="inputcolumn-ourProfile"
                          type="number"
                          name="priestName"
                          {...register("pinCode", { required: true })}
                          required="required"
                          placeholder="Pincode"
                        />
                        {errors.pinCode && (
                          <p className="text-danger">Name is required</p>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <p className="ourProfile_Heading_div">Professional Details</p>

                <Row>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">Type</label>
                      </div>
                      <div>
                        <Select
                          className="inputcolumn_drp"
                          value={typeValue}
                          onChange={(e) => {
                            setTypeValue(e);
                          }}
                          placeholder="Select a Type"
                          style={{ border: "none" }}
                        >
                          {typeDetails?.map((option) => (
                            <Option value={option.id}>{option.name}</Option>
                          ))}
                        </Select>
                        {errors.country && (
                          <p className="error-text-color-Profile">
                            Country is required
                          </p>
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">
                          Year of Experience
                        </label>
                      </div>
                      <div>
                        <input
                          className="inputcolumn-ourProfile"
                          type="text"
                          name="yearofExperience"
                          {...register("Name", { required: true })}
                          required="required"
                          placeholder="Experience"
                        />
                        {errors.yearofExperience && (
                          <p className="text-danger">Name is required</p>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">
                          Pooja Counts
                        </label>
                      </div>
                      <div>
                        <input
                          className="inputcolumn-ourProfile"
                          type="number"
                          name="poojaCounts"
                          {...register("poojaCounts", { required: true })}
                          required="required"
                          placeholder="Pooja Counts"
                        />
                        {errors.Name && (
                          <p className="text-danger">Name is required</p>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="upgrade_column mb-3">
                <Button className="button1" type="submit">
                  Upgrade
                </Button>
              </div>
            </form>
          </div>
        </div>
        {/* </Card> */}
      </Col>
    </div>
  );
}

export default TabsVendor;
