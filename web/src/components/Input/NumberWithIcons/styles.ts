import styled, { css } from "styled-components";

interface InputNumberContainerProps {
  size?: "medium" | "small";
}

export const InputNumberContainer = styled.div<InputNumberContainerProps>`
  flex: 1;

  background: ${({ theme }) => theme.colors["base-button"]};

  border-radius: 8px;

  padding: 0.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4px;

  input {
    width: 100%;

    text-align: center;

    background: none;
    color: ${({ theme }) => theme.colors["base-title"]};

    border: none;

    &:focus {
      outline: none;
    }
  }

  ${({ size }) =>
    size === "small" &&
    css`
      max-width: 4.5rem;
      height: 100%;
      
      padding: 0.3rem 0.5rem;
    `}

  ${({ size }) =>
    size === "medium" &&
    css`
      padding: 0.5rem;
    `}
`;

export const InputIconQuantity = styled.button.attrs({
  type: "button",
})`
  border: none;

  background: none;
  color: ${({ theme }) => theme.colors["brand-purple"]};

  transition: 0.4s;

  &:disabled {
    opacity: 0.4s;
  }

  &:not(:disabled):hover {
    color: ${({ theme }) => theme.colors["brand-purple-dark"]};
  }
`;
