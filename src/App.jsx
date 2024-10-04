import { useState } from "react";
import Advice from "./components/Advice";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import Message from "./components/Message";

const names = ["John", "Paul", "George", "Ringo"];

function App() {
  const [show, setShow] = useState(false);
  console.log(show);

  const handleClick = () => {
    setShow((prev) => !prev);
  };
  return (
    <div className="app">
      <button onClick={handleClick}>{show ? "Hide" : "Show"}</button>
      {show && <Counter />}
    </div>
  );
}

export default App;
