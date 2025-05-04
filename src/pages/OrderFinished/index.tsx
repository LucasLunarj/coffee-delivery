import { ContentContainer, DeliveryInfo, DeliveryInfoContent, Icon, OrderFinishedContainer, Title } from "./styles";
import illustration from "../../assets/Illustration.png";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { useCoffeeForm } from "../../contexts/CoffeeFormContext";
export function OrderFinished() {
  const coffeeformCtx = useCoffeeForm()
  console.log(coffeeformCtx)
  return (
    <OrderFinishedContainer>
      <Title>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Title>
      <ContentContainer>
        <DeliveryInfo>
          <DeliveryInfoContent>
            <Icon variant="purple">
              <MapPin weight="fill" />
            </Icon>
         
              <div>
               <p> Entrega em <strong>{coffeeformCtx?.form.rua}, {coffeeformCtx?.form.numero}</strong></p>
                <p>{coffeeformCtx?.form.bairro} - {coffeeformCtx?.form.cidade}, {coffeeformCtx?.form.uf}</p>
              </div>
           
          </DeliveryInfoContent>
          <DeliveryInfoContent>
            <Icon variant="yellow">
              <Timer weight="fill" />
            </Icon>
            <div>
                <p> Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
            </div>
          </DeliveryInfoContent>
          <DeliveryInfoContent>
            <Icon variant="orange">
              <CurrencyDollar />
            </Icon>
            <div>
                <p>Pagamento na entrega</p>
                <strong>{coffeeformCtx?.paymentMethod}</strong>
            </div>
          </DeliveryInfoContent>
        </DeliveryInfo>
        <img src={illustration} alt="" />
      </ContentContainer>
    </OrderFinishedContainer>
  );
}
