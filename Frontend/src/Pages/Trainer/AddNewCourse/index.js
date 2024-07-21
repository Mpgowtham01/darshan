import React, { useState, useEffect } from "react";
import { Form, Input, DatePicker, TimePicker, Select, Button, Row, Col } from "antd";
import axios from "axios";
import moment from "moment";
import "./newcourse.css";

const { Option } = Select;
const { TextArea } = Input;

const AddNewCourse = () => {
  const [day, setDay] = useState([
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
    { label: "Sunday", value: "Sunday" },
  ]);
  const [language, setLanguage] = useState([
    { name: "Tamil", value: "Tamil" },
    { name: "Telugu", value: "Telugu" },
    { name: "Kannada", value: "Kannada" },
    { name: "Hindi", value: "Hindi" },
    { name: "Malayalam", value: "Malayalam" },
    { name: "Marathi", value: "Marathi" },
  ]);
  const [mode, setMode] = useState([
    { id: 2, name: "Online", value: "Online" },
    { id: 1, name: "Offline", value: "Offline" },
  ]);
  const [countries, setCountries] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [areas, setAreas] = useState([]);
  const [topics, setTopics] = useState([""]);
  const [modeValue, setModeValue] = useState("Online");
  const [title, setTitle] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    getTitle();
    getCountryList();
  }, []);

  const getTitle = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/trainerclasslist/getAll`
      );
      const titleOptions = response.data.map((item) => ({
        label: item.class_name,
        value: item.class_name,
      }));
      setTitle(titleOptions);
    } catch (error) {
      console.error("Error fetching titles:", error);
    }
  };

  const getCountryList = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/country/getAll`
      );
      setCountries(response.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };

  const countryOnChangeHandler = async (id) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/state/getState/${id}`
      );
      if (response.data && response.data.length > 0) {
        setStates(response.data);
        setDistricts([]);
        setCities([]);
        setAreas([]);
      } else {
        console.log("No states found for the selected country.");
      }
    } catch (error) {
      console.error("Error fetching states:", error);
    }
  };

  const statesOnChangeHandler = async (stateId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/district/getdistrict/${stateId}`
      );
      if (response.data && response.data.length > 0) {
        setDistricts(response.data);
        setCities([]);
        setAreas([]);
      } else {
        console.log("No districts found for the selected state.");
      }
    } catch (error) {
      console.error("Error fetching districts:", error);
    }
  };

  const districtOnChangeHandler = async (districtId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/city/getcity/${districtId}`
      );
      if (response.data && response.data.length > 0) {
        setCities(response.data);
        setAreas([]);
      } else {
        console.log("No cities found for the selected district.");
      }
    } catch (error) {
      console.error("Error fetching cities:", error);
    }
  };

  const cityOnChangeHandler = async (cityId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/area/getarea/${cityId}`
      );
      if (response.data && response.data.length > 0) {
        setAreas(response.data);
      } else {
        console.log("No areas found for the selected city.");
      }
    } catch (error) {
      console.error("Error fetching areas:", error);
    }
  };

  const onSubmit = async (values) => {
    try {
      const payload = {
        ...values,
        description: values.description,
        mode: modeValue,
        startDate: values.startDate ? moment(values.startDate).format("YYYY-MM-DD") : null,
        endDate: values.endDate ? moment(values.endDate).format("YYYY-MM-DD") : null,
        startTime: values.startTime ? moment(values.startTime).format("HH:mm:ss") : null,
        endTime: values.endTime ? moment(values.endTime).format("HH:mm:ss") : null,
        topics: topics,
        ...(modeValue === "Online"
          ? { onlineLink: values.onlineLink }
          : {
              insideoutside: values.insideoutside,
              country: values.country,
              state: values.state,
              district: values.district,
              city: values.city,
              area: values.area,
              pincode: values.pincode,
              address: values.address,
              landmark: values.landmark,
            }),
            day: values.day.join(", "),
            language: values.language.join(", "),
      };

      console.log("Final Payload:", payload);

      const response = await axios.post(
        `${process.env.REACT_APP_DEV_BASE_URL}/course/addCourse`,
        payload
      );

      console.log("Course added successfully:", response.data);
      // Optionally, you can reset the form after successful submission
      form.resetFields();
    } catch (error) {
      console.error("Error adding course:", error);
    }
  };

  const handleIncrementTopic = () => {
    setTopics((prev) => [...prev, ""]);
  };

  const handleTopicChange = (index, value) => {
    setTopics((prev) => {
      const newTopics = [...prev];
      newTopics[index] = value;
      return newTopics;
    });
  };

  const handleRemoveTopic = (index) => {
    setTopics((prev) => prev.filter((_, i) => i !== index));
  };

  const filterOptions = (input, option) =>
    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

  return (
    <div className="form-container" style={{ padding: "20px", background: "#fff" }}>
      <Form form={form} onFinish={onSubmit} layout="vertical">
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Title" name="title" rules={[{ required: true, message: "Please select a title" }]}>
              <Select
                showSearch
                placeholder="Select a title"
                filterOption={filterOptions}
              >
                {title.map((item) => (
                  <Option key={item.value} value={item.value}>
                    {item.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Start Date" name="startDate" rules={[{ required: true, message: "Please select a start date" }]}>
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="End Date" name="endDate" rules={[{ required: true, message: "Please select an end date" }]}>
              <DatePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Start Time" name="startTime" rules={[{ required: true, message: "Please select a start time" }]}>
              <TimePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="End Time" name="endTime" rules={[{ required: true, message: "Please select an end time" }]}>
              <TimePicker style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Day" name="day" rules={[{ required: true, message: "Please select days" }]}>
              <Select
                showSearch
                mode="multiple"
                placeholder="Select days"
                filterOption={filterOptions}
              >
                {day.map((d) => (
                  <Option key={d.value} value={d.value}>
                    {d.label}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Language" name="language" rules={[{ required: true, message: "Please select a language" }]}>
              <Select
                showSearch
                mode="multiple"
                placeholder="Select languages"
                filterOption={filterOptions}
              >
                {language.map((lang) => (
                  <Option key={lang.value} value={lang.value}>
                    {lang.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Mode" name="mode" rules={[{ required: true, message: "Please select a mode" }]}>
              <Select
                showSearch
                placeholder="Select mode"
                onChange={(value) => setModeValue(value)}
                filterOption={filterOptions}
              >
                {mode.map((m) => (
                  <Option key={m.value} value={m.value}>
                    {m.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          {modeValue === "Online" && (
            <Col span={8}>
              <Form.Item label="Online Link" name="onlineLink" rules={[{ required: true, message: "Please enter an online link" }]}>
                <Input placeholder="Enter online link" />
              </Form.Item>
            </Col>
          )}
          {modeValue === "Offline" && (
            <>
              <Col span={8}>
                <Form.Item label="Inside/Outside" name="insideoutside" rules={[{ required: true, message: "Please select inside or outside" }]}>
                  <Select
                    showSearch
                    placeholder="Select"
                    filterOption={filterOptions}
                  >
                    <Option value="Inside">Inside</Option>
                    <Option value="Outside">Outside</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Country" name="country" rules={[{ required: true, message: "Please select a country" }]}>
                  <Select
                    showSearch
                    placeholder="Select country"
                    onChange={countryOnChangeHandler}
                    filterOption={filterOptions}
                  >
                    {countries.map((country) => (
                      <Option key={country.id} value={country.id}>
                        {country.country}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="State" name="state" rules={[{ required: true, message: "Please select a state" }]}>
                  <Select
                    showSearch
                    placeholder="Select state"
                    onChange={statesOnChangeHandler}
                    filterOption={filterOptions}
                  >
                    {states.map((state) => (
                      <Option key={state.id} value={state.id}>
                        {state.state}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="District" name="district" rules={[{ required: true, message: "Please select a district" }]}>
                  <Select
                    showSearch
                    placeholder="Select district"
                    onChange={districtOnChangeHandler}
                    filterOption={filterOptions}
                  >
                    {districts.map((district) => (
                      <Option key={district.id} value={district.id}>
                        {district.district}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="City" name="city" rules={[{ required: true, message: "Please select a city" }]}>
                  <Select
                    showSearch
                    placeholder="Select city"
                    onChange={cityOnChangeHandler}
                    filterOption={filterOptions}
                  >
                    {cities.map((city) => (
                      <Option key={city.id} value={city.id}>
                        {city.city}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Area" name="area">
                  <Select
                    showSearch
                    placeholder="Select area"
                    filterOption={filterOptions}
                  >
                    {areas.map((area) => (
                      <Option key={area.id} value={area.id}>
                        {area.area_name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Pincode" name="pincode" rules={[{ required: true, message: "Please enter a pincode" }]}>
                  <Input placeholder="Enter pincode" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Address" name="address" rules={[{ required: true, message: "Please enter an address" }]}>
                  <TextArea placeholder="Enter address" rows={4} />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Landmark" name="landmark">
                  <Input placeholder="Enter landmark" />
                </Form.Item>
              </Col>
              <Col span={8}>
                <Form.Item label="Description" name="description">
                  <Input.TextArea placeholder="Enter description" />
                </Form.Item>
              </Col>
            </>
          )}
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Topics">
              {topics.map((topic, index) => (
                <div key={index} style={{ marginBottom: "8px" }}>
                  <Input
                    placeholder={`Topic ${index + 1}`}
                    value={topic}
                    onChange={(e) => handleTopicChange(index, e.target.value)}
                    style={{ width: "calc(100% - 40px)", marginRight: "8px" }}
                  />
                  {topics.length > 1 && (
                    <Button
                      type="danger"
                      onClick={() => handleRemoveTopic(index)}
                      style={{ marginRight: "8px" }}
                    >
                      Remove
                    </Button>
                  )}
                </div>
              ))}
              <Button type="dashed" onClick={handleIncrementTopic}>
                Add Topic
              </Button>
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddNewCourse;
