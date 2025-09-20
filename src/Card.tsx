import React from "react";

type CardProps = {
  alertMessage: (message: string) => void;
};

function Card({ alertMessage }: CardProps) {
  return (
    <div>
      <button onClick={() => alertMessage("Alert Message")}> Alert</button>
    </div>
  );
}

export default Card;
