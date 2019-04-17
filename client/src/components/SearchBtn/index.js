import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "../../pages/Discover"

//import "./style.css";

function SearchBtn(props) {
  return (
    <Router>
         <Route exact path="/discover" component={Discover} />
         <button onClick={props.onClick} type="button" className="btn btn-success float-right">Find Your Bandmate</button>

    </Router>
  );
}

export default SearchBtn;