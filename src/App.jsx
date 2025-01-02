import React, { Component } from "react";
class App extends Component {
  c = "Vishal Lokhande"; // Class property

  render() {
    return (
      <div>
        <h1>Hello World {this.c}</h1>
      </div>
    );
  }
}

export default App;
