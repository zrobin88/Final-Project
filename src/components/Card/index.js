import React from "react";
import CardBtn from "../CardBtn";
import "./style.css";
import API from "../../utils/ProfileAPI"

function Card(props) {
  return (
    <div className="card">
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h3>{API.name}</h3>
    
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Location: {API.location}</li>
    <li className="list-group-item">links: {API.links}</li>
    <li className="list-group-item">Age: {API.age}</li>
    <li className="list-group-item">Instrument: {API.instrument}</li>
    <li className="list-group-item">Style: {API.style}</li>
    <li className="list-group-item">Experience: {API.experience}</li>
    <li className="list-group-item">About: {API.about}</li>
  </ul>
  <div className="card-body">
  <br />
  <br />
  

        {/*!props.image && <i className="fa fa-spinner fa-spin" aria-hidden="true" />*/}
  </div>

</div>



  );
}

export default Card;
