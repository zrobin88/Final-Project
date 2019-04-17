import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import QueryForm from "../components/QueryForm"
import Row from "../components/Row";
import Col from "../components/Col";
import QuerySubmitBtn from "../components/QuerySubmitBtn"
import Discover from "./Discover"
import { BrowserRouter as Router, Route } from "react-router-dom";



const isValid =()=>{
    let instrument = document.getElementById("#instrument-input").valueOf();
    let style = document.getElementById("style-input").valueOf(); 

    if(instrument === "Select an Instrument" && style === "Select a Style"){
        alert ("Please Select an Instrument and Style of Music ")
    }
}
function Query(){
    return (
        <div>    
            <Container style={{ marginTop: 30 }}>
               {/*Put query form in a jumbo tron */}     
                <Row>
                    <Col size="md-12">
                        <QueryForm />
                    </Col>
                </Row>
                <Row>
                    <Col size ="md-12">
                        {/*When user clicks this button route to Discover page*/}
                        <QuerySubmitBtn onclick={isValid}/>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}

export default Query;