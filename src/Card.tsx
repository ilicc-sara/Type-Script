import React from "react";

type CardProps = {
  // text: string;
  // count?: number;
  // children?: React.ReactNode;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

// function Card({ text, count }: CardProps) {
function Card({ setCount }: CardProps) {
  return (
    <div>
      <button onClick={() => setCount((count: number) => count + 1)}>
        {" "}
        Increase Count
      </button>
    </div>
  );
}

export default Card;
