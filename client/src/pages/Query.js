import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import QueryForm from "../components/QueryForm"
import Row from "../components/Row";
import Col from "../components/Col";
import Hero from "../components/Hero"
import Discover from "./Discover"
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List";
import query from 'query-string'


class Query extends Component {
    state = {
        profiles: null,
        name: "",
        location: "",
        instrument: "",
        style: "",
        showProfiles: false,
        showProfileModal: false
    }

    componentDidMount() {
        this.loadProfiles();
    }


    loadProfiles = (req,res) => {
       
        

        API.getProfiles({
            name: this.state.name,
            location: this.state.location,

            instrument: this.state.instrument,
            style: this.state.style,

        })
            .then(res => {
                //if(instrument === instrumentKey && style === styleKey){

                this.setState({ profiles: res.data })
                // }
            }).catch(err => console.log(err));
    };

    //create on click for get profile 
    //grab the id of that field 
    profileModal = (e, id) => {
        e.preventDefault();
        API.getModalProfile(id).then(res => {
            console.log("triggered")
            this.setState({ showProfileModal: true })
        }).catch(err => console.log(err))
        console.log('the id ', id);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {

        event.preventDefault();

        this.setState({
            query:"",
            errors: {},
            showProfiles: true
        });

         //initialize variables for the query form inputs 
         const instrumentKey = document.getElementById('instrument-input').value;
         const styleKey = document.getElementById('style-input').value;
         console.log(instrumentKey, styleKey)

         // REACT ROUTER CODE TO SET QUERY
        let query = "?instrument="+instrumentKey+"&style="+styleKey; 
         console.log(this.props.history)
         this.props.history.push(query)

        API.getProfiles({
            instrument: this.state.instrument,
            style: this.state.style
        })
            .then(res => this.setState({ profiles: res}))
            .catch(err => console.log(err));

    };








    render() {

        console.log('this.state', this.state);
        const { errors, style, links, age, about, experience, location, name, imageUrl, instrument, contact, profiles, showProfiles, showProfileModal } = this.state;
        return (
            <div>
                {(showProfileModal &&


                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">{profiles.name}</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">

                                    <img src="..." className="card-img-top" alt="..." />

                                    <ul className="list-group list-group-flush" >

                                        <li className="list-group-item">Location: {location}</li>
                                        <li className="list-group-item">links: {links}</li>
                                        <li className="list-group-item">Age: {age}</li>
                                        <li className="list-group-item">Instrument: {instrument}</li>
                                        <li className="list-group-item">Style: {style}</li>
                                        <li className="list-group-item">Experience: {experience}</li>
                                        <li className="list-group-item">About: {about}</li>
                                    </ul>


                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                )}
                <Container style={{ marginTop: 30 }}>
                    <Hero className="rounded" backgroundImage="http://www.carlswebgraphics.com/backgrounds/music-notes-1280.jpg">
                        <Row>
                            <Col size="md-12">
                                <QueryForm onChange={this.handleInputChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col size="md-12">
                                <button
                                    className="btn btn-info"
                                    onClick={this.handleFormSubmit}
                                >Search</button>
                            </Col>




                        </Row>
                    </Hero>
                    <Row>

                        <Col className="profile-table text-light" size="xs-12">


                            {(profiles && showProfiles) &&
                                <table className="table table-striped" placeholder="Results">

                                    <thead>
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Location</th>
                                            <th scope="col">Instrument</th>
                                            <th scope="col">Style</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {profiles.map((profile, index) =>
                                            <tr key={profile._id}>

                                                <td>
                                                    <strong>
                                                        {profile.name}
                                                    </strong>
                                                </td>
                                                <td>
                                                    <strong>
                                                        {profile.location}
                                                    </strong>
                                                </td>
                                                <td>
                                                    <strong>
                                                        {profile.instrument}
                                                    </strong>
                                                </td>
                                                <td>
                                                    <strong>
                                                        {profile.style}
                                                    </strong>
                                                </td>
                                                <td>
                                                    <button
                                                        onClick={(e, profile_id) => this.profileModal(e, profile._id)}
                                                        data-toggle="modal"
                                                        data-target="#exampleModal"
                                                    >
                                                        Open Profile
                                                </button>
                                                </td>
                                            </tr>

                                        )}
                                    </tbody>
                                </table>

                            }


                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
}
export default Query;