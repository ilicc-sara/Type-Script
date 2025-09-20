import React from "react";

type CardProps = {
  // text: string;
  // count?: number;
  children?: React.ReactNode;
};

// function Card({ text, count }: CardProps) {
function Card({ children }: CardProps) {
  return (
    <div>
      <span> {children} </span>
    </div>
  );
}

export default Card;
