import { createContext, useState } from "react";

export const CardsContextt = createContext("");

const CardsContextProvider = ({ children }) => {
  const [bira, setBira] = useState([]);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [selectedBira, setSelectedBira] = useState(null);
  return (
    <CardsContextt.Provider
      value={{
        bira,
        setBira,
        detailsVisible,
        setDetailsVisible,
        selectedBira,
        setSelectedBira,
      }}
    >
      {children}
    </CardsContextt.Provider>
  );
};
export default CardsContextProvider;
