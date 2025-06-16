import { createContext, useContext } from "react";

export interface AppContextInterface {
}

const AppContext = createContext<AppContextInterface | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
}

export default AppContext;
