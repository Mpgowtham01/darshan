import React, { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import axios from "axios";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { Toast } from "primereact/toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function CreateVendorCategory() {
    const navigate = useNavigate();
    const { state: locationState } = useLocation();
    const toast = useRef(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ defaultValues: locationState ? locationState : {} });


console.log(locationState,"lllllll")

    const params = useParams();

    const displayToaster = () => {
        toast.current.show({
            severity: "success",
            summary: "Done",
            detail: `Vendors ${locationState ? "is Updated" : "Created"}`,
            life: 3000,
        });

        setTimeout(() => {
          navigate("/admin/main-Categories");
        }, 1000);
    };

    const onSubmit = async (data, e) => {
        console.log(data, "data");
        try {
            if (locationState) {
                //update
                await axios.put(
                    `${process.env.REACT_APP_DEV_BASE_URL}/categoriesList/update/${locationState.categoryId}`,
                    data
                );
                displayToaster();
            } else {
                //create
                await axios.post(
                    `${process.env.REACT_APP_DEV_BASE_URL}/categoriesList/create`,
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
                <h1 className="createListForm__title">Craete Main Category</h1>
                <section>
                    <Form 
                    onSubmit={handleSubmit(onSubmit)}
                    >
                        <Form.Group className="mb-3">
                            <Form.Label className="font-title">Main Category</Form.Label>
                            <div className="field-style-2">
                                <Form.Control
                                style={{width:"50%"}}
                                    type="text"
                                    name="name"
                                    {...register("categoryName", { required: true })}
                                    placeholder=""
                                />
                                <Form.Text style={{ color: "red" }}>
                                    {errors.categoryName && "This field is required"}
                                </Form.Text>
                            </div>
                        </Form.Group>

                        {/* <Form.Group className="mb-3">
              <Form.Label className="font-title">Country Name</Form.Label>
              <div className="field-style-2">
                <Form.Control
                  type="text"
                  name="Country"
                  {...register("country", { required: true })}
                  className="field-style-2"
                  placeholder=""
                />
                <Form.Text style={{ color: "red" }}>
                  {errors.country && <span>This field is required</span>}
                </Form.Text>
              </div>
            </Form.Group> */}
                        <div className="d-flex justify-content-end py-3">
                            <button
                                type="submit"
                                className="me-4 customBtn dark-text small"
                                variant="primary">
                                Save
                            </button>
                            <button className="customBtn small bg" type="reset" onClick={() => { navigate("/admin/main-Categories"); }}>
                                Cancel
                            </button>
                        </div>
                    </Form>
                </section>
            </Container>
        </div>
    );
}
