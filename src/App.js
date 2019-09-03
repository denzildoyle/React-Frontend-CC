import React, { Component } from "react";
import "./App.scss";

const API =
  "https://api.github.com/search/repositories?q=sort=stars&order=desc";

export default class App extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: data.items
        });
        console.log(this.state.items);
      });
  }

  render() {
    return (
      <main className="main-container">
        <div className="repo">
          <div className="repo-avatar">
            <img
              src="https://us.123rf.com/450wm/dreamsvector/dreamsvector1709/dreamsvector170900090/86917315-young-afro-man-avatar-character-male-face-portrait-cartoon-person-illustration-adult-design-human-pe.jpg?ver=6"
              alt=""
            />
          </div>
          <div className="repo-details">
            <h2>Repo Name</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus deserunt molestias rem harum consequuntur possimus magni
              totam quas quo iste! Dolor nesciunt deleniti enim tempore nisi,
              alias laborum corporis consectetur.
            </p>
            <div className="repo-info">
              <span className="label tag stars">Stars: 234</span>
              <span className="label tag issues">Issues: 23432</span>
              <small className="label submitted-date">
                Submitted 29 ago by <b>Denzil Doyle</b>
              </small>
            </div>
          </div>
        </div>

        <div className="repo">
          <div className="repo-avatar">
            <img
              src="https://us.123rf.com/450wm/dreamsvector/dreamsvector1709/dreamsvector170900090/86917315-young-afro-man-avatar-character-male-face-portrait-cartoon-person-illustration-adult-design-human-pe.jpg?ver=6"
              alt=""
            />
          </div>
          <div className="repo-details">
            <h2>Repo Name</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus deserunt molestias rem harum consequuntur possimus magni
              totam quas quo iste! Dolor nesciunt deleniti enim tempore nisi,
              alias laborum corporis consectetur.
            </p>
            <div className="repo-info">
              <span className="label tag stars">Stars: 234</span>
              <span className="label tag issues">Issues: 23432</span>
              <small className="label submitted-date">
                Submitted 29 ago by <b>Denzil Doyle</b>
              </small>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
