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
import InputField from "../AddTempleList/TempleForm/TempleFormComponents/InputField";

import "./CreateFormPage.scss";
import PrimeDropdown from "../AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";

export default function CreateBlog() {  
  const navigate = useNavigate();
  const { state: locationState } = useLocation();

  const [categories, setCategories] = useState([]);
  const [blogImage, setBlogImage] = useState(locationState?.blog_image || null);
console.log('objectblogImage :>> ', blogImage);
  console.log("State from location", locationState);

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
      detail: `Blog ${locationState ? "is Updated" : "Created"}`,
      life: 3000,
    });
    setTimeout(() => {
      navigate("/admin/blog");
    }, 1000);
  };

  const getFormData = (data, mainImage) => {
    const formData = new FormData();
    formData.append("blog_description", data.blog_description);
    formData.append("blog_image", mainImage);
    formData.append("blog_source", data.blog_source);
    formData.append("blog_tags", data.blog_tags);
    formData.append("blog_title", data.blog_title);
    formData.append("category", data.category);
    formData.append("category_name", data.category_name);
    formData.append("id", data.id);
    formData.append("is_active", data.is_active);
    formData.append("show_blogs_in", data.show_blogs_in);

console.log(data,'data',formData, 'formData');
    return formData;
  };

  const onSubmit = async (data, e) => {
    console.log('xxxxxxx',data)
    // console.log("Data", {
    //   ...data,
    //   FunctionImage,
    // });
    try {
      if (locationState) {
        //update
        await axios.put(
          `${process.env.REACT_APP_DEV_BASE_URL}/blog/update/${locationState.id}`,
          getFormData(data, blogImage)
        );
        displayToaster();
      } else {
        //create
        await axios.post(
          `${process.env.REACT_APP_DEV_BASE_URL}/blog/create`,
          getFormData(data, blogImage)
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

  const showBlogsInOptions = [
    { label: "Temple Page", value: "temple" },
    { label: "Iyer Page", value: "iyer" },
    { label: "Both", value: "both" },
  ];

  return (
    <div className="createFormPage">
      <Toast ref={toast} />

      <Container>
        <div className="createFormPage__header">
          <h5 className="createFormPage__header--title">Create Blog</h5>
        </div>

        <Form
          className="createFormPage__form"
          onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col lg={6}>
              <InputField
                {...commonProps}
                keyId="blog_title"
                name="Blog Title"
              />
            </Col>

            <Col lg={6}>
              <InputField {...commonProps} keyId="blog_tags" name="Blog Tags" />
            </Col>
          </Row>

          <Row>
            <Col lg={4}>
              <PrimeDropdown
                controlKey="category"
                name="Category"
                optionLabel="category_name"
                optionValue="id"
                list={categories}
                errors={errors}
                control={control}
              />
            </Col>

            <Col lg={4}>
              <PrimeDropdown
                controlKey="show_blogs_in"
                name="Show Blog In"
                optionLabel="label"
                optionValue="value"
                list={showBlogsInOptions}
                errors={errors}
                control={control}
              />
            </Col>

            <Col lg={4}>
              <InputField
                {...commonProps}
                keyId="blog_description"
                name="Blog Description"
                others={{ as: "textarea", rows: 4 }}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Col lg={6} xl={4}>
                <Form.Group controlId="blog_image" className="mb-3">
                  <Form.Label>Blog Image</Form.Label>
                  <Form.Control
                    accept=".png, .jpg, .jpeg"
                    type="file"
                    onChange={(e) => {
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
