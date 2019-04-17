import React, { Component } from "react";
import Container from "../components/Container";
import axios from "axios";
import CreateProfileForm from "../components/CreateProfileForm"
import Row from "../components/Row"
import Col from "../components/Col"
import API from "../utils/API"
import FormBtn from "../components/FormBtn"

class CreateProfile extends Component {
    state = {
        name: "",
        location: "",
        imageUrl: "",
        links: "",
        age: "",
        instrument: "",
        style: "",
        experience: "",
        about: "",
        errors: {}
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
        console.log('the name', event.target.name);
        console.log('the value', event.target.value);
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.style === '') {
            return this.setState({ errors: { styleEmpty: 'You must Select a style' } });
        } 
        
        API.saveProfile({
            name: this.state.name,
            location: this.state.location,
            imageUrl: this.state.imageUrl,
            links: this.state.links,
            age: this.state.age,
            instrument: this.state.instrument,
            style: this.state.style,
            experience: this.state.experience,
            about: this.state.about
        })
            .then(res => console.log('the results', res))
            .catch(err => console.log(err));

    };

    render() {
        console.log('this.state', this.state);
        const { errors, style, location, name, links,imageUrl } = this.state;
        return (
            <div>
                <Container style={{ marginTop: 30 }}>

                    <Row>
                        <Col size="md-12">
                            <form>
                                {/*Name Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Name</label>
                                    <input type="text"
                                        value={name}
                                        name="name"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Your Name Here" />
                                </div>
                                {/*Location Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Location</label>
                                    <input type="text"
                                        value={location}
                                        name="location"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Where are you located?" />
                                </div>
                                {/*Image Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Image</label>
                                    <input type="text"
                                        value={imageUrl}
                                        name="imgUrl"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Show us your ugly mug" />
                                </div>
                                {/*Links Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Links to your Music</label>
                                    <input type="text"
                                        value={links}
                                        name="links"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="You'll get better results if people can hear what you sound like" />
                                </div>
                                {/*Age Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlInput1">Age</label>
                                    <input type="text"
                                        value={this.state.age}
                                        name="age"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="How old are you? Don't lie" />
                                </div>
                                {/*Instrument Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">What Do You Play?</label>
                                    <select value={this.state.instrument}
                                        name="instrument"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1" placeholder="Select One">
                                        <option>Select an Instrument</option>
                                        <option>Vocals</option>
                                        <option>Guitar</option>
                                        <option>Drums</option>
                                        <option>Bass</option>
                                        <option>Piano/Keyboard</option>
                                        <option>Electronic/Sampling/Beats</option>
                                        <option>Wind Instruments</option>
                                        <option>Classical Strings</option>
                                    </select>
                                </div>
                                {/*Style Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">What Style of Music Do You Play?</label>
                                    <select value={style}
                                        name="style"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1">
                                         <option>Select a Style</option>
                                        <option>Modern Rock</option>
                                        <option>Metal</option>
                                        <option>Extreme Metal</option>
                                        <option>Hard Rock</option>
                                        <option>Classic Rock</option>
                                        <option>Punk Rock</option>
                                        <option>Hip Hop</option>
                                        <option>EDM</option>
                                        <option>Jazz</option>
                                        <option>Industrial</option>
                                        <option>Hardcore</option>
                                        <option>Classical</option>
                                        <option>Gospel</option>
                                        <option>Pop</option>
                                        <option>Country</option>
                                    </select>
                                    <p className="text-danger">{Object.keys(errors).length > 0 ? errors.styleEmpty : null}</p>
                                </div>
                                {/*Experience Input */}
                                <div className="form-group">
                                    <label for="exampleFormControlSelect1">How Many Years of Live/Band Experience?</label>
                                    <select value={this.state.experience}
                                        name="experience"
                                        onChange={this.handleInputChange} className="form-control" id="exampleFormControlSelect1">
                                        <option>Less Than a Year</option>
                                        <option>1-5 Years</option>
                                        <option>5-10 Years</option>
                                        <option>10-20 Years</option>
                                        <option>More Than 20 Years</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label for="exampleFormControlTextarea1">About</label>
                                    <textarea type="text"
                                        value={this.state.about}
                                        name="about"
                                        onChange={this.handleInputChange}
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Tell us about yourself" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <button className="btn btn-success" onClick={this.handleFormSubmit}>Submit</button>
                            </form>

                        </Col>
                    </Row>

                </Container>
            </div>
        )
    }
};
export default CreateProfile;