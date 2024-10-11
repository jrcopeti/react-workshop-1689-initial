import { useState } from "react";
import Advice from "./components/Advice";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import Message from "./components/Message";
import Timer from "./components/Timer";
import Modal from "./components/Modal";

const students = [
  {
    name: "John",
    country: "USA",
  },
  {
    name: "Emily",
    country: "Germany",
  },
  {
    name: "James",
    country: "Canada",
  },
  {
    name: "Emma",
    country: "France",
  },
];

function App() {
  const [show, setShow] = useState(false);
  console.log(show);

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className="app">
      <button onClick={handleClick}>Open Modal</button>

      <Modal isOpen={show} toggleModal={handleClick}>
        <h1>Modal Title</h1>
        <p>This is dynamic content inside the modal!</p>
      </Modal>
    </div>
  );
}

export default App;

{
  /* {students.map((student) => (
          <Greeting
            key={student.name}
            name={student.name}
            country={student.country}
          />
        ))} */
}
