import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import temple from "../../components/Images/darshanJourneylogo.jpg";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <div
              style={{ paddingLeft: "16vh", fontSize: "15px" }}
              className="copyrights-container"
            >
              <img
                style={{
                  width: "60px",
                  height: "40px",
                  borderRadius: "5px",
                  marginRight: "10px",
                }}
                src={temple}
                alt="Temple Logo"
              />
              Copyright &nbsp;
              <AiOutlineCopyrightCircle />
              2024 <span style={{ color: "black" }}>Aaroganam</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
