import { InputNumberContainer, InputIconQuantity } from "./styles";
import { Minus, Plus } from "phosphor-react";

interface InputNumberProps {
  size?: "medium" | "small";
  onIncrease: () => void;
  onDecrease: () => void;
  quantity: number;
}

export function InputNumber({
  size = "medium",
  onIncrease,
  onDecrease,
  quantity,
}: InputNumberProps) {
  return (
    <InputNumberContainer size={size}>
      <InputIconQuantity disabled={quantity <= 1} onClick={onDecrease}>
        <Minus size={14} weight="fill" />
      </InputIconQuantity>
      <input type="number" readOnly value={quantity} />
      <InputIconQuantity onClick={onIncrease}>
        <Plus size={14} weight="fill" />
      </InputIconQuantity>
    </InputNumberContainer>
  );
}
