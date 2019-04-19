import React, { Component } from "react";
import "./style.css";

class QueryForm extends Component
 {
  state ={
    location:"",
    instrument: "",
    style: ""
}



  handleInputChange = event => {
    this.setState({value: event.target.value});
  };


  

    render(){
    return (
        
        <form>
            <h1>What are you looking for?</h1>
          {/*Instrument Input */}
        <div className="form-group">
          <label for="exampleFormControlSelect1">What Intsrument Are You Looking For?</label>
          <select className="form-control" id="instrument-input"  onChange={this.handleInputChange}>
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
          <label for="exampleFormControlSelect1">What Style Are You Looking For?</label>
          <select className="form-control" id="style-input"  onChange={this.handleInputChange}>
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
        </div>
       
   
      </form>
    );
}
 }

export default QueryForm;