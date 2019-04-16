import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import SearchBtn from "../components/SearchBtn"
import AListBtn from "../components/AListBtn/AListBtn"
import CreateProfileBtn from "../components/CreateProfileBtn/CreateProfileBtn"
import "./style.css"

function About() {
  return (
    <div>
      <Hero backgroundImage="http://www.carlswebgraphics.com/backgrounds/music-notes-1280.jpg">
        <h1 className ="coolFont">The A-List</h1>
        <h2>Find the RIGHT Musician for the Job</h2>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
           
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
         </Col>
          <Col size="md-2">
          
          </Col>
          <Col size="md-2">
         </Col>
          <Col size="md-2">
          
          </Col>
          <Col size="md-2">
          
         </Col>
          <Col size="md-2">
          </Col>
        </Row>
      
      
      </Container>
    </div>
  );
}

export default About;
