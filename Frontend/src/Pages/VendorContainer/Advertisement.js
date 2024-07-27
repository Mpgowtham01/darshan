import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Row, Card, Col, Button, Dropdown, NavDropdown } from "react-bootstrap";
import "./index.scss";
import Api from "../../Api";

function Advertisement() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const [file, setFile] = useState();

  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleAddSubmit = async () => {
    const AddDetails = {
      companyName: getValues().companyName,
      websiteLink: getValues().websiteLink,
      advertisementTag: file,
    };
    console.log("AddDetails", AddDetails);
    await Api.post(`Advertisement/createAdvertisement`, AddDetails).then(
      (resp) => {
        console.log("resp.data", resp.data);
      }
    );
  };

  return (
    <div>
      <Card className="addColumn">
        <h4
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "red",
            fontWeight: "bold",
            margin: "4%",
          }}
        >
          Create New Advertisement
        </h4>
        <Row className="xg-3">
          <Col xs={12} md={4}>
            <div className="addFormrow">
              Company Name
              <sup className="required_column">*</sup>
            </div>
          </Col>
          <Col xs={12} md={8}>
            <div>
              <input
                className="inputcolumn"
                type="text"
                // name="name"
                // value="test"
                // required="required"
                placeholder="Name"
                {...register("companyName", { required: true })}
              />
              {errors.companyName && (
                <p className="error-text-color">companyName is required</p>
              )}
            </div>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col xs={12} md={4}>
            <div className="addFormrow">
              Website Link
              {/* <sup className="required_column">*</sup> */}
            </div>
          </Col>
          <Col xs={12} md={8}>
            {" "}
            <div>
              <input
                className="inputcolumn"
                type="text"
                // name="name"
                // value="test"
                required="required"
                placeholder="websiteLink"
                {...register("websiteLink", { required: true })}
              />
              {errors.websiteLink && (
                <p className="error-text-color">websiteLink is required</p>
              )}
            </div>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col xs={12} md={4}>
            <div className="addFormrow">
              AdvertisementTag
              <sup className="required_column">*</sup>
            </div>
          </Col>
          <Col xs={12} md={8}>
            {" "}
            <div>
              <input
                //   className="input"
                type="file"
                onChange={handleChange}
                // {...register("advertisementTag", { required: true })}
              />
              {/* {errors.advertisementTag && (
                  <p className="error-text-color">advertisementTag is required</p>
                )} */}
              <p className="pt-3">
                <span style={{ color: "red" }}>Note:</span>Photos must be upload
                size width: 400px to 3000px <br /> & height: 400px to 4000px
              </p>
            </div>
          </Col>
        </Row>
        <div className="addbutton_column">
          <button className="button1" onClick={handleSubmit(handleAddSubmit)}>
            Submit
          </button>
          <button className="button2 ms-2">Back</button>
        </div>
      </Card>
    </div>
  );
}

export default Advertisement;
