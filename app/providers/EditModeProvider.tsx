import React, { useState, useContext } from "react";

const ContextValue = React.createContext(null);
const ContextUpdate = React.createContext(null);

export function EditModeProvider({ children }) {
   const [state, setState] = useState<null | number | string>(null);

   return (
      <ContextValue.Provider value={state}>
         <ContextUpdate.Provider value={setState}>
            {children}
         </ContextUpdate.Provider>
      </ContextValue.Provider>
   );
}

export function useGetEditMode() {
   const value = useContext(ContextValue);
   if (value === undefined) {
      throw Error("use inside ModeProvider");
   }

   return value;
}

export function useSetEditMode() {
   const value = useContext(ContextUpdate);
   if (value === undefined) {
      throw Error("use inside ModeProvider");
   }

   return value;
}

export function useEditMode() {
   return [useGetEditMode(), useSetEditMode()];
}
