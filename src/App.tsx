import { useState, useEffect } from "react";
import "./App.css";

type User = {
  name: string;
  age: number;
};

const App = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setUser({ name: "Austin", age: 100 });
    setLoading(false);
  }, []);

  return <>{loading}</>;
};

export default App;
