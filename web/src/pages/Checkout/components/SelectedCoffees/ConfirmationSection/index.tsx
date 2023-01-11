// Typografia
import { ContentText } from "../../../../../components/Typography";
// Components
import { Button } from "../../../../../components/Button";
// Styles
import { ConfirmationSectionContainer } from "../CoffeeCartCard/styles";
// Hooks
import { useCart } from "../../../../../hooks/useCart";
import { formatCurrencyToBrazil } from "../../../../../utils/formatCurrencyToBrazil";

const PRICE_DELIVERY = 9.9;

export function ConfirmationSection() {
  const { cartItemsTotal, cartQuantity } = useCart();

  const cartTotal = PRICE_DELIVERY + cartItemsTotal;

  const cartItemsTotalFormated = formatCurrencyToBrazil(cartItemsTotal);
  const priceDeliveryFormated = formatCurrencyToBrazil(PRICE_DELIVERY);
  const cartTotalFormated = formatCurrencyToBrazil(cartTotal);

  return (
    <ConfirmationSectionContainer>
      <div>
        <ContentText size="s">Total de itens</ContentText>
        <ContentText>R$ {cartItemsTotalFormated}</ContentText>
      </div>
      <div>
        <ContentText size="s">Entrega</ContentText>
        <ContentText>R$ {priceDeliveryFormated}</ContentText>
      </div>
      <div>
        <ContentText size="l" weight="bold" color="subtitle">
          Total
        </ContentText>
        <ContentText size="l" weight="bold" color="subtitle">
         R$ {cartTotalFormated}
        </ContentText>
      </div>
      <Button text="Confirmar Pedido" disabled={cartQuantity <= 0} type="submit"/>
    </ConfirmationSectionContainer>
  );
}
