import { CoffeeCard } from "../../../../components/CoffeeCard";
import { useCoffeeContext } from "../../../../contexts/CoffeeDeliveryContext";
import { CoffeeListContainer, CoffeList } from "./styles";

export function CoffeeListArea() {
  const coffeItensCtx = useCoffeeContext();
  return (
    <CoffeeListContainer>
      <h2>Nossos cafés</h2>
      <CoffeList>
        {coffeItensCtx?.state?.coffeeItens?.map((item) => (
          <CoffeeCard
            key={item.id}
            id={item.id}
            title={item.title}
            type={item.type}
            about={item.about}
            img={item.img}
            amount={item.amount}
            isInTheCart={item.isInTheCart}
            price={item.price}
          />
        ))}
      </CoffeList>
    </CoffeeListContainer>
  );
}
