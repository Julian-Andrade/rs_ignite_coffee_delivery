// Icons
import { CurrencyDollar, MapPinLine } from "phosphor-react";
// Typographia
import { TitleText } from "../../../../components/Typography";
// Components
import { CheckoutFormTitle } from "../CheckoutFormContainerTitle";
import { AddressForm } from "./AddressForm";
import { PaymentMethod } from "./PaymentMethodOptions";
// Styles
import { CheckoutFormContainer, CheckoutContainer } from "./styles";
import { useTheme } from "styled-components";

export function CheckoutForm() {
  const { colors } = useTheme();

  return (
    <CheckoutFormContainer>
      <TitleText size="xs" weight="700" color="subtitle">
        Complete seu pedido
      </TitleText>
      <CheckoutContainer>
        <CheckoutFormTitle
          icon={<MapPinLine color={colors["brand-yellow-dark"]} size={22} />}
          title="Endereço de Entrega"
          subtitle="Informe o endereço onde deseja receber o pedido"
        />
        <AddressForm />
      </CheckoutContainer>
      <CheckoutContainer>
        <CheckoutFormTitle
          icon={<CurrencyDollar color={colors["brand-purple"]} size={22} />}
          title="Pagamento"
          subtitle="O pagamento é feito na entrega. Escolha a forma que deseja pagar"
        />
        <PaymentMethod />
      </CheckoutContainer>
    </CheckoutFormContainer>
  );
}
