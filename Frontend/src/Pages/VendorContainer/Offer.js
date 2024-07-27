import React, { useState } from "react";
import { Row, Card, Col, Button, Dropdown, NavDropdown } from "react-bootstrap";
import { Table } from "antd";
import { useForm } from "react-hook-form";
import Api from "../../Api";

const Offer = () => {
  const [data, setData] = useState([]);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const handleOfferSubmit = async () => {
    const OfferDetails = {
      // Photo: getValues().Photo,
      Promocode: getValues().Promocode,
      Category: getValues().Category,
      StartDate: getValues().StartDate,
      EndDate: getValues().EndDate,
      Description: getValues().Description,
    };
    console.log("OfferDetails", OfferDetails);
    await Api.post(`Offer/createOffer`, OfferDetails).then((resp) => {
      console.log("resp.data", resp.data);
    });
  };

  return (
    <div>
      <Row>
        <Card className="offerColumn">
          <h4
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "red",
              fontWeight: "bold",
              margin: "3%",
            }}
          >
            Create Offer
          </h4>
      
          <Row className="xg-3 mt-3">
            <Col xs={12} md={4}>
              <div className="addFormrow">
                Promo Code
                <sup className="required_column">*</sup>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <div>
                <input
                  className="inputs__vendr"
                  type="text"
                  name="name"
                  // value="text"
                  required="required"
                  // placeholder="Name"
                  {...register("Promocode", { required: true })}
                />
                {errors.Promocode && (
                  <p className="error-text-color">Promocode is required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="xg-3 mt-3">
            <Col xs={12} md={4}>
              <div className="addFormrow">
                Category
                <sup className="required_column">*</sup>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <div>
                <input
                  className="inputs__vendr"
                  type="text"
                  name="name"
                  // value="text"
                  required="required"
                  // placeholder="Name"
                  {...register("Category", { required: true })}
                />
                {errors.Category && (
                  <p className="error-text-color">Category is required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="xg-3 mt-3">
            <Col xs={12} md={4}>
              <div className="addFormrow">
                Start Date
                <sup className="required_column">*</sup>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <div>
                <input
                  className="inputs__vendr"
                  type="date"
                  name="name"
                  required="required"
                  {...register("StartDate", { required: true })}
                />
                {errors.StartDate && (
                  <p className="error-text-color">StartDate is required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="xg-3 mt-3">
            <Col xs={12} md={4}>
              <div className="addFormrow">
                End Date
                <sup className="required_column">*</sup>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <div>
                <input
                  className="inputs__vendr"
                  type="date"
                  name="name"
                  // value=""
                  required="required"
                  // placeholder="Name"
                  {...register("EndDate", { required: true })}
                />
                {errors.EndDate && (
                  <p className="error-text-color">EndDate is required</p>
                )}
              </div>
            </Col>
          </Row>
          <Row className="xg-3 mt-3">
            <Col xs={12} md={4}>
              <div className="addFormrow">
                Description
                <sup className="required_column">*</sup>
              </div>
            </Col>
            <Col xs={12} md={8}>
              <div>
                <input
                  className="inputs__vendr"
                  type="text"
                  name="name"
                  // value="text"
                  required="required"
                  // placeholder="Name"
                  {...register("Description", { required: true })}
                />
                {errors.Description && (
                  <p className="error-text-color">Description is required</p>
                )}
              </div>
            </Col>
          </Row>
          <div className="addbutton_column">
            <button
              className="button1"
              onClick={handleSubmit(handleOfferSubmit)}
            >
              Submit
            </button>
            <button className="button2 ms-2">Cancel</button>
          </div>
        </Card>
      </Row>
    </div>
  );
};

export default Offer;
