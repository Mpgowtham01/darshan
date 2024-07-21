import React from "react";
import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { Calendar } from "primereact/calendar";

const PrimeDate = ({ errors, control, controlId, name }) => {
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
                className="primeSelect"
                id={field.name}
                {...field}
                timeOnly
                placeholder="Please choose"
                hourFormat="12"
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

export default PrimeDate;
