import React from "react";
import Layout from "../../Components/Layout";
import { Card, Col } from "react-bootstrap";
import image from "../../../components/Images/loginTem.jpg";
import image1 from "../../../components/Images/logintem1.jpg";
function PoojaCategory() {
  const poojasList = [
    {
      id: 1,
      poojaName: "Auspicious Event (சுபகாரியம்)",
      image: image,
      description:
        "An auspicious event is one that is considered favorable and promising, often marked by positive outcomes and good fortune. These events are typically celebrated with joy and enthusiasm, such as weddings, religious ceremonies, and festivals. They are believed to bring blessings, prosperity, and happiness to those involved. Auspicious events are often chosen based on astrological and cultural significance, ensuring the best possible timing and conditions. Rituals and traditions play a key role in enhancing the auspiciousness of the occasion, invoking divine blessings and positive energy.",
    },
    {
      id: 2,
      poojaName: "Inauspicious Event (அபகாரியம்)",
      image: image1,
      description:
        "An inauspicious event is regarded as unfavorable or unlucky, often associated with negative outcomes and bad omens. These events are usually avoided or approached with caution, as they are believed to bring misfortune, obstacles, or harm. Inauspicious events can include certain dates, times, or occurrences that are considered unlucky based on cultural, religious, or astrological beliefs. People often perform specific rituals or take preventive measures to counteract the potential negative effects. Recognizing and respecting these inauspicious signs is an important aspect of many cultural traditions, aiming to maintain harmony and avoid adverse consequences.",
    },
  ];

  return (
    <Layout>
      <div className="mt-5 pt-2">
        <div className="row">
          <Col className="right-content-pooja py-3 ms-5">
            <div className="row">
              <h5 className="mt-3 mb-0">SELECT ONE</h5>
              {poojasList.map((item, index) => (
                <Col md={4} lg={4} className="mt-4">
                  <Card
                    className="card-alignment"
                    style={{
                      cursor: "pointer",
                    }}
                    // onClick={() => handleCardClick(item)}
                  >
                    <Card.Img
                      variant="top"
                      alt="Pooja images"
                      src={item.image}
                      height={200}
                    />
                    <Card.Body>
                      <h6 className="text-center" style={{ fontSize: 12 }}>
                        {item.description}
                      </h6>
                    </Card.Body>
                    <Card.Body style={{ backgroundColor: "gray" }}>
                      <h6
                        className="text-center"
                        style={{ fontSize: 15, color: "white" }}
                      >
                        {item.poojaName}
                      </h6>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </div>
          </Col>
        </div>
      </div>
    </Layout>
  );
}

export default PoojaCategory;
