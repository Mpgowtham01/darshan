import React, { useState, useEffect } from 'react';
import './YatraBookingLandingpg.css';
import {Card, Modal} from "react-bootstrap"
import Layout from "../../../components/Layout";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import {Row, Col} from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import { Button } from 'primereact/button';
import { IoLocationSharp } from "react-icons/io5";
import { PiFlagCheckeredFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import axios from 'axios';

        

function YatraBookingLandingpg() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();
  const handleNavigate = (prefill) => {
    navigate("/yatrabooking/form"
      , { state: { prefill } }
    );
  };
  const { id } = useParams();
  // const images = [
  //   'https://wallpapercave.com/wp/wp6612913.jpg',
  //   'https://www.hlimg.com/images/stories/738X538/khajuraho_1537341352m.jpg',
  //   'https://thumbs.dreamstime.com/b/ram-temple-ayodhya-222094601.jpg',
  //   'https://www.tusktravel.com/blog/wp-content/uploads/2021/03/Things-to-do-in-ancient-place-of-world-Varanasi.jpg',
  //   // Add the paths to your images here
  // ];
  const [selectedImage, setSelectedImage] = useState();
  const [activeIndex, setActiveIndex] = useState([0, 1, 2]);
  const [packageDetails, setPackageDetails] = useState(null);
  
  const onTabChange = (e) => {
    setActiveIndex(e.index);
  };


  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  useEffect(() => {
    const fetchPackageDetails = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_DEV_BASE_URL}/yatrabook/getTrip/${id}`);
        const data = response.data;
        console.log(response.data);
        data.designation = JSON.parse(data.designation);
        data.dayslist = JSON.parse(data.dayslist);
        data.images = JSON.parse(data.images); // Assuming images are returned as a JSON array

        // Convert `what_is_included` to an array
        if (typeof data.what_is_included === 'string') {
          data.what_is_included = data.what_is_included.split('\n').map(item => item.trim()).filter(item => item);
        }
        setPackageDetails(data);
        if (data.images && data.images.length > 0) {
          setSelectedImage(`${process.env.REACT_APP_DEV_BASE_URL}${data.images[0]}`); // Set the first image as the default selected image
        }
      } catch (error) {
        console.error("Error fetching package details:", error);
      }
    };

    fetchPackageDetails();
  }, [id]);


  if (!packageDetails) {
    return <div>Loading...</div>;
  }
  const days = Array.isArray(packageDetails.days) ? packageDetails.days : [];
  console.log('Days:', days);
  return (
<Layout>
    <div className="yatra-booking-container">
      <h3 className="page-title"><b>{packageDetails.days}&nbsp;Days:&nbsp;{packageDetails.title}</b></h3>
      <div className="image-gallery">
        <div className="sidebar-gallery">
        {packageDetails.images.map((image, index) => (
              <img
                key={index}
                src={`${process.env.REACT_APP_DEV_BASE_URL}${image}`}
                alt={`Thumbnail ${index + 1}`}
                className={`thumbnail ${selectedImage === `${process.env.REACT_APP_DEV_BASE_URL}${image}` ? 'selected' : ''}`}
                onClick={() => handleImageClick(`${process.env.REACT_APP_DEV_BASE_URL}${image}`)}
              />
            ))}
        </div>
        <div className="main-image">
          <img className="selected-image" src={selectedImage} alt="Selected" />
        </div>
        <div>
          <Card className='price-card'>
            <div style={{marginLeft:"5%",marginTop:"8%"}}>
            <span style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
            <h3>Price:</h3>
      <h5 style={{paddingTop:"1%",marginLeft:"3%", textDecoration:"line-through",color:"red",fontWeight:"600"}}>₹{packageDetails.price}</h5>
            </span>
            <h5 style={{marginLeft:"24%",fontWeight:"600"}}>₹{packageDetails.offerPrice}</h5>
            </div>
            <div style={{border:"1px solid grey",marginLeft:"5%",width:"90%",borderRadius:"5px",marginTop:"3%"}}>
            <div style={{marginTop:"5%",borderRadius:"5px",paddingLeft:"3%"}}>
             
         <h5 style={{fontWeight:"650"}}><IoLocationSharp style={{fontSize:"25px", color:"green"}}/> Meeting Point:</h5>
                <h6 style={{paddingTop:"2%",paddingLeft:"8%"}}>{packageDetails.meeting_point}</h6>
              
            </div>
            <div style={{marginTop:"5%",marginBottom:"5%",paddingLeft:"3%"}}>
             
             <h5 style={{fontWeight:"650"}}><PiFlagCheckeredFill style={{fontSize:"25px", color:"green"}}/> Ending Point:</h5>
                    <h6 style={{paddingTop:"2%",paddingLeft:"8%"}}>{packageDetails.end_point}</h6>
                  
                </div>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"8%"}}>
                  <Button onClick={handleShow} style={{backgroundColor:"green",fontSize:"18px"}}><b>Book Now</b></Button>
                </div>
          </Card>
        </div>
      </div>
     
      <div className='package-contents'>
        <hr></hr>
      <div className='overview-div'>
        <h2>Overview</h2>
        <br></br>
        <p>{packageDetails.overview}</p>
      </div>
      <br></br>
      <Accordion multiple activeIndex={activeIndex} onTabChange={onTabChange}>
            <AccordionTab header="What's Included">
            <ul style={{listStyleType:"none"}}>
                {Array.isArray(packageDetails.what_is_included) ? (
                  packageDetails.what_is_included.map((item, index) => (
                    <li key={index} style={{paddingTop:"18px"}}>
                      <FaCheck size={24} style={{ color: "green" }} /> &nbsp;&nbsp;{item}
                    </li>
                  ))
                ) : (
                  <li>Data format is incorrect.</li>
                )}
              </ul>
            </AccordionTab>
            <AccordionTab header="What To Expect">
            {packageDetails.dayslist.map((day, index) => (
                <div key={index}>
                  <h5><Badge bg="success">Day {day.day}</Badge></h5>
                  <p><b>{day.designation}</b></p>
                  <br></br>
                </div>
              ))}
            </AccordionTab>
            {/* <AccordionTab header="Why You Should Take This Tour">
              <ul>
                <li>Comprehensive Temple Experience: Visit some of the most significant temples and holy sites in Varanasi, Allahabad, and Ayodhya.</li>
                <li>Cultural Immersion: Experience the spiritual rituals and cultural heritage of these ancient cities.</li>
                <li>Comfortable Travel: Skip the hassle of planning and enjoy a well-organized tour with comfortable transportation and accommodation.</li>
              </ul>
            </AccordionTab> */}
          </Accordion>
      </div>
      <div className="review-section">
            <h2>Reviews</h2>
            <br></br>
            <div className="review-overview">
          
              <div className="rating">
      <div>
                <h1 ><b>4.5</b></h1>
                <p >184 reviews</p>
              
           </div>
                <div className="stars">
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
                  <FaStar color="gold" />
              
                </div>
        
              
              </div>
              <div className="review-breakdown">
              <p style={{marginLeft:"15vh"}}>Reviews by Yatra travelers. We perform checks on reviews</p>
                <div className="review-row">
               
                  <span>5 stars</span>
                  <div className="review-bar">
                    <div className="filled-bar" style={{ width: '83%' }}></div>
                  </div>
                  <span>153</span>
                </div>
                <div className="review-row">
                  <span>4 stars</span>
                  <div className="review-bar">
                    <div className="filled-bar" style={{ width: '9%' }}></div>
                  </div>
                  <span>17</span>
                </div>
                <div className="review-row">
                  <span>3 stars</span>
                  <div className="review-bar">
                    <div className="filled-bar" style={{ width: '2%' }}></div>
                  </div>
                  <span>4</span>
                </div>
                <div className="review-row">
                  <span>2 stars</span>
                  <div className="review-bar">
                    <div className="filled-bar" style={{ width: '1%' }}></div>
                  </div>
                  <span>2</span>
                </div>
                <div className="review-row">
                  <span>1 star</span>
                  <div className="review-bar">
                    <div className="filled-bar" style={{ width: '4%' }}></div>
                  </div>
                  <span>8</span>
                </div>
              </div>
            </div>
        
          </div>
          <Modal
     
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{ fontWeight: "bold" }}>
          <h4>Is this booking for yourself or someone else?</h4>
        </Modal.Header>
        <Modal.Footer>
          <Button onClick={() => handleNavigate(true)} style={{ backgroundColor: "green",height:"6vh",border:"none" }}>For Myself</Button>
          &nbsp;&nbsp;&nbsp;
          <Button onClick={() => handleNavigate(false)} style={{ backgroundColor: "#134B70",height:"6vh",border:"none" }}>For Someone Else</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </Layout>
  );
}

export default YatraBookingLandingpg;
