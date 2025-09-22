import { useState, useEffect, useRef } from "react";
import "./App.css";
import { useFetch } from "./useFetch";

type User = {
  name: string;
  age: number;
};

type BlogPost = {
  title: string;
  description: string;
  posted: Date;
};

const App = () => {
  const user = useFetch<User>("blahblahblah");
  const blogPost = useFetch<BlogPost>("blahblahblah");

  return <div></div>;
};

export default App;
