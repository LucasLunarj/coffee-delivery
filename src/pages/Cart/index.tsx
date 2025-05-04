import { FormProvider, useForm } from "react-hook-form";
import { DeliveryAddressForm } from "./components/DeliveryAddressForm";
import { PaymentMethodSelection } from "./components/PaymentMethodSelection";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CartContainer } from "./styles";
import {z} from "zod"
import { zodResolver } from "@hookform/resolvers/zod";


export const formSchema = z.object({
    cep: z.string().min(8),
    rua: z.string(),
    numero: z.number(),
    complemento: z.string(),
    bairro: z.string(),
    cidade: z.string(),
    uf: z.string().min(2),
})

export type formtype = z.infer<typeof formSchema>

export function Cart() {
    const methods = useForm<formtype>({
           resolver: zodResolver(formSchema)
    })
  return (
    <FormProvider {...methods}>
      <CartContainer>
        <div>
          <h2>Complete seu pedido</h2>
          <DeliveryAddressForm />
          <PaymentMethodSelection />
        </div>
        <div>
          <h2>Cafés selecionados</h2>
          <SelectedCoffees />
        </div>
      </CartContainer>
    </FormProvider>
  );
}
