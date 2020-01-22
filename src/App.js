import React, { Component } from "react";
import "./App.css";
import { data } from "./data/data";
import Card from "./components/Card";

const colorsToPick = [
  {
    label: "blue",
    color: "#40BBFF"
  },
  {
    label: "green",
    color: "#50E3C2"
  },
  {
    label: "pink",
    color: "#DF70B5"
  },
  {
    label: "red",
    color: "#FF6A85"
  },
  {
    label: "orange",
    color: "#FEB102"
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      title: "",
      description: "",
      selectedColor: "blue",
      show: false
    };

    //bind click
    this.createNewCard = this.createNewCard.bind(this);
  }

  checkSelectedColor(color) {
    this.setState({ selectedColor: color });
  }

  updateTitle(title) {
    //check the state to show the remaining form
    if (title.length > 0) {
      this.setState({ show: true });
    } else {
      this.setState({show: false})
    }

    //  update text
    this.setState({ title });
  }

  updateDescription(description) {
    this.setState({ description });
  }

  createNewCard() {
    const newCard = {
      title: this.state.title,
      date: Date.now(),
      description: this.state.description,
      color: this.state.selectedColor
    };

    // add it to the state
    let newData = this.state.data;
    newData = [newCard, ...newData];
    this.setState({ data: newData });
  }

  render() {
    return (
      <div className="App">
        <div className="input-wrapper">
          <input
            className="box input-title"
            type="text"
            placeholder="Title"
            onChange={event => this.updateTitle(event.target.value)}
          />

          <div style={{display: this.state.show ? 'block' : 'none'}}>
            <textarea
              className="box input-description"
              type="text"
              placeholder="Description"
              onChange={event => this.updateDescription(event.target.value)}
            ></textarea>
            <p>
              {colorsToPick.map((color, index) => {
                const selectedClass =
                  this.state.selectedColor === color.label
                    ? `color-picker select ${color.label}`
                    : "color-picker";

                return (
                  <a
                    key={index}
                    onClick={() => this.checkSelectedColor(color.label)}
                  >
                    <span
                      className={selectedClass}
                      style={{ backgroundColor: color.color }}
                    ></span>
                  </a>
                );
              })}
              <button className="create-button" onClick={this.createNewCard}>
                Create New
              </button>
            </p>
          </div>
        </div>

        {this.state.data.map(node => {
          return <Card key={node.date} node={node} color={node.color} />;
        })}
      </div>
    );
  }
}

export default App;
