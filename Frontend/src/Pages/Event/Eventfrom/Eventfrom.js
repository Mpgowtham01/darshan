import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "../../Admin/AddTempleList/TempleForm/TempleFormComponents/InputField";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getAreaList,
  getCityList,
  getCountryList,
  getDistrictList,
  getStateList,
} from "../../Admin/AddTempleList/utils";
import { Toast } from "primereact/toast";
import PrimeDropdown from "../../Admin/AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
import { useForm } from "react-hook-form";
import ".././../Event/Events.scss";

import { Calendar } from "primereact/calendar";
import axios from "axios";
import PrimeDate from "../../Admin/AddTempleList/TempleForm/TempleFormComponents/PrimeDate";
import PrimeTime from "../../Admin/AddTempleList/TempleForm/TempleFormComponents/PrimeTime";
import { format } from "date-fns";

const Eventfrom = () => {
  const navigate = useNavigate();
  const [countries, setCountries] = useState([]);
  const [district, setDistrict] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [areas, setAreas] = useState([]);
  const toast = useRef(null);

  const { state: locationState } = useLocation();
  const [categories, setCategories] = useState([]);
  const [eventImage, setEventImage] = useState(
    locationState?.event_image || null
  );

  const displayToaster = () => {
    toast.current.show({
      severity: "success",
      summary: "Done",
      detail: `Blog ${locationState ? "is Updated" : "Created"}`,
      life: 3000,
    });
    setTimeout(() => {
      navigate("/admin/event");
    }, 1000);
  };

  const getallcategories = () => {
    axios
      .get(
        `${process.env.REACT_APP_DEV_BASE_URL}/blogeventcategory/getcategories`
      )
      .then(res => {
        // console.log('object :>> ', res.data);
        setCategories(res.data);
      })
      .catch(error => console.log(error));
  };

  const createEventData = DATA => {
    // const newStartDate = format(new Date(DATA.event_startdate), "dd/MM/yyyy");
    // const newEndDate = format(new Date(DATA.event_enddate), "dd/MM/yyyy");
    // DATA.event_startdate = newStartDate;
    // DATA.event_enddate = newEndDate;
    // DATA.event_image = eventImage;
    // console.log("newDatefwerfewrcer :>> ", DATA);
    axios
      .post(`${process.env.REACT_APP_DEV_BASE_URL}/event/create`, DATA)
      .then(res => {
        displayToaster();
      });
  };

  const updateEventData = data => {
    console.log("updateee", data);
    axios
      .put(
        `${process.env.REACT_APP_DEV_BASE_URL}/event/update/${locationState.temple_eventid}`,
        data
      )
      .then(res => {
        console.log("updateevent:>> ", res.data);

        navigate(-1);
      });
  };

  let defaultValues = {};

  if (locationState) {
    const {
      event_name,
      event_startdate,
      event_enddate,
      event_timing,
      address,
      description,
      temple_country,
      temple_district,
      temple_state,
      temple_city,
      event_image,
      contact_details,
    } = locationState;

    // Default Values when editing
    defaultValues = {
      ...locationState,
      event_name: event_name,
      event_startdate: new Date(event_startdate),
      event_enddate: new Date(event_enddate),
      event_timing: new Date(event_timing),
      address: address,
      description: description,
      temple_country: temple_country,
      temple_district: temple_district,
      temple_state: temple_state,
      temple_city: temple_city,
      event_image: event_image,
      contact_details: contact_details,
    };
  }


  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: locationState ? defaultValues : {} });

  const commonProps = {
    errors,
    register,
  };

  useEffect(() => {
    getallcategories();

    getCountryList(setCountries);

    console.log("Temple Country", locationState?.temple_country);
    if (locationState?.temple_country) {
      getStateList(locationState?.temple_country, setStates);
    }

    if (locationState?.temple_state) {
      getDistrictList(locationState?.temple_state, setDistrict);
    }

    if (locationState?.temple_district) {
      getCityList(locationState?.temple_district, setCities);
    }

    if (locationState?.temple_city) {
      getAreaList(locationState?.temple_city, setAreas);
    }
  }, []);

  const countryOnChangeHandler = e => {
    getStateList(e.target.value, setStates);
  };

  const statesOnChangeHandler = e => {
    getDistrictList(e.target.value, setDistrict);
  };

  const districtOnChangeHandler = e => {
    getCityList(e.target.value, setCities);
  };

  const cityOnChangeHandler = e => {
    getAreaList(e.target.value, setAreas);
  };

  // const getFormData = (DATA, mainImage) => {
  //   const formData = new FormData();
  //   formData.append("event_image", mainImage);

  //   return formData;
  // };

  const getFormData = (data, mainImage) => {
    const formData = new FormData();
    formData.append("event_name", data.event_name);
    formData.append("event_image", mainImage);
    formData.append("event_startdate", data.event_startdate);
    formData.append("event_enddate", data.event_enddate);
    formData.append("event_timing", data.event_timing);
    formData.append("temple_city", data.temple_city);
    formData.append("temple_country", data.temple_country);
    formData.append("temple_district", data.temple_district);
    formData.append("temple_state", data.temple_state);
    formData.append("address", data.address);
    formData.append("category", data.category);
    formData.append("contact_details", data.contact_details);
    formData.append("description", data.description);
    console.log("form data", data);
    return formData;
  };


  const onSubmit = async (data) => {
    console.log("data", data);
    if (locationState) {
      //update
      updateEventData(getFormData(data, eventImage));
    } else {
      //create
      createEventData(getFormData(data, eventImage));
      // getFormData(DATA, eventImage)
      // getFormData(data);
    }
  };
  return (
    <div className="createFormPage">
      <Toast ref={toast} />

      <Container>
        <div className="createFormPage__header">
          <h5 className="createFormPage__header--title">Create Event</h5>
        </div>
        <Form
          className="createFormPage__form"
          onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col lg={6}>
              {/* <Form.Group controlId="EVENT NAME">
                <Form.Label>Event Name</Form.Label>
                <Form.Control
                  style={{ width: "70%" }}
                  {...register("event_name", { required: true })}
                  type="text"
                  autoComplete="off" */}
              <InputField
                {...commonProps}
                keyId="event_name"
                name=" EventName"
              />
            </Col>

            <Col lg={6}>
              <PrimeTime
                errors={errors}
                control={control}
                name="startdate"
                controlId="event_startdate"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <PrimeTime
                errors={errors}
                control={control}
                name="enddate"
                controlId="event_enddate"
              />
            </Col>

            <Col lg={6}>
              <PrimeDate
                errors={errors}
                control={control}
                name="Timing"
                controlId="event_timing"
              />
            </Col>
            {/* <Col md={4} sm={12} className='mt-4'>
            Registration is Here

            &nbsp; <input
              type="radio" />
            &nbsp;&nbsp;
            <input
              type="radio" />
          </Col> */}
          </Row>
          <Row>
            <Col lg={6}>
              <PrimeDropdown
                controlKey="temple_country"
                name="Country"
                optionLabel="country"
                optionValue="id"
                onChangeHandler={countryOnChangeHandler}
                list={countries}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={6}>
              <PrimeDropdown
                controlKey="temple_state"
                name="State"
                optionLabel="state"
                optionValue="id"
                onChangeHandler={statesOnChangeHandler}
                list={states}
                errors={errors}
                control={control}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <PrimeDropdown
                controlKey="temple_district"
                name="District"
                optionLabel="district"
                optionValue="id"
                onChangeHandler={districtOnChangeHandler}
                list={district}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={6}>
              <PrimeDropdown
                controlKey="temple_city"
                name="City"
                optionLabel="city"
                optionValue="id"
                onChangeHandler={cityOnChangeHandler}
                list={cities}
                errors={errors}
                control={control}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <PrimeDropdown
                controlKey="category"
                name="categories"
                optionLabel="category_name"
                optionValue="id"
                onChangeHandler={getallcategories}
                list={categories}
                errors={errors}
                control={control}
              />
            </Col>

            <Col lg={6}>
              <Form.Group controlId="ContactDetails">
                <Form.Label>Contact Details</Form.Label>
                <Form.Control
                  {...register("contact_details", { required: true })}
                  type="number"
                  autoComplete="off"
                />
                {errors.contact_details && (
                  <Form.Text className="text-danger">
                    contact is required
                  </Form.Text>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Row>
              <Col lg={6}>
                {/* <Form.Group className="mb-0" controlId="Description">
                  <Form.Label> Description</Form.Label>
                  <Form.Control
                    {...register("description", { required: true })}
                    as="textarea"
                    rows={3}
                  />
                  {errors.description && (
                    <Form.Text className="text-danger">is required</Form.Text>
                  )}
                </Form.Group> */}
                <InputField
                  {...commonProps}
                  keyId="description"
                  name=" Description"
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

            <Col lg={6}>
              <Form.Group controlId="eventImage" className="mb-3 py-2">
                <Form.Label>Event Image</Form.Label>
                <Form.Control
                  accept=".png, .jpg, .jpeg"
                  type="file"
                  {...register("event_Image", { required: true })}
                  onChange={e => {
                    console.log(e.target.files[0])
                    setEventImage(e.target.files[0]);
                  }}
                />

                {eventImage && (
                  <img
                    src={`${process.env.REACT_APP_DEV_BASE_URL}$eventImage}`}
                    className="previewImage"
                  />
                )}
              </Form.Group>
            </Col>
          </Row>
          {/* <Row>
          <Col lg={6}>
           <label>Event Type</label>
            {categories.map((list, i) => {
              return (
                  <Form.Group controlId="eventType" className="mb-1 py-1">
                  <input type="radio"/>{list.category_name}
                  </Form.Group>
              )
            })}
            </Col>
          </Row> */}
          <br />
          <button
            className="customBtn"
            style={{ color: "black" }}
            type="submit">
            Submit
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default Eventfrom;
