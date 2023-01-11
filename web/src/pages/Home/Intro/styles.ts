// Image
import introBg from "../../../assets/home/intro_bg.png";
// Typographia
import { TitleText, ContentText } from "../../../components/Typography";
// Styles
import { rgba } from "polished";
import styled from "styled-components";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;

  background: ${({ theme }) => `url(${introBg}) no-repeat center,
    linear-gradient(
      0deg,
      ${theme.colors["base-white"]} 0%,
      ${rgba(theme.colors["base-background"], 0.2)} 50%,
      ${theme.colors["base-background"]} 0%
  )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
`;

export const IntroTitleText = styled(TitleText)`
  margin-bottom: 1rem;
`;

export const IntroContentText = styled(ContentText)`
  margin-bottom: 1rem;
`;

export const IntroIconsWithInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
  margin-top: 4.125rem;
`;
