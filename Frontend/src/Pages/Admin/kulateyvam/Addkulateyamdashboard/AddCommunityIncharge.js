import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import axios from "axios";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Col, Container, Row } from "react-bootstrap";
import InputField from "../../AddTempleList/TempleForm/TempleFormComponents/InputField";
import PrimeDate from "../../../Admin/AddTempleList/TempleForm/TempleFormComponents/PrimeDate";
import PrimeTime from "../../../Admin/AddTempleList/TempleForm/TempleFormComponents/PrimeTime";
import "../../CreateFields/CreateFormPage.scss";

import PrimeDropdown from "../../AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
import { ConfigConsumer } from "antd/lib/config-provider";

export default function AddCommunityinformation() {
  const navigate = useNavigate();
  const { state: locationState } = useLocation();
  const [sex, setSex] = useState([]);

  const [categories, setCategories] = useState([]);
  const [blogImage, setBlogImage] = useState(
    locationState?.image || null
  );
  console.log("blogImage", blogImage);

  const name = [
    { value: "head", gender: "Head" },
    { value: "treasure", gender: "Treasure" },
    { value: "secretary", gender: "Secretary" },
  ];

  const toast = useRef(null);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: locationState ? locationState : {} });

  const getCategories = async () => {
    const Url = "/blogeventcategory/getcategories";

    try {
      const res = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}${Url}`
      );
      if (res.data) {
        setCategories(res.data);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const displayToaster = () => {
    toast.current.show({
      severity: "success",
      summary: "Done",
      detail: `Details ${locationState ? "is Updated" : "Created"}`,
      life: 3000,
    });
    setTimeout(() => {
      navigate("");
    }, 1000);
  };

  const getFormData = (data, mainImage) => {
    const formData = new FormData();
    formData.append("function_image", mainImage);
    formData.append("description", data.description);
    formData.append("role", data.role);
    formData.append("name", data.name);
    formData.append("phone_number", data.phone_number);

    return formData;
  };
  const genderOnChangeHandler = e => {
    setSex(e.target.value);
  };
  const onSubmit = async (data, e) => {
    // console.log("Data", {
    //   ...data,
    //   FunctionImage,
    // });
    try {
      if (locationState) {
        //update
        await axios.put(
          `${process.env.REACT_APP_DEV_BASE_URL}/blog/update/${locationState.id}`,
          getFormData(data, blogImage),
          { withCredentials: true }
        );
        displayToaster();
      } else {
        //create
        await axios.post(
          `${process.env.REACT_APP_DEV_BASE_URL}/communityTemple/createCommunityTempleIncharge`,
          getFormData(data, blogImage),
          { withCredentials: true }
        );
        displayToaster();
      }
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Something went wrong,please try again!!!",
        life: 3000,
      });
    }
  };

  const commonProps = {
    errors,
    register,
  };

  return (
    <div className="createFormPage">
      <Toast ref={toast} />

      <Container>
        <div className="createFormPage__header">
          <h5 className="createFormPage__header--title"> {locationState ? "Edit" : ""} Incharge </h5>
        </div>

        <Form
          className="createFormPage__form"
          onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col lg={4}>
              {" "}
              <InputField {...commonProps} keyId="name" name="Name" />
            </Col>
            <Col lg={4}>
              <InputField
                {...commonProps}
                keyId="phone_number"
                name=" phone Number"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <PrimeDropdown
                controlKey="role"
                name="Role"
                optionLabel="gender"
                optionValue="value"
                onChangeHandler={genderOnChangeHandler}
                list={name}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={4}>
              <InputField
                {...commonProps}
                keyId="description"
                name="Description"
                others={{ as: "textarea", rows: 4 }}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Form.Group controlId="image" className="mb-3">
                <Form.Label>About Image</Form.Label>
                <Form.Control
                  accept=".png, .jpg, .jpeg"
                  type="file"
                  onChange={e => {
                    setBlogImage(e.target.files[0]);
                  }}
                />

                {blogImage && (
                  <img
                    alt="preview"
                    src={`${process.env.REACT_APP_DEV_BASE_URL}${blogImage}`}
                    className="previewImage"
                  />
                )}
              </Form.Group>
            </Col>
          </Row>

          <div className="btnContainer">
            <button className="customBtn dark-text small" type="submit">
              Submit
            </button>

            <button
              className="customBtn ms-3 bg small"
              onClick={() => navigate("/admin/blog")}>
              Clear
            </button>
          </div>
        </Form>
      </Container>
    </div>
  );
}
