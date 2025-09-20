import React from "react";

type CardProps = {
  // text: string;
  // count?: number;
  // children?: React.ReactNode;
  // setCount: React.Dispatch<React.SetStateAction<number>>;
  // alertMessage: (message: string) => void;
  user: User;
};

type User = {
  name: string;
  age: number;
};

// function Card({ text, count }: CardProps) {
function Card({ user }: CardProps) {
  return <div>{JSON.stringify(user)}</div>;
}

export default Card;
