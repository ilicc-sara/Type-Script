import { useReducer } from "react";
import "./App.css";

function App() {
  type InitialState = {
    count: number;
    draftCount: number;
  };

  const initialState: InitialState = {
    count: 0,
    draftCount: 0,
  };

  type Action =
    | { type: "increment" }
    | { type: "decrement" }
    | { type: "reset" }
    | { type: "updateCountFromDraft" }
    | { type: "updateDraftCount"; payload: number };

  const reducer = (state: InitialState, action: Action): InitialState => {
    const { count, draftCount } = state;

    switch (action.type) {
      case "increment":
        const inc = count + 1;
        return { count: inc, draftCount: inc };
      case "decrement":
        const dec = count - 1;
        return { count: dec, draftCount: dec };
      case "reset":
        return { count: 0, draftCount: 0 };
      case "updateDraftCount":
        return { count, draftCount: action.payload };
      case "updateCountFromDraft":
        return { count: Number(draftCount), draftCount };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section className="flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{state.count}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch({ type: "decrement" })}>
          ➖ Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>🔁 Reset</button>
        <button onClick={() => dispatch({ type: "increment" })}>
          ➕ Increment
        </button>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: "updateCountFromDraft" });
          }}
        >
          <input
            type="number"
            value={state.draftCount}
            onChange={(e) =>
              dispatch({
                type: "updateDraftCount",
                payload: Number(e.target.value),
              })
            }
          />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
}

export default App;
