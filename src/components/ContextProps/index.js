import React, { createContext } from "react";
import Component1 from "./Component1";

const FirstName = createContext();

const ContextProps = () => {
  const fname = "Shivam";

  return (
    <div>
      ContextProps
      <FirstName.Provider value={fname}>
        <Component1 />
      </FirstName.Provider>
    </div>
  );
};
export { FirstName };
export default ContextProps;
