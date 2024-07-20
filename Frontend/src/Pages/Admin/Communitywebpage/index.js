import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Image, Modal, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import loard from "../../../components/Images/loard.jpeg";
import Layout from "../../Admin/Communitywebpage/Components/Layout";
import "./Communityweb.scss";

const CommunityFunctionListCard = ({ item }) => {
  const [showModal, setShowModel] = useState(false);

  return (
    <>
      <Modal show={showModal} onHide={() => setShowModel(false)}>
        <Modal.Header closeButton>
          <Modal.Title
            className="title h3"
            style={{ fontFamily: "var(--secondary-font)" }}>
            {item?.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <span
              className="h5 fw-bold me-2"
              style={{ fontFamily: "var(--secondary-font)" }}
            >
              Date:
            </span>
            <span>{new Date(item?.date).toLocaleDateString()}</span>
          </div>

          <div className="my-3">
            <span
              className="h5 fw-bold me-2"
              style={{ fontFamily: "var(--secondary-font)" }}
            >
              Time:
            </span>
            <span>{new Date(item?.date).toLocaleTimeString()}</span>
          </div>

          <div>
            <span
              className="h5 fw-bold me-2"
              style={{ fontFamily: "var(--secondary-font)" }}
            >
              Place:
            </span>
            <span>{item?.place}</span>
          </div>
        </Modal.Body>
      </Modal>

      <Col lg={4}>
        <Image
          src={`${process.env.REACT_APP_DEV_BASE_URL}${item?.image}`}
          alt="Pooja images"
          height={300}
          width="100%"
          onClick={() => {
            setShowModel(true);
          }}
        />
      </Col>
    </>
  );
};

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p style={{ textAlign: "justify", lineHeight: 2 }}>
      {isReadMore ? text?.slice(0, 400) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? " ...Read More" : " Show Less"}
      </span>
    </p>
  );
};

export default function CommunityTemple() {
  const [communityTempleMeta, setCommunityTempleMeta] = useState(null);
  const [communityFunctionList, setCommunityFunctionList] = useState([]);
  const [communityInchargeList, setCommunityInchargeList] = useState([]);
  const [loading, setLoading] = useState(false);

  const { groupName } = useParams();
  const baseUrl = `${process.env.REACT_APP_DEV_BASE_URL}/communityTemple`;

  useEffect(() => {
    getCommunityTempleMeta();
  }, []);

  const getCommunityTempleFunctionsList = async (templeMetaResult) => {
    const functionResult = await axios.get(
      `${baseUrl}/getAllCommunityTempleFunctions?communityTempleId=${templeMetaResult?.data?.result[0].id}`
    );

    if (functionResult?.data.status === "Success") {
      setCommunityFunctionList(functionResult.data.result);
    }
  };

  const getCommunityTempleInchargeList = async (templeMetaResult) => {
    const inchargeResult = await axios.get(
      `${baseUrl}/getAllCommunityTempleIncharge?communityTempleId=${templeMetaResult?.data?.result[0].id}`
    );

    if (inchargeResult?.data.status === "Success") {
      setCommunityInchargeList(inchargeResult.data.result);
    }
  };

  const getCommunityTempleMeta = async () => {
    try {
      setLoading(true);
      const templeMetaResult = await axios.get(
        `${baseUrl}/getTempleMetaByGroup/${groupName}`
      );
      if (
        templeMetaResult.data.status === "Success" &&
        templeMetaResult.data.result?.length
      ) {
        setLoading(false);
        setCommunityTempleMeta(templeMetaResult.data.result[0]);

        getCommunityTempleFunctionsList(templeMetaResult);
        getCommunityTempleInchargeList(templeMetaResult);
      }
    } catch (error) {
      console.log("Error", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (!communityTempleMeta) {
    return (
      <Layout>
      <div className="my-5 mx-5 text-center"  style={{ paddingTop: '50px' }}>
      {/* <div style={{ marginTop: '30px' }}> */}
        <h4 className="title">There is no temple, related to this group</h4>
      </div>
      {/* </div> */}
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container-fluid mt-5 pt-2 fullscreen communityTemplePage">
        <Container>
          <div className="row my-5">
            <Col
              className="d-flex justify-content-center align-items-start"
              md={6}
              lg={6}
            >
              <div
                className="d-flex justify-content-center mt-4 mx-5"
                style={{ flexDirection: "column" }}
              >
                <h4 className="text-center title">About Us</h4>
                <ReadMore className=" d-flex justify-content-center">
                  {communityTempleMeta?.about_description}
                </ReadMore>
              </div>
            </Col>
            <Col className="px-5">
              <Image
                src={`${process.env.REACT_APP_DEV_BASE_URL}${communityTempleMeta?.about_image}`}
                alt="Pooja images"
                height={300}
                width="100%"
              />
            </Col>
          </div>
          <hr />
          <div>
            <h4 className="text-center title">News</h4>

            <Row>
              <Col lg={4}>
                <Image
                  src={`${process.env.REACT_APP_DEV_BASE_URL}${communityTempleMeta?.news_image}`}
                  alt="News"
                  height={300}
                  width="100%"
                />
              </Col>
              <Col lg={4}>
                <marquee width="200%" direction="up" height="100%">
                  <b>{communityTempleMeta?.news_description}</b>
                </marquee>
              </Col>
            </Row>
          </div>
          <hr />
          <div>
            <Row>
              <h4 className="text-center  title">Function</h4>

              {communityFunctionList?.map((item) => (
                <CommunityFunctionListCard item={item} key={item.id} />
              ))}
            </Row>
          </div>
          <Container className="pt-5 pb-5">
            <h2 className="text-center mt-3 title">Temple Incharge</h2>
            {/* <h5 className="text-center mt-3">Happy Family</h5> */}
            <div className="row mt-4">
              {communityInchargeList?.map((list, index) => (
                <Col key={list?.id}>
                  <div className="text-center ">
                    <h4>{list?.role}</h4>
                    <Image
                      src={`${process.env.REACT_APP_DEV_BASE_URL}${list.image}`}
                      alt="Pooja images"
                      style={{
                        borderRadius: "50%",
                        width: "113px",
                        height: "107px",
                      }}
                    />
                  </div>

                  <p className="text-center">{list?.description}</p>
                  <h6 className="text-center mt-4 mb-3">{list?.name}</h6>
                  <h6 className="text-center">{list?.phone_number}</h6>
                </Col>
              ))}
            </div>
          </Container>
        </Container>
      </div>
    </Layout>
  );
}
