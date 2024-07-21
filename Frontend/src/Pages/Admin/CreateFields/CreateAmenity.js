import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import axios from "axios";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Container } from "react-bootstrap";

export default function CreateAmenity() {
  const navigate = useNavigate();
  const { state: locationState } = useLocation();

  const toast = useRef(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: locationState ? locationState : {} });

  const params = useParams();
  console.log("Params", params);

  const displayToaster = () => {
    toast.current.show({
      severity: "success",
      summary: "Done",
      detail: `Amenity ${locationState ? "is Updated" : "Created"}`,
      life: 3000,
    });

    setTimeout(() => {
      navigate("/admin/amenities");
    }, 1000);
  };

  const onSubmit = async (data, e) => {
    try {
      if (locationState) {
        //update
        await axios.put(
          `${process.env.REACT_APP_DEV_BASE_URL}/amemities/updateAmenities/${locationState.AmenitiesId}`,
          data
        );
        displayToaster();
      } else {
        //create
        await axios.post(
          `${process.env.REACT_APP_DEV_BASE_URL}/amemities/createAmenities`,
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
        <div>
          <h5 className="createListForm__title">Create Amenity</h5>
        </div>

        <section>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label className="font-title">Amenity Name</Form.Label>
              <div className="field-style-2">
                <Form.Control
                  type="text"
                  name="name"
                  {...register("amenityName", { required: true })}
                  placeholder=""
                />
                <Form.Text style={{ color: "red" }}>
                  {errors.amenityName && "This field is required"}
                </Form.Text>
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="font-title">Amenity Image Url</Form.Label>
              <div className="field-style-2">
                <Form.Control
                  as="textarea"
                  name="Description"
                  {...register("amenityDescription", { required: true })}
                  rows={3}
                  className="field-style-1"
                />
                <Form.Text style={{ color: "red" }}>
                  {errors.amenityDescription && (
                    <span>This field is required</span>
                  )}
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
              <button className="customBtn small bg" type="reset" onClick={() => { navigate("/admin/amenities"); }}>
                Cancel
              </button>
            </div>
          </Form>
        </section>
      </Container>
    </div>
  );
}
