import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik } from "formik";
import * as Yup from "yup";
import HeaderNavBar from "../../../components/HeaderNavBar";

// style
import "../../../components/Css/sass/Vendordeatils.scss";
import Api from "../../../Api";

import getStoredState from "redux-persist/es/getStoredState";
import { fetchCountryList } from "../../../components/Redux_Toolkit/allTempleSlice";
import { Navigate, useNavigate, useLocation } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  CompanyName: Yup.string().required("*CompanyName is Required"),
  Categories: Yup.object().required("* Is Required"),
  SubCategories: Yup.object().required("* Is Required"),
  Description: Yup.string().required("*Is Required"),
  DiscountPrice: Yup.string().required("*Is Required"),
  RegularPrice: Yup.string().required("*Is Required"),
  WebsiteName: Yup.string().required("*Is Required"),
  EmailId: Yup.string().required("*Is Required"),
  State: Yup.object().required("*State Is Required"),
  Country: Yup.object().required("*Country Is Required"),
  City: Yup.object().required("*City Is Required"),
  District: Yup.object().required("*Is Required"),
  // Area: Yup.object().required("Area Name is Required"),
});

function VendorCategoryv() {
  const navigate = useNavigate();
  const { state } = useLocation();
 

  const [details, setDetails] = useState([]);
  const [countryList, setcountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [AreaList, setAreaList] = useState([]);
  const [subDetails, setSubDetails] = useState([]);

  const [categroyName, setCategroyName] = useState();
  const [subCategroyName, setSubCategroyName] = useState();

  const [companyName, setCompanyName] = useState("");
  const [description, setDescription] = useState("");
  const [emailId, setEmailId] = useState("");
  const [website, setWebsite] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [selectState, setSelectState] = useState("");
  const [selectCountry, setSelectcountry] = useState("");
  const [selectDistrict, setSelectDistrict] = useState("");
  const [selectCity, setSelectCity] = useState("");
  const [selectArea, setSelectArea] = useState("");


  useEffect(() => {
    getCountryList();
    vendorCategroyGet();
  }, []);


  const handleFormSubmit = async data => {
    console.log("XChxfghdfj", data);
    console.log("Categoriespostdata");
    await Api.post(`/categories/create`, data).then(resp => {
      console.log("responseee", resp.data);
      navigate(-1);
    });
  };
  const vendorCategroyGet = () => {
    Api.get(`/categoriesList/getCategories`).then(resp => {
      setDetails(resp.data);
      console.log("resp.data", resp.data);
    });
  };
  const vendorSubCategroyGet = categoryId => {
    fetch(
      `${process.env.REACT_APP_DEV_BASE_URL}/subCategoriesList/getSubCategories/${categoryId}`
    )
      .then(res => {
        return res.json();
      })
      .then(res => setSubDetails(res));
  };

  const getCountryList = () => {
    Api.get(`/country/getAll`).then(res => {
      setcountryList(res.data);
    });
  };
  const getStateList = countryId => {
    Api.get(`/state/getState/${countryId}`).then(res => {
      setStateList(res.data);
    });
  };
  const getDistrictList = cityId => {
    Api.get(`/district/getdistrict/${cityId}`).then(res => {
      setDistrictList(res.data);
    });
  };
  const getCityList = stateId => {
    Api.get(`/city/getCity/${stateId}`).then(res => {
      setCityList(res.data);
    });
  };
  const getAreaList = districtId => {
    console.log("cityId", districtId);
    Api.get(`/area/getArea/${districtId}`).then(res => {
      setAreaList(res.data);
    });
  };
  return (
    <div>
      <>
        <Formik
          enableReinitialize={true}
          initialValues={{
            CompanyName: companyName,
            Categories: categroyName,
            SubCategories: subCategroyName,
            Description: description,
            EmailId: emailId,
            WebsiteName: website,
            RegularPrice: regularPrice,
            DiscountPrice: discountPrice,
            Country: selectCountry,
            City: selectCity,
            State: selectState,
            District: selectDistrict,
          }}
          validationSchema={LoginSchema}
          // onSubmit={()=>{console.log("jhfjkhjke")}}

          onSubmit={values => {
            const upadate = {
              companyName: values.CompanyName,
              Categories: values.Categories.value,
              SubCategories: values.SubCategories.value,
              description: values.Description,
              emailId: values.EmailId,
              websiteLink: values.WebsiteName,
              regularPrice: values.RegularPrice,
              discountPrice: values.DiscountPrice,
              country: values.Country.value,
              city: values.City.value,
              state: values.State.value,
              district: values.District.value,
            };

            handleFormSubmit(upadate);
          }}
        >
          {({
            touched,
            errors,
            values,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
          }) => (
            <>
              {console.log(values, "green")}
              <Row className="justify-content-center">
                <Col className="sub-head-1 form mt-3" md={9} sm={12} xs={12}>
                  <div className="sub-head  ">
                    <br />
                    <h4
                      style={{
                        textAlign: "center",
                        marginTop: "3%",
                        marginLeft: "5%",
                      }}
                    >
                      {!state ? "Create New Category" : "Edit Category"}
                    </h4>
                    <br />
                    <br />
                    <Form className="form-vd">
                      <div className="d-flex">
                        <Col
                          md={4}
                          sm={4}
                          className="d-flex justify-content-end align-items-center pe-3"
                        >
                          <p>Company Name:</p>
                        </Col>
                        <Col>
                          <input
                            className="inputvd"
                            name="CompanyName"
                            defaultValue={state?.CompanyName}
                            autoComplete="off"
                            onBlur={handleBlur("CompanyName")}
                            onChange={e => {
                              handleChange(e.target.value);
                              setCompanyName(e.target.value);
                              setFieldValue("CompanyName", state?.CompanyName);
                            }}
                          />
                          {touched.CompanyName && errors.CompanyName && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.CompanyName}
                            </p>
                          )}
                        </Col>
                      </div>
                      <br />
                      <div className="d-flex">
                        <Col
                          md={4}
                          sm={4}
                          className="d-flex justify-content-end align-items-center pe-3"
                        >
                          <p>Categories:</p>
                        </Col>

                        <Col>
                          <Select
                            className="inputvd"
                            name="Categories"
                            placeholder="select Categories"
                            defaultValue={categroyName}
                            onBlur={handleBlur("Categories")}
                            onChange={(opt, e) => {
                              console.log(e, "optttttttttttt");
                              setCategroyName(opt);
                              setFieldValue("Categories", opt.value);
                              vendorSubCategroyGet(opt.id);
                            }}
                            options={details.map(list => ({
                              label: list.categoryName,
                              id: list.categoryId,
                              value: list.categoryName,
                            }))}
                          />
                          {touched.Categories && errors.Categories && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.Categories}
                            </p>
                          )}
                        </Col>
                      </div>
                      <br />
                      <div className="d-flex">
                        <Col
                          md={4}
                          sm={4}
                          className="d-flex justify-content-end align-items-center pe-3"
                        >
                          <p>Sub Categories:</p>
                        </Col>

                        <Col>
                          <Select
                            className="inputvd"
                            name="SubCategories"
                            placeholder="select Sub Categories"
                            value={subCategroyName}
                            onBlur={handleBlur("SubCategories")}
                            onChange={e => {
                              // handleChange(e);

                              setSubCategroyName(e);
                              setFieldValue("SubCategories", e);
                            }}
                            options={subDetails?.map(list => ({
                              label: list.subCategoryName,
                              value: list.subCategoryName,
                            }))}
                          />
                          {touched.SubCategories && errors.SubCategories && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.SubCategories}
                            </p>
                          )}
                        </Col>
                      </div>
                      <br />
                      <div className="d-flex">
                        <Col
                          md={4}
                          sm={4}
                          className="d-flex justify-content-end align-items-center pe-3"
                        >
                          <p>Description: </p>
                        </Col>
                        <Col>
                          <input
                            className="inputvd"
                            type="string"
                            name="Description"
                            // value={!state ? description : state.Description}
                            // value={values.Description}
                            defaultValue={
                              !state ? description : state.Description
                            }
                            onBlur={handleBlur("Description")}
                            onChange={e => {
                              handleChange(e.target.value);
                              setDescription(e.target.value);
                              setFieldValue("Description", e.target.value);
                            }}
                          />
                          {touched.Description && errors.Description && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.Description}
                            </p>
                          )}
                        </Col>
                      </div>
                      <br />
                      <div className="d-flex">
                        <Col
                          md={4}
                          sm={4}
                          className="d-flex justify-content-end align-items-center pe-3"
                        >
                          <p>Email Id:</p>
                        </Col>
                        <Col>
                          <input
                            name="EmailId"
                            className="inputvd"
                            type="email"
                            defaultValue={!state ? emailId : state.EmailId}
                            onBlur={handleBlur("EmailId")}
                            onChange={e => {
                              handleChange(e.target.value);
                              setEmailId(e.target.value);
                              setFieldValue("EmailId", e.target.value);
                            }}
                          />
                          {touched.EmailId && errors.EmailId && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.EmailId}
                            </p>
                          )}
                        </Col>
                      </div>
                      <br />
                      <div className="d-flex">
                        <Col
                          md={4}
                          sm={4}
                          className="d-flex justify-content-end align-items-center pe-3"
                        >
                          <p>Website Link:</p>
                        </Col>
                        <Col>
                          <input
                            className="inputvd"
                            name="WebsiteName"
                            defaultValue={!state ? website : state.WebsiteLink}
                            type="string"
                            onBlur={handleBlur("WebsiteName")}
                            onChange={e => {
                              handleChange("WebsiteName");
                              setWebsite(e.target.value);
                              setFieldValue("WebsiteName", e.target.value);
                            }}
                          />
                          {touched.WebsiteName && errors.WebsiteName && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.WebsiteName}
                            </p>
                          )}
                        </Col>
                      </div>
                      <br />
                      <div className="d-flex">
                        <Col
                          md={4}
                          sm={4}
                          className="d-flex justify-content-end align-items-center pe-3"
                        >
                          <p>Regular Price:</p>
                        </Col>
                        <Col>
                          <input
                            className="inputvd"
                            name="RegularPrice"
                            defaultValue={
                              !state ? regularPrice : state.RegularPrice
                            }
                            type="text"
                            onBlur={handleBlur("RegularPrice")}
                            onChange={e => {
                              handleChange("RegularPrice");
                              setRegularPrice(e.target.value);
                              setFieldValue("RegularPrice", e.target.value);
                            }}
                          />
                          {touched.RegularPrice && errors.RegularPrice && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.RegularPrice}
                            </p>
                          )}
                        </Col>
                      </div>
                      <br />
                      <div className="d-flex">
                        <Col
                          md={4}
                          sm={4}
                          className="d-flex justify-content-end align-items-center pe-3"
                        >
                          <p>Discount Price:</p>
                        </Col>
                        <Col>
                          <input
                            className="inputvd"
                            name="DiscountPrice"
                            defaultValue={
                              !state ? discountPrice : state.DiscountPrice
                            }
                            onBlur={handleBlur("DiscountPrice")}
                            onChange={e => {
                              handleChange("DiscountPrice");
                              setDiscountPrice(e.target.value);
                              setFieldValue("DiscountPrice", e.target.value);
                            }}
                          />
                          {touched.DiscountPrice && errors.DiscountPrice && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.DiscountPrice}
                            </p>
                          )}
                        </Col>
                      </div>

                      <br />
                      <div className="d-flex">
                        <Col
                          md={4}
                          sm={4}
                          className="d-flex justify-content-end align-items-center pe-3"
                        >
                          <p>Country:</p>
                        </Col>
                        <Col>
                          <Select
                            className="inputvd"
                            name="Country"
                            placeholder="select country"
                            value={selectCountry}
                            onBlur={handleBlur("Country")}
                            onChange={e => {
                              setFieldValue("Country", e);
                              setSelectcountry(e);
                              const values = e.value;
                              getStateList(values);
                            }}
                            values={selectCountry}
                            options={countryList.map(list => ({
                              label: list.country,
                              value: list.id,
                            }))}
                          />
                          {touched.Country && errors.Country && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.Country}
                            </p>
                          )}
                        </Col>
                      </div>
                      <br />

                      <div className="d-flex">
                        <Col
                          md={4}
                          sm={4}
                          className="d-flex justify-content-end align-items-center pe-3"
                        >
                          <p>State:</p>
                        </Col>
                        <Col>
                          <Select
                            className="inputvd"
                            name="State"
                            placeholder="select State"
                            value={selectState}
                            onBlur={handleBlur("State")}
                            onChange={e => {
                              handleChange("State");
                              setSelectState(e);
                              setFieldValue("State", e);
                              const values = e.value;
                              getDistrictList(values);
                            }}
                            values={selectState}
                            options={stateList.map(list => ({
                              label: list.state,
                              value: list.id,
                            }))}
                          />
                          {touched.State && errors.State && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.State}
                            </p>
                          )}
                        </Col>
                      </div>
                      <br />
                      <div className="d-flex">
                        <Col
                          md={4}
                          sm={4}
                          className="d-flex justify-content-end align-items-center pe-3"
                        >
                          <p>District:</p>
                        </Col>
                        <Col>
                          <Select
                            className="inputvd"
                            name="District"
                            placeholder="select district"
                            value={selectDistrict}
                            onBlur={handleBlur("District")}
                            onChange={e => {
                              setFieldValue("District", e);
                              handleChange("District");
                              setSelectDistrict(e);
                              const values = e.value;
                              getCityList(values);
                            }}
                            values={selectDistrict}
                            options={districtList.map(list => ({
                              label: list.district,
                              value: list.id,
                            }))}
                          />
                          {touched.District && errors.District && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.District}
                            </p>
                          )}
                        </Col>
                      </div>
                      <br />
                      <div className="d-flex">
                        <Col
                          md={4}
                          sm={4}
                          className="d-flex justify-content-end align-items-center pe-3"
                        >
                          <p>City:</p>
                        </Col>
                        <Col>
                          <Select
                            className="inputvd"
                            name="City"
                            placeholder="select city"
                            value={selectCity}
                            onBlur={handleBlur("City")}
                            onChange={e => {
                              handleChange("City");
                              setFieldValue("City", e);
                              setSelectCity(e);
                              const values = e.value;
                              getAreaList(values);
                            }}
                            values={selectCity}
                            options={cityList.map(list => ({
                              label: list.city,
                              value: list.id,
                            }))}
                          />
                          {touched.City && errors.City && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.City}
                            </p>
                          )}
                        </Col>
                      </div>

                      <br />
                      {/* <div className="d-flex">
                      <Col
                        md={4}
                        sm={4}
                        className="d-flex justify-content-end align-items-center pe-3"
                      >
                        <p>Area:</p>
                      </Col>
                      <Col>
                        <Select
                        className="inputvd"
                          name="Area"
                          placeholder="select Area"
                          value={selectArea}
                          onBlur={handleBlur("Area")}
                          onChange={e => {
                            handleChange("Area");
                            setSelectArea(e);
                            const values = e.value;
                            getAreaList(values);

                          }}
                          values={selectArea}
                          options={AreaList.map(list => ({
                            label: list.Area,
                            value: list.id,
                          }))}
                        />
                        {touched.Area && errors.Area && (
                          <p
                            style={{
                              color: "red",
                              fontSize: 14,
                              padding: 0,
                              margin: 0,
                            }}
                          >
                            {errors.Area}
                          </p>
                        )}
                      </Col>
                    </div> */}
                      <br />
                      <button
                        className="btn-vd"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Submit
                      </button>
                      <br />
                      <br />
                    </Form>
                  </div>
                </Col>
              </Row>

              <br />
            </>
          )}
        </Formik>
      </>
    </div>
  );
}

export default VendorCategoryv;
