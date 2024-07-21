import React, { useState } from "react";
import { Col, Form, Modal, Row } from "react-bootstrap";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import {
  getAreaList,
  getCityList,
  getDistrictList,
  getStateList,
} from "../../Pages/Admin/AddTempleList/utils";
import {
  fetchCountryList,
  fetchMainGodList,
  fetchTemplesList,
  setSearchModalOptions,
} from "../Redux_Toolkit/allTempleSlice";
import PrimeDropdown from "../../Pages/Admin/AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
import "./SearchModal.scss";

const SearchModal = ({ show, handleClose }) => {
  const countries = useSelector((state) => state.allTemples.countryList);
  const mainGodList = useSelector((state) => state.allTemples.mainGodList);

  const [district, setDistrict] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [areas, setAreas] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const router = useLocation();

  useEffect(() => {
    dispatch(fetchCountryList());
    dispatch(fetchMainGodList());
  }, []);

  const countryOnChangeHandler = (e) => {
    getStateList(e.target.value, setStates);
  };

  const statesOnChangeHandler = (e) => {
    getDistrictList(e.target.value, setDistrict);
  };

  const districtOnChangeHandler = (e) => {
    getCityList(e.target.value, setCities);
  };

  const cityOnChangeHandler = (e) => {
    getAreaList(e.target.value, setAreas);
  };

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Search Modal Data", data);
    const {
      country_id,
      state_id,
      district_id,
      city_id,
      main_god_id,
      area_id,
    } = data;
    dispatch(fetchTemplesList({ start: 0, end: 10, ...data }));
    dispatch(
      setSearchModalOptions({
        country_id,
        state_id,
        district_id,
        city_id,
        area_id,
        main_god_id,
      })
    );
    if (router.pathname !== "/alltemples") {
      navigate("/alltemples");
    }

    reset();
    handleClose();
  };

  return (
    <>
      <Modal className="searchModal" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Temple Search </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Col lg={6}>
                <PrimeDropdown
                  controlKey="country_id"
                  name="Country"
                  optionLabel="country"
                  optionValue="id"
                  onChangeHandler={countryOnChangeHandler}
                  list={countries}
                  errors={errors}
                  control={control}
                  filter={false}
                />
              </Col>

              <Col lg={6}>
                <PrimeDropdown
                  controlKey="state_id"
                  name="State"
                  optionLabel="state"
                  optionValue="id"
                  onChangeHandler={statesOnChangeHandler}
                  list={states}
                  errors={errors}
                  control={control}
                  required={false}
                  filter={false}
                />
              </Col>

              <Col lg={6}>
                <PrimeDropdown
                  controlKey="district_id"
                  name="District"
                  optionLabel="district"
                  optionValue="id"
                  onChangeHandler={districtOnChangeHandler}
                  list={district}
                  errors={errors}
                  control={control}
                  required={false}
                  filter={false}
                />
              </Col>

              <Col lg={6}>
                <PrimeDropdown
                  controlKey="city_id"
                  name="City"
                  optionLabel="city"
                  optionValue="id"
                  onChangeHandler={cityOnChangeHandler}
                  list={cities}
                  errors={errors}
                  control={control}
                  required={false}
                  filter={false}
                />
              </Col>
            </Row>

            <Row>
              <Col lg={6}>
                <PrimeDropdown
                  controlKey="area_id"
                  name="Area"
                  optionLabel="area_name"
                  optionValue="area_id"
                  list={areas}
                  errors={errors}
                  control={control}
                  required={false}
                  filter={false}
                />
              </Col>

              <Col lg={6}>
                <PrimeDropdown
                  controlKey="main_god_id"
                  name="Main God"
                  optionLabel="god_name"
                  optionValue="main_god_id"
                  list={mainGodList}
                  errors={errors}
                  control={control}
                  filter={false}
                  required={false}
                />
              </Col>
            </Row>

            <div className="text-center mt-4">
              <button className="customBtn dark-text" type="submit">
                Submit
              </button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default SearchModal;
