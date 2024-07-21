import React, { useCallback, useState, useRef } from "react";
import { useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import { Toast } from "primereact/toast";
import { Switch } from "antd";
import InputField from "../../AddTempleList/TempleForm/TempleFormComponents/InputField";
import PrimeDropdown from "../../AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
// import ".././../Event/Events.scss";
import { Dropdown } from "primereact/dropdown";
import "../../../Event/Events.scss";
import {
  getAreaList,
  getCityList,
  getCountryList,
  getDistrictList,
  getStateList,
} from "../../../Admin/AddTempleList/utils";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function AddUser() {
  const navigate = useNavigate();
  const { state: locationState } = useLocation();
  const id = localStorage.getItem("Community_id");

  const { groupName } = useParams();
  const toast = useRef(null);
  const familyOptions = {
    name: "",
    relationship: "",
    gender: "",
    age: "",
    occupation: "",
    phoneNumber: "",
    address: "",
    loginneeded: false,
    description: "",
  };
  const [countries, setCountries] = useState([]);
  const [district, setDistrict] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [areas, setAreas] = useState([]);
  const [areaValue, setAreaValue] = useState("");
  const [sex, setSex] = useState([]);
  const [isDisabled, setIsDisabled] = useState(true);
  const [areasvalue, setAreasValue] = useState([]);
  const [password, setPassword] = useState("");
  // useEffect(() => {
  //   userGetProfile();
  //   getCountryList(setCountries);

   
  // }, []);
  var Groupname = sessionStorage.getItem("Group_Name");
  console.log(Groupname, "siva");
  const [family, setFamily] = useState(
    locationState?.family_list
      ? eval(locationState.family_list)
      : // ? eval(JSON.parse(locationState.family_list))
        []
  );
  const colors = {
    opacity: 0.7,
    cursor: "not-allowed",
  };
  const [gender] = useState([
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
  ]);
  const name = [
    { value: "Male", gender: "Male" },
    { value: "Female", gender: "Female" },
  ];
  let defaultValues = {};

  if (locationState) {
    const {
      name,
      nickName,
      familyName,
      phone_number,
      password,
      designation,
      sex,
      groupName,
      country,
      district,
      state,
      city,
      area,
      pincode,
      address,
      description,
      // family_list,
      email_id,
    } = locationState;
    // Default Values when editing
    defaultValues = {
      name: name,
      nickName: nickName,
      designation: designation,
      familyName: familyName,
      phone_number: phone_number,
      password: password,
      sex: sex,
      groupName: groupName,
      country: country,
      state: state,
      district: district,
      city: city,
      area: area,
      pincode: pincode,
      address: address,
      description: description,
      // family: eval(JSON.parse(family_list)),
      email_id: email_id,
    };
  }

  useEffect(() => {
    getCountryList(setCountries);

    if (locationState?.country) {
      getStateList(locationState?.country, setStates);
    }

    if (locationState?.state) {
      getDistrictList(locationState?.state, setDistrict);
    }

    if (locationState?.district) {
      getCityList(locationState?.district, setCities);
    }

    if (locationState?.city) {
      getAreaList(locationState?.city, setAreas);
    }
  }, []);

  // submit data to backend
  const onSubmit = async data => {
    const DATA = {
      name: data.name,
      nickName: data.nickName,
      designation: data.designation,
      familyName: data.familyName,
      phone_number: data.phone_number,
      password: data.password,
      sex: data.sex,
      groupName: data.groupName,
      country: data.country,
      state: data.state,
      district: data.district,
      city: data.city,
      area: data.area,
      pincode: data.pincode,
      address: data.address,
      description: data.description,
      email_id: data.email_id,
    };
    if (locationState) {
      axios
        .put(
          `${process.env.REACT_APP_DEV_BASE_URL}/community/update/${locationState.id}`,
          DATA
        )
        .then(res => {
          navigate(-1);
        })
        .catch(error => console.log(error));
    } else {
      axios
        .post(
          `${process.env.REACT_APP_DEV_BASE_URL}/community/registerCommunityUser`,
          DATA
        )
        .then(res => {
          navigate(-1);
        })
        .catch(error => console.log(error));
    }
  };

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: locationState
      ? defaultValues
      : {
          name: "",
          nickName: "",
          designation: "",
          familyName: "",
          sex: "",
          groupName: Groupname,
          country: null,
          state: null,
          district: null,
          city: null,
          area: null,
          pincode: "",
          address: "",
          description: "",
          phone_number: "",
          password: "",
          email_id: "",
        },
  });

  const commonProps = {
    errors,
    register,
  };
  const groupNameProps = {
    ...commonProps,
    others: {
      readOnly: true,
    },
  };
  const genderOnChangeHandler = e => {
    setSex(e.target.value);
  };
 

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
  const areasOnChangeHandler = () => {};


  const handleIncrementFamily = () => {
    setFamily(prev => [...prev, familyOptions]);
  };

  const handleFamily = useCallback((index, key, value) => {
    setFamily(prev => {
      const newValue = [...prev];
      newValue[index][key] = value;
      return newValue;
    });
  }, []);
  // const userGetProfile = async () => {
    
  //   axios
  //     .get(
  //       `${process.env.REACT_APP_DEV_BASE_URL}/community/getCommunityAdminId/${id}`
  //     )
  //     .then((resp) => {
  //       console.log('firstresp', resp.data.result)
  //       if (resp.data.result?.countryId) {  
  //         getStateList(resp.data.result?.countryId, setStates);
  //         getDistrictList(resp.data.result?.stateId, setDistrict);
  //         getCityList(resp.data.result?.districtId, setCities);
  //         getAreaList(resp.data.result?.cityId, setAreas);
  //         setAreasValue(resp.data.result?.cityId);
  //       }
  //       console.table(resp.data.result,'xxxxxxxxxxxxxxxxxxxxxxxx');
  //       setValue("name", resp.data.result?.name);
  //       setValue("country", resp.data.result?.country);
  //       setValue("state", resp.data.result?.state);
  //       setValue("district", resp.data.result?.district);
  //       setValue("city", resp.data.result?.city); 
  //       setValue("area", resp.data.result?.area);
  //       setValue("pincode", resp.data.result?.pincode); 
  //       setValue("email_id", resp.data.result?.email_id);
  //       setValue("address", resp.data.result?.address);
  //       // setValue("language_knows", resp.data.result?.language_knows);
  //       setValue("phone_number", resp.data.result?.phone_number);  
  //       setPassword(resp.data.result?.password);  
       
  //     });
  // };
  const handleRemove = useCallback((idx, setValue) => {
    setFamily(prev => {
      const newOne = prev.filter((item, index) => index !== idx);
      setValue("family", [...newOne]);
      return [...newOne];
    });
  }, []);

  return (
    <div className="createFormPage">
      <Toast ref={toast} />

      <Container>
        <div className="createFormPage__header">
          <h5 className="createFormPage__header--title">{locationState ?"Edit":"Create"}  Family</h5>
        </div>
        <Form
          className="createFormPage__form"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Row className="mb-4">
            <Col lg={6}>
              <InputField {...commonProps} keyId="name" name="Name" />
            </Col>

            <Col lg={6}>
              <InputField {...commonProps} keyId="nickName" name="Nick Name" />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="designation"
                name="Designation"
              />
            </Col>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="familyName"
                name="Family Name"
              />
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="phone_number"
                name="PhoneNumber"
              />
            </Col>
            <Col lg={6}>
              <InputField
                {...groupNameProps}
                keyId="groupName"
                name="Group Name"
                style={{ colors }}
              />
            </Col>
         
         
          </Row>
          <Row>
           
            <Col lg={6}>
              <PrimeDropdown
                controlKey="sex"
                name="Gender"
                optionLabel="gender"
                optionValue="value"
                onChangeHandler={genderOnChangeHandler}
                list={name}
                errors={errors}
                control={control}
              />
            </Col>
            {locationState ? "":   <Col lg={6}>
              <InputField {...commonProps} keyId="password" name="password" />
            </Col>}
          </Row>
          <Row>
            <Col lg={6}>
              <InputField {...commonProps} keyId="email_id" name="Email" />
            </Col>
          </Row>
          <Row>
            {/* <Col lg={}>
              <PrimeDropdown
                controlKey="country"
                name="Country"
                optionLabel="country"
                optionValue="id"
                onChangeHandler={e => countryOnChangeHandler(e.target.value)}
                list={countries}
                errors={errors}
                control={control}
              />
            </Col> */}
            <Col lg={4}>
              <PrimeDropdown
                controlKey="country"
                name="Country"
                optionLabel="country"
                optionValue="id"
                onChangeHandler={countryOnChangeHandler}
                list={countries}
                errors={errors}
                control={control}
              />
            </Col>
            {/* <Col lg={4}>
              <PrimeDropdown
                controlKey="state"
                name="State"
                optionLabel="state"
                optionValue="id"
                onChangeHandler={e => statesOnChangeHandler(e.target.value)}
                list={states}
                errors={errors}
                control={control}
              />
            </Col> */}
              <Col lg={4}>
              <PrimeDropdown
                controlKey="state"
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
                controlKey="district"
                name="District"
                optionLabel="district"
                optionValue="id"
                onChangeHandler={districtOnChangeHandler}
                list={district}
                errors={errors}
                control={control}
              />
            </Col>
            {/* <Col lg={4}>
              <PrimeDropdown
                controlKey="district"
                name="District"
                optionLabel="district"
                optionValue="id"
                onChangeHandler={e => districtOnChangeHandler(e.target.value)}
                list={district}
                errors={errors}
                control={control}
              />
            </Col> */}
          </Row>
          <Row>
            {/* <Col lg={4}>
              <PrimeDropdown
                controlKey="city"
                name="City"
                optionLabel="city"
                optionValue="id"
                onChangeHandler={e => cityOnChangeHandler(e.target.value)}
                list={cities}
                errors={errors}
                control={control}
              />
            </Col> */}
              <Col lg={4}>
              <PrimeDropdown
                controlKey="city"
                name="City"
                optionLabel="city"
                optionValue="id"
                onChangeHandler={cityOnChangeHandler}
                list={cities}
                errors={errors}
                control={control}
              />
            </Col>
            {/* <Col lg={4}>
              <PrimeDropdown
                controlKey="area"
                name="Area"
                optionLabel="area_name"
                optionValue="area_id"
                onChangeHandler={e => areaOnChangeHandler(e.target.value)}
                list={areas}
                errors={errors}
                control={control}
              />
            </Col> */}
              <Col lg={4}>
              <PrimeDropdown
                controlKey="area"
                name="Area"
                optionLabel="area_name"
                optionValue="area_id"
                onChangeHandler={areasOnChangeHandler}
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
                keyId="description"
                name=" Description"
                others={{ as: "textarea", rows: 4 }}
              />
            </Col>
          </Row>
          {/* <hr/> */}
          {/* <div className="mt-4">
            <h5 className="adduser--title mb-2">
              {family.length >= 1 && "Add Family List"}
            </h5>
            {family.map((item, index) => {
              return (
                <div key={index} className="mb-5">
                  <Row>
                    <Col lg={4}>
                      <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          {...register(`family[${index}].name`, {
                            required: false,
                          })}
                          value={family[index].name}
                          onChange={e => {
                            handleFamily(index, "name", e.target.value);
                          }}
                          type="text"
                          autoComplete="off"
                        />
                        {errors[family[0].name] && (
                          <Form.Text className="text-danger">
                            Name is required
                          </Form.Text>
                        )}
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group>
                        <Form.Label>Relationship</Form.Label>
                        <Form.Control
                          {...register(`family[${index}].relationship`, {
                            required: false,
                          })}
                          value={family[index].relationship}
                          onChange={e =>
                            handleFamily(index, "relationship", e.target.value)
                          }
                          type="text"
                          autoComplete="off"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Label>Gender</Form.Label>
                      <Dropdown
                        name={`family[${index}].gender`}
                        value={family[index].gender}
                        placeholder="Select gender"
                        options={gender}
                        {...register(`family.${index}.gender`, {
                          required: false,
                        })}
                        onChange={e => {
                          handleFamily(index, "gender", e.value);
                        }}
                        optionLabel="label"
                        className="primeSelect"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4}>
                      <Form.Group>
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                          {...register(`family[${index}].age`, {
                            required: false,
                          })}
                          value={family[index].age}
                          onChange={e => {
                            handleFamily(index, "age", e.target.value);
                          }}
                          type="number"
                          autoComplete="off"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group>
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control
                          {...register(`family[${index}].phoneNumber`, {
                            required: false,
                          })}
                          value={family[index].phoneNumber}
                          onChange={e =>
                            handleFamily(index, "phoneNumber", e.target.value)
                          }
                          type="text"
                          autoComplete="off"
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group>
                        <Form.Label>Occupation</Form.Label>
                        <Form.Control
                          {...register(`family[${index}].occupation`, {
                            required: false,
                          })}
                          value={family[index].occupation}
                          onChange={e =>
                            handleFamily(index, "occupation", e.target.value)
                          }
                          type="text"
                          autoComplete="off"
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={4}>
                      <Form.Group>
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          {...register(`family[${index}].address`, {
                            required: false,
                          })}
                          value={family[index].address}
                          onChange={e =>
                            handleFamily(index, "address", e.target.value)
                          }
                          type="text"
                          autoComplete="off"
                          as="textarea"
                          rows={4}
                        />
                      </Form.Group>
                    </Col>
                    <Col lg={4}>
                      <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                          {...register(`family[${index}].description`, {
                            required: false,
                          })}
                          value={family[index].description}
                          onChange={e =>
                            handleFamily(index, "description", e.target.value)
                          }
                          type="text"
                          autoComplete="off"
                          as="textarea"
                          rows={4}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Login Needed</Form.Label>
                        <Switch
                          {...register(`family[${index}].loginneeded`, {
                            required: false,
                          })}
                          checked={family[index].loginneeded}
                          onChange={e => {
                            handleFamily(index, "loginneeded", e);
                          }}
                        />
                      </Form.Group>
                    </Col>
                  </Row>
                  <div className="remove-button">
                    <Button
                      variant="danger"
                      className="mb-2"
                      onClick={() => {
                        setValue(`family`, family);
                        handleRemove(index, setValue);
                      }}>
                      Remove
                    </Button>
                  </div>
                  <hr />
                </div>
              );
            })}
            <button
              type="button"
              className="btn btn-primary mb-2"
              onClick={handleIncrementFamily}>
              Add Family
            </button>
          </div> */}
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
                navigate(`/community/${groupName}/user`);
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
