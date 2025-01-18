import React, { createContext, useState } from "react";
export const Data = createContext();
function DataContext({ children }) {
  const [data, setData] = useState({});
  const updateData = (data) => {
    setData(data)
  };
  return <Data.Provider value={{data,updateData}}>{children}</Data.Provider>;
}

export default DataContext;
