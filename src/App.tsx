import { useReducer, useState, ActionDispatch, Dispatch } from "react";
import "./App.css";

function App() {
  type InitialState = {
    count: number;
    draftCount: string | number;
  };

  const initialState: InitialState = {
    count: 0,
    draftCount: 0,
  };

  const reducer = (state = initialState, action: any) => {
    const { count, draftCount } = state;

    if (action.type === "increment") {
      const newCount = count + 1;
      return { count: newCount, draftCount: newCount };
    }

    if (action.type === "decrement") {
      const newCount = count - 1;
      return { count: newCount, draftCount: newCount };
    }

    if (action.type === "reset") {
      return { count: 0, draftCount: 0 };
    }

    if (action.type === "updateDraftCount") {
      console.log("updateDraftCount");

      return { count, draftCount: action.payload };
    }

    if (action.type === "updateCountFromDraft") {
      return { count: Number(draftCount), draftCount };
    }

    return state;
  };

  const [count, setCount] = useReducer(reducer, 0);
  const [draftCount, setDraftCount] = useState(count);

  // setCount(4);
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
