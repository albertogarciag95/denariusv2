import React from "react";
import "./home-item.scss";
import Image from "../../../assets/data.jpg";
import { withRouter } from "react-router-dom";

const HomeItem = ({ imageUrl, title, linkUrl, history }) => (
  <div 
    className='menu-item' 
    onClick={() => history.push(`${linkUrl}`)}>
    <div className="background-image" style={{ backgroundImage: `url(${Image})`}} />
    <div className="content">
      <h1 className="title">{title}</h1>
    </div>
  </div>
);

export default withRouter(HomeItem);
