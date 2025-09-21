import { useState } from "react";
import "./App.css";

type User = {
  name: string;
  age: number;
};

const App = () => {
  const [user, setUser] = useState<User | null>(null);

  return <>{JSON.stringify(user?.name)}</>;
};

export default App;
