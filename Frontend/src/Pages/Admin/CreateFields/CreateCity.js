import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import {
  getDistrictList,
  getStateList,
  getCountryList,
} from "../AddTempleList/utils";
import PrimeDropdown from "../AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
import { useForm } from "react-hook-form";
import "./createDistrictForm.scss";
import InputField from "../AddTempleList/TempleForm/TempleFormComponents/InputField";
import axios from "axios";
import { Toast } from "primereact/toast";

const CityForm = () => {
  const [countries, setCounties] = useState([]);
  const [states, setStates] = useState([]);
  const [district, setDistrict] = useState([]);
  const { state: locationState } = useLocation();
  const navigate = useNavigate();
  const toast = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({ defaultValues: locationState ? locationState : {} });

  console.log("Location", locationState);

  useEffect(() => {
    getCountryList(setCounties);

    if (locationState?.country_id) {
      getStateList(locationState?.country_id, setStates);
    }

    if (locationState?.state_id) {
      getDistrictList(locationState?.state_id, setDistrict);
    }
  }, []);

  const countryOnChangeHandler = e => {
    getStateList(e.target.value, setStates);
  };

  const statesOnChangeHandler = e => {
    getDistrictList(e.target.value, setDistrict);
  };

  const displayToaster = () => {
    toast.current.show({
      severity: "success",
      summary: "Done",
      detail: `City ${locationState ? "is Updated" : "Created"}`,
      life: 3000,
    });

    setTimeout(() => {
      navigate("/admin/city");
    }, 1000);
  };

  const onSubmit = async data => {
    console.log("Data", data);

    try {
      if (locationState) {
        //update
        await axios.put(
          `${process.env.REACT_APP_DEV_BASE_URL}/city/update/${locationState.id}`,
          data
        );
        displayToaster();
      } else {
        //create
        await axios.post(
          `${process.env.REACT_APP_DEV_BASE_URL}/city/create`,
          data
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

  return (
    <div className="createListForm">
      <Toast ref={toast} />

      <Container>
        <h1 className="createListForm__title">Create City</h1>
        <section>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col lg={4}>
                <PrimeDropdown
                  controlKey="country_id"
                  name="Country"
                  optionLabel="country"
                  optionValue="id"
                  onChangeHandler={countryOnChangeHandler}
                  list={countries}
                  errors={errors}
                  control={control}
                />
              </Col>

              <Col lg={4}>
                <PrimeDropdown
                  controlKey="state_id"
                  name="State"
                  optionLabel="state"
                  optionValue="id"
                  onChangeHandler={statesOnChangeHandler}
                  list={states}
                  errors={errors}
                  control={control}
                />
              </Col>

              <Col lg={4}>
                <PrimeDropdown
                  controlKey="district_id"
                  name="District"
                  optionLabel="district"
                  optionValue="id"
                  onChangeHandler={() => { }}
                  list={district}
                  errors={errors}
                  control={control}
                />
              </Col>
            </Row>


            <Row>
              <Col lg={4}>
                <InputField
                  errors={errors}
                  register={register}
                  keyId={"city"}
                  name="City"
                />
              </Col>
            </Row>

            <div className="d-flex justify-content-end py-3">
              <button
                type="submit"
                className="me-4 customBtn dark-text small"
                variant="primary">
                Submit
              </button>
              <button className="customBtn small bg" type="reset" onClick={() => { navigate("/admin/city"); }}>
                Cancel
              </button>
            </div>
          </Form>
        </section>
      </Container>
    </div>
  );
};

export default CityForm;
