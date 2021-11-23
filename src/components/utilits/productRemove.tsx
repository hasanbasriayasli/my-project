import { Product } from "../../modals/Product";

const productRemove = (basket: Product[], productId: number): Product[] => {
  return basket?.filter((item) => item?.productId !== productId);
};
export default productRemove;
