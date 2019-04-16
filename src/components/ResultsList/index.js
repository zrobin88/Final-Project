import React from "react";
import CardBtn from "../CardBtn";

import API from "../../utils/ProfileAPI"
import Card from "../Card";
import Container from "../Container";

import Row from "../Row";
import Col from "../Col";
function ResultsList(props) {
    return (
        
      <div>
    <Container style={{ marginTop: 30 }}>
    {/*Put query form in a jumbo tron */}     
     <Row>
         <Col size="md-12">
        <Card />
       
         </Col>
     </Row>

 </Container>
 </div>
    )
}

export default ResultsList;