import React from "react";
import { Form } from "react-bootstrap";
import { Dropdown } from "primereact/dropdown";
import { Controller } from "react-hook-form";

const PrimeDropdown = ({
  list,
  onChangeHandler = () => {},
  controlKey,
  optionLabel,
  optionValue,
  name,
  errors,
  control,
  required = true,
  filter = true,
}) => {
  return (
    <>
      <Form.Group className="mb-3" controlId={controlKey}>
        {name ? <Form.Label> {name}</Form.Label> : []}
        <Controller
          name={controlKey}
          control={control}
          rules={{
            required,
            onChange: (e) => {
              onChangeHandler(e);
            },
          }}
          render={({ field }) => {
            console.log(optionLabel,optionValue,list)

            return (
              <Dropdown
                id={field.name}
                {...field}
                options={list || []}
                optionLabel={optionLabel}
                optionValue={optionValue}
                placeholder={` ${name ? name : ""} `}
                className="primeSelect"
                filter={filter}
                showClear
              />
            );
          }}
        />
        {errors[controlKey] && name && (
          <Form.Text className="text-danger">{name} is required</Form.Text>
        )}
      </Form.Group>
    </>
  );
};

export default PrimeDropdown;
