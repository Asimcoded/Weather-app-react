import React, { createContext, useState } from "react";
export const Data = createContext();
export function DataContext({ children }) {
  const [data1, setData1] = useState("hello");
  const updateData = (data) => {
    setData1(data)
  };
  return <Data.Provider value={{data1,updateData}}>{children}</Data.Provider>;
}

