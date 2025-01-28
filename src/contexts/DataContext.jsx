import React, { createContext, useState } from "react";
export const DataContext= createContext();
export function DataProvider({ children }) {
  const [data, setData] = useState({});
  const updateData = (data) => {
    setData(data)
  };
  return <DataContext.Provider value={{data,updateData}}>{children}</DataContext.Provider>;
}

