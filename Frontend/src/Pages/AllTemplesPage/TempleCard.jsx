import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TempleCard = ({ item }) => {
  const navigate = useNavigate();
  const MAIN_IMAGE = item?.main_image
    ? `${process.env.REACT_APP_DEV_BASE_URL}${item?.main_image}`
    : "/images/imageNotFound.png";

  const MAIN_TITLE = item?.MainGodName;
  const SHORT_TITLE = MAIN_TITLE ? MAIN_TITLE.slice(0, 28) : "";
  const MAIN_City = item?.Cityname;

  // old
  // const titleLength = 30;
  // const MAIN_IMAGE = item?.main_image ? `${process.env.REACT_APP_DEV_BASE_URL}${item?.main_image}`
  //   : "/images/imageNotFound.png";

  // const MAIN_TITLE = item?.MainGodName ? `${item?.MainGodName}-${item?.Cityname}`
  //   : item?.temple_name;
  // const TRIMMED_TITLE = MAIN_TITLE.length > 30 ? `${MAIN_TITLE.substring(0, titleLength)}...`
  //     : MAIN_TITLE;
  return (
    <>
      <Card
        key={item.id}
        onClick={() => {
          console.log(
            `/${item.Statename}/${item.Districtname}/${item.Cityname}/${item.MainGodName}`,
            item
          );
          navigate(
            `/${item.Statename}/${item.Districtname}/${item.Cityname}/${item.MainGodName}`,
            { state: item }
          );
        }}
      >
        <Card.Img variant="top" src={MAIN_IMAGE} />
        <Card.Body>
          <Card.Title>
            <div>{SHORT_TITLE} </div>
            <div>{MAIN_City}</div>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default TempleCard;
