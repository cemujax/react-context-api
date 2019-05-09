import React, { Component } from "react";
import LeftPane from "./components/LeftPane";
import RightPane from "./components/RightPane";

class App extends Component {
  render() {
    return (
      <div>
        <LeftPane />
        <RightPane />
      </div>
    );
  }
}

export default App;
