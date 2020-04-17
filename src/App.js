import React, { Component } from "react";
import "./App.css";
import Sessions from "./Components/Sessions";
import Menu from './Components/Menu'

export const menuContent = [
  {
    icon: "icon-class-name",
    label: "Dogs",
    content: [
      {
        icon: "icon-class-name",
        label: "Random",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Cats",
        to: "#another-link"
      }
    ]
  },
  {
    icon: "icon-class-name",
    label: "Menu2 Item",
    content: [
      {
        icon: "icon-class-name",
        label: "Sub Menu of Second Item",
        to: "#another-link"
      },
      {
        icon: "icon-class-name",
        label: "Sub Menu of Second Item",
        to: "#another-link"
      }
    ]
  }
];

class App extends Component {
  state = {
    rawMenuData: null,
    list: [
      { id: 1, name: "Mimi", location: "Salt Lake City" },
      { id: 2, name: "Sam", location: "Hawaii" },
      { id: 3, name: "Matias", location: "Lehi" },
    ]
  };

  render() {
    const { list } = this.state;
    return (
      <div className="App">
        <Menu />
        <Sessions list={list} />
      </div>
    );
  }
}

export default App;
