import { useReducer, useState, ActionDispatch, Dispatch } from "react";
import "./App.css";

function App() {
  const reducer = (count: number, newValue): number => {
    return newValue;
  };

  type ReducerState = ReturnType<typeof reducer>;

  const [count, setCount] = useReducer(reducer, 0);
  const [draftCount, setDraftCount] = useState(count);

  setCount(4);
  return (
    <section className="flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4">
      <h1>Days Since the Last Accindent</h1>
      <p className="text-6xl"> {count} </p>
      <div className="flex gap-2">
        <button onClick={() => setCount((count) => count - 1)}>button</button>
      </div>
    </section>
  );
}

export default App;
