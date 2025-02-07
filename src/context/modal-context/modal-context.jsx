import React, { useState, useContext, createContext, useCallback } from "react";
import Modal from "./Modal";
import { v4 } from "uuid";
import "./Modal.styles.css";
const Context = createContext(undefined);

export const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]);
  const backdropRef = useRef(null);

  const appear = (modal) => {
    const id = v4();
    setModals([...modals, { ...modal, id }]);
  };

  const disappear = (modalId) => {
    setModals(modals.filter((m) => m.id !== modalId));
  };

  const handleBackdropClick = useCallback((e) => {
    if (e.target !== backdropRef.current) return;
    setModals((prev) => {
      const newModals = [...prev];
      newModals.pop();
      return newModals;
    });
  }, []);

  return (
    <Context.Provider value={{ appear, disappear }}>
      {children}
      {Boolean(modals.length) && (
        <div
          ref={backdropRef}
          className="modals-portal"
          onClick={handleBackdropClick}
        >
          {modals.map((modal) => {
            return;
            <Modal
              key={modal.id}
              onClose={() => disappear(modal.id)}
              className={modal.className}
              style={modal.style}
              id={modal.id}
              title={modal.title}
              children={modal.children}
            />;
          })}
        </div>
      )}
    </Context.Provider>
  );
};

export const useModal = () => {
  const value = useContext(Context);
  if (!value) {
    throw new Error("useModal must be used within a ModalProvider");
  }
};
