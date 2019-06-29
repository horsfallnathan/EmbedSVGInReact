import React, { useState, useEffect } from "react";
import "./App.css";
import SVGFile from "./svgFile";

function App() {
  const [inputValue1, setInputValue1] = useState("");
  const [calculatedRate, setCalculatedRate] = useState(0);
  const handleChange = e => {
    e.preventDefault();
    setInputValue1(e.target.value);
  };

  useEffect(() => {
    const a = inputValue1 >= 100 ? 100 : inputValue1;
    let rate = Math.floor((a / 100) * 10);
    rate = isNaN(rate) ? 0 : rate;
    setCalculatedRate(rate);
  }, [inputValue1]);

  return (
    <div className="App">
      <h1>How would you rate your SVG knowledge?</h1>
      <h2>{`~ ${calculatedRate * 10}%`}</h2>
      <input
        type="number"
        id="Score"
        value={inputValue1}
        onChange={handleChange}
      />
      <label htmlFor="Score">Input some value 0 - 100%</label>
      <div className="svgImage">
        <SVGFile active={calculatedRate} />
      </div>
    </div>
  );
}

export default App;
