import { Product } from "../../modals/Product";

const productAdd = (
  products: Product[],
  basket: Product[],
  productId: number
): Product[] => {
  const items =
    products?.find((product) => product?.productId === productId);
  return items ? [...basket, items] : basket;
};

export default productAdd;
