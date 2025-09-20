import { useState } from "react";
import "./App.css";
import Card from "./Card";

const App = () => {
  // const [count, setCount] = useState(0);

  function alertMessage(message: string) {
    alert(message);
  }
  return (
    <>
      <Card alertMessage={alertMessage} />
    </>
  );
};

export default App;
