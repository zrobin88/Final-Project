import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateProfile from "../../pages/CreateProfile"

//import "./style.css";



function CreateProfileBtn(props) {
  return (
    <Router>
         <Route exact path="/create-profile" component={CreateProfile} />
         <button onClick={props.onClick} type="button" className="btn btn-success float-right">Create a Profile</button>

    </Router>
  );
}

export default CreateProfileBtn;