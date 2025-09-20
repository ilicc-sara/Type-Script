import { useState } from "react";
import "./App.css";
import Card from "./Card";

const App = () => {
  // const [count, setCount] = useState(0);

  // function alertMessage(message: string) {
  //   alert(message);
  // }

  const users = [
    { name: "Austin", age: 26 },
    { name: "Carter", age: 24 },
    { name: "Julia", age: 23 },
  ];
  return (
    <>
      {users.map((user) => {
        return <Card user={user} />;
      })}
    </>
  );
};

export default App;
