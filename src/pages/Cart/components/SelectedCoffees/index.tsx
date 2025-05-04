import {
  SelectedCoffeBoxContainer,
  SelectedCoffesContainer,
  StyledLink,
  TotalValue,
  Value,
  ValueContainer,
} from "./styles";
import { SelectedCoffeeBox } from "./components/SelectedCoffeeBox";
import { useCoffeeContext } from "../../../../contexts/CoffeeDeliveryContext";
import { formtype } from "../..";
import { useFormContext } from "react-hook-form";
import { useCoffeeForm } from "../../../../contexts/CoffeeFormContext";
import { useNavigate } from "react-router-dom";


export function SelectedCoffees() {
  const CoffeItemCtx = useCoffeeContext();
  const { handleSubmit } = useFormContext<formtype>();
  const CoffeeFormCtx = useCoffeeForm();
  const navigate = useNavigate()
  const filteredList = CoffeItemCtx?.state.coffeeItens.filter(
    (item) => item.isInTheCart === true
  );

  const total = (filteredList || []).reduce<number>((acc, item) => {
    return acc + item.price * item.amount;
  }, 0);

  const formatedBrl = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });

  function handleSend(data: formtype) {
    CoffeeFormCtx?.setForm(data);
    navigate("/finished")
  }
  return (
    <SelectedCoffesContainer>
      <SelectedCoffeBoxContainer>
        {filteredList?.map((item) => (
          <SelectedCoffeeBox
            key={item.id}
            title={item.title}
            id={item.id}
            amount={item.amount}
            img={item.img}
          />
        ))}
      </SelectedCoffeBoxContainer>
      <ValueContainer>
        <Value>
          <p>Total de itens</p>
          <span>{formatedBrl.format(total)}</span>
        </Value>
        <Value>
          <p>Entrega</p>
          <span>
            {filteredList?.length ?? 0 > 1
              ? formatedBrl.format(3.5)
              : formatedBrl.format(0)}
          </span>
        </Value>
        <TotalValue>
          <p>Total</p>
          <span>
            {filteredList?.length === 0
              ? formatedBrl.format(0)
              : formatedBrl.format(total + 3.5)}
          </span>
        </TotalValue>
      </ValueContainer>
      <StyledLink  onClick={handleSubmit(handleSend)}>
        Confirmar Pedido
      </StyledLink>
    </SelectedCoffesContainer>
  );
}
