import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";

class App extends Component {
  // Method to handle next and prev page click
  handlePagination = (nextPage, prevPage) => {
    console.log('Next Page:', nextPage);
    console.log('Previous Page:', prevPage);
  };

  render() {
    return (
      <div>
        <Navbar />
        <News onPagination={this.handlePagination} />
      </div>
    );
  }
}

export default App;
