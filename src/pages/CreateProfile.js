import React, { Component } from "react";
import Container from "../components/Container";
import CreateProfileForm from "../components/CreateProfileForm"
import Row from "../components/Row"
import Col from "../components/Col"
import API from "../utils/API"
import FormBtn from "../components/FormBtn"

class CreateProfile extends Component {
    state = {
      name: "", location: "", imageUrl: "", links: "", age: "", instrument: "",
          style: "", experience: "", about:""
    }

handleFormSubmit = event => {
    event.preventDefault();
    
      API.saveProfile({
        name: this.state.name,
        location: this.state.location,
        imageUrl: this.state.imageUrl,
        links: this.state.links,
        age: this.state.age,
        instrument: this.state.instrument,
        style: this.state.style,
        experience: this.state.experience,
        about:this.state.about
      })
        .then(res => console.log("saved"))
        .catch(err => console.log(err));
    
  };

render() {
    return (
        <div>
            <Container style={{ marginTop: 30 }}>

                <Row>
                    <Col size="md-12">
                        <CreateProfileForm />
                        <FormBtn

                            onClick={this.handleFormSubmit}
                        >
                            Submit Profile
                        </FormBtn>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
};
export default CreateProfile;