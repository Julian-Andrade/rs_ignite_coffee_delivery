import { ContentText } from "../Typography";
import { ItensContainer, ItensIcons } from "./styles";

interface IconsWithInfoProps {
  icon: React.ReactNode;
  text: string | React.ReactNode;
  iconBg: string;
}

export function IconsWithInfo({ icon, text, iconBg }: IconsWithInfoProps) {
  return (
    <ItensContainer>
      <ItensIcons iconBg={iconBg}>{icon}</ItensIcons>
      {typeof text === "string" ? <p>{text}</p> : text}
    </ItensContainer>
  );
}
