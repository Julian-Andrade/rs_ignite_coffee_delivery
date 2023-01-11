import styled from "styled-components";

export const CoffeeCartCardContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({ theme }) => theme.colors["base-button"]};

  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      width: 4rem;
      height: 4rem;
    }
  }

  > p {
    align-self: flex-start;

    font-weight: 700;
  }
`;

export const CoffeCardHandleOptionsContainer = styled.div`
  height: 2rem;

  margin-top: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RemoveButton = styled.button`
  height: 100%;

  background: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-text"]};

  font-size: 0.75rem;
  text-transform: uppercase;

  border: none;
  border-radius: 6px;

  padding: 0px 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  transition: 0.4s;

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }
`;

export const ConfirmationSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
