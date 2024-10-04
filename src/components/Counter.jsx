import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  console.log(count);

  const increment = () => {
    setCount((prev) => prev + 1);
  };

  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div className="counter">
      <button onClick={decrement}>-</button>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
}

export default Counter;
