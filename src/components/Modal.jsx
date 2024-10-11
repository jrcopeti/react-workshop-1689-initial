function Modal({ isOpen, toggleModal, children }) {
  if (!isOpen) return null;

  return (
    <div>
      <div>{children}</div>
      <button onClick={toggleModal}>Close</button>
    </div>
  );
}
export default Modal;
