import { useReducer, useState } from "react";
import "./App.css";

function App() {
  const reducer = (count: number, newValue) => {
    return newValue;
  };

  const [count, setCount] = useReducer(reducer, 0);
  const [draftCount, setDraftCount] = useState(count);
  return (
    <>
      <h1 className="text-red-500">Type Script Course</h1>
    </>
  );
}

export default App;
