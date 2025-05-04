import { Bank, CreditCard, CurrencyDollar, Money } from "@phosphor-icons/react";
import { PaymentMethod, PaymentMethodContainer, PaymentTitle } from "./styles";
import { useCoffeeForm } from "../../../../contexts/CoffeeFormContext";

export function PaymentMethodSelection() {
  const coffeeFormCtx = useCoffeeForm();
  function handleSelectPaymentMethod(data: string) {
    console.log(coffeeFormCtx?.paymentMethod);
    coffeeFormCtx?.setPaymentMethod(data);
  }
  return (
    <PaymentMethodContainer>
      <PaymentTitle>
        <CurrencyDollar size={22} />
        <div>
          <h3>Pagamento</h3>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentTitle>
      <PaymentMethod>
        <div 
         className={
            coffeeFormCtx?.paymentMethod === "Cartão de crédito" ? "active" : ""
          }
        onClick={() => handleSelectPaymentMethod("Cartão de crédito")}>
          <CreditCard size={16} />
          <span>Cartão de crédito</span>
        </div>
        <div
         className={
            coffeeFormCtx?.paymentMethod === "Cartão de debito" ? "active" : ""
          }
        onClick={() => handleSelectPaymentMethod("Cartão de debito")}>
          <Money size={16} />
          <span>Cartão de débito</span>
        </div>
        <div
          onClick={() => handleSelectPaymentMethod("Dinheiro")}
          className={
            coffeeFormCtx?.paymentMethod === "Dinheiro" ? "active" : ""
          }
        >
          <Bank size={16} />
          <span>dinheiro</span>
        </div>
      </PaymentMethod>
    </PaymentMethodContainer>
  );
}
