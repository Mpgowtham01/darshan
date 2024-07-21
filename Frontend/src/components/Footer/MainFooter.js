import React from 'react'
import "../Css/sass/Footer.scss"
import {Row, Col} from "antd";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { PiAddressBookLight } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import { FiInfo } from "react-icons/fi";
import { FaTwitter, FaYoutube } from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { Button } from "primereact/button";
import temple from "../../components/Images/darshanJourneylogo.jpg";
import TempleIcon from "../../components/Images/templeicon2.svg";
// import "./Footer.css"

function Footer() {
  return (
    <div className='footer-conatiner'>
        <div className='footer-bg'>
            <div className='footer-content'>
            <Row>
                <Col md={4} >
            <div>
            <h2>Contact Us</h2>
                <p><FiPhoneCall />&nbsp;&nbsp;9876543210</p>
               <p><FiInfo />&nbsp;&nbsp;info@example.com</p>
                <p><PiAddressBookLight />&nbsp;&nbsp;Temple 1: 777/ed Ipum Road
                  Venu</p>
            </div>
            </Col>
            <Col md={4} xs={12}>
            <div className='about-us-div'>
                <h2> <img src={TempleIcon}></img>Dharshan Journey</h2>
                <p>Discover the rich cultural and spiritual heritage of India through
              our comprehensive directory of Hindu temples. Our website is
              dedicated to providing detailed information and history about
              temples from every corner of India. Whether you are planning a
              pilgrimage, seeking spiritual enlightenment, or simply exploring
              the architectural marvels of Hinduism, our platform serves as your
              guide.</p>
              <a href="#"><FaFacebookF/></a>
              <a href="#"><AiFillInstagram/></a>
              <a href="#"><FaTwitter/></a>
              <a href="#"><FaYoutube/></a>
            </div>
            </Col>
            <Col md={4}>
            <div className='subscribe-div'>
                <div>
                <h2>Stay Connected</h2>
                <p> Subscribe to our Newsletter & stay updated</p>
                <p><img src={temple}></img>&nbsp;&nbsp; <b> Dharshan Journey </b></p>
                <input
                type='text'
                placeholder='Enter Your Name..' 
                ></input>
                </div>
                <div>
                <input className='email-input'
                type='text'
                placeholder='Enter Your Email..' 
                ></input>
                <div className='sub-btn-div'>
                  <Button className='sub-btn'>
                    Subscribe
                  </Button>
                </div>
                </div>
            </div>
            </Col>
            </Row>
            </div>
            <div>
              <hr></hr>
            </div>
            <div className='final-footer'>
              <Row>
                <Col md={9}>
              <p className='final-footer-ptag'><img src={temple}></img> &nbsp;&nbsp;Copyright  <AiOutlineCopyrightCircle /> 2024 Aroganam</p>
              </Col>
              <Col md={3}>
              <p className='privacy-policy'>Privacy Policy</p>
              </Col>

              </Row>
            </div>
         
        </div>
       
    </div>
  )
}

export default Footer