import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 6.5rem;

  background: ${({ theme }) => theme.colors["base-background"]};

  display: flex;
  align-items: center;
  justify-content: space-around;

  div {
    display: flex;
    align-items: flex;
    justify-content: space-between;
  }
`;
