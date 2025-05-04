import { CoffeListType } from "../types/coffeeList";

type incrementAmount = {
  type: "incrementAmount";
  payload: string;
};
type decrementAmount = {
  type: "decrementAmount";
  payload: string;
};
type addInTheCart = {
  type: "addinthecart";
  payload: string;
};

type removeFromTheCart={
  type: "removeFromTheCart"
  payload: string;
}

export type CoffeeDeliveryActions =
  | incrementAmount
  | decrementAmount
  | addInTheCart
  | removeFromTheCart


export const coffeeReducer = (
  state: CoffeListType,
  action: CoffeeDeliveryActions
) => {
  switch (action.type) {
    case "incrementAmount":
      return {
        ...state,
        coffeeItens: state.coffeeItens.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              amount: item.amount + 1,
            };
          }
          return item;
        }),
      };
    case "decrementAmount":
      return {
        ...state,
        coffeeItens: state.coffeeItens.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              amount: item.amount - 1,
            };
          }
          return item;
        }),
      };

    case "addinthecart":
      return {
        ...state,
        coffeeItens: state.coffeeItens.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              isInTheCart: true,
            };
          }
          return item;
        }),
      };
    case "removeFromTheCart":
      return {...state, coffeeItens: state.coffeeItens.map((item) => {
        if(item.id === action.payload){
          return{
            ...item, isInTheCart: false , amount: 1
          }
      
        }
        return item
      } ) 
    }
    default:
      return state;
  }
};
