import { useState } from "react";
import "./App.css";

type GreetingProps = {
  name: string;
  age?: number;
};

const Greeting = ({ name, age }: GreetingProps) => {
  return (
    <div>
      <h2>Hello, {name}!</h2>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
};

const App = () => {
  const [count, setCount] = useState<number>(0);
  const [username, setUsername] = useState<string>("");

  return (
    <div className="App">
      <h1>Learning TypeScript with React 🚀</h1>

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>

      <hr />

      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username && <Greeting name={username} age={20} />}
    </div>
  );
};

export default App;
