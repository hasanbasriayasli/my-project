import { Product } from "../../modals/Product";

const productSorting = (products: Product[], index: number) => {
  switch (index) {
    case 0:
      return products.sort((a, b) => a?.fullPrice - b?.fullPrice);
    case 1:
      return products.sort((a, b) => b?.fullPrice - a?.fullPrice);
    case 2:
      return products.sort((a, b) =>
        a?.name.toLowerCase().localeCompare(b?.name?.toLowerCase())
      );
    case 3:
      return products.sort((a, b) =>
        b?.name.toLowerCase().localeCompare(a?.name?.toLowerCase())
      );
    default:
      return products;
  }
};

export default productSorting;
