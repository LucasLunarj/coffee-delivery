import { createContext, Dispatch, ReactNode, useContext, useEffect, useReducer } from "react";
import {
  CoffeeDeliveryActions,
  coffeeReducer,
} from "../reducers/CoffeeDeliveryReducer";
import { CoffeListType } from "../types/coffeeList";
import { coffeeList } from "../data/coffeItensData";

type CoffeeDeliveryContextType = {
  state: CoffeListType;
  dispatch: Dispatch<CoffeeDeliveryActions>;
};

const CoffeeDeliveryContext = createContext<CoffeeDeliveryContextType | null>(null);

function loadFromLocalStorage(): CoffeListType {
  try {
    const stored = localStorage.getItem("coffeeContextContent");
    return stored ? JSON.parse(stored) : coffeeList;
  } catch {
    return coffeeList; 
  }
}

export function CoffeeDeliveryProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(coffeeReducer, undefined, loadFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("coffeeContextContent", JSON.stringify(state));
  }, [state]);

  return (
    <CoffeeDeliveryContext.Provider value={{ state, dispatch }}>
      {children}
    </CoffeeDeliveryContext.Provider>
  );
}

export const useCoffeeContext = () =>  useContext(CoffeeDeliveryContext);

