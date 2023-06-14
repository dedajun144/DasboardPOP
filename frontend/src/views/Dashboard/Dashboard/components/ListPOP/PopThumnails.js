import React from "react";
import { Link } from "react-router-dom";
import { BASE_API_URL } from "utils/Constanst";

const PopThumnails = ({ id, name, image, type }) => {
  const style = `thumb-container ${type}`;
  return (
    <Link target="_blank" to={`detailPOP/${id}`} className={style}>
      <div className="number">
        <small>#0{id}</small>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h3>{name}</h3>
        <small>Terlaksana: {type}</small>
      </div>
    </Link>
  );
};

export default PopThumnails;
