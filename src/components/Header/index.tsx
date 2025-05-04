import {
  CartButton,
  CartMenuContainer,
  HeaderContainer,
  ItensInTheCartAmount,
  LocationSelect,
} from "./styles";
import logo from "../../assets/logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import { useCoffeeContext } from "../../contexts/CoffeeDeliveryContext";
export function Header() {
  const coffeeItensCtx = useCoffeeContext();
  const filteredListLenght =
    coffeeItensCtx?.state?.coffeeItens?.filter(
      (el) => el.isInTheCart === true
    ).length || 0;

  return (
    <HeaderContainer>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <CartMenuContainer>
        <LocationSelect>
          <MapPin size={22} weight="fill" />
          <p>Rio de Janeiro, RJ</p>
        </LocationSelect>
        <Link to="/cart">
          <CartButton>
            {filteredListLenght > 0 && (
              <ItensInTheCartAmount>{filteredListLenght}</ItensInTheCartAmount>
            )}

            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </Link>
      </CartMenuContainer>
    </HeaderContainer>
  );
}
