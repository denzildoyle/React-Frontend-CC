import React, { Component } from "react";
import Repo from "./components/Repo";
import "./Main.scss";

const API =
  "https://api.github.com/search/repositories?q=sort=stars&order=desc";

export default class Main extends Component {
  state = {
    items: [],
    isLoading: true,
    error: ""
  };

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({
          items: data.items,
          isLoading: false
        });
      })
      .catch(error =>
        this.setState({
          error: error,
          isLoading: true
        })
      );
  }

  render() {
    return (
      <main className="main-container">
        <div>
          {!this.state.isLoading ? (
            this.state.items.map(item => {
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
            })
          ) : (
            // If there is a delay in data, let's let the user know it's loading
            <h3>Loading...</h3>
          )}
        </div>
      </main>
    );
  }
}
