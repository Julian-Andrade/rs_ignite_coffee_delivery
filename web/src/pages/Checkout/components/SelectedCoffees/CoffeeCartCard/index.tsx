// Icons
import { Trash } from "phosphor-react";
// Components
import { InputNumber } from "../../../../../components/Input/NumberWithIcons";
import { ContentText } from "../../../../../components/Typography";
// Styles
import { useTheme } from "styled-components";
import {
  CoffeCardHandleOptionsContainer,
  CoffeeCartCardContainer,
  RemoveButton,
} from "./styles";
// Context
import { CartItem } from "../../../../../contexts/CartContext";
// Utils
import { formatCurrencyToBrazil } from "../../../../../utils/formatCurrencyToBrazil";
// Hooks
import { useCart } from "../../../../../hooks/useCart";

interface CoffeCartCardProps {
  coffee: CartItem;
}

export function CoffeeCartCard({ coffee }: CoffeCartCardProps) {
  const { changeCartItemQuantity, removeCartItem } = useCart();

  function handleIncrease() {
    changeCartItemQuantity(coffee.id, "increase");
  }

  function handleDecrease() {
    changeCartItemQuantity(coffee.id, "decrease");
  }

  function handleRemoveCartItem() {
    removeCartItem(coffee.id);
  }

  const coffeeTotal = coffee.price * coffee.quantity;

  const formattedPrice = formatCurrencyToBrazil(coffeeTotal);

  const { colors } = useTheme();

  return (
    <CoffeeCartCardContainer>
      <div>
        <img src={`/products/coffees/${coffee.photo}`} />
        <div>
          <ContentText color="subtitle">{coffee.name}</ContentText>
          <CoffeCardHandleOptionsContainer>
            <InputNumber
              size="small"
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              quantity={coffee.quantity}
            />
            <RemoveButton onClick={handleRemoveCartItem}>
              <Trash size={16} color={colors["brand-purple"]} />
              Remover
            </RemoveButton>
          </CoffeCardHandleOptionsContainer>
        </div>
      </div>
      <p>R$ {formattedPrice}</p>
    </CoffeeCartCardContainer>
  );
}
