import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Card, Col } from "react-bootstrap";
import "./index.scss";
import Addlist from "./Addlist";
// import { Input, Radio, Space } from "antd";
import { MultiSelect } from "primereact/multiselect";
import { Radio } from "antd";
import Api from "../../Api";
import { Dropdown } from "primereact/dropdown";

function Addcategory() {
  const [skills, setSkills] = useState([]);
  const [skillist, setskilList] = useState([]);
  const [User, setUser] = useState([]);
  const [CheckReact, setCheckReact] = useState(false);
  const [value, setValue] = useState(null);
  const [reactValues, setReactValues] = useState({
    react1: "",
    react2: "",
    react3: "",
    react4: "",
    react5: "",
    react6: "",
  });
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const [selectedCities, setSelectedCities] = useState(null);
  const cities = [
    { name: "Veg", code: "NY" },
    { name: "nonveg", code: "RM" },
    { name: "Both", code: "IST" },
  ];
  const [selectedCity, setSelectedCity] = useState(null);

  const [selectedType, setSelectedType] = useState(null);
  const types = [
    { name: "2 Sharing", code: "NY" },
    { name: "3 Sharing", code: "RM" },
    { name: "4 Sharing", code: "IST" },
  ];

  const id = localStorage.getItem("id");
  // useEffect(() => {
  //   getoneUser();
  // });
  // const getoneUser = () => {
  //   Api.get(`vendor/vendor_get/${id}`).then((res) => {
  //     setUser(res.data);
  //   });
  // };
  const handleChange = (e) => {
    console.log(e, "event");
    setValue(e.target.value);
  };

  const [vendorDetails, setVendorDetails] = useState([]);
  useEffect(() => {
    getValue();
    getCategory();
    getCountry();
    getState();
    getDistrict();
  }, []);
  const getValue = async () => {
    await Api.get(`/vendor/vendor_get/${id}`).then((res) => {
      setVendorDetails(res.data.data);
    });
  };
  const [categoryList, setCategoryList] = useState();
  const getCategory = async () => {
    await Api.get(`/vendor/getAllCategory`).then((res) => {
      setCategoryList(res.data.data);
    });
  };

  const [countryList, setcountryList] = useState([]);
  const [stateList, setstateList] = useState([]);
  const [districtList, setdistrictList] = useState([]);
  const [country, setCountry] = useState();
  const [state, setState] = useState();
  const [districtValue, setDistrictValue] = useState();
  const [cityvalue, setCityValue] = useState();

  const getCountry = async () => {
    await Api.get("country/getallcountry").then((res) => {
      setcountryList(res.data.data);
    });
  };

  const getState = (countryId) => {
    setCountry(countryId);
    Api.get(`state/stateById/${countryId}`).then((res) => {
      setstateList(res.data.data);
    });
  };

  const getDistrict = (stateId) => {
    setState(stateId);
    Api.get(`district/districtById/${stateId}`).then((res) => {
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
  const [addCategory, setAddCategory] = useState([]);

  const handleFormSubmit = async () => {
    const userDetails = {
      companyName: getValues().companyName,
      Description: getValues().Description,
      email: getValues().Email,
      Websitelink: getValues().Websitelink,
      Regularprice: getValues().Regularprice,
      Discountprice: getValues().Discountprice,
      country: getValues().country,
      State: getValues().State,
      district: getValues().district,
      City: getValues().City,
      category: value,
    };
    console.log("userDetails", userDetails);
    await Api.post(`vendor/createAddCategory`, userDetails)
      .then((res) => {
        setAddCategory({
          status: res.data?.status,
          message: res.data?.message,
        });
        reset();
      })
      .catch((err) => {
        setAddCategory({
          status: err?.response.data?.status,
          message: err?.response.data?.message,
        });
      });
  };

  // const [value, setValue] = useState();
  // const [subcategoryList, setSubCategoryList] = useState();

  // const getCategoryList = async (categoryId) => {
  //   setValue(categoryId);
  //   console.log("categoryId", categoryId);
  //   await Api.get(`/vendor/categoryById/${categoryId}`).then((res) => {
  //     setSubCategoryList(res.data.data);
  //     console.log("res.data", res.data);
  //   });
  // };
  return (
    <div>
      <form>
        <Card className="category_Card">
          <Row className="xg-3">
            <Col xs={12} md={10}>

            <center>
              <h4
                style={{
                  color: "red",
                  fontWeight: "bold",
                  paddingTop:"40px",
                  paddingBottom:"20px",
                  paddingLeft:"40px"

                }}
              >
                Create New Category
              </h4>
              </center>
            </Col>
          </Row>
          <Row className="xg-3">
            <Col xs={12} md={5} className="mt-3">
              <div className="addFormrow">
                Company Name
                <sup className="required_column">*</sup>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div>
                <input
                  className="input_value"
                  // value={vendorDetails.companyName}
                  required="required"
                  // placeholder="Name"
                  {...register("companyName", { required: true })}
                />
                {errors.companyName && <span>This field is required</span>}
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12} md={5} className="mt-3">
              <div className="addFormrow">
                Description <sup className="required_column">*</sup>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="d-flex flex-row gap-3">
                <input
                  className="input_value"
                  // value="text"
                  required="required"
                  // placeholder="Name"
                  {...register("Description", { required: true })}
                />
                {errors.Description && (
                  <p className="error-text-color">Description is required</p>
                )}
              </div>
            </Col>
          </Row>

          <Row className="mt-3">
            <Col xs={12} md={5} className="mt-3">
              <div className="addFormrow">Email ID</div>
            </Col>
            <Col xs={12} md={7}>
              <div>
                <input
                  className="input_value"
                  // value={vendorDetails.email}
                  required="required"
                  // placeholder="Email"
                  {...register("Email", { required: true })}
                />
                {errors.Email && (
                  <p className="error-text-color">Email is required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12} md={5} className="mt-3">
              <div className="addFormrow">Website Link</div>
            </Col>
            <Col xs={12} md={7}>
              <div>
                <input
                  className="input_value"
                  // type="text"
                  // name="name"
                  // value="test"
                  required="required"
                  {...register("Websitelink", { required: true })}
                />
                {errors.Websitelink && (
                  <p className="error-text-color">Websitelink is required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-3 ">
            <Col xs={12} md={5} className="mt-3">
              <div className="addFormrow">
                Regular Price
                <sup className="required_column">*</sup>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div>
                <input
                  className="input_value"
                  // type="text"
                  // name="name"
                  // value="test"
                  required="required"
                  // placeholder="Name"
                  {...register("Regularprice", { required: true })}
                />
                {errors.Regularprice && (
                  <p className="error-text-color">Regularprice is required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col xs={12} md={5} className="mt-3">
              <div className="addFormrow">
                Discount Price
                <sup className="required_column">*</sup>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div>
                <input
                  className="input_value"
                  // type="text"
                  // name="name"
                  // value="test"
                  required="required"
                  // placeholder="Name"
                  {...register("Discountprice", { required: true })}
                />
                {errors.Discountprice && (
                  <p className="error-text-color">Discountprice is required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} md={5}>
              <div className="addFormrow">
                Country
                <sup className="required_column">*</sup>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="d-flex flex-row gap-3">
                <Dropdown
                  className="input_values"
                  filter
                  value={country}
                  options={countryList}
                  {...register("country", { required: true })}
                  optionLabel="name"
                  optionValue={"id"}
                  placeholder="Select a Country"
                  onChange={(e) => getState(e.value)}
                />
                {errors.country && (
                  <p className="error-text-color">country is required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} md={5}>
              <div className="addFormrow">
                State <sup className="required_column">*</sup>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="d-flex flex-row gap-3">
                <Dropdown
                  className="input_values"
                  filter
                  value={state}
                  options={stateList}
                  {...register("State", { required: true })}
                  optionLabel="name"
                  optionValue={"id"}
                  placeholder="Select a State"
                  onChange={(e) => getDistrict(e.value)}
                />
                {errors.State && (
                  <p className="error-text-color">State is required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} md={5}>
              <div className="addFormrow">
                District <sup className="required_column">*</sup>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="d-flex flex-row gap-3">
                <Dropdown
                  filter
                  className="input_values"
                  value={districtValue}
                  options={districtList}
                  {...register("district", { required: true })}
                  optionLabel={"name"}
                  placeholder="Select a District"
                  optionValue={"id"}
                  onChange={(e) => getCity(e.value)}
                />
                {errors.district && (
                  <p className="error-text-color">District is required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="mt-4">
            <Col xs={12} md={5}>
              <div className="addFormrow">
                City <sup className="required_column">*</sup>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="d-flex flex-row gap-3">
                <Dropdown
                  filter
                  className="input_values"
                  value={cityvalue}
                  options={cityList}
                  {...register("City", { required: true })}
                  optionLabel={"cityName"}
                  placeholder="Select a City"
                  optionValue={"_id"}
                  onChange={(e) => setCityValue(e.value)}
                />
                {/* {console.log("cityList", cityList)} */}
                {errors.City && (
                  <p className="error-text-color">City is required</p>
                )}
              </div>
            </Col>
          </Row>

          {/* <Row className="mt-3 ">
            <Col xs={12} md={5}>
              <div className="addFormrow">
                Area
                <sup className="required_column">*</sup>
              </div>
            </Col>
            <Col xs={12} md={8}>
              {" "}
              <div>
                <select
                  className="input_value"
                  // type="text"
                  // name="name"
                  // value="test"
                  required="required"
                  placeholder="Name"
                  {...register("Area", { required: true })}
                >
                  {errors.Area && (
                    <p className="error-text-color">Area is required</p>
                  )}
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                </select>
              </div>
            </Col>
          </Row> */}

          <Row className="mt-3">
            <Col xs={12} md={5}>
              <div className="addFormrow">
                Categories <sup className="required_column">*</sup>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="d-flex flex-row gap-3">
                {/* <Dropdown
                  // filter
                  value={value}
                  options={categoryList}
                  className="inputcolumn"
                  // {...register("country", { required: true })}
                  optionLabel={"categoryName"}
                  optionValue={"_id"}
                  onChange={(e) => {
                    getCategoryList(e.value);
                    console.log("e", e);
                  }}
                /> */}
                <select
                  required="required"
                  onChange={handleChange}
                  className="input_values"
                >
                  <option value="null">--select--</option>
                  <option value="Feril PG">Feril PG</option>
                  <option value="Feril food">Feril food</option>
                  <option value="Feril Tea">Feril Tea</option>
                  <option value="Feril Internet">Feril Internet</option>
                  <option value="Feril Laptop">Feril Laptop</option>
                  {/* <option value="Stationary/Housekeeping">Stationary/Housekeeping</option> */}
                </select>
              </div>
            </Col>
          </Row>

          <div className="mt-2">
            {value == "Feril PG" ? (
              <div style={{ marginLeft: "60px" }}>
                <Row>
                  <Col sm={12} md={5} className="mt-4">
                    PG Name
                  </Col>
                  <Col sm={12} md={5} className="mt-4">
                    <input
                      type="text"
                      // name="react1"
                      onChange={(e) => {
                        setReactValues((pre) => {
                          return { ...pre, [e.target.name]: e.target.value };
                        });
                      }}
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col sm={12} md={5} className="2">
                    Gender
                  </Col>
                  <Col sm={12} md={5} className="2">
                    <Radio.Group name="radiogroup" defaultValue={1}>
                      <Radio value={1}>Male</Radio>
                      <Radio value={2}>Female</Radio>
                    </Radio.Group>
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col sm={12} md={5} className="2">
                    Contact Number
                  </Col>
                  <Col sm={12} md={5} className="2">
                    <input
                      type="number"
                      onChange={(e) => {
                        setReactValues((pre) => {
                          return { ...pre, [e.target.name]: e.target.value };
                        });
                      }}
                    />
                  </Col>
                </Row>

                <Row className="mt-3">
                  <Col sm={12} md={5} className="mt-2">
                    Room Type
                  </Col>
                  <Col sm={12} md={5} className="mt-2">
                    <MultiSelect
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.value)}
                      options={types}
                      optionLabel="name"
                      placeholder="Select a Room Type"
                      className="inputcolumn"
                    />
                  </Col>
                </Row>
                <Row className="mt-3">
                  <Col sm={12} md={5} className="mt-2">
                    Food Type
                  </Col>
                  <Col sm={12} md={5} className="mt-2">
                    <MultiSelect
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.value)}
                      options={cities}
                      optionLabel="name"
                      placeholder="Select a Food Type"
                      className="inputcolumn"
                    />
                  </Col>
                </Row>
              </div>
            ) : null}
          </div>

          <div className="mt-2">
            {value == "Feril food" ? (
              <div style={{ marginLeft: "60px" }}>
                <Row>
                  <Col sm={12} md={5} className="">
                    Vendor Name
                  </Col>
                  <Col sm={12} md={5}>
                    <input
                      type="text"
                      // name="react1"
                      onChange={(e) => {
                        setReactValues((pre) => {
                          return { ...pre, [e.target.name]: e.target.value };
                        });
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={5} className="mt-2">
                    Food Type
                  </Col>
                  <Col sm={12} md={5} className="mt-2">
                    <MultiSelect
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.value)}
                      options={cities}
                      optionLabel="name"
                      placeholder="Select a Food type"
                      className="inputcolumn"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} md={5} className="mt-2">
                    Delivery
                  </Col>
                  <Col sm={12} md={5} className="mt-1">
                    <Radio.Group name="radiogroup" defaultValue={1}>
                      <Radio value={1}>Yes</Radio>
                      <Radio value={2}>No</Radio>
                    </Radio.Group>
                  </Col>
                </Row>
              </div>
            ) : null}
          </div>

          <div className="mt-2">
            {value == "Feril Tea" ? (
              <div style={{ marginLeft: "60px" }}>
                <Row>
                  <Col sm={12} md={5} className="">
                    Name
                  </Col>
                  <Col sm={12} md={5}>
                    <input
                      type="number"
                      // name="react1"
                      onChange={(e) => {
                        setReactValues((pre) => {
                          return { ...pre, [e.target.name]: e.target.value };
                        });
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={5} className="mt-2">
                    Food Type
                  </Col>
                  <Col sm={12} md={5} className="mt-2">
                    <MultiSelect
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.value)}
                      options={cities}
                      optionLabel="name"
                      placeholder="Select a Food type"
                      className="inputcolumn"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} md={5} className="mt-2">
                    Phone Number
                  </Col>
                  <Col sm={12} md={5} className="mt-2">
                    <input
                      type="number"
                      // name="react6"
                      onChange={(e) => {
                        setReactValues((pre) => {
                          return { ...pre, [e.target.name]: e.target.value };
                        });
                      }}
                    />
                  </Col>
                </Row>
              </div>
            ) : null}
          </div>
          <div className="mt-2">
            {value == "Feril Internet" ? (
              <div style={{ marginLeft: "60px" }}>
                <Row>
                  <Col sm={12} md={5} className="mt-2">
                    Service provide Name
                  </Col>
                  <Col sm={12} md={5} className="mt-2">
                    <input
                      type="number"
                      // name="react1"
                      onChange={(e) => {
                        setReactValues((pre) => {
                          return { ...pre, [e.target.name]: e.target.value };
                        });
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={5} className="mt-2">
                    Type
                  </Col>
                  <Col sm={12} md={5} className="mt-2">
                    <Radio.Group name="radiogroup" defaultValue={1}>
                      <Radio value={1}>Broad Band</Radio>
                      <Radio value={2}>Other</Radio>
                    </Radio.Group>
                  </Col>
                </Row>

                <Row>
                  <Col sm={12} md={5} className="mt-2">
                    Package Name
                  </Col>
                  <Col sm={12} md={5} className="mt-2">
                    <input
                      type="text"
                      // name="react6"
                      onChange={(e) => {
                        setReactValues((pre) => {
                          return { ...pre, [e.target.name]: e.target.value };
                        });
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={5} className="mt-2">
                    Speed
                  </Col>
                  <Col sm={12} md={5} className="mt-2">
                    <input
                      type="text"
                      // name="react6"
                      onChange={(e) => {
                        setReactValues((pre) => {
                          return { ...pre, [e.target.name]: e.target.value };
                        });
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={5} className="mt-2">
                    Price
                  </Col>
                  <Col sm={12} md={5} className="mt-2">
                    <input
                      type="number"
                      // name="react6"
                      onChange={(e) => {
                        setReactValues((pre) => {
                          return { ...pre, [e.target.name]: e.target.value };
                        });
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={5} className="mt-2">
                    One time charge
                  </Col>
                  <Col sm={12} md={5} className="mt-2">
                    <input
                      type="number"
                      // name="react6"
                      onChange={(e) => {
                        setReactValues((pre) => {
                          return { ...pre, [e.target.name]: e.target.value };
                        });
                      }}
                    />
                  </Col>
                </Row>
              </div>
            ) : null}
          </div>

          <div className="mt-2">
            {value == "Feril Laptop" ? (
              <div style={{ marginLeft: "60px" }}>
                <Row>
                  <Col sm={12} md={12} className="mt-1">
                    <Radio.Group name="radiogroup" defaultValue={1}>
                      <Radio value={1}>Rent</Radio>
                      <Radio value={2}>Sale</Radio>
                      <Radio value={3}>Both</Radio>
                    </Radio.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={2} className="mt-2">
                    Windows &nbsp;
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        setReactValues((pre) => {
                          return { ...pre, [e.target.name]: e.target.value };
                        });
                      }}
                    />
                  </Col>
                  &nbsp;
                  <Col sm={12} md={2} className="mt-2">
                    Apple &nbsp;
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        setReactValues((pre) => {
                          return { ...pre, [e.target.name]: e.target.value };
                        });
                      }}
                    />
                  </Col>
                  <Col sm={12} md={2} className="mt-2">
                    Mac &nbsp;
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        setReactValues((pre) => {
                          return { ...pre, [e.target.name]: e.target.value };
                        });
                      }}
                    />
                  </Col>
                  <Col sm={12} md={2} className="mt-2">
                    Ipad &nbsp;
                    <input
                      type="checkbox"
                      onChange={(e) => {
                        setReactValues((pre) => {
                          return { ...pre, [e.target.name]: e.target.value };
                        });
                      }}
                    />
                  </Col>
                </Row>
              </div>
            ) : null}
          </div>
          {/* <div>
            {value == "Feril Tea" ? (
              <div>
                <Row>
                  <Col sm={12} md={5} className="mt-2">
                    Room Type
                  </Col>
                  <Col sm={12} md={5} className="mt-2">
                    <MultiSelect
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.value)}
                      options={types}
                      optionLabel="name"
                      placeholder="Select a Room Type"
                      className="inputcolumn"
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} md={5} className="mt-2">
                    Food Type
                  </Col>
                  <Col sm={12} md={5} className="mt-2">
                    <MultiSelect
                      value={selectedCity}
                      onChange={(e) => setSelectedCity(e.value)}
                      options={cities}
                      optionLabel="name"
                      placeholder="Select a Food Type"
                      className="inputcolumn"
                    />
                  </Col>
                </Row>
              </div>
            ) : null}
          </div> */}

          {/* <Row className="mt-3">
            <Col xs={12} md={5} className="mt-2">
              <div className="addFormrow">
                Tag <sup className="required_column">*</sup>
              </div>
            </Col>
            <Col sm={12} md={1}></Col>
            <Col xs={12} md={7} className="mt-2">
              <div className="d-flex flex-row gap-3">
                <select
                  className="input_values"
                  value="India(+91)"
                  required="required"
                  placeholder="Name"
                  {...register("Tag", { required: true })}
                >
                  {errors.Tag && (
                    <p className="error-text-color">Tag is required</p>
                  )}
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                  <option></option>
                </select>
              </div>
            </Col>
          </Row> */}
          <div className="addbutton_column mb=3 mt-4">
            <button
              className="button1"
              onClick={handleSubmit(handleFormSubmit)}
            >
              Submit
            </button>
            {/* <button className="button2 ms-2">Back</button> */}
          </div>
        </Card>
      </form>
      {/* <Col xs={12} md={8}>
        
                    {route==='list' && 
                <Addlist/>
                   }
                  
         </Col> */}
    </div>
  );
}

export default Addcategory;
