import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Discover from "../../pages/Discover"
import { Link } from "react-router-dom";
import Query from "../../pages/Query"

//import "./style.css";



function QuerySubmitBtn(props) {
  return (
    <Link
    to="/discover"
    className={window.location.pathname === "/discover" ? "nav-link active" : "nav-link"}
     >
    <Route exact path="/discover" component={Discover} />
    Search Musicians
  </Link>
       
        

    
  );
}

export default QuerySubmitBtn;