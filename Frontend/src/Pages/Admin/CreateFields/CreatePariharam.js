
import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import axios from "axios";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { Toast } from "primereact/toast";
import { useLocation, useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Api from "../../../Api";

export default function CreatePariharam() {
  const { state: locationState } = useLocation();
  const navigate = useNavigate();
  const toast = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: locationState ? locationState : {} });

  const displayToaster = () => {
    toast.current.show({
      severity: "success",
      summary: "Done",
      detail: `Pariharam ${locationState ? "is Updated" : "Created"}`,
      life: 3000,
    });
    setTimeout(() => {
      navigate("/admin/pariharam");
    }, 1000);
  };

  const onSubmit = async (data, e) => {
    console.log("Submitted", data.pariharamImage);

    const formData = new FormData();
    formData.append("pariharam_name", data.pariharam_name);
    formData.append("description", data.description);
    formData.append("manthiram", data.manthiram);
    formData.append("pariharamImage", data.pariharamImage[0]); 

    try {
      if (locationState) {
        await axios.put(
          `${process.env.REACT_APP_DEV_BASE_URL}/pariharams/update/${locationState.pariharam_id}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        displayToaster();
      } else {
        await Api.post(
          `${process.env.REACT_APP_DEV_BASE_URL}/pariharams/create`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        displayToaster();
      }
    } catch (error) {
      toast.current.show({
        severity: "error",
        summary: "Error",
        detail: "Something went wrong, please try again!!!",
        life: 3000,
      });
    }
  };

  return (
    <div className="createListForm">
      <Toast ref={toast} />

      <Container>
        <h1 className="createListForm__title">Create Pariharam</h1>

        <section>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Row>
                <Col lg={6}>
                  <Form.Label className="font-title">Pariharam Name</Form.Label>
                  <div className="field-style-2">
                    <Form.Control
                      type="text"
                      name="name"
                      {...register("pariharam_name", { required: true })}
                      placeholder=""
                    />
                    <Form.Text style={{ color: "red" }}>
                      {errors.pariharam_name && "This field is required"}
                    </Form.Text>
                  </div>
                </Col>
                <Col lg={6}>
                  <Form.Label className="font-title">Description</Form.Label>

                  <div className="field-style-2">
                    <Form.Control
                      type="text"
                      name="description"
                      {...register("description", { required: true })}
                      placeholder=""
                    />
                    <Form.Text style={{ color: "red" }}>
                      {errors.description && "This field is required"}
                    </Form.Text>
                  </div>
                </Col>
              </Row>

              <Row>
                <Col lg={6}>
                  <Form.Label className="font-title">Manthiram</Form.Label>
                  <div className="field-style-2">
                    <Form.Control
                      type="text"
                      name="manthiram"
                      {...register("manthiram", { required: true })}
                      placeholder=""
                    />
                    <Form.Text style={{ color: "red" }}>
                      {errors.manthiram && "This field is required"}
                    </Form.Text>
                  </div>
                </Col>
                <Col lg={6}>
                  {" "}
                  <Form.Label className="font-title">Image</Form.Label>
                  <div className="field-style-2">
                    <Form.Control
                      type="file"
                      name="pariharamImage"
                      {...register("pariharamImage", { required: true })}
                      placeholder=""
                    />
                    <Form.Text style={{ color: "red" }}>
                      {errors.pariharamImage && "This field is required"}
                    </Form.Text>
                  </div>
                </Col>
              </Row>
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
                  navigate("/admin/pariharam");
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

