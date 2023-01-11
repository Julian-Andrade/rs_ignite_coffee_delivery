// Typographia
import { ContentText } from "../../../../components/Typography";
// Styles
import { CheckoutFormTitleContainer } from "./styles";

interface CheckouFormTitleProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export function CheckoutFormTitle({
  icon,
  title,
  subtitle,
}: CheckouFormTitleProps) {
  return (
    <CheckoutFormTitleContainer>
      {icon}
      <div>
        <ContentText color="subtitle">{title}</ContentText>
        <ContentText size="s">{subtitle}</ContentText>
      </div>
    </CheckoutFormTitleContainer>
  );
}
