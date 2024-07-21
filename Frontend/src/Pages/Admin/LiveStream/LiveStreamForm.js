import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Form, Container } from "react-bootstrap";
import InputField from "../AddTempleList/TempleForm/TempleFormComponents/InputField";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import PrimeTime from "../AddTempleList/TempleForm/TempleFormComponents/PrimeTime";
import PrimeDropdown from "../AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
import PrimeDate from "../AddTempleList/TempleForm/TempleFormComponents/PrimeDate";
import "bootstrap/dist/css/bootstrap.min.css";
import { Toast } from "primereact/toast";
import { ToastContainer, toast } from "react-toastify";
import {
    getAreaList,
    getCityList,
    getCountryList,
    getDistrictList,
    getStateList,
  } from "../AddTempleList/utils";



  //style
  import ".././../Event/Events.scss";


function LiveStreamForm() {
     const navigate = useNavigate();
     const toastRef = useRef(null);
    const [countries, setCountries] = useState([]);
    const [district, setDistrict] = useState([]);
    const [cities, setCities] = useState([]);
    const [states, setStates] = useState([]);
    const [areas, setAreas] = useState([]);
    const [areasvalue, setAreasValue]=useState([]);
    console.log('areas :>> ', areas);
    const { state: locationState } = useLocation();
    const [liveStreamImage, setLiveStreamImage] = useState(
        locationState?.livestream_image|| null
      );

      const createLiveStream = DATA => {
        axios
          .post(`${process.env.REACT_APP_DEV_BASE_URL}/livestream/create`, DATA)
          .then(res => {
            toast.success('LiveStream submitted successfully!');
          });
      };

      const updateLiveStream = data => {
        console.log("updateee", data);
        axios
          .put(
            `${process.env.REACT_APP_DEV_BASE_URL}/livestream/update/${locationState.id}`,
            data
          )
          .then(res => {
            console.log("updatelvestream:>> ", res.data);
    
            navigate(-1);
          });
      };

      
  let defaultValues = {};

  if (locationState) {
    const {
      livestream_title,
      livestream_description,
      livestream_startdate,
      livestream_enddate,
      livestream_image,  
      livestream_url,
      Country,
      District,
      State,
      City,
      Area,
      temple_name,
      start_time,
      end_time,
    } = locationState;

    // Default Values when editing
    defaultValues = {
      ...locationState,
      livestream_title:livestream_title,
      livestream_description:livestream_description,
      livestream_startdate: new Date(livestream_startdate),
      livestream_enddate: new Date(livestream_enddate),
      livestream_url: livestream_url,
      livestream_image: livestream_image,
      start_time: new Date( start_time),
      end_time: new Date( end_time),
      Country: Country,
      District: District,
      State: State,
      City: City,
      Area:Area,
      temple_name:temple_name,
    };
  }



    useEffect(() => {
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

      const areaOnChangeHandler = e => {
       setAreasValue(e);
      };

   

    const displayToaster = () => {
      toastRef.current.show({
        severity: "success",
        summary: "Done",
        detail: `Blog ${locationState ? "is Updated" : "Created"}`,
        life: 3000,
      });
      setTimeout(() => {
        navigate("/admin/LiveStream");
      }, 1000);
    };

  
    const {
      register,
      handleSubmit,
      control,
      formState: { errors },
    } = useForm();
  
    const commonProps = {
      errors,
      register,
    };


    const getFormData = (data, mainImage) => {
      const formData = new FormData();
      formData.append("livestream_title", data.livestream_title);
      formData.append("livestream_description", data.livestream_description);
      formData.append("livestream_image", mainImage);
      formData.append("livestream_startdate", data.livestream_startdate);
      formData.append("livestream_enddate", data.livestream_enddate);
      formData.append("City", data.City);
      formData.append("Country", data.Country);
      formData.append("District", data.District);
      formData.append("State", data.State);
      formData.append("Area", data.Area);
      formData.append("livestream_url", data.livestream_url);
      formData.append("temple_name", data.temple_name);
      formData.append("start_time", data.start_time);
      formData.append("end_time", data.end_time);



      console.log("form data", data);
      return formData;
    };
  
    const onSubmit = async (data) => {
      console.log("data", data);
      if (locationState) {
        //update
        updateLiveStream(getFormData(data, liveStreamImage));
      } else {
        //create
        createLiveStream(getFormData(data, liveStreamImage));
       
      }
    };
  return (
    <div className="createFormPage">
      <ToastContainer position="top-right" autoClose={3000} />
        <Container>
        <div className="createFormPage__header">
          <h5 className="createFormPage__header--title">Create LiveStream</h5>
        </div>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
            <Col mg={6}>
            <InputField
                {...commonProps}
                keyId="livestream_title"
                name="LiveStream Title"
              />
            </Col>
            
            <Col lg={6}>
            <InputField
                {...commonProps}
                keyId="temple_name"
                name="Temple Name"
              />
            </Col>
        </Row>
        <Row>
        <Col lg={6}>
              <PrimeTime
                errors={errors}
                control={control}
                name="enddate"
                controlId="livestream_startdate"
               
              />
            </Col>
            
            <Col lg={6}>
            <PrimeTime
                errors={errors}
                control={control}
                name="startdate"
                controlId="livestream_enddate"
              />
           
            </Col>
        </Row>
        <Row>
            <Col lg={6}>
              <PrimeDropdown
                controlKey="Country"
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
                controlKey="State"
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
                controlKey="District"
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
                controlKey="City"
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
                controlKey="Area"
                name="Area"
                optionLabel="area_name"
                optionValue="area_id"
                onChangeHandler={areaOnChangeHandler}
                list={areas}
                errors={errors}
                control={control}
              />
            </Col>
            <Col lg={6}>
            <InputField
                {...commonProps}
                keyId="livestream_url"
                name="LiveStream url"
              />
            </Col>
          </Row>
          <Row>
          <Col lg={6}>
              <PrimeDate
                errors={errors}
                control={control}
                name="Start Time"
                controlId="start_time"
              />
            </Col>
            <Col lg={6}>
              <PrimeDate
                errors={errors}
                control={control}
                name="End Time"
                controlId="end_time"
              />
            </Col>
          </Row>
          <Row>

            <Col lg={6}>
             <InputField
                  {...commonProps}
                  keyId="livestream_description"
                  name=" Description"
                  others={{ as: "textarea", rows: 4 }}
                /> 
            </Col>
            <Col lg={6}>
            <Form.Group controlId="LiveStreamImage" className="mb-3 py-2">
                <Form.Label>LiveStream Image</Form.Label>
                <Form.Control
                  accept=".png, .jpg, .jpeg"
                  type="file"
                  {...register("livestream_image", { required: true })}
                  onChange={e => {
                    setLiveStreamImage(e.target.files[0]);
                  }}
                />

                {liveStreamImage && (
                  <img
                    src={`${process.env.REACT_APP_DEV_BASE_URL}$liveStreamImage}`}
                    className="previewImage"
                  />
                )}
              </Form.Group>
            </Col>
          </Row>
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
  )
}

export default LiveStreamForm;