import React from "react";

type CardProps = {
  text: string;
  count: number;
};

function Card({ text, count }: CardProps) {
  return (
    <div>
      <span> {text} </span>
    </div>
  );
}

export default Card;
