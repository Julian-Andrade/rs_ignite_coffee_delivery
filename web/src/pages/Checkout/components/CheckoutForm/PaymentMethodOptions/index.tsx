// Icons
import { CreditCard, Money, Bank } from "phosphor-react";
// React Hook Form
import { useFormContext } from "react-hook-form";
import { ContentText } from "../../../../../components/Typography";
// Components
import { PaymentMethodInput } from "../../PaymentMethodOptionsInput";
// Styles
import { PaymentMethodContainer } from "../styles";

export const paymentMethods = {
  credit: {
    label: "Cartão de Crédito",
    icon: <CreditCard size={16} />,
  },
  debit: {
    label: "Cartão de Débito",
    icon: <Bank size={16} />,
  },
  cash: {
    label: "Dinheiro",
    icon: <Money size={16} />,
  },
};

export function PaymentMethod() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const paymentMethodError = errors?.paymentMethod
    ?.message as unknown as string;

  return (
    <PaymentMethodContainer>
      {paymentMethods &&
        Object.entries(paymentMethods).map(([key, { label, icon }]) => (
          <PaymentMethodInput
            key={label}
            id={key}
            icon={icon}
            label={label}
            value={key}
            {...register("paymentMethod")}
          />
        ))}
      {paymentMethodError && <ContentText>{paymentMethodError}</ContentText>}
    </PaymentMethodContainer>
  );
}
