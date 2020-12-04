import React from "react";
import "./home-item.scss";
import Image from "../../../assets/data.jpg";

const HomeItem = ({ imageUrl, title, match, linkUrl, history }) => (
  <div 
    className='menu-item' 
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div className="background-image" style={{ backgroundImage: `url(${Image})`}} />
    <div className="content">
      <h1 className="title">{title}</h1>
    </div>
  </div>
);

export default HomeItem;