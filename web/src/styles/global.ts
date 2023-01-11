import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    text-transform: none;
    text-decoration: none;
  }

  body {
    background: ${({ theme }) => theme.colors["base-background"]};
    color: ${({ theme }) => theme.colors["base-text"]};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts["default"]};
    font-weight: 400;
    font-size: ${({ theme }) => theme.textSizes["text-regular-m"]};
  }

  button {
    cursor: pointer;
  }

  // Retirar as setas de adição e subtração do input tipo number
  input::-webkit-out-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
  // Retirar as setas de adição e subtração do input tipo number
`;
