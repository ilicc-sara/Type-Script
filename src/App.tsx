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
