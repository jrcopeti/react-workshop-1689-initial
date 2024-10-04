import Message from "./Message";

export function Advice() {
  return (
    <div className="app">
      <button> Get advice </button>
      <Message count={0} />
    </div>
  );
}

export default Advice;
