import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import axios from "axios";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { Toast } from "primereact/toast";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Container, Row } from "react-bootstrap";
import Api from "../../../Api";
import { FaPlus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
export default function CreateAddNewTemple() {
  const { state: locationState } = useLocation();
  const navigate = useNavigate();
  const toast = useRef(null);
  const [fields, setFields] = useState([{ name: "Story" }]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: locationState ? locationState : {} });
  const addField = () => {
    setFields([...fields, { name: `Story${fields.length + 1}` }]);
  };
  const removeField = (index) => {
    if (index > 0) {
      setFields(fields.filter((_, i) => i !== index));
    }
  };

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
        <h1 className="createListForm__title">Create Add New Temple</h1>

        <section>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Row>
                <Col lg={6}>
                  <Form.Label className="font-title">Main God Name</Form.Label>
                  <div className="field-style-2">
                    <Form.Control
                      type="text"
                      name="name"
                      {...register("mainGodName", { required: true })}
                      placeholder=""
                    />
                    <Form.Text style={{ color: "red" }}>
                      {errors.mainGodName && "This field is required"}
                    </Form.Text>
                  </div>
                </Col>
                <Col lg={6}>
                  <Form.Label className="font-title">Sub God Name</Form.Label>

                  <div className="field-style-2">
                    <Form.Control
                      type="text"
                      name="subGodName"
                      {...register("subGodName", { required: true })}
                      placeholder=""
                    />
                    <Form.Text style={{ color: "red" }}>
                      {errors.subGodName && "This field is required"}
                    </Form.Text>
                  </div>
                </Col>
              </Row>

              <Row>
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

              <Row>
                {fields.map((field, index) => (
                  <Col lg={6} key={index}>
                    <Form.Label className="font-title">Story</Form.Label>
                    <div className="field-style-2">
                      <Form.Control
                        type="text"
                        name={field.name}
                        {...register(field.name, { required: true })}
                        placeholder=""
                        style={{ height: "100px" }}
                      />
                      <Form.Text style={{ color: "red" }}>
                        {errors[field.name] && "This field is required"}
                      </Form.Text>
                    </div>
                    <div className="mt-3">
                      <MdAddCircle
                        onClick={addField}
                        style={{ fontSize: "25px", color: "#0f0f0f" }}
                      />
                      {index > 0 && (
                        <MdDelete
                          onClick={() => removeField(index)}
                          style={{
                            fontSize: "25px",
                            marginLeft: "10px",
                            color: "red",
                          }}
                        />
                      )}
                    </div>
                  </Col>
                ))}
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
