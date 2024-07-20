import React from "react";
import { Form } from "react-bootstrap";
import { Controller } from "react-hook-form";
import { MultiSelect } from "primereact/multiselect";
 

const PrimeMultiselect = ({
  list,
  onChangeHandler = () => { },
  controlKey,
  optionLabel,
  optionValue,
  name,
  errors,
  control,
  required = true,
}) => {
  return (
    <>
      <Form.Group className="mb-3" controlId="templeName">
        <Form.Label>Select {name}</Form.Label>

        <Controller
          name={controlKey}
          control={control}
          rules={{
            required,
            onChange: e => {
              onChangeHandler(e);
            },
          }}
          render={({ field }) => {
            return (
              <MultiSelect
                id={field.name}
                {...field}
                options={list || []}
                optionLabel={optionLabel}
                optionValue={optionValue}
                placeholder={`Select a ${name}`}
                className="primeSelect"
                filter={true}
                showClear
              />
            );
          }}
        />
        {errors[controlKey] && (
          <Form.Text className="text-danger">{name} is required</Form.Text>
        )}
      </Form.Group>
    </>
  );
};

export default PrimeMultiselect;
