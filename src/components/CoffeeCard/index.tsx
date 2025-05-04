import {
  AmountSelectionArea,
  CardContainer,
  ContentContainer,
  Price,
  PriceAndSelectAmountArea,
  ShoppingCartIcon,
} from "./styles";
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { CoffeeItem } from "../../types/coffeeList";
import { useCoffeeContext } from "../../contexts/CoffeeDeliveryContext";

export function CoffeeCard({
  title,
  type,
  about,
  price,
  amount,
  id,
  img,
}: CoffeeItem) {
  const coffeListCtx = useCoffeeContext();

  function HandleIncrement(id: string, amount: number) {
   if(amount < 9){
    coffeListCtx?.dispatch({
      type: "incrementAmount",
      payload: id,
    });
   }
   
  }

  function HandleDecrement(id:string, amount: number){
    if(amount > 1){
    coffeListCtx?.dispatch({
      type: 'decrementAmount',
      payload: id
    })
  }
  }

  function HandleAddItemInTheCart(id: string){
    coffeListCtx?.dispatch({
      type:"addinthecart",
      payload: id
    })
  }

  return (
    <CardContainer>
      <img src={img} alt="" />
      <ContentContainer>
        <div>
            {type.map((el) => (
              <span style={{}} key={Math.random() * 1000}>{el}</span>
            ))} 
        </div>
        <h4>{title}</h4>
        <p>{about}</p>
        <PriceAndSelectAmountArea>
          <Price>
            R$ <strong>{price.toFixed(2).replace(".", ",")}</strong>
          </Price>
          <AmountSelectionArea>
            <div>
              <Minus size={14} onClick={() => HandleDecrement(id, amount)} />
              <span>{amount}</span>
              <Plus size={14} onClick={() => HandleIncrement(id, amount)} />
            </div>
          </AmountSelectionArea>
          <ShoppingCartIcon onClick={() => HandleAddItemInTheCart(id)} >
            <ShoppingCartSimple weight="fill" />
          </ShoppingCartIcon>
        </PriceAndSelectAmountArea>
      </ContentContainer>
    </CardContainer>
  );
}
