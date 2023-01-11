import styled from "styled-components";

export const SuccessPageContainer = styled.section`
  margin-top: 5rem;

  > h1 {
    color: ${({ theme }) => theme.colors["brand-yellow-dark"]};
  }
`;

export const SuccessInfoContainer = styled.div`
  width: 100%;

  margin-top: 2.5rem;

  display: flex;
  align-items: center;
  gap: 6.3rem;

  img {
    width: auto;
    height: 16.5rem;
  }
`;

export const SuccessIconsContainer = styled.div`
  width: 35rem;
  height: 16.5rem;

  padding: 2.5rem;

  background: linear-gradient(#fafafa, #fafafa) padding-box,
    linear-gradient(to right, #dbac2c, #8047f8) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
