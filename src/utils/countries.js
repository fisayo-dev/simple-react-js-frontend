
export const getCurrencyLabel = (currencies) => {
  if (!currencies) return "Not available";

  const [firstCurrency] = Object.values(currencies);
  if (!firstCurrency) return "Not available";

  return firstCurrency.name
    ? `${firstCurrency.name}${firstCurrency.symbol ? ` (${firstCurrency.symbol})` : ""}`
    : "Not available";
};
