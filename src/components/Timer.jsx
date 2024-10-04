import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect - Mounting (initial render)");
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("Component Unmounting"); // Clean up: runs on Unmount
    };
  }, []); // Empty array means: this effect depends on nothing and will run only once after the initial render

  //Update
  useEffect(() => {
    console.log("useEffect - on update");
    document.title = count;
  }, [count]);   // Array with value means:  Will run only when the `count` value updates. This effect depends on the value `count`, and will run every time `count` changes

  return (
    <div>
      <h1>{count}</h1>
    </div>
  );
}

export default Timer;
