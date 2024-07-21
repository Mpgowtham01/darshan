import React, { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import axios from "axios";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Col, Container, Row } from "react-bootstrap";
// import InputField from "../AddTempleList/TempleForm/TempleFormComponents/InputField";
import InputField from "../../AddTempleList/TempleForm/TempleFormComponents/InputField";

// import "./CreateFormPage.scss";
import "../../CreateFields/CreateFormPage.scss";

// import PrimeDropdown from "../AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
import PrimeDropdown from "../../AddTempleList/TempleForm/TempleFormComponents/PrimeDropdown";
import { ConfigConsumer } from "antd/lib/config-provider";

export default function AddCommunityinformation() {
  const navigate = useNavigate();
  const { state: locationState } = useLocation();
  const { groupName } = useParams();
  const [categories, setCategories] = useState([]);
  const [blogImage, setBlogImage] = useState(
    locationState?.about_image || null
  );
  const [newImage, setNewImage] = useState(locationState?.news_image || null);

  console.log("State from location", locationState);

  const toast = useRef(null);
  let defaultValues = {};

  if (locationState) {
    const { about_description, about_image, news_description, news_image } =
      locationState;

    // Default Values when editing

    defaultValues = {
      ...locationState,
      about_description,
      about_image,
      news_description,
      news_image,
    };
  }
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
      detail: `Details ${locationState ? "is Updated" : "Created"}`,
      life: 3000,
    });
    setTimeout(() => {
      navigate(`/community/${groupName}/communityInformationList`);
    }, 1000);
  };

  const getFormData = (data, mainImage, newsImage) => {
    const formData = new FormData();
    formData.append("about_description", data.about_description);
    formData.append("about_image", mainImage);
    formData.append("news_description", data.news_description);
    formData.append("news_image", newsImage);
    return formData;
  };

  const onSubmit = async (data, e) => {
    // console.log("Data", {
    //   ...data,
    //   FunctionImage,
    // });
    try {
      if (locationState) {
        //update
        await axios.put(
          `${process.env.REACT_APP_DEV_BASE_URL}/communityTemple/updateCommunityTempleMeta/${locationState.id}`,
          getFormData(data, blogImage, newImage),
          { withCredentials: true }
        );
        displayToaster();
      } else {
        //create
        await axios.post(
          `${process.env.REACT_APP_DEV_BASE_URL}/communityTemple/createCommunityTempleMeta`,
          getFormData(data, blogImage, newImage),
          { withCredentials: true }
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

  return (
    <div className="createFormPage">
      <Toast ref={toast} />

      <Container>
        <div className="createFormPage__header">
          <h5 className="createFormPage__header--title"> {locationState ? "Edit" : ""} About</h5>
        </div>

        <Form
          className="createFormPage__form"
          onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col lg={4}>
              <InputField
                {...commonProps}
                keyId="about_description"
                name="About Description"
                others={{ as: "textarea", rows: 4 }}
              />
            </Col>
            <Col lg={4}>
              <Form.Group controlId="about_image" className="mb-3">
                <Form.Label>About Image</Form.Label>
                <Form.Control
                  accept=".png, .jpg, .jpeg"
                  type="file"
                  onChange={e => {
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
          </Row>
          <hr />
          <h5 className="createFormPage__header--title">News</h5>

          <Row>
            <Col lg={4}>
              <InputField
                {...commonProps}
                keyId="news_description"
                name="News Description"
                others={{ as: "textarea", rows: 4 }}
              />
            </Col>
            <Col lg={4}>
              <Form.Group controlId="news_image" className="mb-3">
                <Form.Label>News Image</Form.Label>
                <Form.Control
                  accept=".png, .jpg, .jpeg"
                  type="file"
                  onChange={e => {
                    setNewImage(e.target.files[0]);
                  }}
                />
                {newImage && (
                  <img
                    alt="preview"
                    src={`${process.env.REACT_APP_DEV_BASE_URL}${newImage}`}
                    className="previewImage"
                  />
                )}
              </Form.Group>
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
