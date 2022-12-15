// Icons
import logoCoffeeDelivery from "../../assets/logo_coffee_delivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
// Styles
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <div className="container">
        <img src={logoCoffeeDelivery} alt="logomarca" />
      </div>
    </HeaderContainer>
  );
}
