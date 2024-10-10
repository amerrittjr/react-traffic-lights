import { useState } from "react";
export const FunctionalTrafficLight = () => {
  const [currentLight, setCurrentLight] = useState("red");

  const handleNextState = () => {
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
    setCurrentLight(nextLight);
  };
  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div
          className={`circle ${currentLight === "red" ? "red glow" : "black"}`}
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
      <button className="next-state-button" onClick={handleNextState}>
        Next State
      </button>
    </div>
  );
};
