import React, { useState } from "react";
import { Container, Row, Col, button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
// import "./kycComplaince.scss";
// import "../../Pages/Employer/OurProfile/KycComplaince/kycComplaince.css";
import Api from "../../Api";

function Kycvendor() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const [PanCard, setPanCard] = useState({});
  const [AddressProof, setAddressproof] = useState({});
  const userId = localStorage.getItem("userId");

  const handleFormSubmit = async () => {
    const Details = {
      pancardNumber: getValues().pancardNumber,
      aadharcardNumber: getValues().aadharcardNumber,
      gstNumber: getValues().gstNumber,
      addressProof: getValues().addressProof,
      // AddressProof:getValues().AddressProof,
    };
    console.log("first", Details);
    const data = new FormData();
    data.append("AddressProof", getValues().AddressProof[0]);
    //  data.append("AddressProof", getValues().addressProof[0]);
    await Api.put(`/vendor/addressproofImage/${userId}`, data).then(
      async (res) => {
        if (res.status == 201) {
          Details.AddressProof = res.data.path;
          //  Details.addressProof = res.data.path;
          await Api.put(`/vendor/vendorput/${userId}`, Details).then((resp) => {
            //  localStorage.setItem("personalId", resp.data.data._id);
          });
        }
      }
    );
  };

  return (
    <div>
      {/* <Card className="form_colum"> */}

      <Container>
        <div  className="ourProfileParentdiv" style={{ backgroundColor: "white", padding: "20px" }}>
          <center>
            <h4 className="pages-title mt-3">KYC Complaince</h4>
            <br />
            <p
              style={{
                backgroundColor: "#fccc55",
                padding: "10px",
                width:"80%",fontSize:"18px"
              }}
            >
              {" "}
              Your Company details are required to meet kyc Complaince
            </p>
            <br />
          </center>

          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Row className="kycRow_Container">
              <Col sm={12} lg={4}>
                <label>PanCard Number: </label>
              </Col>
              <Col sm={12} lg={6}>
                <input
                  {...register("pancardNumber", { required: true })}
                  className="inputcolumn-ourProfile"
                />
                {errors.pancardNumber && (
                  <p className="text-danger">pancard number is required</p>
                )}
              </Col>
            </Row>
            <Row className="kycRow_Container">
              <Col sm={12} lg={4}>
                <label>AadharCard Number: </label>
              </Col>
              <Col sm={12} lg={6}>
                <input
                  {...register("aadharcardNumber", { required: true })}
                  className="inputcolumn-ourProfile"
                />
                {errors.aadharcardNumber && (
                  <p className="text-danger">AadharCard number is required</p>
                )}
              </Col>
            </Row>
            <Row className="kycRow_Container">
              <Col sm={12} lg={4}>
                <label>GST Number: </label>
              </Col>
              <Col sm={12} lg={6}>
                <input
                  {...register("gstNumber", { required: true })}
                  className="inputcolumn-ourProfile"
                />
                {errors.gstNumber && (
                  <p className="text-danger">GST number is required</p>
                )}
              </Col>
            </Row>
          
            <Row className="kycRow_Container">
              <Col sm={12} lg={4}>
                <label>Pan or Adhar Upload Anyone: </label>
              </Col>
              <Col sm={12} lg={6}>
                <input
                  className="inputcolumn-ourProfile"
                  style={{ outline: "none", height: "50px" }}
                  type="file"
                  {...register("AddressProof", { required: true })}
                  onChange={(e) => {
                    setPanCard(e.target.files[0]);
                    console.log("e.target.files[0]", e.target.files[0]);
                  }}
                />
                {/* {errors.AddressProof && (
                <p className="text-danger">pancard upload is required</p>
              )}
              <p>
                Only 1 document in pdf,jpeg and png format with maximum 5Mb
                uploaded
              </p> */}
              </Col>
            </Row>
            <Row className="kycRow_Container">
              <Col sm={12} lg={4}>
                <label>Address Proof: </label>
              </Col>
              <Col sm={12} lg={6}>
                <input
                  {...register("addressProof", { required: true })}
                  className="inputcolumn-ourProfile"
                />
                {errors.addressProof && (
                  <p className="text-danger">Address is required</p>
                )}
              </Col>
            </Row>
            <center>
              <div className="submitbuttons px-4">
                <button
                  className="button1 m-2 p-2"
                  type="submit"
                  // onClick={handleSubmit}
                >
                  Submit
                </button>
                <button className="button2 m-2 p-2" type="reset">
                  cancel
                </button>
              </div>
            </center>
          </form>
        </div>
      </Container>
      {/* </Card> */}
    </div>
  );
}

export default Kycvendor;
