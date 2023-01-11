export function formatCurrencyToBrazil(value: number) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });
}
