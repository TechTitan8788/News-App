import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = React.useState(0);

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <div>
      <Router>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <News setProgress={updateProgress} />
      </Router>
    </div>
  );
};

export default App;
