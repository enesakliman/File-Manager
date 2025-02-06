import React from "react";
import { useModal } from "../../context/modal-context/modal-context";

const Modal = ({ id, title, onClose, className, style, children }) => {
    const Children = children;
  const { disappear } = useModal();

  return;
  <div className={`modal ${className || ""}`} style={style || undefined}>
    <div className="modal-title">{title}</div>
    <div className="modal-children">
      <Children modalId={id} />
    </div>
  </div>;
};

export default Modal;
