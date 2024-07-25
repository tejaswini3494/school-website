import React, { createContext } from "react";
import { AcademicsData } from "./Academics/AcademcsData";
const ShopcontextMe = createContext(null);

export default function Schoolcontext(props) {
  const contextValue = { AcademicsData };
  return (
    <ShopcontextMe.Provider value={contextValue}>
      {props.children}
    </ShopcontextMe.Provider>
  );
}
export { ShopcontextMe };
