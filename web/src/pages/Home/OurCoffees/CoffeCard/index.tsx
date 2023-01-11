// React
import { useState } from "react";
// Icons
import { ShoppingCart } from "phosphor-react";
// Typographia
import { ContentText, TitleText } from "../../../../components/Typography";
// Components
import { InputNumber } from "../../../../components/Input/NumberWithIcons";
// Utils
import { formatCurrencyToBrazil } from "../../../../utils/formatCurrencyToBrazil";
// Styles
import {
  CoffeCardContainer,
  CoffeCardContent,
  CoffeCardTag,
  CoffeCardTitle,
  CoffeCardDescription,
  CoffeCardCheckoutContainer,
  CoffeCardCheckoutForm,
} from "./styles";
// Hooks
import { useCart } from "../../../../hooks/useCart";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeCardProps {
  coffee: Coffee;
}

export function CoffeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  function handleQuantityIncrease() {
    setQuantity((quantity) => quantity + 1)
  }

  function handleQuantityDecrease() {
    setQuantity((quantity) => quantity - 1)
  }

  const { addCoffeeToCart } = useCart()

  // Função que executa o context de adicionar café no carrinho
  function handleAddCoffeeToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }
    addCoffeeToCart(coffeeToAdd)
  }

  const fomartedCurrency = formatCurrencyToBrazil(coffee.price);

  return (
    <CoffeCardContainer>
      <CoffeCardContent>
        <img src={`/products/coffees/${coffee.photo}`} />

        <CoffeCardTag>
          {coffee.tags.map((tag) => (
            <span key={`${coffee.id}${tag}`}>{tag}</span>
          ))}
        </CoffeCardTag>

        <CoffeCardTitle>{coffee.name}</CoffeCardTitle>
        <CoffeCardDescription>{coffee.description}</CoffeCardDescription>

        <CoffeCardCheckoutContainer>
          <div>
            <ContentText size="s">R$</ContentText>
            <TitleText size="m" color="text" as="strong">
              {fomartedCurrency}
            </TitleText>
          </div>

          <CoffeCardCheckoutForm>
            <InputNumber 
              onIncrease={handleQuantityIncrease}
              onDecrease={handleQuantityDecrease}
              quantity={quantity}
            />
            <button onClick={handleAddCoffeeToCart}>
              <ShoppingCart weight="fill" size={22} />
            </button>
          </CoffeCardCheckoutForm>
        </CoffeCardCheckoutContainer>
      </CoffeCardContent>
    </CoffeCardContainer>
  );
}
