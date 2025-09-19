# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

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

type Action = {
type: "increment" | "decrement" | "reset" | "updateCountFromDraft";
};

type ActionWithPayload = {
type: "updateDraftCount";
payload: number;
};

const reducer = (
state = initialState,
action: Action | ActionWithPayload
) => {
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

const [state, dispatch] = useReducer(reducer, initialState);

// setCount(4);
return (
<section className="flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4">
<h1>Days Since the Last Accindent</h1>
<p className="text-6xl"> {state.count} </p>
<div className="flex gap-2">
<button onClick={() => dispatch({ type: "decrement" })}>
{" "}
➖ Decrement
</button>
<button onClick={() => dispatch({ type: "reset" })}> 🔁 Reset </button>
<button onClick={() => dispatch({ type: "increment" })}>
{" "}
➕ Increment{" "}
</button>
</div>
<div>
<form
onSubmit={(e) => {
e.preventDefault();
dispatch({ type: "updateCountFromDraft" });
}} >
<input type="number" value={state.draftCount} onChange={} />

          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>

);
}

export default App;
