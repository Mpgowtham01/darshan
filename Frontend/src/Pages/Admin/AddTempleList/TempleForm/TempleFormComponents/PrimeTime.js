import React from "react";
import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { Calendar } from "primereact/calendar";

const PrimeTime = ({ errors, control, controlId, name }) => {
    return (
        <>
            <Form.Group controlId={controlId}>
                <Form.Label>Select {name}</Form.Label>
                <br />
                <Controller
                    name={controlId}
                    control={control}
                    rules={{
                        required: true,
                    }}
                    render={({ field }) => {
                        return (
                            <Calendar
                                // style={{ marginTop: "-17px" }}
                                className="primeSelect"
                                id={field.name}
                                placeholder="Please choose"
                                {...field}
                            />
                        );
                    }}
                />

                {errors[controlId] && (
                    <Form.Text className="text-danger">{name} is required</Form.Text>
                )}
            </Form.Group>
        </>
    );
};

export default PrimeTime;