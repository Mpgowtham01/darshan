// import React from "react";
import { Row, Col } from "react-bootstrap";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function Templeredirectpg({ data }) {
  const Navigate = useNavigate;
  const [Templedetail, setTempledetail] = useState([
    {
      id: 1,
      name: "TheepachiAmman Temple - Thirunelveli",
      content: "Madurai",
      imageUrl: "images/templ1.png",
    },
    {
      id: 2,
      name: "TheepachiAmman Temple - Thirunelveli",
      content: "Vellore",
      imageUrl: "images/templ2.png",
    },
    {
      id: 3,
      name: " Kongalamman Temple - Erode",
      content: "Thanjvur",
      imageUrl: "images/templ3.png",
    },
  ]);

  return (
    <div className="head-tmplredrtpg mt-4" style={{ marginLeft: "5%" }}>
      {console.log(data, "data")}
      <br />
      <h1>Meenakshi Amman Temple, Kanchipuram</h1>
      <br />
      <img src="images/meenachitmpl.png" alt="Temple logo" width="95%" />
      <br />
      <p>
        <br />
        Arulmigu Meenakshi Amman Temple & also know as Meenakshi Sundareshwarar
        Temple, is a historic Hindu temple locted on the southern bank of the
        <br />
        Vaigai River in the temple city of Madurai,Tamilnadu,India. It is
        dedicated to the goddess Meenakshi, a form of parvati and her consort.
      </p>

      <h4>Location</h4>
      <p>
        location:&nbsp;Kanchipuram
        <br />
        State:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TamilNadu,
        <br />
        Country:&nbsp;&nbsp;India
      </p>
      <h4>Timing</h4>
      <p>
        Morning Hours:6:00am to 12:30pm
        <br />
        Evening Hours:4:00am to 9:00pm
      </p>

      <h4>Entry fee</h4>
      <p>Special Entry Darshan Ticket: Rs.100 per person.</p>
      <h4>Best Time to visit</h4>
      <p>Special Entry Darshan Ticket: Rs.100 per person.</p>
      <h4>Festival</h4>
      <p>
        The Meenakshi temple hosts a festival in each month of the tamil
        Calendar. Some festival attract significant participation. With the
        Meenakshi wedding-related festival
        <br />
        attracting over a million people over 12 days. It is called the
        "Meenakshi Thirukalyanam"
      </p>
      <Row>
        <h3>Related Temples</h3>
        {Templedetail.map((Templedetail, i) => (
          <Col xs={12} sm={12} md={4} className="mt-3">
            <img
              src={Templedetail.imageUrl}
              style={{ borderRadius: 18 }}
              onClick={() => {
                console.log(data, "test");
                <Templeredirectpg data={Templedetail.id} />;
                Navigate({ to: "/" });
              }}
            />
            <p className="text-black mb-2 mt-3">{Templedetail.name}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Templeredirectpg;
