// Icons
import logoCoffeeDelivery from "../../assets/logo_coffee_delivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
// Styles
import { HeaderContainer, HeaderButtonContainer, HeaderButton } from "./styles";
import { NavLink } from "react-router-dom";
// Hook
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoCoffeeDelivery} alt="logomarca" />
        </NavLink>

        <HeaderButtonContainer>
          <HeaderButton color="purple">
            <MapPin size={20} weight="fill" />
            Feira de Santana, BA
          </HeaderButton>
          <NavLink to="/checkout">
            <HeaderButton color="yellow">
              {cartQuantity >= 1 && <span>{cartQuantity}</span>}
              <ShoppingCart size={20} weight="fill" />
            </HeaderButton>
          </NavLink>
        </HeaderButtonContainer>
      </div>
    </HeaderContainer>
  );
}
