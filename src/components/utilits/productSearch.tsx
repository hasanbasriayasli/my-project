import { Product } from "../../modals/Product";
import { Brand } from "../../modals/Brand";
import { Color } from "../../modals/Color";
import { items } from "../../data/productItems";

const productSearch = (
  products: Product[],
  colors: Color[],
  brands: Brand[],
  searchedWord: string
) => {
  const _colors = colors?.map((item) => {
    return {
      ...item,
      active: false,
    };
  });
  const _brands = brands?.map((item) => {
    return {
      ...item,
      active: false,
    };
  });
  const _products = products.filter((item) =>
    item?.name?.toUpperCase().includes(searchedWord?.toUpperCase())
  );
  return {
    _products : searchedWord === '' ? items : _products ,
    _colors,
    _brands,
  };
};

export default productSearch
