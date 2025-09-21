import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {}

  return (
    <div onClick={(e) => handleClick(e)}>
      <button>Click Me!</button>
    </div>
  );
};

export default App;
