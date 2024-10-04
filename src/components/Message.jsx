import Greeting from "./Greeting";

function Message({ count }) {
  return (
    <p>
      You have read <strong>{count}</strong> pieces of advice
    </p>
  );
}

export default Message;
