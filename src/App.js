import React, { Component } from "react";
import Repo from "./components/Repo";
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
      });
  }

  render() {
    return (
      <main className="main-container">
        <div>
          {this.state.items.map(item => {
            return (
              <Repo
                key={item.id}
                description={item.description}
                avatar={item.owner.avatar_url}
                name={item.name}
                issues={item.open_issues_count}
                stars={item.stargazers_count}
                owner={item.owner.login}
                updateDate={item.updated_at}
              />
            );
          })}
        </div>
      </main>
    );
  }
}
