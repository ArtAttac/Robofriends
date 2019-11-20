import React, { Component } from "react";
import CardList from "../components/CardList";
import Searchbox from "../components/Searchbox";
import "./App.css";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ""
    };
  }

  //Fetching from API and setting the user names to robots
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ robots: users }));
  }

  //when the search button is changed, the search field will contain the value
  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  //creates the filtered robot list from what was typed above
  render() {
    const filteredRobot = this.state.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    //Will just appear loading if nothing is passed through
    if (this.state.robots.length === 0) {
      return <h1>Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">Robofriends</h1>
          <Searchbox searchChange={this.onSearchChange} />
          <Scroll>
            <CardList robots={filteredRobot} />
          </Scroll>
        </div>
      );
    }
  }
}
export default App;
