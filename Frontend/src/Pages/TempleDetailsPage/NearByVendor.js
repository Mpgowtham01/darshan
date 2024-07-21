import { Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import Api from "../../Api";
import { Image, CardGroup, Card, Col } from "react-bootstrap";
import { BsCheckCircleFill, BsFileEarmarkEasel } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
import { HiStar } from "react-icons/hi";
import { useLocation, useNavigate } from "react-router-dom";
import "./NearByVendor.scss";
// import { Carousel } from "antd";
import Slider from "react-slick";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function NearByVendor() {
  const navigate = useNavigate();
  const [vendorCategoriesList, setVendorCategoriesList] = useState([]);
  const [sliceData, setSliceData] = useState([]);
  const [viewAll, setViewAll] = useState(false);
  const { state: location } = useLocation();

  const cityID = location?.city_id.toString();
  useEffect(() => {
    getVendorCategoriesList();
  }, []);

  const getVendorCategoriesList = async () => {
    Api.get(`/vendor/getAlls`)
      .then((res) => {
        const vendor = res.data;
        const filterVendor = vendor.filter(vendors => vendors.city === cityID )
        setVendorCategoriesList(filterVendor);
        const aa = res.data.slice(0, 3);
        setSliceData(aa);
      })
      .catch((error) => console.log(error));
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className="mt-5">
      <h1 className="vendorTittle_heading">Vendor Categories</h1>
      <Row className="me-5">
        {/* <Slider
          // ref={SwipeRef}
          dots={false}
          infinite={false}
          speed={500}
          slidesToScroll={1}
        > */}
        {vendorCategoriesList && vendorCategoriesList.length > 0 ? (
          vendorCategoriesList.slice(0, 4).map((item) => {
            return (
              <Col lg={3}>
                <div
                  className="card-detailss"
                  onClick={() => {
                    navigate(`/user/Temple/vendor/${item.vendorId}`);
                  }}
                >
                  <div>
                    <div className="top-image">
                      <Image
                        src={`${process.env.REACT_APP_DEV_BASE_URL}${item.photo}`}
                        alt="vendor Image"
                        className="suggest-img"
                        style={{ height: "205px" }}
                      />
                    </div>
                    <div className="bottom-details mt-2">
                      <h5 className="vendorCardHeading mb-3"> {item.name}</h5>
                      <div>
                        <p style={{ float: "right", fontSize: "13px" }}>
                          <span
                            style={{ marginBottom: "20px", fontWeight: "500" }}
                          >
                            <br />
                            <div style={{ paddingBottom: "7px" }}>
                              <HiStar
                                style={{
                                  color: "#FFD700",
                                  marginBottom: "6px",
                                }}
                              />{" "}
                              4.8
                            </div>
                          </span>
                        </p>

                        <p>
                          <HiLocationMarker
                            style={{
                              color: "#005C78",
                              marginBottom: "4px",
                              marginRight: "5px",
                              fontSize: "23px",
                            }}
                          />
                          {item.address}
                        </p>
                      </div>

                      <div className="down">
                        <p className="vendorCardHeading mb-3">Starting Price</p>
                        <p>
                          <span style={{ fontWeight: "800" }}>
                            Rs.{item.offerPrice}
                          </span>
                          <span
                            style={{
                              fontSize: "12px",
                              opacity: "0.6",
                              marginLeft: "5px",
                            }}
                          >
                            onwards
                          </span>
                          <span>
                            <BsCheckCircleFill
                              style={{
                                color: "#005C78",
                                marginBottom: "10px",
                                float: "right",
                              }}
                            />
                          </span>
                        </p>
                        <div className="  detail-btn "></div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            );
          })
        ) : (
          <h3 className="centering">No data found</h3>
        )}
        <div></div>
        {/* </Slider> */}
      </Row>
    </div>
  );
}
