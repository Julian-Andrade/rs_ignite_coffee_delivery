import styled from "styled-components";
import { ContentText, TitleText } from "../../../../components/Typography";

export const CoffeCardContainer = styled.div`
  width: 256px;
  height: 310px;

  background: ${({ theme }) => theme.colors["base-card"]};

  margin-top: 3.35rem;

  border-radius: 6px 36px;
`;

export const CoffeCardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  text-align: center;

  padding: 1.25rem;
  padding-top: 0;

  img {
    margin-top: -1.25rem;
  }
`;

export const CoffeCardTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem;

  margin-top: 0.75rem;
  margin-bottom: 1rem;

  span {
    background: ${({ theme }) => theme.colors["brand-yellow-light"]};
    color: ${({ theme }) => theme.colors["brand-yellow"]};
    font-size: ${({ theme }) => theme.textSizes["components-tag"]};
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 999px;
  }
`;

export const CoffeCardTitle = styled(TitleText).attrs({
  size: "s",
  color: "subtitle",
  weight: "700",
})`
  margin-top: 1rem;
`;

export const CoffeCardDescription = styled(ContentText).attrs({
  size: "s",
  color: "label",
})`
  margin-top: 0.5rem;
`;

export const CoffeCardCheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.15rem;

    p {
      line-height: 130%;
    }
  }
`;

export const CoffeCardCheckoutForm = styled.div`
  width: 7.5rem;

  > button {
    padding: 0.5rem;

    border: 0;
    border-radius: 8px;

    margin-left: 0.3rem;

    display: flex;
    text-align: center;
    justify-content: center;

    background: ${({ theme }) => theme.colors["brand-purple-dark"]};
    color: ${({ theme }) => theme.colors["base-white"]};

    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => theme.colors["brand-purple"]};
    }
  }
`;
