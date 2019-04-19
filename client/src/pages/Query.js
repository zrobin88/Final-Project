import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import QueryForm from "../components/QueryForm"
import Row from "../components/Row";
import Col from "../components/Col";
import Jumbotron from "../components/Jumbotron";
import Discover from "./Discover"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";

class Query extends Component {
    state ={
        profiles: [],
        name:"",
        location:"",
        instrument: "",
        style: ""
    }

    componentDidMount() {
        this.loadProfiles();
    }


    loadProfiles = () => {
        API.getProfiles()
            .then(res =>
                this.setState({
                    name: "",
                    location: "",
                    imageUrl: "",
                    links: "",
                    age: 0,
                    instrument: "",
                    style: "",
                    experience: "",
                    about: ""
                })
            )
            .catch(err => console.log(err));
    };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
       
        event.preventDefault();
            
            this.setState({ errors: {} });
            API.getProfiles({
                name: this.state.name,
                location: this.state.location,
                instrument: this.state.instrument,
                style: this.state.style
            })
                .then(res => this.loadProfiles())
                .catch(err => console.log(err));
        
    };








    render() {
        
        console.log('this.state', this.state);
        const { errors, style, location, name,imageUrl, instrument,  } = this.state;
        return (
            <div>
                <Container style={{ marginTop: 30 }}>
                    {/*Put query form in a jumbo tron */}
                    <Row>
                        <Col size="md-12">
                            <QueryForm onChange={this.handleInputChange}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col size="md-12">
                            {/*When user clicks this button route to Discover page
                            <Link
                                to="/discover"
                                className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
                            >
                                <Route exact path="/discover" component={Discover} />
                                Search Musicians
                            </Link>
                        */}
                            <button className="btn btn-success" onClick={this.handleFormSubmit}>Search</button>
                        </Col>




                    </Row>
                    <Row>
                        <Col size="md-6 sm-12">
                            <Jumbotron>
                                <h1>Results</h1>
                            </Jumbotron>
                            {this.state.profiles.length ? (
                                <List>
                                    {this.state.profiles.map(profile => (
                                        <ListItem key={profile._id}>
                                            <Link to={"/profiles/" + profile._id}>
                                                <strong>
                                                    {name}, {location}, {instrument}, {style}
                                                </strong>
                                            </Link>
                                         
                                        </ListItem>
                                    ))}
                                </List>
                            ) : (
                                    <h3></h3>
                            )}
                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}
export default Query;