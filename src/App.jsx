import React from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import About from "./components/About"; // Import the About component
import Services from "./components/Services"; // Import the Services component
import Contact from "./components/Contact"; // Import the Contact component

const App = () => {
  const [progress, setProgress] = React.useState(0);

  const updateProgress = (newProgress) => {
    setProgress(newProgress);
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar color="#f11946" progress={progress} />
        <Routes>
          <Route path="/" element={<News setProgress={updateProgress} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
