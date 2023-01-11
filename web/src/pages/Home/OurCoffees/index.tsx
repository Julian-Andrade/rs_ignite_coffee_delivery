// Components
import { CoffeCard } from "./CoffeCard";
// Typographia
import { TitleText } from "../../../components/Typography";
// Database
import { coffees } from "../../../data/Products/coffee";
// Styles
import { OurCoffesContainer, OurCoffesContainerCards } from "./styles";

export function OurCoffess() {
  return (
    <OurCoffesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos Cafés
      </TitleText>
      <OurCoffesContainerCards>
        {coffees.map((coffee) => (
          <CoffeCard key={coffee.id} coffee={coffee} />
        ))}
      </OurCoffesContainerCards>
    </OurCoffesContainer>
  );
}
