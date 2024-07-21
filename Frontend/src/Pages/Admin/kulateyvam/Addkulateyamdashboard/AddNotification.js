import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";
import { Formik } from "formik";
import * as Yup from "yup";
import InputField from "../../AddTempleList/TempleForm/TempleFormComponents/InputField";

import { useLocation, useNavigate } from "react-router-dom";
import {
  getAreaList,
  getCityList,
  getCountryList,
  getDistrictList,
  getStateList,
} from "../../AddTempleList/utils";
import { Toast } from "primereact/toast";
import PrimeDropdown from "../../AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
import { useForm } from "react-hook-form";
import "../kulaCss/AddMatrimonial.scss";

import { Calendar } from "primereact/calendar";
import axios from "axios";
import PrimeDate from "../../AddTempleList/TempleForm/TempleFormComponents/PrimeDate";
import PrimeTime from "../../AddTempleList/TempleForm/TempleFormComponents/PrimeTime";
import { format } from "date-fns";

const AddNotification = () => {
  const navigate = useNavigate();

  const toast = useRef(null);

  const { state: locationState } = useLocation();

  const displayToaster = () => {
    toast.current.show({
      severity: "success",
      summary: "Done",
      detail: `Notification Form ${locationState ? "is Updated" : "Created"}`,
      life: 3000,
    });
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  const createEventData = (DATA) => {
    axios
      .post(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/createNotification`,
        DATA
      )
      .then((res) => {
        displayToaster();
      });
  };

  const updateEventData = (data) => {
    axios
      .put(
        `${process.env.REACT_APP_DEV_BASE_URL}/community/updateNotification/${locationState.id}`,
        data
      )
      .then((res) => {
        navigate(-1);
      });
  };
  const Groupname = sessionStorage.getItem("Group_Name");
  let defaultValues = {};

  if (locationState) {
    const {
      title,
      notifyDate,

      description,
    } = locationState;

    // Default Values when editing
    defaultValues = {
      ...locationState,
      title: title,
      notifyDate: new Date(notifyDate),

      description: description,
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

  const getFormData = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("notifyDate", data.notifyDate);

    formData.append("description", data.description);
    formData.append("Groupname", Groupname);
    console.log("form data", data);
    return formData;
  };

  const onSubmit = async (data) => {
    console.log("data", data);
    if (locationState) {
      //update
      updateEventData(getFormData(data));
    } else {
      //create
      createEventData(getFormData(data));
      // getFormData(DATA, eventImage)
      // getFormData(data);
    }
  };
  return (
    <div className="createFormPage">
      <Toast ref={toast} />

      <Container>
        <div className="createFormPage__header">
          <h5 className="createFormPage__header--title"> {locationState ? "Edit" :"Create"} Notification</h5>
        </div>
        <Form
          className="createFormPage__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Row>
            <Col lg={6}>
              <InputField {...commonProps} keyId="title" name=" Title" />
            </Col>
            <Col lg={6}>
              <PrimeTime
                errors={errors}
                control={control}
                name="notifyDate"
                controlId="notifyDate"
              />
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="description"
                name=" Description"
                others={{ as: "textarea", rows: 4 }}
              />
            </Col>
          </Row>

          <br />
          <button
            className="customBtn"
            style={{ color: "black" }}
            type="submit"
          >
            Submit
          </button>
        </Form>
      </Container>
    </div>
  );
};

export default AddNotification;
