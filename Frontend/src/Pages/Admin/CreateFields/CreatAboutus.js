import axios from "axios";
import "primeicons/primeicons.css";
import "primereact/resources/primereact.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import { Toast } from "primereact/toast";
import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function CreateAboutUs() {
  const [aboutDetails, setAboutDetails] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const toast = useRef(null);

  const getAboutDetails = async () => {
    try {
      const result = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/about/getOne`
      );
      if (result.data?.status === "Success" && result.data?.result?.length) {
        setAboutDetails(result.data.result[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAboutDetails();
  }, []);

  useEffect(() => {
    if (aboutDetails?.title && aboutDetails?.description) {
      reset({
        title: aboutDetails?.title,
        description: aboutDetails?.description,
      });
    }
  }, [aboutDetails?.title, aboutDetails?.description]);

  const displayToaster = () => {
    toast.current.show({
      severity: "success",
      summary: "Done",
      detail: `About us ${aboutDetails ? "is Updated" : "is Created"}`,
      life: 3000,
    });
    setTimeout(() => {
      navigate("/about-us");
    }, 1000);
  };

  const onSubmit = async (data, e) => {
    try {
      await axios.post(
        `${process.env.REACT_APP_DEV_BASE_URL}/about/update`,
        data
      );
      displayToaster();
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
        <h1 className="createListForm__title">About us</h1>

        <section>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-4">
              <Form.Label className="font-title">Title</Form.Label>
              <div className="field-style-2">
                <Form.Control
                  type="text"
                  name="name"
                  {...register("title", { required: true })}
                />
                <Form.Text style={{ color: "red" }}>
                  {errors.title && "This field is required"}
                </Form.Text>
              </div>
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label className="font-title">Description</Form.Label>
              <div className="field-style-2">
                <Form.Control
                  type="text"
                  name="name"
                  as="textarea"
                  rows={6}
                  {...register("description", { required: true })}
                />
                <Form.Text style={{ color: "red" }}>
                  {errors.description && "This field is required"}
                </Form.Text>
              </div>
            </Form.Group>

            <div className="d-flex justify-content-end py-3">
              <button
                type="submit"
                className="me-4 customBtn dark-text small"
                variant="primary"
              >
                Submit
              </button>
              <button
                className="customBtn small bg"
                type="reset"
                onClick={() => {
                  reset();
                }}
              >
                Cancel
              </button>
            </div>
          </Form>
        </section>
      </Container>
    </div>
  );
}
