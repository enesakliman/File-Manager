import React, { useState, useContext, createContext } from "react";

const Context = createContext(undefined);
export const ViewContextProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const select = (item) => {
    setSelectedItems((prev) => {
      if (prev.findIndex((i) => i.id === item.id) > -1) return;
      return [...prev, item];
    });
  };

  const deselect = () => {
    setSelectedItems((prev) => prev.filter((i) => i.id !== item.id));
  };

  const clear = () => {
    setSelectedItems([]);
  };

  const itemIsSelected = (item) => {
    return selectedItems.find((i) => i.id === item.id);
  };

  const setSelection = (items) => {
    setSelectedItems(items);
  };
  return (
    <Context.Provider
      value={{
        itemIsSelected,
        selectedItems,
        select,
        deselect,
        clear,
        setSelection,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useViewContext = () => {
  const value = useContext(Context);
  if (!value)
    throw new Error("useViewContext must be used within ViewContextProvider");

  return value;
};
