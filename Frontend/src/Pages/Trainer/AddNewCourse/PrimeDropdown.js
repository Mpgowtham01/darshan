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
  required = false,
  filter = true,
}) => {
  return (
    <>
      <Form.Group className="mb-3" controlId={controlKey}>
        {name ? <Form.Label> {name}</Form.Label> : []}
        <br />
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
            return (
              <Dropdown
                id={field.name}
                {...field}
                options={Array.isArray(list) ? list : []}
                optionLabel={optionLabel}
                optionValue={optionValue}
                placeholder={` ${name ? name : ""} `}
                className="primeSelect"
                filter={filter}
                // showClear
              />
            );
          }}
        />
      </Form.Group>
    </>
  );
};

export default PrimeDropdown;
