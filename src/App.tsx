import { useState } from "react";
import "./App.css";

type User = {
  name: string;
  age: number | string | boolean;
  isAdmin?: boolean;
};

const App = () => {
  function doSomething(x: (string | number)[]) {
    x[1] = true;
  }

  return <></>;
};

export default App;
