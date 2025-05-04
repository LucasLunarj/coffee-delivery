import { Minus, Plus, Trash } from "@phosphor-icons/react";
import {
  AmountSelectionArea,
  ButtonsContainer,
  RemoveButton,
  SelectedCoffeeBoxContainer,
  Title,
} from "./styled";
import { useCoffeeContext } from "../../../../../../contexts/CoffeeDeliveryContext";

type selectedCoffeeType = {
  title: string;
  id: string;
  amount: number;
  img: string;
};

export function SelectedCoffeeBox({
  title,
  id,
  amount,
  img,
}: selectedCoffeeType) {
  const coffeItensCtx = useCoffeeContext();

  function HandleRemoveItemFromTheCart(id: string) {
    coffeItensCtx?.dispatch({
      type: "removeFromTheCart",
      payload: id,
    });
  }
  function HandleIncrement(id: string, amount: number) {
    if (amount < 9) {
      coffeItensCtx?.dispatch({
        type: "incrementAmount",
        payload: id,
      });
    }
  }

  function HandleDecrement(id: string, amount: number) {
    if (amount > 1) {
      coffeItensCtx?.dispatch({
        type: "decrementAmount",
        payload: id,
      });
    }
  }
  return (
    <SelectedCoffeeBoxContainer>
      <img src={img} alt="" />
      <div>
        <Title>
          <h4>{title}</h4>
          <strong>R$ 9,90</strong>
        </Title>
        <ButtonsContainer>
          <AmountSelectionArea>
            <Minus size={14} onClick={() => HandleDecrement(id, amount)} />
            <span>{amount}</span>
            <Plus size={14} onClick={() => HandleIncrement(id, amount)} />
          </AmountSelectionArea>
          <RemoveButton onClick={() => HandleRemoveItemFromTheCart(id)}>
            <Trash size={16} />
            <p>Remover</p>
          </RemoveButton>
        </ButtonsContainer>
      </div>
    </SelectedCoffeeBoxContainer>
  );
}
