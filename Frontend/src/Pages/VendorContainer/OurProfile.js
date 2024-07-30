import React, { useState, useEffect } from "react";
import Api from "../../Api";
import { useForm } from "react-hook-form";
import { Row, Card, Col, Button } from "react-bootstrap";
import "./index.scss";
import { Dropdown } from "primereact/dropdown";
import { Select } from "antd";
import { Option } from "antd/lib/mentions";

function TabsVendor() {
  const [typeValue, setTypeValue] = useState();
  const [serviceType, setServiceType] = useState([]);
  const [selectYear, setSelectYear] = useState();
  const [languageDetails, setLanguageDetails] = useState();
  const [countryValue, setCountryValue] = useState();
  const [country, setCountry] = useState(null);
  const [stateValue, setStateValue] = useState();
  const [stateList, setstateList] = useState([]);
  const [districtValue, setDistrictValue] = useState();
  const [districtList, setdistrictList] = useState([]);
  const [cityvalue, setCityValue] = useState();
  const [cityList, setCityList] = useState([]);
  const [selectArea, setselectArea] = useState("");
  const [areaList, setareaList] = useState([]);

  const typeDetails = [
    { name: "Inside Temple", value: "inside" },
    { name: "Outside Temple", value: "outside" },
    { name: "Both", value: "both" },
  ];
  const year = [
    { name: "1990", value: "1990" },
    { name: "1991", value: "1991" },
    { name: "1992", value: "1992" },
    { name: "1993", value: "1993" },
    { name: "1994", value: "1994" },
    { name: "1995", value: "1995" },
    { name: "1996", value: "1996" },
    { name: "1997", value: "1997" },
    { name: "1998", value: "1998" },
    { name: "1999", value: "1999" },
    { name: "2000", value: "2000" },
    { name: "2001", value: "2001" },
    { name: "2002", value: "2002" },
    { name: "2003", value: "2003" },
    { name: "2004", value: "2004" },
    { name: "2005", value: "2005" },
    { name: "2006", value: "2006" },
    { name: "2007", value: "2007" },
    { name: "2008", value: "2008" },
    { name: "2009", value: "2009" },
    { name: "2010", value: "2010" },
    { name: "2011", value: "2011" },
    { name: "2012", value: "2012" },
    { name: "2013", value: "2013" },
    { name: "2014", value: "2014" },
    { name: "2015", value: "2015" },
    { name: "2016", value: "2016" },
    { name: "2017", value: "2017" },
    { name: "2018", value: "2018" },
    { name: "2019", value: "2019" },
    { name: "2020", value: "2020" },
    { name: "2021", value: "2021" },
    { name: "2022", value: "2022" },
    { name: "2023", value: "2023" },
    { name: "2024", value: "2024" },
  ];

  const serviceTypes = [
    { name: "Marriage Astrology", value: "Marriageastrology" },
    { name: "House Warming", value: "HouseWarming" },
    { name: "Ganesh Puja", value: "GaneshPuja" },
    { name: "Satyanarayana Vrat", value: "SatyanarayanaVrat" },
    { name: "Namkaran Ceremony", value: "NamkaranCeremony" },
    { name: "Rudrabhishek", value: "Rudrabhishek" },
    { name: "Annaprasan", value: "Annaprasan" },
    { name: "Navagraha Puja", value: "NavagrahaPuja" },
    { name: "Shanti Puja", value: "ShantiPuja" },
    { name: "Chandi Homa", value: "ChandiHoma" },
    { name: "Vastu Puja", value: "VastuPuja" },
    { name: "Durga Puja", value: "DurgaPuja" },
    { name: "Pitrupaksha", value: "Pitrupaksha" },
    { name: "Kaal Sarp Dosh Puja", value: "KaalSarpDoshPuja" },
    { name: "Sankat Mochan Hanuman Puja", value: "SankatMochanHanumanPuja" },
  ];

  const languageList = [
    { language: "Tamil", value: "Tamil" },
    { language: "Malayalam", value: "Malayalam" },
    { language: "English", value: "English" },
    { language: "Telugu", value: "Telugu" },
    { language: "Kannada", value: "Kannada" },
  ];

  useEffect(() => {
    getCountry();
  }, []);

  const {
    register,
    getValues,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const getCountry = async () => {
    await Api.get(`${process.env.REACT_APP_DEV_BASE_URL}/country/getAll`).then(
      (res) => {
        const country = res.data;
        setCountry(country);
      }
    );
  };

  const getState = (country_id) => {
    Api.get(`/state/getState/${country_id}`).then((res) => {
      setstateList(res.data);
    });
  };

  const getDistrict = (state_id) => {
    setStateValue(state_id);
    Api.get(`/district/getdistrict/${state_id}`).then((res) => {
      setdistrictList(res.data);
    });
  };

  const getCity = (districtId) => {
    setDistrictValue(districtId);
    Api.get(`/city/getCity/${districtId}`).then((res) => {
      setCityList(res.data);
    });
  };

  const getArea = async (id) => {
    await Api.get(
      `${process.env.REACT_APP_DEV_BASE_URL}/area/getArea/${id}`
    ).then((res) => {
      const area_name = res.data;
      setareaList(area_name);
    });
  };

  const [selectImage, setSelectImage] = useState(null);

  const setImage = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  useEffect(() => {
    getValue();
  }, []);

  const getValue = async () => {
    try {
      const res = await Api.get(`/iyer/getbyid/${7}`);
      const data = res.data;
      setSelectImage(data.imageUrl);
      setLanguageDetails(data.language || []);
      setCountryValue(data.country);
      setStateValue(data.state);
      setDistrictValue(data.district);
      setCityValue(data.city);
      setselectArea(data.area);
      setTypeValue(data.type);
      setServiceType(data.service || []);
      setSelectYear(data.yearofEstablish);

      reset({
        priestName: data.priestName,
        templeName: data.templeName,
        aadharNumber: data.aadharNumber,
        mobileNumber: data.mobileNumber,
        AlternateNumber: data.AlternateNumber,
        yearofExperience: data.yearofExperience,
        poojaCounts: data.poojaCounts,
        pincode: data.pincode,
        address: data.address,
      });

      getCountry();
      getState(data.country);
      getDistrict(data.state);
      getCity(data.district);
      getArea(data.city);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const isUpdating = getValues().address != null && getValues().address > "";

  const handleFormSubmit = async () => {
    const Details = {
      priestName: getValues().priestName,
      templeName: getValues().templeName,
      aadharNumber: getValues().aadharNumber,
      mobileNumber: getValues().mobileNumber,
      AlternateNumber: getValues().AlternateNumber,
      address: getValues().address,
      pincode: getValues().pincode,
      language: languageDetails,
      country: countryValue,
      state: stateValue,
      district: districtValue,
      city: cityvalue,
      area: selectArea,
      type: typeValue,
      yearofExperience: getValues().yearofExperience,
      poojaCounts: getValues().poojaCounts,
      yearofEstablish: selectYear,
      serviceType: serviceType,
      iyer_image: "",
      vendorId: 7,
    };

    const data = new FormData();
    data.append("file", selectImage);
    data.append("upload_preset", "darshan");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dzblzw7ll/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const cloudinaryData = await response.json();
    Details.iyer_image = cloudinaryData.secure_url;

    if (isUpdating) {
      await Api.put(`/iyer/updateIyer/${21}`, Details).then((resp) => {
        console.log(resp, "respppppp");
      });
    } else {
      await Api.post(`/iyer/create`, Details).then((resp) => {
        console.log(resp, "respppppp");
      });
    }
  };

  return (
    <div>
      <Col xs={12} md={12} lg={12}>
        <div
          className="ourProfileParentdiv"
          style={{ backgroundColor: "white", padding: "10px 20px" }}
        >
          <div style={{ paddingLeft: "10px" }}>
            <center>
              {" "}
              <h4 className="pages-title mt-3 mb-5"> Vendor Details</h4>
            </center>

            <form onSubmit={handleSubmit(handleFormSubmit)}>
              <div>
                <p className="ourProfile_Heading_div">Personal Details</p>

                <Row>
                  <Col xs={12} md={4} lg={6} className="d-flex align-items-end">
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">
                          Select Image
                        </label>
                      </div>
                      <div>
                        <input
                          className="inputcolumn-ourProfile mt-2"
                          type="file"
                          onChange={handleFileChange}
                        />
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    {selectImage && (
                      <img
                        src={selectImage}
                        alt="Selected"
                        style={{ width: "60%", height: "30vh" }}
                      />
                    )}
                  </Col>
                </Row>
                <br />
                <Row>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">
                          Priest Name
                        </label>
                      </div>
                      <div>
                        <input
                          className="inputcolumn-ourProfile"
                          type="text"
                          name="priestName"
                          {...register("priestName", { required: true })}
                          required="required"
                          placeholder="Priest Name"
                        />
                        {errors.priestName && (
                          <p className="text-danger">Name is required</p>
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">
                          Temple Name
                        </label>
                      </div>
                      <div>
                        <input
                          className="inputcolumn-ourProfile"
                          type="text"
                          name="templeName"
                          {...register("templeName", { required: true })}
                          required="required"
                          placeholder="Temple Name"
                        />
                        {errors.templeName && (
                          <p className="text-danger">Name is required</p>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">
                          Aadhar Number
                        </label>
                      </div>
                      <div>
                        <input
                          className="inputcolumn-ourProfile"
                          type="number"
                          name="aadharNumber"
                          {...register("aadharNumber", { required: true })}
                          required="required"
                          placeholder="Aadhar Number"
                        />
                        {errors.aadharNumber && (
                          <p className="text-danger">
                            aadharNumber is required
                          </p>
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">
                          Mobile Number
                        </label>
                      </div>
                      <div>
                        <input
                          className="inputcolumn-ourProfile"
                          type="number"
                          name="mobileNumber"
                          {...register("mobileNumber", { required: true })}
                          required="required"
                          placeholder="Mobile Number"
                        />
                        {errors.mobileNumber && (
                          <p className="text-danger">
                            MobileNumber is required
                          </p>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">
                          Alternate Number
                        </label>
                      </div>
                      <div>
                        <input
                          className="inputcolumn-ourProfile"
                          type="number"
                          name="AlternateNumber"
                          {...register("AlternateNumber", { required: true })}
                          required="required"
                          placeholder="Alternate Number"
                        />
                        {errors.AlternateNumber && (
                          <p className="text-danger">
                            AlternateNumber is required
                          </p>
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">Language</label>
                      </div>
                      <div>
                        <Select
                          className="inputcolumn_drp"
                          mode="multiple"
                          allowClear
                          value={languageDetails}
                          onChange={(e) => {
                            setLanguageDetails(e);
                          }}
                          placeholder="Select a Type"
                          style={{ border: "none" }}
                        >
                          {languageList?.map((option) => (
                            <Option value={option.value}>{option.name}</Option>
                          ))}
                        </Select>
                        {errors.language && (
                          <p className="error-text-color-Profile">
                            Language is required
                          </p>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">Country</label>
                      </div>
                      <div>
                        <Select
                          className="inputcolumn_drp"
                          value={countryValue}
                          onChange={(e) => {
                            console.log("e :>> ", e);
                            setCountryValue(e);
                            getState(e);
                          }}
                          placeholder="Select a Country"
                          style={{ border: "none" }}
                        >
                          {country?.map((option) => (
                            <Option key={option.id} value={option.id}>
                              {option.country}
                            </Option>
                          ))}
                        </Select>
                        {errors.country && (
                          <p className="error-text-color-Profile">
                            Country is required
                          </p>
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">State</label>
                      </div>
                      <div>
                        <Select
                          showSearch
                          name="selectState"
                          placeholder="Select State Name"
                          allowclear="true"
                          className="inputcolumn_drp"
                          onChange={(e) => {
                            const valueId = stateList?.find(
                              (list) => list.state === e
                            );
                            getDistrict(valueId.id);
                          }}
                        >
                          {stateList?.map((list, i) => (
                            <Option value={list?.state} key={i}>
                              {list?.state}
                            </Option>
                          ))}
                        </Select>
                        {errors.state && (
                          <p className="error-text-color-Profile">
                            State is required
                          </p>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">District</label>
                      </div>
                      <div>
                        <Select
                          showSearch
                          name="selectDistrict"
                          placeholder="Select District Name*"
                          allowclear="true"
                          className="inputcolumn_drp"
                          onChange={(e) => {
                            const valueId = districtList?.find(
                              (list) => list.district === e
                            );
                            getCity(valueId.id);
                          }}
                        >
                          {districtList?.map((list, i) => (
                            <Option value={list?.district} key={i}>
                              {list?.district}
                            </Option>
                          ))}
                        </Select>
                        {errors.district && (
                          <p className="error-text-color-Profile">
                            District is required
                          </p>
                        )}{" "}
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">City</label>
                      </div>
                      <div>
                        <Select
                          showSearch
                          name="selectCity"
                          placeholder="Select City Name*"
                          allowclear="true"
                          className="inputcolumn_drp"
                          onChange={(e) => {
                            const valueId = cityList?.find(
                              (list) => list.city === e
                            );
                            setCityValue(valueId.id);
                            getArea(valueId.id);
                          }}
                        >
                          {cityList?.map((list, i) => (
                            <Option value={list.city} key={i}>
                              {list?.city}
                            </Option>
                          ))}
                        </Select>
                        {errors.city && (
                          <p className="error-text-color-Profile">
                            City is required
                          </p>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">Area</label>
                      </div>
                      <div>
                        <Select
                          showSearch
                          name="selectArea"
                          placeholder="Select Area Name*"
                          allowclear="true"
                          className="inputcolumn_drp"
                          onChange={(e) => {
                            const valueId = areaList?.find(
                              (list) => list.area_name === e
                            );

                            console.log(valueId.area_id);
                            setselectArea(valueId.area_id);
                          }}
                        >
                          {areaList?.map((list, i) => (
                            <Option value={list.area_name} key={i}>
                              {list?.area_name}
                            </Option>
                          ))}
                        </Select>
                        {errors.area && (
                          <p className="error-text-color-Profile">
                            Area is required
                          </p>
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">Address</label>
                      </div>
                      <div>
                        <textarea
                          className="inputcolumn-ourProfile"
                          type="textarea"
                          name="address"
                          {...register("address", { required: true })}
                          required="required"
                          placeholder="Address"
                        />
                        {errors.address && (
                          <p className="text-danger">Address is required</p>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">Pincode</label>
                      </div>
                      <div>
                        <input
                          className="inputcolumn-ourProfile"
                          type="number"
                          name="priestName"
                          {...register("pincode", { required: true })}
                          required="required"
                          placeholder="pincode"
                        />
                        {errors.pincode && (
                          <p className="text-danger">Name is required</p>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div>
                <p className="ourProfile_Heading_div">Professional Details</p>

                <Row>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">Type</label>
                      </div>
                      <div>
                        <Select
                          className="inputcolumn_drp"
                          value={typeValue}
                          onChange={(e) => {
                            setTypeValue(e);
                          }}
                          placeholder="Select a Type"
                          style={{ border: "none" }}
                        >
                          {typeDetails?.map((option) => (
                            <Option value={option.value}>{option.name}</Option>
                          ))}
                        </Select>
                        {/* {errors.country && (
                          <p className="error-text-color-Profile">
                            Country is required
                          </p>
                        )} */}
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">Services</label>
                      </div>
                      <div>
                        <Select
                          value={serviceType}
                          mode="multiple"
                          allowClear
                          style={{
                            width: "100%",
                          }}
                          onChange={(e) => {
                            setServiceType(e);
                          }}
                          placeholder="Select a Type"
                        >
                          {serviceTypes?.map((option) => (
                            <Option value={option.value}>{option.name}</Option>
                          ))}
                        </Select>
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">
                          Year of Experience
                        </label>
                      </div>
                      <div>
                        <input
                          className="inputcolumn-ourProfile"
                          type="number"
                          name="yearofExperience"
                          {...register("yearofExperience", { required: true })}
                          required="required"
                          placeholder="Experience"
                        />
                        {errors.yearofExperience && (
                          <p className="text-danger">
                            yearofExperience is required
                          </p>
                        )}
                      </div>
                    </div>
                  </Col>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">
                          Pooja Counts
                        </label>
                      </div>
                      <div>
                        <input
                          className="inputcolumn-ourProfile"
                          type="number"
                          name="poojaCounts"
                          {...register("poojaCounts", { required: true })}
                          required="required"
                          placeholder="Pooja Counts"
                        />
                        {errors.poojaCounts && (
                          <p className="text-danger">poojaCounts is required</p>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={4} lg={6}>
                    <div>
                      <div>
                        <label className="vendorpage_labelCss">
                          Year of Establish
                        </label>
                      </div>
                      <Select
                        className="inputcolumn_drp"
                        value={selectYear}
                        onChange={(e) => {
                          setSelectYear(e);
                        }}
                        placeholder="Select a Type"
                        style={{ border: "none" }}
                      >
                        {year?.map((option) => (
                          <Option value={option.value}>{option.name}</Option>
                        ))}
                      </Select>
                      <div>
                        {errors.yearofEstablish && (
                          <p className="text-danger">
                            yearofEstablish is required
                          </p>
                        )}
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="upgrade_column mb-3">
                <Button className="button1" type="submit">
                  Upgrade
                </Button>
              </div>
            </form>
          </div>
        </div>
        {/* </Card> */}
      </Col>
    </div>
  );
}

export default TabsVendor;
