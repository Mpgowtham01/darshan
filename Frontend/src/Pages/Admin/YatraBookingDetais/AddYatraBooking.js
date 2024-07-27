import React, { useState } from 'react';
import { Form, Input, Button, Row, Col, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

function AddYatraBooking({errors, register}) {
  const [formData, setFormData] = useState({
    title: '',
    from_location: '',
    to_location: '',
    designation: '',
    days: '',
    dayslist: '',
    price: '',
    offerPrice: '',
    overview: '',
    whatIsIncluded: '',
    meetingPoint: '',
    endPoint: '',
    mainImage:'',
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileChange = (info, fieldName) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      // Ensure we're assigning the correct file object
      setFormData(prevData => ({
        ...prevData,
        [fieldName]: info.file.originFileObj
      }));
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };
  
  const handleMultipleFileChange = ({ fileList }) => {
    setFormData((prevData) => ({
      ...prevData,
      images: fileList.map((file) => file.originFileObj),
    }));
  };

  const handleSubmit = async () => {
    const data = new FormData();
    
    // Append text fields
    for (const key in formData) {
      if (key === 'images') {
        formData[key].forEach((file, index) => {
          data.append(`images[${index}]`, file);
        });
      } else if (key === 'mainImage' && formData[key]) {
        data.append('mainImage', formData[key]);
      } else {
        data.append(key, formData[key]);
      }
    }
  
    try {
      const response = await axios.post(`${process.env.REACT_APP_DEV_BASE_URL}/yatrabook/bookTrip`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      message.success(response.data.message);
    } catch (error) {
      console.error('There was an error booking the trip!', error);
      message.error('Error booking the trip');
    }
    console.log("data",formData);
  };
  
  
  const textAreaProps = {
    errors,
    register,
    others: {
      as: "textarea",
      rows: 3,
    },
  };

  return (
    <div>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Title" style={{borderRadius:"1px"}}>
              <Input.TextArea style={{border:"none",borderRadius:"none"}} name="title" value={formData.title} onChange={handleChange} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="From Location">
              <Input.TextArea name="from_location" value={formData.from_location} onChange={handleChange} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="To Location">
              <Input.TextArea name="to_location" value={formData.to_location} onChange={handleChange} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Designation">
              <Input.TextArea name="designation" value={formData.designation} onChange={handleChange} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Days">
              <Input.TextArea name="days" value={formData.days} onChange={handleChange} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Days List">
              <Input.TextArea name="dayslist" value={formData.dayslist} onChange={handleChange} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="Price">
              <Input.TextArea name="price" value={formData.price} onChange={handleChange} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Offer Price">
              <Input.TextArea name="offerPrice" value={formData.offerPrice} onChange={handleChange} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Overview">
              <Input.TextArea name="overview" value={formData.overview} onChange={handleChange} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
            <Form.Item label="What Is Included">
              <Input.TextArea name="whatIsIncluded" value={formData.whatIsIncluded} onChange={handleChange} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Meeting Point">
              <Input.TextArea name="meetingPoint" value={formData.meetingPoint} onChange={handleChange} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="End Point">
              <Input.TextArea name="endPoint" value={formData.endPoint} onChange={handleChange} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={8}>
          <Form.Item label="Main Image">
  <Upload
    name="mainImage"
    listType="picture"
    beforeUpload={() => false} // Prevent automatic upload
    onChange={(info) => handleFileChange(info, 'mainImage')} // Handle file change
  >
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
</Form.Item>


<Form.Item label="Images">
  <Upload
    name="images"
    listType="picture"
    multiple
    beforeUpload={() => false}
    onChange={handleMultipleFileChange}
  >
    <Button icon={<UploadOutlined />}>Click to Upload</Button>
  </Upload>
</Form.Item>
          </Col>
        </Row>
        <Button type="primary" htmlType="submit">Book Trip</Button>
      </Form>
    </div>
  );
}

export default AddYatraBooking;
