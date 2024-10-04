import { useState } from "react";
import Message from "./Message";

export function Advice() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  const getAdvice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setCount((prev) => prev + 1);
  };

  return (
    <div className="app">
      <h1>{advice}</h1>
      <button onClick={getAdvice}> Get advice </button>
      <Message count={count} />
    </div>
  );
}

export default Advice;
