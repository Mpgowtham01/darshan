import React from 'react'
import CustomNav from "../../components/HeaderNavBar/CustomNav";
import CustomNavF from "../../components/Footer/index";
import {Card, Container,Row,Col,Button} from "react-bootstrap";

function DilapilatedTempleLandingPage() {
  return (
    <div className="home-1 py-10" style={{background:"none"}}>
      <CustomNav/>
      <Container>
      <h1 className="mt-4" >Nageswaran Temple, Kumbakonam</h1>
      <Row>
        <Col>
        <img style={{ paddingTop:"10px", borderRadius:"10px"}} src="https://swarajya.gumlet.io/swarajya/2020-11/71094bc0-3a93-4d6b-afa8-025e1c340a88/temple.png?w=640&q=75&auto=format,compress&format=webp" alt='none'/>
        </Col>
        <Col style={{paddingTop:"2%"}}>
        <Button style={{borderRadius:"50px", padding:"3%", fontWeight:"bold"}}>Donate Us</Button>
        </Col>
      </Row>
    
     <div style={{paddingTop:"4%", paddingBottom:"3%"}}>
      <Card style={{borderRadius:"0px", borderColor:"black",width:"50rem", padding:"2%" }}>
        <h2>About Temple</h2>
        <p>Aditya Chola constructed this temple during the 9th century. It is great marvel of Chola architecture, building technology and astronomy. The orientation is structured in such a way that it allows sunlight inside the temple, right on the sanctum only during the Tamil month of Chithirai</p>
      </Card>
      </div>
      </Container>
      <CustomNavF/>
    </div>
  )
}

export default DilapilatedTempleLandingPage
