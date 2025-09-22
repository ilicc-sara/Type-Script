import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const numbers = [1, 2, 3] as const;
  // numbers[1] = 5; error

  const myObject = { age: 46 } as const;
  // myObject.age = 9  error
  return <div></div>;
};

export default App;
