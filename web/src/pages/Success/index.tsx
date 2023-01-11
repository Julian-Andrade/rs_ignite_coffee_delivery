// React
import { useEffect } from "react";
// Typografia
import { ContentText, TitleText } from "../../components/Typography";
import { OrderData } from "../Checkout";
// Components
import { IconsWithInfo } from "../../components/IconsWithInfo";
import { paymentMethods } from "../Checkout/components/CheckoutForm/PaymentMethodOptions";
// React Router Dom
import { useLocation, useNavigate } from "react-router-dom";
// Hook
import { useCart } from "../../hooks/useCart";
// Images
import successImage from "../../assets/success/illustration.png";
// Icons
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
// Styles
import {
  SuccessPageContainer,
  SuccessIconsContainer,
  SuccessInfoContainer,
} from "./styles";
import { useTheme } from "styled-components";

interface LocationType {
  state: OrderData;
}

export function SuccessPage() {
  const { cleanCart } = useCart();

  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  // Se não tiver finalizado a compra, retorna pra Home
  useEffect(() => {
    if (!state) {
      navigate("/");
    }
    cleanCart();
  }, []);

  if (!state) return <></>;

  return (
    <SuccessPageContainer className="container">
      <TitleText size="l" weight="800">
        Uhu! Pedido confirmado
      </TitleText>
      <ContentText size="l" color="subtitle">
        Agora é só aguardar que logo o café chegará até você
      </ContentText>
      <SuccessInfoContainer>
        <SuccessIconsContainer>
          <IconsWithInfo
            iconBg={colors["brand-purple"]}
            icon={<MapPin weight="fill" />}
            text={
              <ContentText>
                Entrega em{" "}
                <strong>
                  {state.cep}, {state.street}, {state.number},{" "}
                  {state.complement}
                </strong>
                <br />
                {state.bairro} - {state.cidade}, {state.uf}
              </ContentText>
            }
          />
          <IconsWithInfo
            iconBg={colors["brand-yellow"]}
            icon={<Timer weight="fill" />}
            text={
              <ContentText>
                Previsão de entrega
                <br />
                <strong>20 min - 30 min</strong>
              </ContentText>
            }
          />
          <IconsWithInfo
            iconBg={colors["brand-yellow-dark"]}
            icon={<CurrencyDollar weight="fill" />}
            text={
              <ContentText>
                Pagamento na entrega
                <br />
                <strong>{paymentMethods[state.paymentMethod].label}</strong>
              </ContentText>
            }
          />
        </SuccessIconsContainer>

        <img src={successImage} />
      </SuccessInfoContainer>
    </SuccessPageContainer>
  );
}
