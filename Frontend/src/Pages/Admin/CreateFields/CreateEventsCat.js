import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import axios from "axios";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "../../../components/Css/sass/CreateAmenity.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Container } from "react-bootstrap";

export default function CreateEventCat() {
  const navigate = useNavigate();
  const { state: locationState } = useLocation();

  console.log("State from location", locationState);

  const toast = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: locationState ? locationState : {} });

  const params = useParams();
  console.log("Params", locationState);

  const displayToaster = () => {
    toast.current.show({
      severity: "success",
      summary: "Done",
      detail: `Event Categories ${locationState ? "is Updated" : "Created"}`,
      life: 3000,
    });
    setTimeout(() => {
      navigate("/admin/addcategoriesdetails");
    }, 1000);
  };
  const onSubmit = async (data, e) => {
    try {
      if (locationState) {
        //update
        await axios.put(  
          `${process.env.REACT_APP_DEV_BASE_URL}/blogeventcategory/update/${locationState.id}`,
          data
        );
        displayToaster();
      } else {
        //create
        await axios.post(
          `${process.env.REACT_APP_DEV_BASE_URL}/blogeventcategory/create`,
          data
          
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

  return (
    <div className="createListForm">
      <Toast ref={toast} />

      <Container>
        <h5 className="createListForm__title">Create EventCategories</h5>

        <section>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label className="font-title">category Name</Form.Label>
              <div className="field-style-2">
                <Form.Control
                  type="text"
                  name="categoryName"
                  {...register("categoryName", { required: true })}
                  placeholder=""
                />
                <Form.Text style={{ color: "red" }}>
                  {errors.category_name && "This field is required"}
                </Form.Text>
              </div>
            </Form.Group>
            <div className="d-flex justify-content-end py-3">
              <button
                type="submit"
                className="me-4 customBtn dark-text small"
                variant="primary">
                Submit
              </button>
              <button
                className="customBtn small bg"
                variant="outline-danger"
                onClick={() => {
                  reset();
                }}>
                Cancel
              </button>
            </div>
          </Form>
        </section>
      </Container>
    </div>
  );
}
