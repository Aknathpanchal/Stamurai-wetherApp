import { createContext, useContext } from "react";
import { RootStore } from "./RootStore";


export const rootStoreContext = createContext({
  rootStore: new RootStore(),
});


export const useStore = () => useContext(rootStoreContext);
