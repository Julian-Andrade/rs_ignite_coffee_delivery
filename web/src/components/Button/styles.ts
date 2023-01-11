import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 0.75rem 2.8rem;

  background: ${({ theme }) => theme.colors["brand-yellow"]};
  color: ${({ theme }) => theme.colors["base-white"]};

  font-weight: 700;
  font-size: ${({ theme }) => theme.textSizes["components-button-g"]};

  text-transform: uppercase;

  line-height: 1.3rem;

  border: none;
  border-radius: 6px;

  margin-top: 0.7rem;

  transition: 0.4s;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
`;
