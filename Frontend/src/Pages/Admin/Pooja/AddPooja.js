import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { getLanguageList } from "./utils";
import PrimeDropdown from "../AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
import { useForm } from "react-hook-form";
import "../CreateFields/createDistrictForm.scss";
import InputField from "../AddTempleList/TempleForm/TempleFormComponents/InputField";
// import PrimeMultiselect from "../AddTempleList/TempleForm/TempleFormComponents/PrimeMultiselect";

import axios from "axios";
import { Toast } from "primereact/toast";
import PrimeMultiselect from "../AddTempleList/TempleForm/TempleFormComponents/PrimeMultiselect";

const AddPooja = () => {
  const FunctionType = [
    { name: "InsideTemple", value: 1 },
    { name: "OutTemple", value: 2 },
    { name: "Both", value: 3 },
  ];

  const [language, setLanguage] = useState([]);
  // console.log(language, "$$$$$$$$");
  const { state: locationState } = useLocation();
  const navigate = useNavigate();
  const toast = useRef(null);
  const [FunctionImage, setFunctionImage] = useState(
    locationState?.FunctionImage || null
  );
  console.log("State from locationssssssss", locationState);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: locationState
      ? {
        ...locationState,
        languages: locationState.languages
          .split(",")
          .map((item) => parseInt(item)),
      }
      : {},
  });

  console.log("Location", locationState);

  useEffect(() => {
    getLanguageList(setLanguage);
  }, []);

  const displayToaster = () => {
    toast.current.show({
      severity: "success",
      summary: "Done",
      detail: `Function ${locationState ? "is Updated" : "Created"}`,
      life: 3000,
    });

    setTimeout(() => {
      navigate("/admin/viewPooja");
    }, 1000);
  };

  const getFormData = (data, mainImage) => {
    const formData = new FormData();
    formData.append("Description", data.Description);
    formData.append("FunctionImage", mainImage);
    formData.append("AdditionalInformation", data.AdditionalInformation);
    formData.append("MinPriceWithMaterial", data.MinPriceWithMaterial);
    formData.append("MaxPriceWithMaterial", data.MaxPriceWithMaterial);
    formData.append("MinPriceWithOutMaterial", data.MinPriceWithOutMaterial);
    formData.append("MaxPriceWithOutMaterial", data.MaxPriceWithOutMaterial);
    formData.append("FunctionType", data.FunctionType);

    formData.append("FunctionName", data.FunctionName);
    formData.append("languages", data.languages);
    formData.append("FunctionID", data.FunctionID);
    formData.append("language_name", data.language_name);

    // formData.append("is_active", data.is_active);

    return formData;
  };

  const onSubmit = async (data, e) => {
    try {
      if (locationState) {
        console.log(locationState, "sdsadad");
        //update
        await axios.put(
          `${process.env.REACT_APP_DEV_BASE_URL}/functions/update/${locationState.FunctionID}`,
          getFormData(data, FunctionImage)
        );
        displayToaster();
      } else {
        //create
        alert("hi");
        await axios.post(
          `${process.env.REACT_APP_DEV_BASE_URL}/functions/create`,
          getFormData(data, FunctionImage)
        );
        displayToaster();
      }
    } catch (error) {
      console.log(error, "sumu");
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
    <div className="createListForm">
      <Toast ref={toast} />

      <Container>
        <h1 className="createListForm__title">Create Pooja</h1>
        <section>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col lg={4}>
                <InputField
                  errors={errors}
                  {...commonProps}
                  keyId={"FunctionName"}
                  name="Pooja Name"
                />
              </Col>

              <Col lg={4}>
                <InputField
                  errors={errors}
                  {...commonProps}
                  keyId={"MinPriceWithMaterial"}
                  name="Minimum Price"
                />
              </Col>

              <Col lg={4}>
                <InputField
                  errors={errors}
                  {...commonProps}
                  keyId={"MaxPriceWithMaterial"}
                  name="Maximum Price"
                />
              </Col>

              <h6 style={{ margin: "2rem 0 0.5rem 0", color: "brown" }}>
                Price Without Material:
              </h6>
              <Col lg={4}>
                <InputField
                  errors={errors}
                  {...commonProps}
                  keyId={"MinPriceWithOutMaterial"}
                  name="Minimum Price"
                />
              </Col>
              <Col lg={4}>
                <InputField
                  errors={errors}
                  {...commonProps}
                  keyId={"MaxPriceWithOutMaterial"}
                  name="Maximum Price"
                />
              </Col>
              <Col lg={4}>
                <PrimeMultiselect
                  style={{ height: "50px" }}
                  controlKey="languages"
                  name="languages"
                  optionLabel="language_name"
                  optionValue="language_id"
                  onChangeHandler={(e) => { }}
                  list={language}
                  errors={errors}
                  control={control}
                // required={false}
                />
              </Col>
              <Col lg={4}>
                <PrimeDropdown
                  style={{ height: "50px", marginTop: "40px" }}
                  controlKey="FunctionType"
                  name="Pooja Type"
                  optionLabel="name"
                  optionValue="value"
                  list={FunctionType}
                  errors={errors}
                  control={control}
                />
              </Col>
              <Col lg={4}>
                <InputField
                  {...commonProps}
                  keyId="Description"
                  name="Description"
                  others={{ as: "textarea", rows: 4 }}
                />
              </Col>
              <Col lg={4}>
                <InputField
                  {...commonProps}
                  keyId="AdditionalInformation"
                  name="Additional Information"
                  others={{ as: "textarea", rows: 4 }}
                />
              </Col>

              <Col lg={4}>
                <Form.Group controlId="mainImage" className="mb-3">
                  <Form.Label>Main Image</Form.Label>
                  <Form.Control
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    onChange={(e) => setFunctionImage(e.target.files[0])}
                  />
                  {FunctionImage && (
                    <img
                      alt="Preview"
                      src={`${process.env.REACT_APP_DEV_BASE_URL}${FunctionImage}`}
                      className="previewImage"
                    />
                  )}
                </Form.Group>
              </Col>
            </Row>

            <div className="d-flex justify-content-end py-3">
              <button
                type="submit"
                className="me-4 customBtn dark-text small"
                variant="primary">
                Submit
              </button>
              <button
                className="customBtn small bg"
                type="reset"
                onClick={() => {
                  navigate("/admin/viewPooja");
                }}>
                Cancel
              </button>
            </div>
          </Form>
        </section>
      </Container>
    </div>
  );
};

export default AddPooja;
