import React, { useState, useEffect } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik } from "formik";
import * as Yup from "yup";
import { UploadOutlined } from "@ant-design/icons";
import { Button, message, Upload } from "antd";

// style
import "../../../components/Css/sass/Vendordeatils.scss";
import Api from "../../../Api";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { clearConfig } from "dompurify";

const LoginSchema = Yup.object().shape({
  // Photo: Yup.string().required("*is Required"),
  PromoCode: Yup.string().required("*PromoCode Is Required"),
  StartingDate: Yup.string().required("*StartingDate Is Required"),
  EndingDate: Yup.string().required("*EndingDate Is Required"),
  Categories: Yup.object().required("* Is Required"),
  SubCategories: Yup.object().required("* Is Required"),
  Description: Yup.string().required("*Is Required"),
});

function VendorCategoryreg() {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log("state", state);

  const [photo, setPhoto] = useState(null);
  const [promoCode, setPromoCode] = useState("");
  const [details, setDetails] = useState([]);
  const [subDetails, setSubDetails] = useState([]);
  const [categroyName, setCategroyName] = useState();
  const [subCategroyName, setSubCategroyName] = useState();
  const [description, setDescription] = useState("");
  const [startingDate, setStartingDate] = useState("");
  const [endingDate, setEndingDate] = useState("");
  console.log("endingDate", description);
  const x = localStorage.getItem("id");

  useEffect(() => {
    vendorCategroyGet();
  }, []);
  const handleFormSubmit = async (data) => {
    try {
      if (state && state.id) {
        const id = state.id;
        const response = await Api.put(`offer/update/${id}`, data);
        console.log("Update successful", response.data);
      } else {
        const response = await Api.post(`/offer/create`, data);
        console.log("Creation successful", response.data);
      }

      // Assuming navigate function comes from a navigation library
      navigate(-1);
    } catch (error) {
      console.error("Error during form submission", error);
      // Handle the error as needed
    }
  };

  // const handleFormSubmit = async (data) => {
  //   // console.log("XChxfghdfj", data);
  //   // console.log("Categoriespostdata");
  //   if(state){
  //     console.log('first', state.id)
  //     await Api.put(`offer/update/${state.id}`, data).then((resp) => {
  //       console.log("responseee", resp.data);
  //       navigate(-1);
  //     });
  //   }
  //   else{
  //     await Api.post(`/offer/create`, data).then((resp) => {
  //       console.log("responseee", resp.data);
  //       navigate(-1);
  //     });
  //   }

  // };
  const vendorCategroyGet = () => {
    Api.get(`/categoriesList/getCategories`).then((resp) => {
      setDetails(resp.data);
      console.log("resp.data", resp.data);
    });
  };
  const vendorSubCategroyGet = (categoryId) => {
    fetch(
      `${process.env.REACT_APP_DEV_BASE_URL}/subCategoriesList/getSubCategories/${categoryId}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => setSubDetails(res));
  };

  var a = "";
  console.log(a, "a");

  var b;
  console.log(b, "b");

  // console.log(c, "c");

  const props = {
    name: "file",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      console.log(info.file, "testttt");
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const getFormData = (data, mainImage) => {
    const formData = new FormData();
    formData.append("x", x);

    formData.append("promoCode", data.PromoCode);
    formData.append("Photo", mainImage);
    formData.append("startDate", data.StartingDate);
    formData.append("endDate", data.EndingDate);
    formData.append("category", data.Categories.value);
    formData.append("subcategory", data.SubCategories.value);
    formData.append("description", data.Description);
    console.log("form data", data);
    return formData;
  };

  const onsubmit = async (data) => {
    return handleFormSubmit(getFormData(data, photo));
  };
  return (
    <div>
      <>
        <Formik
          enableReinitialize={true}
          initialValues={{
            Photo: photo,
            PromoCode: promoCode,
            StartingDate: startingDate,
            EndingDate: endingDate,
            Categories: categroyName,
            SubCategories: subCategroyName,
            Description: description,
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            onsubmit(values);
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
                      {!state ? "Create New Offer" : "Edit Offer"}
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
                          <p>Photo:</p>
                        </Col>

                        <Col>
                          <input
                            className="inputvd"
                            type="file"
                            accept=".jpg, .png, .jpeg"
                            name="Photo"
                            // value={photo}
                            autoComplete="off"
                            onBlur={handleBlur("photo")}
                            onChange={(e) => {
                              console.log(e.target.files[0], "onChangeConsole");
                              handleChange("photo");
                              setPhoto(e.target.files[0]);
                            }}
                          />
                          {/* {touched.Photo && errors.Photo && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.Photo}
                            </p>
                          )} */}
                        </Col>
                      </div>
                      <br />
                      {/*  */}
                      <div className="d-flex">
                        <Col
                          md={4}
                          sm={4}
                          className="d-flex justify-content-end align-items-center pe-3"
                        >
                          <p>Promo Code:</p>
                        </Col>
                        <Col>
                          <input
                            className="inputvd"
                            type="string"
                            name="promo code"
                            defaultValue={!state ? promoCode : state.PromoCode}
                            // value={promoCode}
                            onBlur={handleBlur("promocode")}
                            onChange={(e) => {
                              handleChange("promocode");
                              setPromoCode(e.target.value);
                              setFieldValue("PromoCode", e.target.value);
                            }}
                          />
                          {touched.PromoCode && errors.PromoCode && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.PromoCode}
                            </p>
                          )}
                        </Col>
                      </div>
                      <br />
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
                            defaultValue={
                              !state ? categroyName : state?.Category
                            }
                            onBlur={handleBlur("Categories")}
                            onChange={(opt, e) => {
                              console.log(e, "optttttttttttt");
                              setCategroyName(opt);
                              setFieldValue("Categories", opt.value);
                              vendorSubCategroyGet(opt.id);
                            }}
                            options={details.map((list) => ({
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
                            // value={subCategroyName}
                            defaultValue={
                              !state ? subCategroyName : state.Subcategory
                            }
                            onBlur={handleBlur("SubCategories")}
                            onChange={(e) => {
                              // handleChange(e);

                              setSubCategroyName(e);
                              setFieldValue("SubCategories", e);
                            }}
                            options={subDetails?.map((list) => ({
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
                          <p>Starting Date: </p>
                        </Col>
                        <Col>
                          <input
                            className="inputvd"
                            type="date"
                            name="starting date"
                            // value={startingDate}
                            defaultValue={
                              !state ? startingDate : state.StartDate
                            }
                            onBlur={handleBlur("startingDate")}
                            onChange={(e) => {
                              handleChange("startingDate");
                              setStartingDate(e.target.value);
                            }}
                          />
                          {touched.StartingDate && errors.StartingDate && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.StartingDate}
                            </p>
                          )}
                        </Col>
                      </div>
                      <br />
                      {/*  */}
                      {/*end date  */}
                      <div className="d-flex">
                        <Col
                          md={4}
                          sm={4}
                          className="d-flex justify-content-end align-items-center pe-3"
                        >
                          <p>Ending Date: </p>
                        </Col>
                        <Col>
                          <input
                            className="inputvd"
                            type="date"
                            name="ending date"
                            // value={endingDate}
                            defaultValue={!state ? endingDate : state.EndDate}
                            onBlur={handleBlur("endingDate")}
                            onChange={(e) => {
                              handleChange("endingDate");
                              setEndingDate(e.target.value);
                              setFieldValue("EndDate", e.target.value);
                            }}
                          />
                          {touched.EndingDate && errors.EndingDate && (
                            <p
                              style={{
                                color: "red",
                                fontSize: 14,
                                padding: 0,
                                margin: 0,
                              }}
                            >
                              {errors.EndingDate}
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
                            defaultValue={
                              !state ? description : state.Description
                            }
                            onBlur={handleBlur("Description")}
                            onChange={(e) => {
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

export default VendorCategoryreg;
