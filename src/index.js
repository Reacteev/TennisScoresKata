import React from "react";
import { render } from "react-dom";
import TennisScores from "./TennisScores";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <TennisScores />
  </div>
);

render(<App />, document.getElementById("root"));
