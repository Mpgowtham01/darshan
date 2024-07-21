import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import axios from "axios";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { Toast } from "primereact/toast";
import { useLocation, useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function CreateFunctionOutsideTheTemple() {
    const { state: locationState } = useLocation();

    const navigate = useNavigate();
    const toast = useRef(null);

    const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: locationState ? locationState : {} });

    const displayToaster = () => {
        toast.current.show({ severity: "success", summary: "Done", detail: `Function inside the temple ${locationState ? "is Updated" : "Created"}`, life: 3000, });

        setTimeout(() => { navigate("/admin/outside-temple"); }, 1000);
    };

    const onSubmit = async (data, e) => {
        try {
            if (locationState) {
                //update
                await axios.put(`${process.env.REACT_APP_DEV_BASE_URL}/priestFunction/update/${locationState?.id}`, data);
                displayToaster();
            } else {
                //create
                await axios.post(`${process.env.REACT_APP_DEV_BASE_URL}/priestFunction/create`, { ...data, function_type: 2 });
                displayToaster();
            }
        } catch (error) {
            toast.current.show({ severity: "error", summary: "Error", detail: "Something went wrong,please try again!!!", life: 3000 });
        }
    };

    return (
        <div className="createListForm">
            <Toast ref={toast} />

            <Container>
                <h1 className="createListForm__title">Add function Outside the temple</h1>

                <section>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3">
                            <Form.Label className="font-title">Function Name</Form.Label>
                            <div className="field-style-2">
                                <Form.Control type="text" name="name" {...register("function_name", { required: true, })} />
                                <Form.Text style={{ color: "red" }}>{errors?.function_name && "This is required"}</Form.Text>
                            </div>
                        </Form.Group>

                        <div className="d-flex justify-content-end py-3">
                            <button type="submit" className="me-4 customBtn dark-text small" variant="primary">Submit</button>
                            <button className="customBtn small bg" type="reset" onClick={() => { reset(); }}>Cancel</button>
                        </div>
                    </Form>
                </section>
            </Container>
        </div >
    );
}
