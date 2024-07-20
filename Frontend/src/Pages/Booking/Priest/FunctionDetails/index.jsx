import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import Layout from "../../../../components/Layout";
import "./PriestFunctionDetails.scss";
import { TbCurrencyRupee } from "react-icons/tb";
import { useParams } from "react-router-dom";

const PriestFunctionDetails = () => {
  const [details, setDetails] = useState(null);
  const params = useParams();
  console.log("Params", params);

  const getDetails = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_DEV_BASE_URL}/functions/getOneFunction/${params.id}`
      );
      if (res.data && res.data.length) {
        setDetails(res.data[0]);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <Layout>
      <div className="priestFunctionDetails">
        <Container>
          {details ? (
            <figure>
              <img
                src={`${process.env.REACT_APP_DEV_BASE_URL}${details?.FunctionImage}`}
                alt=""
              />

              <div className="priestFunctionDetails__tabs">
                <Tabs defaultActiveKey="description" className="mb-3">
                  <Tab eventKey="description" title="Description">
                    <div>
                      <h4 className="title">Description</h4>
                      <p>{details?.Description}</p>
                    </div>

                    <div className="my-3">
                      <h6>
                        <span className="mb-2 d-block title">
                          Price Range With Material
                        </span>
                        <span className="d-block">
                          {details?.MinPriceWithMaterial}
                          <TbCurrencyRupee /> - {details?.MaxPriceWithMaterial}
                          <TbCurrencyRupee />
                        </span>
                      </h6>
                    </div>

                    <div className="my-3">
                      <h6>
                        <span className="mb-2 d-block title">
                          Price Range Without Material
                        </span>
                        <span className="d-block">
                          {details?.MinPriceWithOutMaterial}
                          <TbCurrencyRupee /> -{" "}
                          {details?.MaxPriceWithOutMaterial}
                          <TbCurrencyRupee />
                        </span>
                      </h6>
                    </div>
                  </Tab>

                  <Tab
                    eventKey="additionalinformation"
                    title="Additional Information"
                  >
                    <p>{details?.AdditionalInformation}</p>
                  </Tab>
                </Tabs>
              </div>
            </figure>
          ) : (
            <h6>No function found.....</h6>
          )}
        </Container>
      </div>
    </Layout>
  );
};

export default PriestFunctionDetails;
