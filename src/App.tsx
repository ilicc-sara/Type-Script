import { useState, useEffect, useRef } from "react";
import "./App.css";

const App = () => {
  const myRef = useRef<HTMLSpanElement>(null);

  return (
    <div>
      <span ref={myRef}>Button</span>
    </div>
  );
};

export default App;
