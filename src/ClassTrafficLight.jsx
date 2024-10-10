import { Component } from "react";

export class ClassTrafficLight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLight: "red",
    };
  }

  handleNextState = () => {
    const { currentLight } = this.state;
    let nextLight = "";

    switch (currentLight) {
      case "red":
        nextLight = "yellow";
        break;
      case "yellow":
        nextLight = "green";
        break;
      case "green":
        nextLight = "red";
        break;
      default:
        nextLight = "red";
    }
    this.setState({ currentLight: nextLight });
  };

  render() {
    const { currentLight } = this.state;
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          {/* Background color can be black | yellow | red | green */}
          <div
            className={`circle ${
              currentLight === "red" ? "red glow" : "black"
            }`}
          ></div>
          <div
            className={`circle ${
              currentLight === "yellow" ? "yellow glow" : "black"
            }`}
          ></div>
          <div
            className={`circle ${
              currentLight === "green" ? "green glow" : "black"
            }`}
          ></div>
        </div>
        <button className="next-state-button" onClick={this.handleNextState}>
          Next State
        </button>
      </div>
    );
  }
}
