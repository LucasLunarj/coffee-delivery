import { MapPinLine } from "@phosphor-icons/react";
import { AddressFormContainer, FormContainer, FormTitle } from "./styles";

import {  useFormContext } from "react-hook-form";

export function DeliveryAddressForm(){
    const {register} = useFormContext()
    return(
        <AddressFormContainer>
            <FormTitle >
                <div>
                    <MapPinLine size={22}/>
                </div>
                <div>
                    <h3>Endereço de Entrega</h3>
                    <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
            </FormTitle>
            <FormContainer action="" method="">
                <input type="string" maxLength={8} placeholder="CEP" {...register("cep")} />
                <input type="text" placeholder="Rua" {...register("rua")} />
                <div>
                    <input type="number" placeholder="Número" {...register("numero", {valueAsNumber: true})} />
                    <input type="text" placeholder="Complemento"{...register("complemento")} />
                </div>
                <div>
                    <input type="text" placeholder="Bairro" {...register("bairro")} />
                    <input type="text" placeholder="Cidade" {...register("cidade")} />
                    <input type="text" placeholder="UF" maxLength={2} {...register("uf")} />
                </div>
            </FormContainer>
        </AddressFormContainer>
    )
}
