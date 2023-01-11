// Components
import { CheckoutForm } from "./components/CheckoutForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
// Zod
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// React Hook Form
import { useForm, FormProvider } from "react-hook-form";
// React Router Dom
import { useNavigate } from "react-router-dom";
// Styles
import { CheckoutContainer } from "./styles";

enum PaymentMethods {
  credit = "credit",
  debit = "debit",
  cash = "cash",
}

const confirmOderFormValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe a Rua"),
  number: zod.string().min(1, "Informe o Númbero"),
  bairro: zod.string().min(1, "Informe o Bairro"),
  complement: zod.string(),
  cidade: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),

  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: "Informe o método de pagamento" };
    },
  }),
});

export type OrderData = zod.infer<typeof confirmOderFormValidationSchema>;

type ConfirmOrderFormData = OrderData;

export function CheckoutPage() {
  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmOderFormValidationSchema),
  });

  const { handleSubmit } = confirmOrderForm;

  const navigate = useNavigate();

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate("/success", {
      state: data,
    });
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer
        className="container"
        onSubmit={handleSubmit(handleConfirmOrder)}
      >
        <CheckoutForm />
        <SelectedCoffees />
      </CheckoutContainer>
    </FormProvider>
  );
}
