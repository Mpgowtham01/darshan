import React from "react";
import { Form } from "react-bootstrap";

const InputField = ({
  isDisable,
  errors,
  register,
  keyId,
  name,
  required = true,
  others,
}) => {
  return (
    <>
      <Form.Group controlId={keyId}>
        <Form.Label>{name}</Form.Label>
        <Form.Control className="custom-input-field" {...register(keyId, { required })} {...others} placeholder={`Enter ${name}`} disabled={isDisable}/>
        {errors[keyId] && (
          <Form.Text className="text-danger">{name} is required</Form.Text>
        )}
      </Form.Group>
    </>
  );
};

export default InputField;
