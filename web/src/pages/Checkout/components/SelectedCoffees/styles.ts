import styled from "styled-components";
import { CheckoutBaseStyleContainer } from "../../styles";

export const SelectedCoffeesContainer = styled.div`
  width: 40rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const DetailsContainer = styled(CheckoutBaseStyleContainer)`
  border-radius: 6px 44px;

  display: flex;
  flex-direction: column;
`;
