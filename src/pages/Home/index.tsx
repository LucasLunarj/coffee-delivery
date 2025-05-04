import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";
import { CoffeeInfo, CoffeeInfoContainer, HomeContainer, InfoContainer, IconBoxInfo} from "./styles";

import coffeimage from "../../assets/Imagem.png";
import { CoffeeListArea } from "./Components/CoffeListArea";

export function Home() {
  return (
    <HomeContainer>
      <CoffeeInfoContainer>
        <CoffeeInfo>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <InfoContainer>
            <div>
              <IconBoxInfo variant="orange">
                <ShoppingCart weight="fill" />
              </IconBoxInfo>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <IconBoxInfo variant="black">
                <Package weight="fill" />
              </IconBoxInfo>
              <p>Embalagem mantém o café intacto</p>
            </div>
            <div>
              <IconBoxInfo variant="yellow">
                <Timer weight="fill" />
              </IconBoxInfo>
              <p>Entrega rápida e rastreada</p>
            </div>
            <div>
              <IconBoxInfo variant="purple">
                <Coffee weight="fill" />
              </IconBoxInfo>
              <p>O café chega fresquinho até você</p>
            </div>
          </InfoContainer>
        </CoffeeInfo>

        <img src={coffeimage} alt="" />
      </CoffeeInfoContainer>
      <CoffeeListArea/>
    </HomeContainer>
  );
}
