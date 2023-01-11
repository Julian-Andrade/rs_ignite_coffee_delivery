// Components
import { Input } from "../../../../../components/Input/Default";
// React Hook Form
import { useFormContext } from "react-hook-form";
// Styles
import { AddressFormContainer } from "../styles";

// Fomato de interface do React Hook Form
interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <AddressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register("cep")}
        error={errors.cep?.message}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register("street")}
        error={errors.street?.message}
      />
      <Input
        placeholder="Número"
        type="number"
        {...register("number")}
        error={errors.number?.message}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register("complement")}
        rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        {...register("bairro")}
        error={errors.bairro?.message}
      />
      <Input
        placeholder="Cidade"
        {...register("cidade")}
        error={errors.cidade?.message}
      />
      <Input
        placeholder="UF"
        {...register("uf")}
        error={errors.uf?.message}
      />
    </AddressFormContainer>
  );
}
