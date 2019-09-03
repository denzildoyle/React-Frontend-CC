import React from "react";
import Moment from "moment";
import "./Repo.scss";

function timeAgo(date) {
  return Moment(date).fromNow();
}
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
            Submitted {timeAgo(props.updateDate)} by <b>{props.owner}</b>
          </small>
        </div>
      </div>
    </div>
  );
}
