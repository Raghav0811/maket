import React from "react";

const Card = (props) => {
  return (
    <div className="model-card">
      <img src={props.model.imagePath} height={200} alt="" />
      <p className="model-name">{props.model.name}</p>
      <div className="model-details">
        <p>🛏️ {props.model.bedrooms}</p>
        <p>🛀 {props.model.bathrooms}</p>
        <p>🔳 {props.model.sqft} sqft</p>
      </div>
      <div className="select-like-buttons">
        <button
          className="button-pill"
          onClick={() => props.handleModelSelectChange(props.position)}
        >
          {props.model.isSelected ? "Remove Selection" : "Select"}
        </button>
        <button
          className="button-pill"
          onClick={() => props.handleModelLikeChange(props.position)}
        >
          {props.model.isLike ? "❤️" : "Like"}
        </button>
      </div>
    </div>
  );
};

export default Card;
