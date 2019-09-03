import React from "react";
import "./Repo.scss";

export default function Repo(props) {
  return (
    <div className="repo">
      <div className="repo-avatar">
        <img src={props.avatar} alt="" />
      </div>
      <div className="repo-details">
        <h2>{props.name}</h2>
        <p>{props.description}</p>
        <div className="repo-info">
          <span className="label tag stars">Stars: {props.stars}</span>
          <span className="label tag issues">Issues: {props.issues}</span>
          <small className="label submitted-date">
            Submitted {props.updateDate} by <b>{props.owner}</b>
          </small>
        </div>
      </div>
    </div>
  );
}
