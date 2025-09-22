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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { useState } from "react";
import "./App.css";

type GreetingProps = {
name: string;
age?: number;
};

const Greeting = ({ name, age }: GreetingProps) => {
return (

<div className="p-4 mt-4 rounded-xl bg-blue-100 shadow-md text-center">
<h2 className="text-2xl font-semibold text-blue-700">Hello, {name} 👋</h2>
{age && <p className="text-gray-700">You are {age} years old.</p>}
</div>
);
};

type CardProps = {
title: string;
children: React.ReactNode;
};

const Card = ({ title, children }: CardProps) => {
return (

<div className="p-6 my-4 rounded-2xl shadow-lg bg-white border border-gray-200 w-80">
<h3 className="mb-2 text-lg font-bold text-gray-800">{title}</h3>
<div className="text-gray-600">{children}</div>
</div>
);
};

const App = () => {
const [count, setCount] = useState<number>(0);
const [username, setUsername] = useState<string>("");

return (

<div className="flex flex-col items-center min-h-screen p-8 bg-gray-50">
<h1 className="mb-6 text-4xl font-extrabold text-indigo-600">
Learning TypeScript with React 🚀
</h1>

      <Card title="Counter Example">
        <p className="text-xl mb-4">Count: {count}</p>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
            onClick={() => setCount(count + 1)}
          >
            ➕ Increment
          </button>
          <button
            className="px-4 py-2 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600 transition"
            onClick={() => setCount(count - 1)}
          >
            ➖ Decrement
          </button>
        </div>
      </Card>

      <Card title="Greeting Example">
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {username && <Greeting name={username} age={20} />}
      </Card>
    </div>

);
};

export default App;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

```import React from "react";

type CardProps = {
  // text: string;
  // count?: number;
  // children?: React.ReactNode;
  // setCount: React.Dispatch<React.SetStateAction<number>>;
  // alertMessage: (message: string) => void;
  // user: User;
  color: "red" | "blue" | "purple";
};

// function Card({ text, count }: CardProps) {
function Card({ user }: CardProps) {
  return <div>{JSON.stringify(user)}</div>;
}

export default Card;

// const [count, setCount] = useState(0);

  // function alertMessage(message: string) {
  //   alert(message);
  // }

  // const users = [
  //   { name: "Austin", age: 26 },
  //   { name: "Carter", age: 24 },
  //   { name: "Julia", age: 23 },
  // ];

```

function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {}

//////////////////////
const numbers = [1, 2, 3] as const;
// numbers[1] = 5; error

const myObject = { age: 46 } as const;
// myObject.age = 9 error
