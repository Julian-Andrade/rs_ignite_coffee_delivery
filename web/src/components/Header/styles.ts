import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;

  background: ${({ theme }) => theme.colors["base-background"]};

  display: flex;
  align-items: center;
  justify-content: space-around;

  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  div {
    display: flex;
    align-items: flex;
    justify-content: space-between;
  }
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface HeaderColorButtonProps {
  color: "purple" | "yellow";
}

export const HeaderButton = styled.button<HeaderColorButtonProps>`
  min-width: 2.3rem;
  height: 2.3rem;
  padding: 0 0.5rem;

  border-radius: 6px;
  border: none;

  position: relative;

  font-size: ${({ theme }) => theme.textSizes["text-regular-s"]};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  cursor: inherit;

  span {
    position: absolute;
    
    width: 1.25rem;
    height: 1.25rem;
    
    border-radius: 50%;

    top: calc(-1.25rem / 2);
    right: calc(-1.25rem / 2);

    color: ${({ theme }) => theme.colors["base-white"]};
    background-color: ${({ theme }) => theme.colors["brand-yellow-dark"]};

    font-size: 0.75rem;
    font-weight: 700;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${({ color, theme }) => css`
    background: ${theme.colors[`brand-${color}-light`]};
    color: ${theme.colors[`brand-${color}-dark`]};
  `}

  ${({ color, theme }) =>
    color === "purple" &&
    css`
      svg {
        color: ${theme.colors[`brand-purple`]};
      }
    `}
`;
