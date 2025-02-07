const Context = React.createContext(undefined);

const ViewContextProvider = ({ children }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const select = (item) => {
    setSelectedItems((prev) => {
        if (prev.findIndex((i) => i.id === item.id ) > -1 ) return
      return [...prev, item];
    });
  };

  return <Context.Provider value={{}}>{children}</Context.Provider>;
};

const useViewContext = () => {
  const value = useContext(Context);
  if (!value)
    throw new Error("useViewContext must be used within ViewContextProvider");

  return value;
};
