import styled, { css } from "styled-components";

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.colors["brand-purple-light"]};
      border-color: ${theme.colors["brand-purple"]};

      &:hover {
        background: ${theme.colors["brand-purple-light"]};
      }
    `}
  }
`;

export const ContentContainer = styled.div`
  height: 3.2rem;

  padding: 1rem;

  border: 1px solid ${({ theme }) => theme.colors["base-button"]};
  border-radius: 6px;

  background: ${({ theme }) => theme.colors["base-button"]};
  color: ${({ theme }) => theme.colors["base-text"]};

  font-size: 0.75rem;
  text-transform: uppercase;

  transition: 0.4s;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.75rem;

  user-select: none;

  &:hover {
    background: ${({ theme }) => theme.colors["base-hover"]};
  }

  > svg {
    color: ${({ theme }) => theme.colors["brand-purple"]};
  }
`;
