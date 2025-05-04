import { createContext, ReactNode, useContext, useState } from "react";
import { formtype } from "../pages/Cart";


type coffeeFormType = {
    form: formtype
    setForm: React.Dispatch<React.SetStateAction<formtype>>
    paymentMethod: string
    setPaymentMethod:React.Dispatch<React.SetStateAction<string>>
}

const coffeeFormContext = createContext<coffeeFormType | null>(null)

export function CoffeFormContextProvider({children}:{children:ReactNode}){
    const [form, setForm] = useState<formtype>({
        rua:"",
        bairro: "",
        cep: "",
        cidade: "",
        complemento: "",
        numero: 0,
        uf: ""
    })
    const [paymentMethod, setPaymentMethod] =useState('')
return(
    <coffeeFormContext.Provider value={{form, setForm, paymentMethod, setPaymentMethod }}>
        {children}
    </coffeeFormContext.Provider>
)
}

export const useCoffeeForm = () => useContext(coffeeFormContext)
