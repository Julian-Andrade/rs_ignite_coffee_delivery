// Components
import { Intro } from "./Intro";
import { OurCoffess } from "./OurCoffees";
// Styles
import { HomeContainer } from "./styles";

export function HomePage() {
  return (
    <HomeContainer>
      <Intro />
      <OurCoffess />
    </HomeContainer>
  );
}
