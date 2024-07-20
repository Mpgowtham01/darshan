import React, { useCallback, useState, useRef } from "react";
import { useEffect } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Container } from "react-bootstrap";
import { nanoid } from "nanoid";
import { Toast } from "primereact/toast";
import "./TempleFormPage.scss";

import {
  createTempleFormData,
  getAmenities,
  getCountryList,
  sendCreateTempleData,
} from "../utils";

import FirstGroup from "./FirstGroup";
import SecondGroup from "./SecondGroup";
import RoutesToReachToTemple from "./TempleRoutesGroup/RoutesToReachToTemple";
import AboutTempleGroup from "./AboutTempleGroup";
import TextAreaGroups from "./TextAreaGroups";
import TempleDetailsGroup from "./TempleServices/TempleDetailsGroup";
import AmenitiesGroup from "./AmenitiesGroup";
import TimingsGroup from "./TimingsGroup";
import { useLocation, useNavigate } from "react-router-dom";
import FileUploadGroup from "./FileUploadGroup";
import axios from "axios";
import BookingField from "./BookingField";
import PoojaField from "./PoojaField";

const TempleFormPage = () => {
  const routesOptions = {
    id: nanoid(),
    route: null,
    country: null,
    countryName: null,
    state: null,
    stateName: null,
    district: null,
    districtName: null,
    city: null,
    cityName: null,
    kilometer: "",
  };

  const bookingFieldOptions = {
    id: nanoid(),
    bookingField: null,
    days: null,
    morningTime: null,
    eveningTime: null,
    price: null,
  };

  const poojaFieldOptions = {
    id: nanoid(),
    poojaName: null,
    poojaNameId: null,
    frequent: null,
    timings: null,
    description: null,
  };
  const { state: locationState } = useLocation();
  const [godList, setGodList] = useState([]);
  const [countries, setCounties] = useState([]);
  const [mainImage, setMainImage] = useState(locationState?.main_image || null);
  const [subImages, setSubImages] = useState({ images: [], errorMsg: null });
  const [videoFile, setVideoFile] = useState(locationState?.videoFile || null);
  const [youtubeUrl, setYoutubeUrl] = useState(locationState?.youtubeUrl || "");
  // const [starTempleValue, setStarTempleValue] = useState(4);
  const [poojaField, setPoojaField] = useState(
    locationState?.poojaFields
      ? eval(locationState.poojaFields)
      : [poojaFieldOptions]
  );
  const [bookingFields, setBookingFields] = useState(
    locationState?.bookingFields
      ? eval(locationState.bookingFields)
      : [bookingFieldOptions]
  );

  const [bookingMenuOptions, setBookingMenuOptions] = useState([]);
  const [poojaMenus, setPoojaMenus] = useState([]);

  // get god list
  const getGodList = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/main_god/getAll`)
      .then((res) => {
        setGodList(res.data);
      });
  };

  // get poojas menu options
  const getPoojaMenuOptions = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/functions/getAll`)
      .then((res) => {
        setPoojaMenus(res.data);
      })
      .catch((err) => {
        console.log("Error", err);
      });
  };

  // get booking menu options
  const getBookingMenuOptions = () => {
    axios
      .get(`${process.env.REACT_APP_DEV_BASE_URL}/booking/getAll`)
      .then((res) => {
        if (res?.data.status === "Success") {
          setBookingMenuOptions(res.data.result);
        }
      });
  };

  const [routes, setRoutes] = useState(
    locationState?.temple_bus_route
      ? eval(locationState.temple_bus_route)
      : [routesOptions]
  );
  const [amenities, setAmenities] = useState(
    locationState && locationState?.aminity ? eval(locationState?.aminity) : []
  );
  const toast = useRef(null);
  const navigate = useNavigate();

  // fetch data on page loads
  useEffect(() => {
    getCountryList(setCounties);
    getGodList();
    getBookingMenuOptions();
    getPoojaMenuOptions();

    if (!locationState?.aminity) {
      getAmenities(setAmenities);
    }
  }, []);

  let defaultValues = {};

  if (locationState) {
    const {
      temple_bus_route,
      pariharam,
      festival_ids,
      functionsInsideTemple,
      othergod_id,
      speciality_id,
      temple_amotime,
      temple_amctime,
      temple_pmotime,
      temple_pmctime,
    } = locationState;

    // Default Values when editing
    defaultValues = {
      ...locationState,
      temple_bus_route: eval(temple_bus_route),
      pariharam: pariharam.split(",").map((item) => parseInt(item)),
      festival_ids: festival_ids.split(",").map((item) => parseInt(item)),
      functionsInsideTemple: functionsInsideTemple
        .split(",")
        .map((item) => parseInt(item)),
      othergod_id: othergod_id.split(",").map((item) => parseInt(item)),
      speciality_id: speciality_id.split(",").map((item) => parseInt(item)),
      temple_amotime: new Date(temple_amotime),
      temple_amctime: new Date(temple_amctime),
      temple_pmotime: new Date(temple_pmotime),
      temple_pmctime: new Date(temple_pmctime),
    };
  }

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ defaultValues: locationState ? defaultValues : {} });

  // Toaster message
  const toasterHandle = (
    severity = "success",
    summary = "Success",
    detail = `Temple is ${locationState ? "Updated" : "Created"}`
  ) => {
    toast.current.show({
      severity,
      summary,
      detail,
      life: 3000,
    });
  };
  console.log("youtubeUrl:", youtubeUrl);
  // submit data to backend
  const onSubmit = async (data) => {
    const formData = {
      data,
      routes,
      amenities,
      mainImage,
      subImages,
      youtubeUrl,
      videoFile,
      bookingFields,
      poojaField
    };
    console.log("data :>> ", data);
    if (locationState) {
      //update
      // sendCreateTempleData(
      //   toasterHandle,
      //   formData,
      //   navigate,
      //   `update/${locationState?.id}`
      // );
    } else {
      // sendCreateTempleData(toasterHandle, formData, navigate);
    }
  };

  const rowsProps = {
    errors,
    register,
    control,
  };

  const handleSubImages = (e) => {
    const files = e.target.files;
    if (files.length >= 2 && files.length <= 4) {
      setSubImages({ images: [...files], errorMsg: null });
    } else if (files.length > 4) {
      setSubImages({ images: [], errorMsg: "Should not exceed 4 images" });
    } else {
      setSubImages({ images: [], errorMsg: "Should be minimum of 2 images" });
    }
  };

  const handleRoute = useCallback((index, key, value) => {
    setRoutes((prev) => {
      const newValue = [...prev];
      if (newValue[index]) {
        // Check if the route at the given index exists
        newValue[index][key] = value;
      } else {
        console.error(`Route at index ${index} is undefined`);
      }
      return newValue;
    });
  }, []);

  const handleBookingFields = useCallback((index, key, value) => {
    setBookingFields((prev) => {
      const newValue = [...prev];
      if (newValue[index]) {
        // Check if the booking field at the given index exists
        newValue[index][key] = value;
      } else {
        console.error(`BookingField at index ${index} is undefined`);
      }
      return newValue;
    });
  }, []);

  const handleIncrementBookingField = () => {
    setBookingFields((prev) => [...prev, bookingFieldOptions]);
  };

  const handleRemoveBookingField = useCallback((id) => {
    setBookingFields((prevRoute) => {
      const newOne = prevRoute.filter((item) => item.id != id);
      return [...newOne];
    });
  }, []);
  const handlePoojaFields = useCallback(
    (index, key, value) => {
      if (poojaMenus) {
        // Add null check here
        setPoojaField((prev) => {
          const newValue = [...prev];
          if (newValue[index]) {
            newValue[index][key] = value;
          } else {
            console.error(`PoojaField at index ${index} is undefined`);
          }
          return newValue;
        });
      } else {
        console.error("poojaMenus is undefined");
      }
    },
    [poojaMenus]
  );

  const handleIncrementPoojaField = () => {
    setPoojaField((prev) => [...prev, poojaFieldOptions]);
  };

  const handleRemovePoojaField = useCallback((id) => {
    setPoojaField((prevRoute) => {
      const newOne = prevRoute.filter((item) => item.id !== id);
      return [...newOne];
    });
  }, []);

  const handleUpdateAmenities = useCallback(
    (index, key = "amenityStatus", value) => {
      setAmenities((prev) => {
        const newValues = [...prev];
        if (newValues[index]) {
          // Check if the amenity at the given index exists
          newValues[index][key] = value;
        } else {
          console.error(`Amenity at index ${index} is undefined`);
        }
        return newValues;
      });
    },
    []
  );

  const handleIncrementRoute = () => {
    setRoutes((prev) => [...prev, routesOptions]);
  };

  const handleRemove = useCallback((id) => {
    setRoutes((prevRoute) => {
      const newOne = prevRoute.filter((item) => item.id != id);
      return [...newOne];
    });
  }, []);

  return (
    <Container>
      <Toast ref={toast} />

      <div className="templeFormPage">
        <div className="templeFormPage__container">
          <div className="templeFormPage__header">
            <h2 className="title">Temple Form</h2>
          </div>

          <div className="templeFormPage--forms">
            <Form>
              <FirstGroup
                godList={godList}
                {...rowsProps}
                othergod_id={locationState?.othergod_id}
                main_god_id={locationState?.main_god_id}
              />
              <SecondGroup {...rowsProps} countries={countries} />/
              <AboutTempleGroup {...rowsProps} />
              <div className="mt-4">
                <button
                  type="button"
                  className="btn btn-primary mb-2"
                  onClick={handleIncrementRoute}
                >
                  Add Route
                </button>

                {routes?.length &&
                  routes.map((item, index) => {
                    return (
                      <>
                        <div key={item.id} className="mb-5">
                          <RoutesToReachToTemple
                            countries={countries}
                            currentNumber={index}
                            handleRoute={handleRoute || (() => {})}
                            handleRemove={handleRemove || (() => {})}
                            {...item}
                          />
                        </div>
                        <hr />
                      </>
                    );
                  })}
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="btn btn-info mb-4"
                  onClick={handleIncrementBookingField}
                >
                  Add Booking
                </button>

                {bookingFields?.length &&
                  bookingFields.map((item, index) => {
                    return (
                      <>
                        <div key={item.id} className="mb-5">
                          <BookingField
                            currentNumber={index}
                            bookingMenuOptions={bookingMenuOptions}
                            handleBookingFields={handleBookingFields}
                            handleRemoveBookingField={handleRemoveBookingField}
                            {...item}
                          />
                        </div>
                        <hr />
                      </>
                    );
                  })}
              </div>
              <div className="mt-4">
                <button
                  type="button"
                  className="btn btn-warning mb-4"
                  onClick={handleIncrementPoojaField}
                >
                  Add Pooja
                </button>

                {poojaField?.length &&
                  poojaField.map((item, index) => {
                    return (
                      <>
                        <div key={item.id} className="mb-3">
                          <PoojaField
                            {...item}
                            poojaMenuOptions={poojaMenus}
                            handlePoojaFields={handlePoojaFields}
                            currentNumber={index}
                            handleRemovePoojaField={handleRemovePoojaField}
                          />
                        </div>
                        <hr />
                      </>
                    );
                  })}
              </div>
              <TextAreaGroups {...rowsProps} />
              <TempleDetailsGroup {...rowsProps} />
              <TimingsGroup {...rowsProps} />
              <AmenitiesGroup
                handleUpdateAmenities={handleUpdateAmenities}
                amenities={amenities}
              />
              <FileUploadGroup
                rowsProps={rowsProps}
                handleSubImages={handleSubImages}
                subImages={subImages}
                mainImage={mainImage}
                videoFile={videoFile}
                youtubeUrl={youtubeUrl}
                videoFileHandler={(val) => setVideoFile(val)}
                mainImageHandler={(val) => setMainImage(val)}
                youtubeUrlHandler={(val) => setYoutubeUrl(val)}
              />
              {/* <VideoField/> */}
              <div className="btnContainer ">
                <button
                  type="submit"
                  className="me-4 customBtn dark-text small"
                  variant="primary"
                >
                  Submit
                </button>
                <button
                  className="customBtn small bg"
                  variant="outline-danger"
                  onClick={() => {
                    navigate("/admin/temple");
                  }}
                >
                  Cancel
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TempleFormPage;
