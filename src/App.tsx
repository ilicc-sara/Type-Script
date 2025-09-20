import { useState } from "react";
import "./App.css";
import Card from "./Card";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <Card setCount={setCount} />
    </>
  );
};

export default App;
