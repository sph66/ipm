export const parsePrice = (price) => {
  if (typeof price == "number") {
    return price;
  }

  if (typeof price != "string") {
    return 0;
  }

  let newPrice = price.slice(0, -4);
  newPrice = newPrice.replace(".", "");
  newPrice = newPrice.replace(",", ".");

  return parseFloat(newPrice);
};
