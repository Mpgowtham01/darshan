import React, { useCallback, useState, useRef } from "react";
import { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import { Toast } from "primereact/toast";
import InputField from "../AddTempleList/TempleForm/TempleFormComponents/InputField";
import PrimeDropdown from "../AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Api from "../../../Api";
export default function AddAdvertisement() {
  const navigate = useNavigate();
  const { state: locationState } = useLocation();
  console.log("object@@@## :>> ", locationState);
  const vendorId = localStorage.getItem("id");

  const { id } = useParams();
  const [checked, setChecked] = useState(0);

  const toast = useRef(null);
  const [details, setDetails] = useState([]);
  const [subDetails, setSubDetails] = useState([]);

  const colors = {
    opacity: 0.7,
    cursor: "not-allowed",
  };

  let defaultValues = {};

  if (locationState) {
    const {
      name,
      price,
      offerPrice,
      photo,
      subCatergories,
      catergories,
      details,
      address,
    } = locationState;

    defaultValues = {
      name: name,
      price: price,
      offerPrice: offerPrice,
      photo: photo,
      address: address,
      subCatergories: subCatergories,
      catergories: catergories,
      details: details,
    };
  }

  useEffect(() => {
    vendorCategroyGet();
    // getCountryList(setCountries);

    // if (locationState?.Country) {
    //   getStateList(locationState?.Country, setStates);
    // }

    // if (locationState?.State) {
    //   getDistrictList(locationState?.State, setDistrict);
    // }

    // if (locationState?.District) {
    //   getCityList(locationState?.District, setCities);
    // }

    // if (locationState?.City) {
    //   getAreaList(locationState?.City, setAreas);
    // }
  }, []);

  const getFormData = (data) => {
    const formData = new FormData();
    formData.append("vendorId", vendorId);

    formData.append("name", data.name);
    formData.append("photo", data.photo[0]);
    formData.append("price", data.price);
    formData.append("offerPrice", data.offerPrice);
    formData.append("subCatergories", data.subCatergories);
    formData.append("catergories", data.catergories);
    formData.append("details", data.details);
    formData.append("address", data.address);
    console.log("form data", formData);
    return formData;
  };

  const handlefrom = (DATA) => {
    if (locationState) {
      Api.put(`/vendor/updates/${locationState.id}`, DATA)
        .then((res) => {
          navigate(-1);
        })
        .catch((error) => console.log(error));
    } else {
      Api.post("/vendor/createsAd", DATA)
        .then((res) => {
          console.log("22222222222222 :>> ", res);
          navigate(-1);
        })
        .catch((error) => console.log(error));
    }
  };

  // submit data to backend
  const onSubmit = async (data) => {
    const aa = getFormData(data);
    console.log("aa111111 :>> ", aa);
    handlefrom(aa);
    // return handlefrom(getFormData(data));
    // const DATA = {
    //   vendorId: vendorId,
    //   name: data.name,
    //   price: data.price,
    //   offerPrice: data.offerPrice,
    //   subCatergories: data.subCatergories,
    //   catergories: data.catergories,
    //   address: data.address,
    //   details: data.details,
    // };
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: locationState
      ? defaultValues
      : {
          name: "",
          photo: [],
          price: "",
          offerPrice: "",
          catergories: "",
          subCatergories: "",
          address: "",
          details: "",
        },
  });

  const commonProps = {
    errors,
    register,
  };

  const vendorCategroyGet = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/categoriesList/getCategories`)
      .then((resp) => {
        setDetails(resp.data);
        console.log("resp.data", resp.data);
      });
  };

  const vendorSubCategroyGet = (categoryId) => {
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/subCategoriesList/getSubCategories/${categoryId}`
      )
      .then((res) => setSubDetails(res.data));
  };

  return (
    <div className="createFormPage">
      <Toast ref={toast} />

      <Container>
        <div className="createFormPage__header">
          <h5 className="createFormPage__header--title">Add Category</h5>
        </div>
        <Form
          className="createFormPage__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Row className="mb-4">
            <Col lg={6}>
              <InputField {...commonProps} keyId="name" name="Bussiness Name" />
            </Col>
            <Col lg={6}>
              <PrimeDropdown
                controlKey="catergories"
                name="Catergories"
                optionLabel="categoryName"
                optionValue="categoryId"
                onChangeHandler={(e) => {
                  vendorSubCategroyGet(e.target.value);
                }}
                list={details}
                errors={errors}
                control={control}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <PrimeDropdown
                controlKey="subCatergories"
                name="SubCatergories"
                optionLabel="subCategoryName"
                optionValue="subCategoryId"
                style={{ colors }}
                // onChangeHandler={relationshipOnChangeHandler}
                {...commonProps}
                list={subDetails}
                errors={errors}
                control={control}
              />
            </Col>

            <Col lg={6}>
              <InputField {...commonProps} keyId="price" name="price" />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="offerPrice"
                name="offerPrice"
              />
            </Col>
            <Col lg={6}>
              <label>Photo</label>
              <input type="file" {...register("photo", true)} />
              {errors["photo"] && (
                <Form.Text className="text-danger">photo is required</Form.Text>
              )}
            </Col>
            {/* <Col lg={6}>
              <Form.Group controlId="mainImage" className="mb-3">
                <Form.Label>advertisement Image</Form.Label>
                <Form.Control
                  accept=".png, .jpg, .jpeg"
                  type="file"
                  onChange={(e) => setImages(e.target.files[0])}
                />
              </Form.Group>
            </Col> */}
          </Row>
          <Row>
            {" "}
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="details"
                name=" details"
                others={{ as: "textarea", rows: 4 }}
              />
            </Col>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="address"
                name="Address"
                others={{ as: "textarea", rows: 4 }}
              />
            </Col>
          </Row>
          {/* <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="password"
                name="Password"
                style={{ colors }}
              />
            </Col>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="phone_number"
                name="Phone Number"
                style={{ colors }}
              />
            </Col>
          // </Row>
          {/* <Row> */}{" "}
          {/* <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="family_list"
                name="Family List"
                style={{ colors }}
              />
            </Col> */}
          {/* <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="phone_number"
                name="Phone Number"
                style={{ colors }}
              />
            </Col>
            <Col lg={6}>
              <Form.Group controlId="isActive">
                <Form.Label>Active Status</Form.Label>
                <Switch
                  {...register("isActive", {
                    required: false,
                  })}
                  defaultChecked={
                    locationState ? locationState.isActive : checked
                  }
                  onChange={(e) => {
                    if (e) {
                      setChecked(1);
                    } else {
                      setChecked(0);
                    }
                  }}
                />
              </Form.Group>
            </Col>
          </Row> */}
          {/* <Row>
            <Col lg={4}>
              <PrimeDropdown
                controlKey="country"
                name="Country"
                optionLabel="country"
                optionValue="id"
                onChangeHandler={(e) => {
                  countryOnChangeHandler(e.target.value);
                }}
                list={countries}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={4}>
              <PrimeDropdown
                controlKey="state"
                name="State"
                optionLabel="state"
                optionValue="id"
                onChangeHandler={(e) => statesOnChangeHandler(e.target.value)}
                list={states}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={4}>
              <PrimeDropdown
                controlKey="district"
                name="District"
                optionLabel="district"
                optionValue="id"
                onChangeHandler={(e) => districtOnChangeHandler(e.target.value)}
                list={district}
                errors={errors}
                control={control}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <PrimeDropdown
                controlKey="city"
                name="City"
                optionLabel="city"
                optionValue="id"
                onChangeHandler={(e) => cityOnChangeHandler(e.target.value)}
                list={cities}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={4}>
              <PrimeDropdown
                controlKey="area"
                name="Area"
                optionLabel="area_name"
                optionValue="area_id"
                onChangeHandler={(e) => areaOnChangeHandler(e.target.value)}
                list={areas}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={4}>
              <InputField {...commonProps} keyId="pincode" name="PinCode" />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="address"
                name="Address"
                others={{ as: "textarea", rows: 4 }}
              />
            </Col>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="details"
                name=" details"
                others={{ as: "textarea", rows: 4 }}
              />
            </Col>
          </Row> */}
          <hr />
          <div className="btnContainer ">
            <button
              type="submit"
              className="me-4 customBtn dark-text small"
              variant="primary"
              onClick={handleSubmit(onSubmit)}
            >
              Submit
            </button>
            <button
              type="button"
              className="customBtn small bg"
              variant="outline-danger"
              onClick={() => {
                navigate(-1);
              }}
            >
              Cancel
            </button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
