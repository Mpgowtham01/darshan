import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Api from "../../Api";

//style
import "../TempLeService/Templservice.scss"
import HeaderNavBar from "../../components/HeaderNavBar";
import Footer from "../../components/Footer";

function TempleLandingPg() {
  const [templeDetails, setTempleDetails] = useState([]);
  const [serviceAd, SetServiceAd] = useState([]);
  console.log('templeDetails :>> ', templeDetails);
  const Navigate = useNavigate;
  const params = useParams()
  useEffect(() => {
    TempleGetOne();
    GetService();
  }, []);

  const TempleGetOne = async () => {
    await Api.get(`/categories/getTempleServiceDetails/${params?.post}/${params?.id}`)
      .then(res => {
        setTempleDetails(res.data);
      })
      .catch(err => console.log(err));
  };

  //Ad api
  const GetService = async () => {
    await Api.get(`/advertisement/vendorAdvertisement/${params.post}`)
      .then(res => {
        SetServiceAd(res.data);
      })
      .catch(err => console.log(err));
  };
  return (
    <div>
    <HeaderNavBar/>
    <>
    {
      templeDetails.length>0?(
         <div className="TempleServiceLanding">
 
        {templeDetails &&
          templeDetails.map((events, i) => (
            <>
          
              <Row style={{ display: "flex", flexDirection: "row", padding: "5%" }}>
                <Col xs={12} sm={12} md={8}>
                  <div >
                    <h1>
                      -&nbsp;&nbsp;TCS&nbsp;&nbsp;&nbsp;-
                    </h1>
                    <h5 style={{ textAlign: "center" }}>{events.CompanyName}</h5>
                    <br />
                    <img
                      src={`${process.env.REACT_APP_DEV_BASE_URL}${events.businessPhoto}`}
                      alt="Temple logo"
                      width="100%"
                      height="100%" />
                    <div className="temple-divs">
                      <Row>
                        <Col lg={12} >
                          <h3  className="mb-3">About</h3>
                          <h5 >{events.StateName}</h5>
                        </Col>
                      </Row>
                    </div>
                    <div className="temple-divs">
                      <Row>
                        <h3 className="mb-3">Contact Details</h3>
                        <Col md={2}>
                          <h6 className="mb-2">Mobile Number:</h6>
                          <h6 className="mb-2">Email:</h6>
                          <h6 className="mb-2">WebsiteLink:</h6>
                        </Col>
                        <Col md={10}>
                          <h6 className="mb-2">{events.PhoneNumber}</h6>
                          <h6 className="mb-2">{events.EmailId}</h6>
                          <h6 className="mb-2">{events.WebsiteLink}</h6>
                        </Col>
                      </Row>
                    </div>
                    <div className="temple-divs">
                      <Row>
                        <h3 className="mb-3"> Category Details</h3>
                        <Col md={2} >
                          <h6 className="mb-2">Category:</h6>
                          <h6 className="mb-2">Sub Category:</h6>
                          <h6 className="mb-2">Regular Price:</h6>
                          <h6 className="mb-2">Discount Price:</h6>
                        </Col>
                        <Col md={10} >
                          <h6 className="mb-2">{events.VendorCategoryName}</h6>
                          <h6 className="mb-2">{events.VendorSubCategoryName}</h6>
                          <h6 className="mb-2">{events.RegularPrice}</h6>
                          <h6 className="mb-2">{events.DiscountPrice}</h6>
                        </Col>
                      </Row>
                    </div>
                    <div className="temple-divs">
                      <Row>
                        <h3 className="mb-3">Address</h3>
                        <Col md={2} >
                          <h6 className="mb-2">Country:</h6>
                          <h6 className="mb-2">State:</h6>
                          <h6 className="mb-2">District:</h6>
                          <h6 className="mb-2">City:</h6>
                          <h6 className="mb-2">Address:</h6>
                        </Col>
                        <Col md={10} >
                          <h6 className="mb-2">{events.CountryName}</h6>
                          <h6 className="mb-2">{events.StateName}</h6>
                          <h6 className="mb-2">{events.DistrictName}</h6>
                          <h6 className="mb-2">{events.CityName}</h6>
                          <h6 className="mb-2">{events.WebsiteLink}</h6>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={12} md={4}>
                  <Row style={{ display: "flex", flexDirection: "column" }}>
                    <h3 className="ad"> - Offers & Advertisement -</h3>
                    <h6 className="ad"> - TCS - </h6>
                    <h5 className="ad"> - &nbsp;Offer&nbsp; -</h5>
                    <h5 className="ad">Advertisement</h5>
                    {serviceAd.map((service, i) => (
                      <Col className="mt-3">
                        <img
                          src={`${process.env.REACT_APP_DEV_BASE_URL}${service.advertisement_image}`}
                          width="100%"
                          height="100%"
                          alt="company logo"
                          onClick={() => {
                            <TempleLandingPg data={service.id} />;
                            Navigate({ to: "/" });
                          }} />
                        <h5 className="ad">{service.companyName}</h5>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </>
          ))}
      </div>
      ):(<h3 style={{textAlign:"center",marginTop:"10%" }}>No Sufficient Data</h3>)
    }
    </>
    <Footer/>
  </div>
  );
}

export default TempleLandingPg;