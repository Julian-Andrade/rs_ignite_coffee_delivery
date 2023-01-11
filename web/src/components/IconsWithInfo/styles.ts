import styled from "styled-components";

interface ItensIconsProps {
  iconBg: string;
}

export const ItensContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const ItensIcons = styled.div<ItensIconsProps>`
  width: 32px;
  height: 32px;

  border-radius: 999px;

  background: ${({ iconBg }) => iconBg};
  color: ${({ theme }) => theme.colors["base-white"]};

  display: flex;
  align-items: center;
  justify-content: center;
`;
