import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";
import Alert from "../components/Alert";
import Hero from "../components/Hero"
import ResultsList from "../components/ResultsList";

class Discover extends Component {
  state = {
    name: "", location: "", imageUrl: "", links: "", age: "", instrument: "",
        style: "", experience: "", about:""
  };

 
  componentDidMount() {
    this.loadProfiles();
  }

  loadProfiles = () => {
    API.getProfiles()
      .then(res =>
        this.setState({ profiles: res.data, name: "", location: "", imageUrl: "", links: "", age: "", instrument: "",
        style: "", experience: "", about:"" })
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };




  render() {
    return (
      <div>
         {/*Change this to a list of results. When user clicks a result, a modal will pop up with with the original card that includes buttons for add to a-list or decline*/}
        <Hero backgroundImage="http://www.carlswebgraphics.com/backgrounds/music-notes-1280.jpg">
      
        <h1 className="text-center coolFont">In Your Area:</h1>
        <h3 className="text-centerm text-white coolFont">
          Thumbs up to send to your A-List of musicians
          <br />
          Thumbs down to move on to the next
        </h3>
        <ResultsList />
        </Hero>
      </div>
    );
  }
}

export default Discover;
