// Typographia
import { TitleText } from "../../../../components/Typography";
// Components
import { CoffeeCartCard } from "./CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
// Styles
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";
// Hooks
import { useCart } from "../../../../hooks/useCart";

export function SelectedCoffees() {
  const { cartItems } = useCart();

  return (
    <SelectedCoffeesContainer>
      <TitleText size="xs" color="subtitle">
        Cafés Selecionados
      </TitleText>
      <DetailsContainer>
        {cartItems &&
          cartItems.map((item) => (
            <CoffeeCartCard key={item.id} coffee={item} />
          ))}
        <ConfirmationSection />
      </DetailsContainer>
    </SelectedCoffeesContainer>
  );
}
